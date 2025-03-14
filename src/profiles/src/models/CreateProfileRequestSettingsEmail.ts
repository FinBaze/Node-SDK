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
 * @interface CreateProfileRequestSettingsEmail
 */
export interface CreateProfileRequestSettingsEmail {
    /**
     * The email address to show as the sender of the emails, people can also directly reply to this email.
     * @type {string}
     * @memberof CreateProfileRequestSettingsEmail
     */
    email?: string;
    /**
     * The name to show as the sender of the emails.
     * @type {string}
     * @memberof CreateProfileRequestSettingsEmail
     */
    name?: string;
    /**
     * 
     * @type {any}
     * @memberof CreateProfileRequestSettingsEmail
     */
    smtp?: any | null;
}

/**
 * Check if a given object implements the CreateProfileRequestSettingsEmail interface.
 */
export function instanceOfCreateProfileRequestSettingsEmail(value: object): value is CreateProfileRequestSettingsEmail {
    return true;
}

export function CreateProfileRequestSettingsEmailFromJSON(json: any): CreateProfileRequestSettingsEmail {
    return CreateProfileRequestSettingsEmailFromJSONTyped(json, false);
}

export function CreateProfileRequestSettingsEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProfileRequestSettingsEmail {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'name': json['name'] == null ? undefined : json['name'],
        'smtp': json['smtp'] == null ? undefined : json['smtp'],
    };
}

export function CreateProfileRequestSettingsEmailToJSON(json: any): CreateProfileRequestSettingsEmail {
    return CreateProfileRequestSettingsEmailToJSONTyped(json, false);
}

export function CreateProfileRequestSettingsEmailToJSONTyped(value?: CreateProfileRequestSettingsEmail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'name': value['name'],
        'smtp': value['smtp'],
    };
}

