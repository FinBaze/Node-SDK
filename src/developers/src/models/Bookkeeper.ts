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
 * Bookkeeper
 * @export
 * @interface Bookkeeper
 */
export interface Bookkeeper {
    /**
     * 
     * @type {string}
     * @memberof Bookkeeper
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof Bookkeeper
     */
    legalName: string;
    /**
     * 
     * @type {string}
     * @memberof Bookkeeper
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof Bookkeeper
     */
    readonly updated: Date;
    /**
     * 
     * @type {Date}
     * @memberof Bookkeeper
     */
    readonly created: Date;
}

/**
 * Check if a given object implements the Bookkeeper interface.
 */
export function instanceOfBookkeeper(value: object): value is Bookkeeper {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('legalName' in value) || value['legalName'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    return true;
}

export function BookkeeperFromJSON(json: any): Bookkeeper {
    return BookkeeperFromJSONTyped(json, false);
}

export function BookkeeperFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bookkeeper {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'legalName': json['legal-name'],
        'name': json['name'],
        'updated': (new Date(json['updated'])),
        'created': (new Date(json['created'])),
    };
}

export function BookkeeperToJSON(json: any): Bookkeeper {
    return BookkeeperToJSONTyped(json, false);
}

export function BookkeeperToJSONTyped(value?: Omit<Bookkeeper, 'id'|'updated'|'created'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'legal-name': value['legalName'],
        'name': value['name'],
    };
}

