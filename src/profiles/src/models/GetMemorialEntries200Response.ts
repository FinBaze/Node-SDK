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
import type { MemorialEntry } from './MemorialEntry';
import {
    MemorialEntryFromJSON,
    MemorialEntryFromJSONTyped,
    MemorialEntryToJSON,
    MemorialEntryToJSONTyped,
} from './MemorialEntry';

/**
 * 
 * @export
 * @interface GetMemorialEntries200Response
 */
export interface GetMemorialEntries200Response {
    /**
     * The current page
     * @type {number}
     * @memberof GetMemorialEntries200Response
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof GetMemorialEntries200Response
     */
    pages: number;
    /**
     * Size of the page returned
     * @type {number}
     * @memberof GetMemorialEntries200Response
     */
    size: number;
    /**
     * The total count of the resource
     * @type {number}
     * @memberof GetMemorialEntries200Response
     */
    count: number;
    /**
     * 
     * @type {Array<MemorialEntry>}
     * @memberof GetMemorialEntries200Response
     */
    data: Array<MemorialEntry>;
}

/**
 * Check if a given object implements the GetMemorialEntries200Response interface.
 */
export function instanceOfGetMemorialEntries200Response(value: object): value is GetMemorialEntries200Response {
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pages' in value) || value['pages'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetMemorialEntries200ResponseFromJSON(json: any): GetMemorialEntries200Response {
    return GetMemorialEntries200ResponseFromJSONTyped(json, false);
}

export function GetMemorialEntries200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMemorialEntries200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'],
        'pages': json['pages'],
        'size': json['size'],
        'count': json['count'],
        'data': ((json['data'] as Array<any>).map(MemorialEntryFromJSON)),
    };
}

export function GetMemorialEntries200ResponseToJSON(json: any): GetMemorialEntries200Response {
    return GetMemorialEntries200ResponseToJSONTyped(json, false);
}

export function GetMemorialEntries200ResponseToJSONTyped(value?: GetMemorialEntries200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'page': value['page'],
        'pages': value['pages'],
        'size': value['size'],
        'count': value['count'],
        'data': ((value['data'] as Array<any>).map(MemorialEntryToJSON)),
    };
}

