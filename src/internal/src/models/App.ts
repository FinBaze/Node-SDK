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
 * @interface App
 */
export interface App {
    /**
     * 
     * @type {string}
     * @memberof App
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof App
     */
    readonly updated?: Date;
    /**
     * 
     * @type {Date}
     * @memberof App
     */
    readonly created: Date;
}

/**
 * Check if a given object implements the App interface.
 */
export function instanceOfApp(value: object): value is App {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    return true;
}

export function AppFromJSON(json: any): App {
    return AppFromJSONTyped(json, false);
}

export function AppFromJSONTyped(json: any, ignoreDiscriminator: boolean): App {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'created': (new Date(json['created'])),
    };
}

export function AppToJSON(json: any): App {
    return AppToJSONTyped(json, false);
}

export function AppToJSONTyped(value?: Omit<App, 'updated'|'created'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'icon': value['icon'],
        'name': value['name'],
        'description': value['description'],
    };
}

