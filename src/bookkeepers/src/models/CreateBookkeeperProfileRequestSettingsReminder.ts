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
/**
 * 
 * @export
 * @interface CreateBookkeeperProfileRequestSettingsReminder
 */
export interface CreateBookkeeperProfileRequestSettingsReminder {
    /**
     * 
     * @type {boolean}
     * @memberof CreateBookkeeperProfileRequestSettingsReminder
     */
    automatic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateBookkeeperProfileRequestSettingsReminder
     */
    reminderIdFormat?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateBookkeeperProfileRequestSettingsReminder
     */
    count?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateBookkeeperProfileRequestSettingsReminder
     */
    interval?: number;
}

/**
 * Check if a given object implements the CreateBookkeeperProfileRequestSettingsReminder interface.
 */
export function instanceOfCreateBookkeeperProfileRequestSettingsReminder(value: object): value is CreateBookkeeperProfileRequestSettingsReminder {
    return true;
}

export function CreateBookkeeperProfileRequestSettingsReminderFromJSON(json: any): CreateBookkeeperProfileRequestSettingsReminder {
    return CreateBookkeeperProfileRequestSettingsReminderFromJSONTyped(json, false);
}

export function CreateBookkeeperProfileRequestSettingsReminderFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBookkeeperProfileRequestSettingsReminder {
    if (json == null) {
        return json;
    }
    return {
        
        'automatic': json['automatic'] == null ? undefined : json['automatic'],
        'reminderIdFormat': json['reminder_id_format'] == null ? undefined : json['reminder_id_format'],
        'count': json['count'] == null ? undefined : json['count'],
        'interval': json['interval'] == null ? undefined : json['interval'],
    };
}

export function CreateBookkeeperProfileRequestSettingsReminderToJSON(json: any): CreateBookkeeperProfileRequestSettingsReminder {
    return CreateBookkeeperProfileRequestSettingsReminderToJSONTyped(json, false);
}

export function CreateBookkeeperProfileRequestSettingsReminderToJSONTyped(value?: CreateBookkeeperProfileRequestSettingsReminder | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'automatic': value['automatic'],
        'reminder_id_format': value['reminderIdFormat'],
        'count': value['count'],
        'interval': value['interval'],
    };
}

