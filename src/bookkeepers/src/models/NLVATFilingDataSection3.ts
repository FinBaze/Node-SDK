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
 * @interface NLVATFilingDataSection3
 */
export interface NLVATFilingDataSection3 {
    /**
     * Value for within EU transactions.
     * @type {number}
     * @memberof NLVATFilingDataSection3
     */
    withinEU?: number;
    /**
     * Value for outside EU transactions.
     * @type {number}
     * @memberof NLVATFilingDataSection3
     */
    outsideEU?: number;
    /**
     * Value for distance EU transactions.
     * @type {number}
     * @memberof NLVATFilingDataSection3
     */
    distanceEU?: number;
}

/**
 * Check if a given object implements the NLVATFilingDataSection3 interface.
 */
export function instanceOfNLVATFilingDataSection3(value: object): value is NLVATFilingDataSection3 {
    return true;
}

export function NLVATFilingDataSection3FromJSON(json: any): NLVATFilingDataSection3 {
    return NLVATFilingDataSection3FromJSONTyped(json, false);
}

export function NLVATFilingDataSection3FromJSONTyped(json: any, ignoreDiscriminator: boolean): NLVATFilingDataSection3 {
    if (json == null) {
        return json;
    }
    return {
        
        'withinEU': json['withinEU'] == null ? undefined : json['withinEU'],
        'outsideEU': json['outsideEU'] == null ? undefined : json['outsideEU'],
        'distanceEU': json['distanceEU'] == null ? undefined : json['distanceEU'],
    };
}

export function NLVATFilingDataSection3ToJSON(json: any): NLVATFilingDataSection3 {
    return NLVATFilingDataSection3ToJSONTyped(json, false);
}

export function NLVATFilingDataSection3ToJSONTyped(value?: NLVATFilingDataSection3 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'withinEU': value['withinEU'],
        'outsideEU': value['outsideEU'],
        'distanceEU': value['distanceEU'],
    };
}

