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
import type { ExpenseCategory } from './ExpenseCategory';
import {
    ExpenseCategoryFromJSON,
    ExpenseCategoryFromJSONTyped,
    ExpenseCategoryToJSON,
    ExpenseCategoryToJSONTyped,
} from './ExpenseCategory';

/**
 * 
 * @export
 * @interface PurchaseInvoiceLineEmbedded
 */
export interface PurchaseInvoiceLineEmbedded {
    /**
     * 
     * @type {ExpenseCategory}
     * @memberof PurchaseInvoiceLineEmbedded
     */
    expenseCategory?: ExpenseCategory;
}

/**
 * Check if a given object implements the PurchaseInvoiceLineEmbedded interface.
 */
export function instanceOfPurchaseInvoiceLineEmbedded(value: object): value is PurchaseInvoiceLineEmbedded {
    return true;
}

export function PurchaseInvoiceLineEmbeddedFromJSON(json: any): PurchaseInvoiceLineEmbedded {
    return PurchaseInvoiceLineEmbeddedFromJSONTyped(json, false);
}

export function PurchaseInvoiceLineEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseInvoiceLineEmbedded {
    if (json == null) {
        return json;
    }
    return {
        
        'expenseCategory': json['expense-category'] == null ? undefined : ExpenseCategoryFromJSON(json['expense-category']),
    };
}

export function PurchaseInvoiceLineEmbeddedToJSON(json: any): PurchaseInvoiceLineEmbedded {
    return PurchaseInvoiceLineEmbeddedToJSONTyped(json, false);
}

export function PurchaseInvoiceLineEmbeddedToJSONTyped(value?: PurchaseInvoiceLineEmbedded | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expense-category': ExpenseCategoryToJSON(value['expenseCategory']),
    };
}

