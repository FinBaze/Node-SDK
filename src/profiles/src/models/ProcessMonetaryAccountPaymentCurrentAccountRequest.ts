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
 * @interface ProcessMonetaryAccountPaymentCurrentAccountRequest
 */
export interface ProcessMonetaryAccountPaymentCurrentAccountRequest {
    /**
     * 
     * @type {string}
     * @memberof ProcessMonetaryAccountPaymentCurrentAccountRequest
     */
    currentAccount: string;
}

/**
 * Check if a given object implements the ProcessMonetaryAccountPaymentCurrentAccountRequest interface.
 */
export function instanceOfProcessMonetaryAccountPaymentCurrentAccountRequest(value: object): value is ProcessMonetaryAccountPaymentCurrentAccountRequest {
    if (!('currentAccount' in value) || value['currentAccount'] === undefined) return false;
    return true;
}

export function ProcessMonetaryAccountPaymentCurrentAccountRequestFromJSON(json: any): ProcessMonetaryAccountPaymentCurrentAccountRequest {
    return ProcessMonetaryAccountPaymentCurrentAccountRequestFromJSONTyped(json, false);
}

export function ProcessMonetaryAccountPaymentCurrentAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessMonetaryAccountPaymentCurrentAccountRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'currentAccount': json['current-account'],
    };
}

export function ProcessMonetaryAccountPaymentCurrentAccountRequestToJSON(json: any): ProcessMonetaryAccountPaymentCurrentAccountRequest {
    return ProcessMonetaryAccountPaymentCurrentAccountRequestToJSONTyped(json, false);
}

export function ProcessMonetaryAccountPaymentCurrentAccountRequestToJSONTyped(value?: ProcessMonetaryAccountPaymentCurrentAccountRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'current-account': value['currentAccount'],
    };
}

