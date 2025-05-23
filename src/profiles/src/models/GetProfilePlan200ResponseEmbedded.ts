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
import type { GetProfilePlan200ResponseEmbeddedPlan } from './GetProfilePlan200ResponseEmbeddedPlan';
import {
    GetProfilePlan200ResponseEmbeddedPlanFromJSON,
    GetProfilePlan200ResponseEmbeddedPlanFromJSONTyped,
    GetProfilePlan200ResponseEmbeddedPlanToJSON,
    GetProfilePlan200ResponseEmbeddedPlanToJSONTyped,
} from './GetProfilePlan200ResponseEmbeddedPlan';
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
 * @interface GetProfilePlan200ResponseEmbedded
 */
export interface GetProfilePlan200ResponseEmbedded {
    /**
     * 
     * @type {Profile}
     * @memberof GetProfilePlan200ResponseEmbedded
     */
    profile?: Profile;
    /**
     * 
     * @type {GetProfilePlan200ResponseEmbeddedPlan}
     * @memberof GetProfilePlan200ResponseEmbedded
     */
    plan?: GetProfilePlan200ResponseEmbeddedPlan;
}

/**
 * Check if a given object implements the GetProfilePlan200ResponseEmbedded interface.
 */
export function instanceOfGetProfilePlan200ResponseEmbedded(value: object): value is GetProfilePlan200ResponseEmbedded {
    return true;
}

export function GetProfilePlan200ResponseEmbeddedFromJSON(json: any): GetProfilePlan200ResponseEmbedded {
    return GetProfilePlan200ResponseEmbeddedFromJSONTyped(json, false);
}

export function GetProfilePlan200ResponseEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfilePlan200ResponseEmbedded {
    if (json == null) {
        return json;
    }
    return {
        
        'profile': json['profile'] == null ? undefined : ProfileFromJSON(json['profile']),
        'plan': json['plan'] == null ? undefined : GetProfilePlan200ResponseEmbeddedPlanFromJSON(json['plan']),
    };
}

export function GetProfilePlan200ResponseEmbeddedToJSON(json: any): GetProfilePlan200ResponseEmbedded {
    return GetProfilePlan200ResponseEmbeddedToJSONTyped(json, false);
}

export function GetProfilePlan200ResponseEmbeddedToJSONTyped(value?: GetProfilePlan200ResponseEmbedded | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'profile': ProfileToJSON(value['profile']),
        'plan': GetProfilePlan200ResponseEmbeddedPlanToJSON(value['plan']),
    };
}

