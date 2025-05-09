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


/**
 * 
 * @export
 */
export const SubscriptionFrequency = {
    Daily: 'daily',
    Weekly: 'weekly',
    BiWeekly: 'bi_weekly',
    Monthly: 'monthly',
    BiMonthly: 'bi_monthly',
    Quarterly: 'quarterly',
    Yearly: 'yearly'
} as const;
export type SubscriptionFrequency = typeof SubscriptionFrequency[keyof typeof SubscriptionFrequency];


export function instanceOfSubscriptionFrequency(value: any): boolean {
    for (const key in SubscriptionFrequency) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionFrequency, key)) {
            if (SubscriptionFrequency[key as keyof typeof SubscriptionFrequency] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionFrequencyFromJSON(json: any): SubscriptionFrequency {
    return SubscriptionFrequencyFromJSONTyped(json, false);
}

export function SubscriptionFrequencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionFrequency {
    return json as SubscriptionFrequency;
}

export function SubscriptionFrequencyToJSON(value?: SubscriptionFrequency | null): any {
    return value as any;
}

export function SubscriptionFrequencyToJSONTyped(value: any, ignoreDiscriminator: boolean): SubscriptionFrequency {
    return value as SubscriptionFrequency;
}

