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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateBookkeeperProfileRequestSettingsBranding
 */
export interface CreateBookkeeperProfileRequestSettingsBranding {
    /**
     * 
     * @type {string}
     * @memberof CreateBookkeeperProfileRequestSettingsBranding
     */
    logo: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBookkeeperProfileRequestSettingsBranding
     */
    primary: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBookkeeperProfileRequestSettingsBranding
     */
    secondary: string;
}

/**
 * Check if a given object implements the CreateBookkeeperProfileRequestSettingsBranding interface.
 */
export function instanceOfCreateBookkeeperProfileRequestSettingsBranding(value: object): value is CreateBookkeeperProfileRequestSettingsBranding {
    if (!('logo' in value) || value['logo'] === undefined) return false;
    if (!('primary' in value) || value['primary'] === undefined) return false;
    if (!('secondary' in value) || value['secondary'] === undefined) return false;
    return true;
}

export function CreateBookkeeperProfileRequestSettingsBrandingFromJSON(json: any): CreateBookkeeperProfileRequestSettingsBranding {
    return CreateBookkeeperProfileRequestSettingsBrandingFromJSONTyped(json, false);
}

export function CreateBookkeeperProfileRequestSettingsBrandingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBookkeeperProfileRequestSettingsBranding {
    if (json == null) {
        return json;
    }
    return {
        
        'logo': json['logo'],
        'primary': json['primary'],
        'secondary': json['secondary'],
    };
}

export function CreateBookkeeperProfileRequestSettingsBrandingToJSON(json: any): CreateBookkeeperProfileRequestSettingsBranding {
    return CreateBookkeeperProfileRequestSettingsBrandingToJSONTyped(json, false);
}

export function CreateBookkeeperProfileRequestSettingsBrandingToJSONTyped(value?: CreateBookkeeperProfileRequestSettingsBranding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'logo': value['logo'],
        'primary': value['primary'],
        'secondary': value['secondary'],
    };
}

