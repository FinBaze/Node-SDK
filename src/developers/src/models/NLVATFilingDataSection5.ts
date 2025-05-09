/* tslint:disable */
/* eslint-disable */
/**
 * FinBaze developers API
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
 * @interface NLVATFilingDataSection5
 */
export interface NLVATFilingDataSection5 {
    /**
     * Total deductions value.
     * @type {number}
     * @memberof NLVATFilingDataSection5
     */
    deductions?: number;
    /**
     * Deduction for small businesses.
     * @type {number}
     * @memberof NLVATFilingDataSection5
     */
    smallBusinessDeduction?: number;
}

/**
 * Check if a given object implements the NLVATFilingDataSection5 interface.
 */
export function instanceOfNLVATFilingDataSection5(value: object): value is NLVATFilingDataSection5 {
    return true;
}

export function NLVATFilingDataSection5FromJSON(json: any): NLVATFilingDataSection5 {
    return NLVATFilingDataSection5FromJSONTyped(json, false);
}

export function NLVATFilingDataSection5FromJSONTyped(json: any, ignoreDiscriminator: boolean): NLVATFilingDataSection5 {
    if (json == null) {
        return json;
    }
    return {
        
        'deductions': json['deductions'] == null ? undefined : json['deductions'],
        'smallBusinessDeduction': json['smallBusinessDeduction'] == null ? undefined : json['smallBusinessDeduction'],
    };
}

export function NLVATFilingDataSection5ToJSON(json: any): NLVATFilingDataSection5 {
    return NLVATFilingDataSection5ToJSONTyped(json, false);
}

export function NLVATFilingDataSection5ToJSONTyped(value?: NLVATFilingDataSection5 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'deductions': value['deductions'],
        'smallBusinessDeduction': value['smallBusinessDeduction'],
    };
}

