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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
    LinksToJSONTyped,
} from './Links';

/**
 * 
 * @export
 * @interface CurrentAccount
 */
export interface CurrentAccount {
    /**
     * 
     * @type {string}
     * @memberof CurrentAccount
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentAccount
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentAccount
     */
    name: string;
    /**
     * ID of the relation the loan has given
     * @type {string}
     * @memberof CurrentAccount
     */
    relation: string;
    /**
     * Interest percentage with an exponent of 4, this an rate of 1.2345 will be set as 12345
     * @type {number}
     * @memberof CurrentAccount
     */
    interest: number;
    /**
     * ISO 3166-1 alpha-2 currency code
     * @type {string}
     * @memberof CurrentAccount
     */
    currency: string;
    /**
     * Free form key/ value pair
     * @type {{ [key: string]: any; }}
     * @memberof CurrentAccount
     */
    metadata?: { [key: string]: any; };
    /**
     * 
     * @type {Links}
     * @memberof CurrentAccount
     */
    links: Links;
    /**
     * 
     * @type {Date}
     * @memberof CurrentAccount
     */
    readonly updated: Date;
    /**
     * 
     * @type {Date}
     * @memberof CurrentAccount
     */
    readonly created: Date;
}

/**
 * Check if a given object implements the CurrentAccount interface.
 */
export function instanceOfCurrentAccount(value: object): value is CurrentAccount {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('relation' in value) || value['relation'] === undefined) return false;
    if (!('interest' in value) || value['interest'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    return true;
}

export function CurrentAccountFromJSON(json: any): CurrentAccount {
    return CurrentAccountFromJSONTyped(json, false);
}

export function CurrentAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'] == null ? undefined : json['code'],
        'name': json['name'],
        'relation': json['relation'],
        'interest': json['interest'],
        'currency': json['currency'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'links': LinksFromJSON(json['_links']),
        'updated': (new Date(json['updated'])),
        'created': (new Date(json['created'])),
    };
}

export function CurrentAccountToJSON(json: any): CurrentAccount {
    return CurrentAccountToJSONTyped(json, false);
}

export function CurrentAccountToJSONTyped(value?: Omit<CurrentAccount, 'id'|'updated'|'created'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'name': value['name'],
        'relation': value['relation'],
        'interest': value['interest'],
        'currency': value['currency'],
        'metadata': value['metadata'],
        '_links': LinksToJSON(value['links']),
    };
}

