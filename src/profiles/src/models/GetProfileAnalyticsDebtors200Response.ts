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
import type { GetProfileAnalyticsDebtors200ResponseConcept } from './GetProfileAnalyticsDebtors200ResponseConcept';
import {
    GetProfileAnalyticsDebtors200ResponseConceptFromJSON,
    GetProfileAnalyticsDebtors200ResponseConceptFromJSONTyped,
    GetProfileAnalyticsDebtors200ResponseConceptToJSON,
    GetProfileAnalyticsDebtors200ResponseConceptToJSONTyped,
} from './GetProfileAnalyticsDebtors200ResponseConcept';

/**
 * 
 * @export
 * @interface GetProfileAnalyticsDebtors200Response
 */
export interface GetProfileAnalyticsDebtors200Response {
    /**
     * 
     * @type {GetProfileAnalyticsDebtors200ResponseConcept}
     * @memberof GetProfileAnalyticsDebtors200Response
     */
    concept?: GetProfileAnalyticsDebtors200ResponseConcept;
    /**
     * 
     * @type {GetProfileAnalyticsDebtors200ResponseConcept}
     * @memberof GetProfileAnalyticsDebtors200Response
     */
    open?: GetProfileAnalyticsDebtors200ResponseConcept;
    /**
     * 
     * @type {GetProfileAnalyticsDebtors200ResponseConcept}
     * @memberof GetProfileAnalyticsDebtors200Response
     */
    overdue?: GetProfileAnalyticsDebtors200ResponseConcept;
    /**
     * 
     * @type {GetProfileAnalyticsDebtors200ResponseConcept}
     * @memberof GetProfileAnalyticsDebtors200Response
     */
    late?: GetProfileAnalyticsDebtors200ResponseConcept;
}

/**
 * Check if a given object implements the GetProfileAnalyticsDebtors200Response interface.
 */
export function instanceOfGetProfileAnalyticsDebtors200Response(value: object): value is GetProfileAnalyticsDebtors200Response {
    return true;
}

export function GetProfileAnalyticsDebtors200ResponseFromJSON(json: any): GetProfileAnalyticsDebtors200Response {
    return GetProfileAnalyticsDebtors200ResponseFromJSONTyped(json, false);
}

export function GetProfileAnalyticsDebtors200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfileAnalyticsDebtors200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'concept': json['concept'] == null ? undefined : GetProfileAnalyticsDebtors200ResponseConceptFromJSON(json['concept']),
        'open': json['open'] == null ? undefined : GetProfileAnalyticsDebtors200ResponseConceptFromJSON(json['open']),
        'overdue': json['overdue'] == null ? undefined : GetProfileAnalyticsDebtors200ResponseConceptFromJSON(json['overdue']),
        'late': json['late'] == null ? undefined : GetProfileAnalyticsDebtors200ResponseConceptFromJSON(json['late']),
    };
}

export function GetProfileAnalyticsDebtors200ResponseToJSON(json: any): GetProfileAnalyticsDebtors200Response {
    return GetProfileAnalyticsDebtors200ResponseToJSONTyped(json, false);
}

export function GetProfileAnalyticsDebtors200ResponseToJSONTyped(value?: GetProfileAnalyticsDebtors200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'concept': GetProfileAnalyticsDebtors200ResponseConceptToJSON(value['concept']),
        'open': GetProfileAnalyticsDebtors200ResponseConceptToJSON(value['open']),
        'overdue': GetProfileAnalyticsDebtors200ResponseConceptToJSON(value['overdue']),
        'late': GetProfileAnalyticsDebtors200ResponseConceptToJSON(value['late']),
    };
}

