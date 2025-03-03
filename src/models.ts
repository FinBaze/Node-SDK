import * as ProfilesApi from './profiles/src/index';
import * as InternalApi from './internal/src/index';
import * as BookkeepersApi from './bookkeepers/src/index';
import * as DevelopersApi from './developers/src/index';

export default {
    ...ProfilesApi,
    ...InternalApi,
    ...BookkeepersApi,
    ...DevelopersApi,
};

export * as ProfilesApi from './profiles/src/index';
export * as InternalApi from './internal/src/index';
export * as BookkeepersApi from './bookkeepers/src/index';
export * as DevelopersApi from './developers/src/index';
export type { DefaultApiInterface as ProfilesApiInterface } from "./profiles/src/index";
export type { DefaultApiInterface as InternalApiInterface } from "./internal/src/index";
export type { DefaultApiInterface as BookkeepersApiInterface } from "./bookkeepers/src/index"; 
export type { DefaultApiInterface as DevelopersApiInterface } from "./developers/src/index"; 
