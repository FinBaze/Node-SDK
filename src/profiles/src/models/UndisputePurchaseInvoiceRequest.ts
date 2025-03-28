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
 * @interface UndisputePurchaseInvoiceRequest
 */
export interface UndisputePurchaseInvoiceRequest {
    /**
     * The reason why you want to undispute this invoice this will be recorded in the events
     * @type {string}
     * @memberof UndisputePurchaseInvoiceRequest
     */
    message?: string;
}

/**
 * Check if a given object implements the UndisputePurchaseInvoiceRequest interface.
 */
export function instanceOfUndisputePurchaseInvoiceRequest(value: object): value is UndisputePurchaseInvoiceRequest {
    return true;
}

export function UndisputePurchaseInvoiceRequestFromJSON(json: any): UndisputePurchaseInvoiceRequest {
    return UndisputePurchaseInvoiceRequestFromJSONTyped(json, false);
}

export function UndisputePurchaseInvoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UndisputePurchaseInvoiceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function UndisputePurchaseInvoiceRequestToJSON(json: any): UndisputePurchaseInvoiceRequest {
    return UndisputePurchaseInvoiceRequestToJSONTyped(json, false);
}

export function UndisputePurchaseInvoiceRequestToJSONTyped(value?: UndisputePurchaseInvoiceRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

