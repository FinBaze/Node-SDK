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
 * @interface GetProfileLedgerChart200ResponseSectionsValue
 */
export interface GetProfileLedgerChart200ResponseSectionsValue {
    /**
     * 
     * @type {string}
     * @memberof GetProfileLedgerChart200ResponseSectionsValue
     */
    name: string;
    /**
     * Sort index
     * @type {string}
     * @memberof GetProfileLedgerChart200ResponseSectionsValue
     */
    index: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GetProfileLedgerChart200ResponseSectionsValue
     */
    trans: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof GetProfileLedgerChart200ResponseSectionsValue
     */
    type: GetProfileLedgerChart200ResponseSectionsValueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetProfileLedgerChart200ResponseSectionsValue
     */
    side?: GetProfileLedgerChart200ResponseSectionsValueSideEnum;
}


/**
 * @export
 */
export const GetProfileLedgerChart200ResponseSectionsValueTypeEnum = {
    Balance: 'balance',
    ProfitLoss: 'profit_loss'
} as const;
export type GetProfileLedgerChart200ResponseSectionsValueTypeEnum = typeof GetProfileLedgerChart200ResponseSectionsValueTypeEnum[keyof typeof GetProfileLedgerChart200ResponseSectionsValueTypeEnum];

/**
 * @export
 */
export const GetProfileLedgerChart200ResponseSectionsValueSideEnum = {
    Debit: 'debit',
    Credit: 'credit',
    Assets: 'assets',
    Liabilities: 'liabilities'
} as const;
export type GetProfileLedgerChart200ResponseSectionsValueSideEnum = typeof GetProfileLedgerChart200ResponseSectionsValueSideEnum[keyof typeof GetProfileLedgerChart200ResponseSectionsValueSideEnum];


/**
 * Check if a given object implements the GetProfileLedgerChart200ResponseSectionsValue interface.
 */
export function instanceOfGetProfileLedgerChart200ResponseSectionsValue(value: object): value is GetProfileLedgerChart200ResponseSectionsValue {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('index' in value) || value['index'] === undefined) return false;
    if (!('trans' in value) || value['trans'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function GetProfileLedgerChart200ResponseSectionsValueFromJSON(json: any): GetProfileLedgerChart200ResponseSectionsValue {
    return GetProfileLedgerChart200ResponseSectionsValueFromJSONTyped(json, false);
}

export function GetProfileLedgerChart200ResponseSectionsValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfileLedgerChart200ResponseSectionsValue {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'index': json['index'],
        'trans': json['trans'],
        'type': json['type'],
        'side': json['side'] == null ? undefined : json['side'],
    };
}

export function GetProfileLedgerChart200ResponseSectionsValueToJSON(json: any): GetProfileLedgerChart200ResponseSectionsValue {
    return GetProfileLedgerChart200ResponseSectionsValueToJSONTyped(json, false);
}

export function GetProfileLedgerChart200ResponseSectionsValueToJSONTyped(value?: GetProfileLedgerChart200ResponseSectionsValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'index': value['index'],
        'trans': value['trans'],
        'type': value['type'],
        'side': value['side'],
    };
}

