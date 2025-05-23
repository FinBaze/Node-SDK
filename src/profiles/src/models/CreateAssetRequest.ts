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
 * @interface CreateAssetRequest
 */
export interface CreateAssetRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAssetRequest
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAssetRequest
     */
    name: string;
    /**
     * Lifespan in months
     * @type {number}
     * @memberof CreateAssetRequest
     */
    lifespan: number;
    /**
     * 
     * @type {number}
     * @memberof CreateAssetRequest
     */
    value: number;
    /**
     * 
     * @type {number}
     * @memberof CreateAssetRequest
     */
    residualValue: number;
    /**
     * 
     * @type {string}
     * @memberof CreateAssetRequest
     */
    ledger: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAssetRequest
     */
    writeoffLedger: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateAssetRequest
     */
    date: Date;
    /**
     * Free form key/ value pair
     * @type {{ [key: string]: any; }}
     * @memberof CreateAssetRequest
     */
    metadata?: { [key: string]: any; };
}

/**
 * Check if a given object implements the CreateAssetRequest interface.
 */
export function instanceOfCreateAssetRequest(value: object): value is CreateAssetRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('lifespan' in value) || value['lifespan'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('residualValue' in value) || value['residualValue'] === undefined) return false;
    if (!('ledger' in value) || value['ledger'] === undefined) return false;
    if (!('writeoffLedger' in value) || value['writeoffLedger'] === undefined) return false;
    if (!('date' in value) || value['date'] === undefined) return false;
    return true;
}

export function CreateAssetRequestFromJSON(json: any): CreateAssetRequest {
    return CreateAssetRequestFromJSONTyped(json, false);
}

export function CreateAssetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAssetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'name': json['name'],
        'lifespan': json['lifespan'],
        'value': json['value'],
        'residualValue': json['residual-value'],
        'ledger': json['ledger'],
        'writeoffLedger': json['writeoff-ledger'],
        'date': (new Date(json['date'])),
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function CreateAssetRequestToJSON(json: any): CreateAssetRequest {
    return CreateAssetRequestToJSONTyped(json, false);
}

export function CreateAssetRequestToJSONTyped(value?: CreateAssetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'name': value['name'],
        'lifespan': value['lifespan'],
        'value': value['value'],
        'residual-value': value['residualValue'],
        'ledger': value['ledger'],
        'writeoff-ledger': value['writeoffLedger'],
        'date': ((value['date']).toISOString().substring(0,10)),
        'metadata': value['metadata'],
    };
}

