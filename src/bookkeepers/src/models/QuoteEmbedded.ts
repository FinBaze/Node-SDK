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
import type { QuoteLine } from './QuoteLine';
import {
    QuoteLineFromJSON,
    QuoteLineFromJSONTyped,
    QuoteLineToJSON,
    QuoteLineToJSONTyped,
} from './QuoteLine';
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
 * @interface QuoteEmbedded
 */
export interface QuoteEmbedded {
    /**
     * 
     * @type {Array<QuoteLine>}
     * @memberof QuoteEmbedded
     */
    lines: Array<QuoteLine>;
    /**
     * 
     * @type {Profile}
     * @memberof QuoteEmbedded
     */
    profile?: Profile;
}

/**
 * Check if a given object implements the QuoteEmbedded interface.
 */
export function instanceOfQuoteEmbedded(value: object): value is QuoteEmbedded {
    if (!('lines' in value) || value['lines'] === undefined) return false;
    return true;
}

export function QuoteEmbeddedFromJSON(json: any): QuoteEmbedded {
    return QuoteEmbeddedFromJSONTyped(json, false);
}

export function QuoteEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteEmbedded {
    if (json == null) {
        return json;
    }
    return {
        
        'lines': ((json['lines'] as Array<any>).map(QuoteLineFromJSON)),
        'profile': json['profile'] == null ? undefined : ProfileFromJSON(json['profile']),
    };
}

export function QuoteEmbeddedToJSON(json: any): QuoteEmbedded {
    return QuoteEmbeddedToJSONTyped(json, false);
}

export function QuoteEmbeddedToJSONTyped(value?: QuoteEmbedded | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lines': ((value['lines'] as Array<any>).map(QuoteLineToJSON)),
        'profile': ProfileToJSON(value['profile']),
    };
}

