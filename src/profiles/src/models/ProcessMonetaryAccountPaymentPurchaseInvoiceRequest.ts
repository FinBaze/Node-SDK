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
 * @interface ProcessMonetaryAccountPaymentPurchaseInvoiceRequest
 */
export interface ProcessMonetaryAccountPaymentPurchaseInvoiceRequest {
    /**
     * 
     * @type {string}
     * @memberof ProcessMonetaryAccountPaymentPurchaseInvoiceRequest
     */
    purchaseInvoice: string;
}

/**
 * Check if a given object implements the ProcessMonetaryAccountPaymentPurchaseInvoiceRequest interface.
 */
export function instanceOfProcessMonetaryAccountPaymentPurchaseInvoiceRequest(value: object): value is ProcessMonetaryAccountPaymentPurchaseInvoiceRequest {
    if (!('purchaseInvoice' in value) || value['purchaseInvoice'] === undefined) return false;
    return true;
}

export function ProcessMonetaryAccountPaymentPurchaseInvoiceRequestFromJSON(json: any): ProcessMonetaryAccountPaymentPurchaseInvoiceRequest {
    return ProcessMonetaryAccountPaymentPurchaseInvoiceRequestFromJSONTyped(json, false);
}

export function ProcessMonetaryAccountPaymentPurchaseInvoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessMonetaryAccountPaymentPurchaseInvoiceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'purchaseInvoice': json['purchase-invoice'],
    };
}

export function ProcessMonetaryAccountPaymentPurchaseInvoiceRequestToJSON(json: any): ProcessMonetaryAccountPaymentPurchaseInvoiceRequest {
    return ProcessMonetaryAccountPaymentPurchaseInvoiceRequestToJSONTyped(json, false);
}

export function ProcessMonetaryAccountPaymentPurchaseInvoiceRequestToJSONTyped(value?: ProcessMonetaryAccountPaymentPurchaseInvoiceRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'purchase-invoice': value['purchaseInvoice'],
    };
}

