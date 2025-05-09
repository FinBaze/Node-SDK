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
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
    AssetToJSONTyped,
} from './Asset';

/**
 * 
 * @export
 * @interface GetAssets200Response
 */
export interface GetAssets200Response {
    /**
     * The current page
     * @type {number}
     * @memberof GetAssets200Response
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof GetAssets200Response
     */
    pages: number;
    /**
     * Size of the page returned
     * @type {number}
     * @memberof GetAssets200Response
     */
    size: number;
    /**
     * The total count of the resource
     * @type {number}
     * @memberof GetAssets200Response
     */
    count: number;
    /**
     * 
     * @type {Array<Asset>}
     * @memberof GetAssets200Response
     */
    data: Array<Asset>;
}

/**
 * Check if a given object implements the GetAssets200Response interface.
 */
export function instanceOfGetAssets200Response(value: object): value is GetAssets200Response {
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pages' in value) || value['pages'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetAssets200ResponseFromJSON(json: any): GetAssets200Response {
    return GetAssets200ResponseFromJSONTyped(json, false);
}

export function GetAssets200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAssets200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'],
        'pages': json['pages'],
        'size': json['size'],
        'count': json['count'],
        'data': ((json['data'] as Array<any>).map(AssetFromJSON)),
    };
}

export function GetAssets200ResponseToJSON(json: any): GetAssets200Response {
    return GetAssets200ResponseToJSONTyped(json, false);
}

export function GetAssets200ResponseToJSONTyped(value?: GetAssets200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'page': value['page'],
        'pages': value['pages'],
        'size': value['size'],
        'count': value['count'],
        'data': ((value['data'] as Array<any>).map(AssetToJSON)),
    };
}

