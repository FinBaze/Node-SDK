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
 * @interface ProcessMonetaryAccountPaymentSalesInvoiceRequest
 */
export interface ProcessMonetaryAccountPaymentSalesInvoiceRequest {
    /**
     * 
     * @type {string}
     * @memberof ProcessMonetaryAccountPaymentSalesInvoiceRequest
     */
    salesInvoice: string;
}

/**
 * Check if a given object implements the ProcessMonetaryAccountPaymentSalesInvoiceRequest interface.
 */
export function instanceOfProcessMonetaryAccountPaymentSalesInvoiceRequest(value: object): value is ProcessMonetaryAccountPaymentSalesInvoiceRequest {
    if (!('salesInvoice' in value) || value['salesInvoice'] === undefined) return false;
    return true;
}

export function ProcessMonetaryAccountPaymentSalesInvoiceRequestFromJSON(json: any): ProcessMonetaryAccountPaymentSalesInvoiceRequest {
    return ProcessMonetaryAccountPaymentSalesInvoiceRequestFromJSONTyped(json, false);
}

export function ProcessMonetaryAccountPaymentSalesInvoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessMonetaryAccountPaymentSalesInvoiceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'salesInvoice': json['sales-invoice'],
    };
}

export function ProcessMonetaryAccountPaymentSalesInvoiceRequestToJSON(json: any): ProcessMonetaryAccountPaymentSalesInvoiceRequest {
    return ProcessMonetaryAccountPaymentSalesInvoiceRequestToJSONTyped(json, false);
}

export function ProcessMonetaryAccountPaymentSalesInvoiceRequestToJSONTyped(value?: ProcessMonetaryAccountPaymentSalesInvoiceRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sales-invoice': value['salesInvoice'],
    };
}

