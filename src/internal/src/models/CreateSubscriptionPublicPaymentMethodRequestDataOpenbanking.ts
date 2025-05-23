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
/**
 * 
 * @export
 * @interface CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking
 */
export interface CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking {
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking
     */
    bic: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking
     */
    country?: string;
}

/**
 * Check if a given object implements the CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking interface.
 */
export function instanceOfCreateSubscriptionPublicPaymentMethodRequestDataOpenbanking(value: object): value is CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking {
    if (!('bic' in value) || value['bic'] === undefined) return false;
    return true;
}

export function CreateSubscriptionPublicPaymentMethodRequestDataOpenbankingFromJSON(json: any): CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking {
    return CreateSubscriptionPublicPaymentMethodRequestDataOpenbankingFromJSONTyped(json, false);
}

export function CreateSubscriptionPublicPaymentMethodRequestDataOpenbankingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking {
    if (json == null) {
        return json;
    }
    return {
        
        'bic': json['bic'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}

export function CreateSubscriptionPublicPaymentMethodRequestDataOpenbankingToJSON(json: any): CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking {
    return CreateSubscriptionPublicPaymentMethodRequestDataOpenbankingToJSONTyped(json, false);
}

export function CreateSubscriptionPublicPaymentMethodRequestDataOpenbankingToJSONTyped(value?: CreateSubscriptionPublicPaymentMethodRequestDataOpenbanking | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bic': value['bic'],
        'country': value['country'],
    };
}

