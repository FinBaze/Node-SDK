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
import type { Relation } from './Relation';
import {
    RelationFromJSON,
    RelationFromJSONTyped,
    RelationToJSON,
    RelationToJSONTyped,
} from './Relation';
import type { MonetaryAccountPayment } from './MonetaryAccountPayment';
import {
    MonetaryAccountPaymentFromJSON,
    MonetaryAccountPaymentFromJSONTyped,
    MonetaryAccountPaymentToJSON,
    MonetaryAccountPaymentToJSONTyped,
} from './MonetaryAccountPayment';
import type { PurchaseInvoiceLine } from './PurchaseInvoiceLine';
import {
    PurchaseInvoiceLineFromJSON,
    PurchaseInvoiceLineFromJSONTyped,
    PurchaseInvoiceLineToJSON,
    PurchaseInvoiceLineToJSONTyped,
} from './PurchaseInvoiceLine';
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
    ProfileToJSONTyped,
} from './Profile';

/**
 * 
 * @export
 * @interface PurchaseInvoiceEmbedded
 */
export interface PurchaseInvoiceEmbedded {
    /**
     * 
     * @type {Profile}
     * @memberof PurchaseInvoiceEmbedded
     */
    profile: Profile;
    /**
     * 
     * @type {Relation}
     * @memberof PurchaseInvoiceEmbedded
     */
    relation: Relation;
    /**
     * 
     * @type {Array<PurchaseInvoiceLine>}
     * @memberof PurchaseInvoiceEmbedded
     */
    lines: Array<PurchaseInvoiceLine>;
    /**
     * 
     * @type {Array<MonetaryAccountPayment>}
     * @memberof PurchaseInvoiceEmbedded
     */
    payments: Array<MonetaryAccountPayment>;
}

/**
 * Check if a given object implements the PurchaseInvoiceEmbedded interface.
 */
export function instanceOfPurchaseInvoiceEmbedded(value: object): value is PurchaseInvoiceEmbedded {
    if (!('profile' in value) || value['profile'] === undefined) return false;
    if (!('relation' in value) || value['relation'] === undefined) return false;
    if (!('lines' in value) || value['lines'] === undefined) return false;
    if (!('payments' in value) || value['payments'] === undefined) return false;
    return true;
}

export function PurchaseInvoiceEmbeddedFromJSON(json: any): PurchaseInvoiceEmbedded {
    return PurchaseInvoiceEmbeddedFromJSONTyped(json, false);
}

export function PurchaseInvoiceEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseInvoiceEmbedded {
    if (json == null) {
        return json;
    }
    return {
        
        'profile': ProfileFromJSON(json['profile']),
        'relation': RelationFromJSON(json['relation']),
        'lines': ((json['lines'] as Array<any>).map(PurchaseInvoiceLineFromJSON)),
        'payments': ((json['payments'] as Array<any>).map(MonetaryAccountPaymentFromJSON)),
    };
}

export function PurchaseInvoiceEmbeddedToJSON(json: any): PurchaseInvoiceEmbedded {
    return PurchaseInvoiceEmbeddedToJSONTyped(json, false);
}

export function PurchaseInvoiceEmbeddedToJSONTyped(value?: PurchaseInvoiceEmbedded | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'profile': ProfileToJSON(value['profile']),
        'relation': RelationToJSON(value['relation']),
        'lines': ((value['lines'] as Array<any>).map(PurchaseInvoiceLineToJSON)),
        'payments': ((value['payments'] as Array<any>).map(MonetaryAccountPaymentToJSON)),
    };
}

