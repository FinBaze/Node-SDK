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
/**
 * 
 * @export
 * @interface CreateSalesInvoiceRequestEu
 */
export interface CreateSalesInvoiceRequestEu {
    /**
     * 
     * @type {string}
     * @memberof CreateSalesInvoiceRequestEu
     */
    vatNumber?: string;
}

/**
 * Check if a given object implements the CreateSalesInvoiceRequestEu interface.
 */
export function instanceOfCreateSalesInvoiceRequestEu(value: object): value is CreateSalesInvoiceRequestEu {
    return true;
}

export function CreateSalesInvoiceRequestEuFromJSON(json: any): CreateSalesInvoiceRequestEu {
    return CreateSalesInvoiceRequestEuFromJSONTyped(json, false);
}

export function CreateSalesInvoiceRequestEuFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSalesInvoiceRequestEu {
    if (json == null) {
        return json;
    }
    return {
        
        'vatNumber': json['vat-number'] == null ? undefined : json['vat-number'],
    };
}

export function CreateSalesInvoiceRequestEuToJSON(json: any): CreateSalesInvoiceRequestEu {
    return CreateSalesInvoiceRequestEuToJSONTyped(json, false);
}

export function CreateSalesInvoiceRequestEuToJSONTyped(value?: CreateSalesInvoiceRequestEu | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vat-number': value['vatNumber'],
    };
}

