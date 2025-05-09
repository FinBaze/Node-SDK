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
import type { ProfileNlVat } from './ProfileNlVat';
import {
    ProfileNlVatFromJSON,
    ProfileNlVatFromJSONTyped,
    ProfileNlVatToJSON,
    ProfileNlVatToJSONTyped,
} from './ProfileNlVat';

/**
 * 
 * @export
 * @interface ProfileNl
 */
export interface ProfileNl {
    /**
     * 
     * @type {string}
     * @memberof ProfileNl
     */
    chamberOfCommerce: string;
    /**
     * 
     * @type {ProfileNlVat}
     * @memberof ProfileNl
     */
    vat?: ProfileNlVat;
}

/**
 * Check if a given object implements the ProfileNl interface.
 */
export function instanceOfProfileNl(value: object): value is ProfileNl {
    if (!('chamberOfCommerce' in value) || value['chamberOfCommerce'] === undefined) return false;
    return true;
}

export function ProfileNlFromJSON(json: any): ProfileNl {
    return ProfileNlFromJSONTyped(json, false);
}

export function ProfileNlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileNl {
    if (json == null) {
        return json;
    }
    return {
        
        'chamberOfCommerce': json['chamber_of_commerce'],
        'vat': json['vat'] == null ? undefined : ProfileNlVatFromJSON(json['vat']),
    };
}

export function ProfileNlToJSON(json: any): ProfileNl {
    return ProfileNlToJSONTyped(json, false);
}

export function ProfileNlToJSONTyped(value?: ProfileNl | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chamber_of_commerce': value['chamberOfCommerce'],
        'vat': ProfileNlVatToJSON(value['vat']),
    };
}

