/* tslint:disable */
/* eslint-disable */
/**
 * FinBaze internal API
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
 * @interface ProfileSettingsPurchaseInvoice
 */
export interface ProfileSettingsPurchaseInvoice {
    /**
     * 
     * @type {number}
     * @memberof ProfileSettingsPurchaseInvoice
     */
    paymentDays?: number;
}

/**
 * Check if a given object implements the ProfileSettingsPurchaseInvoice interface.
 */
export function instanceOfProfileSettingsPurchaseInvoice(value: object): value is ProfileSettingsPurchaseInvoice {
    return true;
}

export function ProfileSettingsPurchaseInvoiceFromJSON(json: any): ProfileSettingsPurchaseInvoice {
    return ProfileSettingsPurchaseInvoiceFromJSONTyped(json, false);
}

export function ProfileSettingsPurchaseInvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileSettingsPurchaseInvoice {
    if (json == null) {
        return json;
    }
    return {
        
        'paymentDays': json['payment_days'] == null ? undefined : json['payment_days'],
    };
}

export function ProfileSettingsPurchaseInvoiceToJSON(json: any): ProfileSettingsPurchaseInvoice {
    return ProfileSettingsPurchaseInvoiceToJSONTyped(json, false);
}

export function ProfileSettingsPurchaseInvoiceToJSONTyped(value?: ProfileSettingsPurchaseInvoice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payment_days': value['paymentDays'],
    };
}

