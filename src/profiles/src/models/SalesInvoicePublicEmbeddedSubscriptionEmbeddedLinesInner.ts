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
 * @interface SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
 */
export interface SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner {
    /**
     * 
     * @type {string}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    taxCode: string;
    /**
     * 
     * @type {number}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    tax: number;
    /**
     * 
     * @type {number}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    price: number;
    /**
     * 
     * @type {number}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    discount?: number;
    /**
     * Free form key/ value pair
     * @type {{ [key: string]: any; }}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    metadata?: { [key: string]: any; };
    /**
     * 
     * @type {Date}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    readonly updated: Date;
    /**
     * 
     * @type {Date}
     * @memberof SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner
     */
    readonly created: Date;
}

/**
 * Check if a given object implements the SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner interface.
 */
export function instanceOfSalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner(value: object): value is SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('taxCode' in value) || value['taxCode'] === undefined) return false;
    if (!('tax' in value) || value['tax'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    return true;
}

export function SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInnerFromJSON(json: any): SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner {
    return SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInnerFromJSONTyped(json, false);
}

export function SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'taxCode': json['tax-code'],
        'tax': json['tax'],
        'price': json['price'],
        'quantity': json['quantity'],
        'discount': json['discount'] == null ? undefined : json['discount'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'updated': (new Date(json['updated'])),
        'created': (new Date(json['created'])),
    };
}

export function SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInnerToJSON(json: any): SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner {
    return SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInnerToJSONTyped(json, false);
}

export function SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInnerToJSONTyped(value?: Omit<SalesInvoicePublicEmbeddedSubscriptionEmbeddedLinesInner, 'id'|'updated'|'created'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'tax-code': value['taxCode'],
        'tax': value['tax'],
        'price': value['price'],
        'quantity': value['quantity'],
        'discount': value['discount'],
        'metadata': value['metadata'],
    };
}

