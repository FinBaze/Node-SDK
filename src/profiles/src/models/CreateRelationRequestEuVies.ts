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
 * @interface CreateRelationRequestEuVies
 */
export interface CreateRelationRequestEuVies {
    /**
     * Whether the VAT number is valid
     * @type {boolean}
     * @memberof CreateRelationRequestEuVies
     */
    valid: boolean;
    /**
     * Name of the company
     * @type {string}
     * @memberof CreateRelationRequestEuVies
     */
    name?: string;
    /**
     * Address of the company
     * @type {string}
     * @memberof CreateRelationRequestEuVies
     */
    address?: string;
}

/**
 * Check if a given object implements the CreateRelationRequestEuVies interface.
 */
export function instanceOfCreateRelationRequestEuVies(value: object): value is CreateRelationRequestEuVies {
    if (!('valid' in value) || value['valid'] === undefined) return false;
    return true;
}

export function CreateRelationRequestEuViesFromJSON(json: any): CreateRelationRequestEuVies {
    return CreateRelationRequestEuViesFromJSONTyped(json, false);
}

export function CreateRelationRequestEuViesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRelationRequestEuVies {
    if (json == null) {
        return json;
    }
    return {
        
        'valid': json['valid'],
        'name': json['name'] == null ? undefined : json['name'],
        'address': json['address'] == null ? undefined : json['address'],
    };
}

export function CreateRelationRequestEuViesToJSON(json: any): CreateRelationRequestEuVies {
    return CreateRelationRequestEuViesToJSONTyped(json, false);
}

export function CreateRelationRequestEuViesToJSONTyped(value?: CreateRelationRequestEuVies | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'valid': value['valid'],
        'name': value['name'],
        'address': value['address'],
    };
}

