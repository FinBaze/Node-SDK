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
import type { GetNLVatData200ResponseSection1High } from './GetNLVatData200ResponseSection1High';
import {
    GetNLVatData200ResponseSection1HighFromJSON,
    GetNLVatData200ResponseSection1HighFromJSONTyped,
    GetNLVatData200ResponseSection1HighToJSON,
    GetNLVatData200ResponseSection1HighToJSONTyped,
} from './GetNLVatData200ResponseSection1High';

/**
 * 
 * @export
 * @interface GetNLVatData200ResponseSection1
 */
export interface GetNLVatData200ResponseSection1 {
    /**
     * 
     * @type {GetNLVatData200ResponseSection1High}
     * @memberof GetNLVatData200ResponseSection1
     */
    high?: GetNLVatData200ResponseSection1High;
    /**
     * 
     * @type {GetNLVatData200ResponseSection1High}
     * @memberof GetNLVatData200ResponseSection1
     */
    low?: GetNLVatData200ResponseSection1High;
    /**
     * 
     * @type {GetNLVatData200ResponseSection1High}
     * @memberof GetNLVatData200ResponseSection1
     */
    other?: GetNLVatData200ResponseSection1High;
    /**
     * 
     * @type {GetNLVatData200ResponseSection1High}
     * @memberof GetNLVatData200ResponseSection1
     */
    _private?: GetNLVatData200ResponseSection1High;
    /**
     * Value representing no turnover or taxes.
     * @type {number}
     * @memberof GetNLVatData200ResponseSection1
     */
    none?: number;
}

/**
 * Check if a given object implements the GetNLVatData200ResponseSection1 interface.
 */
export function instanceOfGetNLVatData200ResponseSection1(value: object): value is GetNLVatData200ResponseSection1 {
    return true;
}

export function GetNLVatData200ResponseSection1FromJSON(json: any): GetNLVatData200ResponseSection1 {
    return GetNLVatData200ResponseSection1FromJSONTyped(json, false);
}

export function GetNLVatData200ResponseSection1FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetNLVatData200ResponseSection1 {
    if (json == null) {
        return json;
    }
    return {
        
        'high': json['high'] == null ? undefined : GetNLVatData200ResponseSection1HighFromJSON(json['high']),
        'low': json['low'] == null ? undefined : GetNLVatData200ResponseSection1HighFromJSON(json['low']),
        'other': json['other'] == null ? undefined : GetNLVatData200ResponseSection1HighFromJSON(json['other']),
        '_private': json['private'] == null ? undefined : GetNLVatData200ResponseSection1HighFromJSON(json['private']),
        'none': json['none'] == null ? undefined : json['none'],
    };
}

export function GetNLVatData200ResponseSection1ToJSON(json: any): GetNLVatData200ResponseSection1 {
    return GetNLVatData200ResponseSection1ToJSONTyped(json, false);
}

export function GetNLVatData200ResponseSection1ToJSONTyped(value?: GetNLVatData200ResponseSection1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'high': GetNLVatData200ResponseSection1HighToJSON(value['high']),
        'low': GetNLVatData200ResponseSection1HighToJSON(value['low']),
        'other': GetNLVatData200ResponseSection1HighToJSON(value['other']),
        'private': GetNLVatData200ResponseSection1HighToJSON(value['_private']),
        'none': value['none'],
    };
}

