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
import type { SoftclosePurchaseInvoiceRequestTotals } from './SoftclosePurchaseInvoiceRequestTotals';
import {
    SoftclosePurchaseInvoiceRequestTotalsFromJSON,
    SoftclosePurchaseInvoiceRequestTotalsFromJSONTyped,
    SoftclosePurchaseInvoiceRequestTotalsToJSON,
    SoftclosePurchaseInvoiceRequestTotalsToJSONTyped,
} from './SoftclosePurchaseInvoiceRequestTotals';

/**
 * 
 * @export
 * @interface SoftclosePurchaseInvoiceRequest
 */
export interface SoftclosePurchaseInvoiceRequest {
    /**
     * 
     * @type {SoftclosePurchaseInvoiceRequestTotals}
     * @memberof SoftclosePurchaseInvoiceRequest
     */
    totals: SoftclosePurchaseInvoiceRequestTotals;
}

/**
 * Check if a given object implements the SoftclosePurchaseInvoiceRequest interface.
 */
export function instanceOfSoftclosePurchaseInvoiceRequest(value: object): value is SoftclosePurchaseInvoiceRequest {
    if (!('totals' in value) || value['totals'] === undefined) return false;
    return true;
}

export function SoftclosePurchaseInvoiceRequestFromJSON(json: any): SoftclosePurchaseInvoiceRequest {
    return SoftclosePurchaseInvoiceRequestFromJSONTyped(json, false);
}

export function SoftclosePurchaseInvoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoftclosePurchaseInvoiceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'totals': SoftclosePurchaseInvoiceRequestTotalsFromJSON(json['totals']),
    };
}

export function SoftclosePurchaseInvoiceRequestToJSON(json: any): SoftclosePurchaseInvoiceRequest {
    return SoftclosePurchaseInvoiceRequestToJSONTyped(json, false);
}

export function SoftclosePurchaseInvoiceRequestToJSONTyped(value?: SoftclosePurchaseInvoiceRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totals': SoftclosePurchaseInvoiceRequestTotalsToJSON(value['totals']),
    };
}

