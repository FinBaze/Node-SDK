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
 * @interface GetProfilePlan200ResponseEmbeddedPlan
 */
export interface GetProfilePlan200ResponseEmbeddedPlan {
    /**
     * 
     * @type {string}
     * @memberof GetProfilePlan200ResponseEmbeddedPlan
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfilePlan200ResponseEmbeddedPlan
     */
    readonly uuid: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfilePlan200ResponseEmbeddedPlan
     */
    readonly name: string;
    /**
     * 
     * @type {number}
     * @memberof GetProfilePlan200ResponseEmbeddedPlan
     */
    readonly price: number;
    /**
     * ISO 3166-1 alpha-2 currency code
     * @type {string}
     * @memberof GetProfilePlan200ResponseEmbeddedPlan
     */
    currency: string;
}

/**
 * Check if a given object implements the GetProfilePlan200ResponseEmbeddedPlan interface.
 */
export function instanceOfGetProfilePlan200ResponseEmbeddedPlan(value: object): value is GetProfilePlan200ResponseEmbeddedPlan {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('uuid' in value) || value['uuid'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    return true;
}

export function GetProfilePlan200ResponseEmbeddedPlanFromJSON(json: any): GetProfilePlan200ResponseEmbeddedPlan {
    return GetProfilePlan200ResponseEmbeddedPlanFromJSONTyped(json, false);
}

export function GetProfilePlan200ResponseEmbeddedPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfilePlan200ResponseEmbeddedPlan {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'uuid': json['uuid'],
        'name': json['name'],
        'price': json['price'],
        'currency': json['currency'],
    };
}

export function GetProfilePlan200ResponseEmbeddedPlanToJSON(json: any): GetProfilePlan200ResponseEmbeddedPlan {
    return GetProfilePlan200ResponseEmbeddedPlanToJSONTyped(json, false);
}

export function GetProfilePlan200ResponseEmbeddedPlanToJSONTyped(value?: Omit<GetProfilePlan200ResponseEmbeddedPlan, 'id'|'uuid'|'name'|'price'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'currency': value['currency'],
    };
}

