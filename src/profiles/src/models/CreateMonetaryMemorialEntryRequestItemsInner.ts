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
import type { CreateMonetaryMemorialEntryRequestItemsInnerProcess } from './CreateMonetaryMemorialEntryRequestItemsInnerProcess';
import {
    CreateMonetaryMemorialEntryRequestItemsInnerProcessFromJSON,
    CreateMonetaryMemorialEntryRequestItemsInnerProcessFromJSONTyped,
    CreateMonetaryMemorialEntryRequestItemsInnerProcessToJSON,
    CreateMonetaryMemorialEntryRequestItemsInnerProcessToJSONTyped,
} from './CreateMonetaryMemorialEntryRequestItemsInnerProcess';

/**
 * 
 * @export
 * @interface CreateMonetaryMemorialEntryRequestItemsInner
 */
export interface CreateMonetaryMemorialEntryRequestItemsInner {
    /**
     * 
     * @type {string}
     * @memberof CreateMonetaryMemorialEntryRequestItemsInner
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CreateMonetaryMemorialEntryRequestItemsInner
     */
    amount: number;
    /**
     * 
     * @type {number}
     * @memberof CreateMonetaryMemorialEntryRequestItemsInner
     */
    original?: number;
    /**
     * 
     * @type {CreateMonetaryMemorialEntryRequestItemsInnerProcess}
     * @memberof CreateMonetaryMemorialEntryRequestItemsInner
     */
    process: CreateMonetaryMemorialEntryRequestItemsInnerProcess;
}

/**
 * Check if a given object implements the CreateMonetaryMemorialEntryRequestItemsInner interface.
 */
export function instanceOfCreateMonetaryMemorialEntryRequestItemsInner(value: object): value is CreateMonetaryMemorialEntryRequestItemsInner {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('process' in value) || value['process'] === undefined) return false;
    return true;
}

export function CreateMonetaryMemorialEntryRequestItemsInnerFromJSON(json: any): CreateMonetaryMemorialEntryRequestItemsInner {
    return CreateMonetaryMemorialEntryRequestItemsInnerFromJSONTyped(json, false);
}

export function CreateMonetaryMemorialEntryRequestItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMonetaryMemorialEntryRequestItemsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'amount': json['amount'],
        'original': json['original'] == null ? undefined : json['original'],
        'process': CreateMonetaryMemorialEntryRequestItemsInnerProcessFromJSON(json['process']),
    };
}

export function CreateMonetaryMemorialEntryRequestItemsInnerToJSON(json: any): CreateMonetaryMemorialEntryRequestItemsInner {
    return CreateMonetaryMemorialEntryRequestItemsInnerToJSONTyped(json, false);
}

export function CreateMonetaryMemorialEntryRequestItemsInnerToJSONTyped(value?: CreateMonetaryMemorialEntryRequestItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'amount': value['amount'],
        'original': value['original'],
        'process': CreateMonetaryMemorialEntryRequestItemsInnerProcessToJSON(value['process']),
    };
}

