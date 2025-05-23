/* tslint:disable */
/* eslint-disable */
/**
 * Finbaze profiles API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';
import type { Language } from './Language';
import {
    LanguageFromJSON,
    LanguageFromJSONTyped,
    LanguageToJSON,
    LanguageToJSONTyped,
} from './Language';
import type { CreateProfileRequestSettings } from './CreateProfileRequestSettings';
import {
    CreateProfileRequestSettingsFromJSON,
    CreateProfileRequestSettingsFromJSONTyped,
    CreateProfileRequestSettingsToJSON,
    CreateProfileRequestSettingsToJSONTyped,
} from './CreateProfileRequestSettings';
import type { CreateProfileRequestNl } from './CreateProfileRequestNl';
import {
    CreateProfileRequestNlFromJSON,
    CreateProfileRequestNlFromJSONTyped,
    CreateProfileRequestNlToJSON,
    CreateProfileRequestNlToJSONTyped,
} from './CreateProfileRequestNl';

/**
 * 
 * @export
 * @interface UpdateProfileRequest
 */
export interface UpdateProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileRequest
     */
    legalName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileRequest
     */
    timezone?: string;
    /**
     * 
     * @type {Language}
     * @memberof UpdateProfileRequest
     */
    language?: Language;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateProfileRequest
     */
    currencies?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileRequest
     */
    registrationNumber?: string;
    /**
     * ISO 3166-1 alpha-2 country code
     * @type {string}
     * @memberof UpdateProfileRequest
     */
    registrationCountry?: string;
    /**
     * 
     * @type {CreateProfileRequestNl}
     * @memberof UpdateProfileRequest
     */
    nl?: CreateProfileRequestNl;
    /**
     * 
     * @type {CreateProfileRequestSettings}
     * @memberof UpdateProfileRequest
     */
    settings?: CreateProfileRequestSettings;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileRequest
     */
    distanceUnit?: UpdateProfileRequestDistanceUnitEnum;
    /**
     * ISO 3166-1 alpha-2 currency code
     * @type {string}
     * @memberof UpdateProfileRequest
     */
    currency?: string;
    /**
     * 
     * @type {Address}
     * @memberof UpdateProfileRequest
     */
    address?: Address;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UpdateProfileRequest
     */
    metadata?: { [key: string]: any; };
}


/**
 * @export
 */
export const UpdateProfileRequestDistanceUnitEnum = {
    Kilometers: 'kilometers',
    Miles: 'miles'
} as const;
export type UpdateProfileRequestDistanceUnitEnum = typeof UpdateProfileRequestDistanceUnitEnum[keyof typeof UpdateProfileRequestDistanceUnitEnum];


/**
 * Check if a given object implements the UpdateProfileRequest interface.
 */
export function instanceOfUpdateProfileRequest(value: object): value is UpdateProfileRequest {
    return true;
}

export function UpdateProfileRequestFromJSON(json: any): UpdateProfileRequest {
    return UpdateProfileRequestFromJSONTyped(json, false);
}

export function UpdateProfileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProfileRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'legalName': json['legal_name'] == null ? undefined : json['legal_name'],
        'name': json['name'] == null ? undefined : json['name'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'language': json['language'] == null ? undefined : LanguageFromJSON(json['language']),
        'currencies': json['currencies'] == null ? undefined : json['currencies'],
        'registrationNumber': json['registration-number'] == null ? undefined : json['registration-number'],
        'registrationCountry': json['registration-country'] == null ? undefined : json['registration-country'],
        'nl': json['nl'] == null ? undefined : CreateProfileRequestNlFromJSON(json['nl']),
        'settings': json['settings'] == null ? undefined : CreateProfileRequestSettingsFromJSON(json['settings']),
        'distanceUnit': json['distance-unit'] == null ? undefined : json['distance-unit'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'address': json['address'] == null ? undefined : AddressFromJSON(json['address']),
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function UpdateProfileRequestToJSON(json: any): UpdateProfileRequest {
    return UpdateProfileRequestToJSONTyped(json, false);
}

export function UpdateProfileRequestToJSONTyped(value?: UpdateProfileRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'legal_name': value['legalName'],
        'name': value['name'],
        'timezone': value['timezone'],
        'language': LanguageToJSON(value['language']),
        'currencies': value['currencies'],
        'registration-number': value['registrationNumber'],
        'registration-country': value['registrationCountry'],
        'nl': CreateProfileRequestNlToJSON(value['nl']),
        'settings': CreateProfileRequestSettingsToJSON(value['settings']),
        'distance-unit': value['distanceUnit'],
        'currency': value['currency'],
        'address': AddressToJSON(value['address']),
        'metadata': value['metadata'],
    };
}

