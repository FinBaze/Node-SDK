/* tslint:disable */
/* eslint-disable */
/**
 * FinBaze bookkeepers API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Account,
  Bookkeeper,
  CreateBookkeeperAccountRequest,
  CreateBookkeeperProfileRequest,
  ForbiddenError,
  GetBookkeeperAccounts200Response,
  GetBookkeeperProfiles200Response,
  InvalidRequestError,
  NotFoundError,
  Profile,
  ServerError,
  UnauthorisedError,
} from '../models/index';
import {
    AccountFromJSON,
    AccountToJSON,
    BookkeeperFromJSON,
    BookkeeperToJSON,
    CreateBookkeeperAccountRequestFromJSON,
    CreateBookkeeperAccountRequestToJSON,
    CreateBookkeeperProfileRequestFromJSON,
    CreateBookkeeperProfileRequestToJSON,
    ForbiddenErrorFromJSON,
    ForbiddenErrorToJSON,
    GetBookkeeperAccounts200ResponseFromJSON,
    GetBookkeeperAccounts200ResponseToJSON,
    GetBookkeeperProfiles200ResponseFromJSON,
    GetBookkeeperProfiles200ResponseToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    ProfileFromJSON,
    ProfileToJSON,
    ServerErrorFromJSON,
    ServerErrorToJSON,
    UnauthorisedErrorFromJSON,
    UnauthorisedErrorToJSON,
} from '../models/index';

export interface CreateBookkeeperAccountOperationRequest {
    bookkeeperId: string;
    createBookkeeperAccountRequest?: CreateBookkeeperAccountRequest;
}

export interface CreateBookkeeperProfileOperationRequest {
    bookkeeperId: string;
    createBookkeeperProfileRequest: CreateBookkeeperProfileRequest;
}

export interface DeleteBookkeeperAccountRequest {
    bookkeeperId: string;
    accountId: string;
}

export interface GetBookkeeperRequest {
    bookkeeperId: string;
}

export interface GetBookkeeperAccountRequest {
    bookkeeperId: string;
    accountId: string;
}

export interface GetBookkeeperAccountsRequest {
    bookkeeperId: string;
    page?: number;
    size?: number;
    name?: string;
}

export interface GetBookkeeperProfilesRequest {
    bookkeeperId: string;
    page?: number;
    size?: number;
}

/**
 * DefaultApi - interface
 * 
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
    /**
     * Creates an relations
     * @param {string} bookkeeperId The id of the bookkeeper
     * @param {CreateBookkeeperAccountRequest} [createBookkeeperAccountRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createBookkeeperAccountRaw(requestParameters: CreateBookkeeperAccountOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>>;

    /**
     * Creates an relations
     */
    createBookkeeperAccount(requestParameters: CreateBookkeeperAccountOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account>;

    /**
     * Creates a new profile
     * @param {string} bookkeeperId The id of the bookkeeper
     * @param {CreateBookkeeperProfileRequest} createBookkeeperProfileRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createBookkeeperProfileRaw(requestParameters: CreateBookkeeperProfileOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Profile>>;

    /**
     * Creates a new profile
     */
    createBookkeeperProfile(requestParameters: CreateBookkeeperProfileOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Profile>;

    /**
     * Deletes a bookkeeper account
     * @param {string} bookkeeperId The id of the bookkeeper
     * @param {string} accountId The ID of the account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    deleteBookkeeperAccountRaw(requestParameters: DeleteBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Deletes a bookkeeper account
     */
    deleteBookkeeperAccount(requestParameters: DeleteBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Returns a bookkeper
     * @param {string} bookkeeperId The id of the bookkeeper
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getBookkeeperRaw(requestParameters: GetBookkeeperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Bookkeeper>>;

    /**
     * Returns a bookkeper
     */
    getBookkeeper(requestParameters: GetBookkeeperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Bookkeeper>;

    /**
     * Returns a bookkeeper account
     * @param {string} bookkeeperId The id of the bookkeeper
     * @param {string} accountId The ID of the account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getBookkeeperAccountRaw(requestParameters: GetBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>>;

    /**
     * Returns a bookkeeper account
     */
    getBookkeeperAccount(requestParameters: GetBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account>;

    /**
     * Returns all bookkeeper accounts
     * @param {string} bookkeeperId The id of the bookkeeper
     * @param {number} [page] Number of the page, starting at 0
     * @param {number} [size] The number of resourced returned in one single page.
     * @param {string} [name] Broad search on all the name fields to filter to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getBookkeeperAccountsRaw(requestParameters: GetBookkeeperAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetBookkeeperAccounts200Response>>;

    /**
     * Returns all bookkeeper accounts
     */
    getBookkeeperAccounts(requestParameters: GetBookkeeperAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetBookkeeperAccounts200Response>;

    /**
     * Returns a list of all the profiles
     * @param {string} bookkeeperId The id of the bookkeeper
     * @param {number} [page] Number of the page, starting at 0
     * @param {number} [size] The number of resourced returned in one single page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getBookkeeperProfilesRaw(requestParameters: GetBookkeeperProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetBookkeeperProfiles200Response>>;

    /**
     * Returns a list of all the profiles
     */
    getBookkeeperProfiles(requestParameters: GetBookkeeperProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetBookkeeperProfiles200Response>;

    /**
     * Returns a list of all the bookkeepers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getBookkeepersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Bookkeeper>>>;

    /**
     * Returns a list of all the bookkeepers
     */
    getBookkeepers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Bookkeeper>>;

}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {

    /**
     * Creates an relations
     */
    async createBookkeeperAccountRaw(requestParameters: CreateBookkeeperAccountOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters['bookkeeperId'] == null) {
            throw new runtime.RequiredError(
                'bookkeeperId',
                'Required parameter "bookkeeperId" was null or undefined when calling createBookkeeperAccount().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers/{bookkeeperId}/accounts`.replace(`{${"bookkeeperId"}}`, encodeURIComponent(String(requestParameters['bookkeeperId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateBookkeeperAccountRequestToJSON(requestParameters['createBookkeeperAccountRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Creates an relations
     */
    async createBookkeeperAccount(requestParameters: CreateBookkeeperAccountOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.createBookkeeperAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new profile
     */
    async createBookkeeperProfileRaw(requestParameters: CreateBookkeeperProfileOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Profile>> {
        if (requestParameters['bookkeeperId'] == null) {
            throw new runtime.RequiredError(
                'bookkeeperId',
                'Required parameter "bookkeeperId" was null or undefined when calling createBookkeeperProfile().'
            );
        }

        if (requestParameters['createBookkeeperProfileRequest'] == null) {
            throw new runtime.RequiredError(
                'createBookkeeperProfileRequest',
                'Required parameter "createBookkeeperProfileRequest" was null or undefined when calling createBookkeeperProfile().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers/{bookkeeperId}/profiles`.replace(`{${"bookkeeperId"}}`, encodeURIComponent(String(requestParameters['bookkeeperId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateBookkeeperProfileRequestToJSON(requestParameters['createBookkeeperProfileRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileFromJSON(jsonValue));
    }

    /**
     * Creates a new profile
     */
    async createBookkeeperProfile(requestParameters: CreateBookkeeperProfileOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Profile> {
        const response = await this.createBookkeeperProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a bookkeeper account
     */
    async deleteBookkeeperAccountRaw(requestParameters: DeleteBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['bookkeeperId'] == null) {
            throw new runtime.RequiredError(
                'bookkeeperId',
                'Required parameter "bookkeeperId" was null or undefined when calling deleteBookkeeperAccount().'
            );
        }

        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling deleteBookkeeperAccount().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers/{bookkeeperId}/accounts/{accountId}`.replace(`{${"bookkeeperId"}}`, encodeURIComponent(String(requestParameters['bookkeeperId']))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters['accountId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a bookkeeper account
     */
    async deleteBookkeeperAccount(requestParameters: DeleteBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteBookkeeperAccountRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a bookkeper
     */
    async getBookkeeperRaw(requestParameters: GetBookkeeperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Bookkeeper>> {
        if (requestParameters['bookkeeperId'] == null) {
            throw new runtime.RequiredError(
                'bookkeeperId',
                'Required parameter "bookkeeperId" was null or undefined when calling getBookkeeper().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers/{bookkeeperId}`.replace(`{${"bookkeeperId"}}`, encodeURIComponent(String(requestParameters['bookkeeperId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookkeeperFromJSON(jsonValue));
    }

    /**
     * Returns a bookkeper
     */
    async getBookkeeper(requestParameters: GetBookkeeperRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Bookkeeper> {
        const response = await this.getBookkeeperRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a bookkeeper account
     */
    async getBookkeeperAccountRaw(requestParameters: GetBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters['bookkeeperId'] == null) {
            throw new runtime.RequiredError(
                'bookkeeperId',
                'Required parameter "bookkeeperId" was null or undefined when calling getBookkeeperAccount().'
            );
        }

        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getBookkeeperAccount().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers/{bookkeeperId}/accounts/{accountId}`.replace(`{${"bookkeeperId"}}`, encodeURIComponent(String(requestParameters['bookkeeperId']))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters['accountId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Returns a bookkeeper account
     */
    async getBookkeeperAccount(requestParameters: GetBookkeeperAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getBookkeeperAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all bookkeeper accounts
     */
    async getBookkeeperAccountsRaw(requestParameters: GetBookkeeperAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetBookkeeperAccounts200Response>> {
        if (requestParameters['bookkeeperId'] == null) {
            throw new runtime.RequiredError(
                'bookkeeperId',
                'Required parameter "bookkeeperId" was null or undefined when calling getBookkeeperAccounts().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers/{bookkeeperId}/accounts`.replace(`{${"bookkeeperId"}}`, encodeURIComponent(String(requestParameters['bookkeeperId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetBookkeeperAccounts200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns all bookkeeper accounts
     */
    async getBookkeeperAccounts(requestParameters: GetBookkeeperAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetBookkeeperAccounts200Response> {
        const response = await this.getBookkeeperAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all the profiles
     */
    async getBookkeeperProfilesRaw(requestParameters: GetBookkeeperProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetBookkeeperProfiles200Response>> {
        if (requestParameters['bookkeeperId'] == null) {
            throw new runtime.RequiredError(
                'bookkeeperId',
                'Required parameter "bookkeeperId" was null or undefined when calling getBookkeeperProfiles().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers/{bookkeeperId}/profiles`.replace(`{${"bookkeeperId"}}`, encodeURIComponent(String(requestParameters['bookkeeperId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetBookkeeperProfiles200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of all the profiles
     */
    async getBookkeeperProfiles(requestParameters: GetBookkeeperProfilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetBookkeeperProfiles200Response> {
        const response = await this.getBookkeeperProfilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all the bookkeepers
     */
    async getBookkeepersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Bookkeeper>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2", []);
        }

        const response = await this.request({
            path: `/v1/bookkeepers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookkeeperFromJSON));
    }

    /**
     * Returns a list of all the bookkeepers
     */
    async getBookkeepers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Bookkeeper>> {
        const response = await this.getBookkeepersRaw(initOverrides);
        return await response.value();
    }

}
