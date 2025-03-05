import * as ProfilesApi from './profiles/src/index';
import * as InternalApi from './internal/src/index';
import * as BookkeepersApi from './bookkeepers/src/index';
import * as DevelopersApi from './developers/src/index';

import * as jsonwebtoken from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export enum EnvType {
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production'
}

export interface FinbazeAPIAccessToken {
    access_token: string;
    refresh_token: string;
    token_type: string,
    scope?: string;
    expires_in: number;
}

class FinbazeProfilesApi extends ProfilesApi.DefaultApi {

    private finbaze: FinbazeAPI;

    async req(context: ProfilesApi.RequestOpts, init?: ProfilesApi.InitOverrideFunction | RequestInit) {
        return super.request(context, init);
    }

    get accessToken() {
        return () => {
            if (!this.finbaze.authenticated) return undefined;
            return this.finbaze.accessToken();
        }
    }

    constructor(finbaze: FinbazeAPI) {
        super(new ProfilesApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
        }));

        this.finbaze = finbaze;
        this.configuration = new ProfilesApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
            accessToken: this.accessToken,
        });
    }
}

class FinbazeBookkeepersApi extends BookkeepersApi.DefaultApi {

    private finbaze: FinbazeAPI;

    async req(context: ProfilesApi.RequestOpts, init?: ProfilesApi.InitOverrideFunction | RequestInit) {
        return super.request(context, init);
    }
    get accessToken() {
        return () => {
            if (!this.finbaze.authenticated) return undefined;
            return this.finbaze.accessToken();
        }
    }
    constructor(finbaze: FinbazeAPI) {
        super(new BookkeepersApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
        }));

        this.finbaze = finbaze;
        this.configuration = new BookkeepersApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
            accessToken: this.accessToken,
        });
    }
}

class FinbazeInternalApi extends InternalApi.DefaultApi {

    private finbaze: FinbazeAPI;

    async req(context: ProfilesApi.RequestOpts, init?: ProfilesApi.InitOverrideFunction | RequestInit) {
        return super.request(context, init);
    }

    get accessToken() {
        return () => {
            if (!this.finbaze.authenticated) return undefined;
            return this.finbaze.accessToken();
        }
    }

    constructor(finbaze: FinbazeAPI) {
        super(new InternalApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
        }));

        this.finbaze = finbaze;
        this.configuration = new InternalApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
            accessToken: this.accessToken,
        });
    }
}

class FinbazeDevelopersApi extends DevelopersApi.DefaultApi {

    private finbaze: FinbazeAPI;

    async req(context: ProfilesApi.RequestOpts, init?: ProfilesApi.InitOverrideFunction | RequestInit) {
        return super.request(context, init);
    }

    get username() {
        return this.finbaze.clientCredentials?.clientId;
    }
    get password() {
        if (!this.finbaze.clientCredentials?.clientId || !this.finbaze.clientCredentials?.privateKey)
            return undefined;
        return jsonwebtoken.sign({
            sub: this.finbaze.clientCredentials.clientId,
        }, this.finbaze.clientCredentials.privateKey, {
            algorithm: 'RS512',
            issuer: this.username,
            audience: 'api.finbaze.com',
        });
    }

    get accessToken() {
        return () => {
            if (!this.finbaze.authenticated) return undefined;
            return this.finbaze.accessToken();
        }
    }

    constructor(finbaze: FinbazeAPI) {
        super(new DevelopersApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
        }));

        this.finbaze = finbaze;
        this.configuration = new DevelopersApi.Configuration({
            basePath: FinbazeAPI.getURL(finbaze.env),
            accessToken: this.accessToken,
            username: this.username,
            password: this.password,
        });
    }
}

class FinbazeAPI {

    profiles: FinbazeProfilesApi;
    internal: FinbazeInternalApi;
    developers: FinbazeDevelopersApi;
    bookkeepers: FinbazeBookkeepersApi;
    env: EnvType;
    clientCredentials?: {
        clientId: string,
        publicKey?: Buffer | string;
        privateKey: Buffer | string;
    }

    private token: FinbazeAPIAccessToken;
    get authenticated() {
        return !!this.token;
    }
    private onUpdateAccesstoken: (token: FinbazeAPIAccessToken) => void;

    public static getURL(env: EnvType) {
        return {
            [EnvType.DEVELOPMENT]: 'http://localhost',
            [EnvType.STAGING]: 'https://api.staging.finbaze.com',
            [EnvType.PRODUCTION]: 'https://api.finbaze.com'
        }[env]
    }

    constructor(env: EnvType, clientCredentials?: {
        clientId: string,
        publicKey?: Buffer | string,
        privateKey: Buffer | string,
    }) {
        this.clientCredentials = clientCredentials;
        this.env = env;
        this.profiles = new FinbazeProfilesApi(this);
        this.internal = new FinbazeInternalApi(this);
        this.bookkeepers = new FinbazeBookkeepersApi(this);
        this.developers = new FinbazeDevelopersApi(this);
    }

    public async accessToken() {
        if (!this.token) return undefined;
        const decoded = jwtDecode(this.token.access_token);
        const exp = new Date(decoded.exp * 1000);

        if (exp.getTime() < new Date().getTime()) {
            const newAccessToken = await this.refreshAccessToken(this.token);
            this.token = newAccessToken;
            this.onUpdateAccesstoken(newAccessToken);
        }
        return [this.token.token_type, this.token.access_token].join(' ');
    }

    public async restoreAccessToken(token: FinbazeAPIAccessToken, onUpdateAccesstoken: (token: FinbazeAPIAccessToken) => void) {
        this.token = token;
        this.onUpdateAccesstoken = onUpdateAccesstoken;
    }


    public async exchangeAuthorisationCode(code: string, redirectUri: string) {
        const result = await this.developers.getOAuth2AccessToken({
            grantType: 'authorization_code',
            code,
            redirectUri,
        });

        this.restoreAccessToken({
            refresh_token: result.refreshToken,
            access_token: result.accessToken,
            expires_in: result.expiresIn,
            scope: result.scope,
            token_type: result.tokenType,
        } as FinbazeAPIAccessToken, this.onUpdateAccesstoken);

        return result;
    }

    public async getAccountAccessToken(data: {
        username: string,
        password?: string,
        email?: string,
        phone?: string,
    }, onUpdateAccesstoken: (token: FinbazeAPIAccessToken) => void) {
        const result = await this.profiles.req({
            path: '/v1/oauth2/token',
            method: 'POST',
            body: new URLSearchParams({
                grant_type: 'password',
                username: data.username,
                password: data.password,
            }).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            }
        });
        const json = await result.json() as {
            access_token: string,
            refresh_token: string,
            expires_in: number,
            token_type: string,
            scope?: string,
        };

        if (!result.ok) throw json;

        this.restoreAccessToken(json as FinbazeAPIAccessToken, onUpdateAccesstoken);

        return json as FinbazeAPIAccessToken;
    }

    public async refreshAccessToken(accessToken: FinbazeAPIAccessToken) {
        const result = await this.profiles.req({
            path: '/v1/oauth2/token',
            method: 'POST',
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: accessToken.refresh_token,
                scope: accessToken.scope,
            }).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            }
        });
        const json = await result.json() as {
            access_token: string,
            refresh_token: string,
            expires_in: number,
            token_type: string,
            scope?: string,
        };

        if (!result.ok) throw json;

        return json as FinbazeAPIAccessToken;
    }
}

export default FinbazeAPI;

export * from './profiles/src/index';
export type * from './profiles/src/index';
export * from './models';
export * from './Currency';
export type { Address } from "./profiles/src/index";