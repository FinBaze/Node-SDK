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
/**
 * 
 * @export
 * @interface GetNLVatData200ResponseSection1High
 */
export interface GetNLVatData200ResponseSection1High {
    /**
     * 
     * @type {number}
     * @memberof GetNLVatData200ResponseSection1High
     */
    turnover: number;
    /**
     * 
     * @type {number}
     * @memberof GetNLVatData200ResponseSection1High
     */
    taxes: number;
}

/**
 * Check if a given object implements the GetNLVatData200ResponseSection1High interface.
 */
export function instanceOfGetNLVatData200ResponseSection1High(value: object): value is GetNLVatData200ResponseSection1High {
    if (!('turnover' in value) || value['turnover'] === undefined) return false;
    if (!('taxes' in value) || value['taxes'] === undefined) return false;
    return true;
}

export function GetNLVatData200ResponseSection1HighFromJSON(json: any): GetNLVatData200ResponseSection1High {
    return GetNLVatData200ResponseSection1HighFromJSONTyped(json, false);
}

export function GetNLVatData200ResponseSection1HighFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetNLVatData200ResponseSection1High {
    if (json == null) {
        return json;
    }
    return {
        
        'turnover': json['turnover'],
        'taxes': json['taxes'],
    };
}

export function GetNLVatData200ResponseSection1HighToJSON(json: any): GetNLVatData200ResponseSection1High {
    return GetNLVatData200ResponseSection1HighToJSONTyped(json, false);
}

export function GetNLVatData200ResponseSection1HighToJSONTyped(value?: GetNLVatData200ResponseSection1High | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'turnover': value['turnover'],
        'taxes': value['taxes'],
    };
}

