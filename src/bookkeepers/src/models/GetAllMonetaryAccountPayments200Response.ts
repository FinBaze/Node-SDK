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
import type { MonetaryAccountPayment } from './MonetaryAccountPayment';
import {
    MonetaryAccountPaymentFromJSON,
    MonetaryAccountPaymentFromJSONTyped,
    MonetaryAccountPaymentToJSON,
    MonetaryAccountPaymentToJSONTyped,
} from './MonetaryAccountPayment';

/**
 * 
 * @export
 * @interface GetAllMonetaryAccountPayments200Response
 */
export interface GetAllMonetaryAccountPayments200Response {
    /**
     * The current page
     * @type {number}
     * @memberof GetAllMonetaryAccountPayments200Response
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof GetAllMonetaryAccountPayments200Response
     */
    pages: number;
    /**
     * Size of the page returned
     * @type {number}
     * @memberof GetAllMonetaryAccountPayments200Response
     */
    size: number;
    /**
     * The total count of the resource
     * @type {number}
     * @memberof GetAllMonetaryAccountPayments200Response
     */
    count: number;
    /**
     * 
     * @type {Array<MonetaryAccountPayment>}
     * @memberof GetAllMonetaryAccountPayments200Response
     */
    data: Array<MonetaryAccountPayment>;
}

/**
 * Check if a given object implements the GetAllMonetaryAccountPayments200Response interface.
 */
export function instanceOfGetAllMonetaryAccountPayments200Response(value: object): value is GetAllMonetaryAccountPayments200Response {
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('pages' in value) || value['pages'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetAllMonetaryAccountPayments200ResponseFromJSON(json: any): GetAllMonetaryAccountPayments200Response {
    return GetAllMonetaryAccountPayments200ResponseFromJSONTyped(json, false);
}

export function GetAllMonetaryAccountPayments200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllMonetaryAccountPayments200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'],
        'pages': json['pages'],
        'size': json['size'],
        'count': json['count'],
        'data': ((json['data'] as Array<any>).map(MonetaryAccountPaymentFromJSON)),
    };
}

export function GetAllMonetaryAccountPayments200ResponseToJSON(json: any): GetAllMonetaryAccountPayments200Response {
    return GetAllMonetaryAccountPayments200ResponseToJSONTyped(json, false);
}

export function GetAllMonetaryAccountPayments200ResponseToJSONTyped(value?: GetAllMonetaryAccountPayments200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'page': value['page'],
        'pages': value['pages'],
        'size': value['size'],
        'count': value['count'],
        'data': ((value['data'] as Array<any>).map(MonetaryAccountPaymentToJSON)),
    };
}

