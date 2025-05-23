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
 * Employee
 * @export
 * @interface CreateProjectRequest
 */
export interface CreateProjectRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateProjectRequest
     */
    name: string;
    /**
     * ID of the relation to attach this project to
     * @type {string}
     * @memberof CreateProjectRequest
     */
    relation?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateProjectRequest
     */
    start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateProjectRequest
     */
    end?: Date;
}

/**
 * Check if a given object implements the CreateProjectRequest interface.
 */
export function instanceOfCreateProjectRequest(value: object): value is CreateProjectRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateProjectRequestFromJSON(json: any): CreateProjectRequest {
    return CreateProjectRequestFromJSONTyped(json, false);
}

export function CreateProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'relation': json['relation'] == null ? undefined : json['relation'],
        'start': json['start'] == null ? undefined : (new Date(json['start'])),
        'end': json['end'] == null ? undefined : (new Date(json['end'])),
    };
}

export function CreateProjectRequestToJSON(json: any): CreateProjectRequest {
    return CreateProjectRequestToJSONTyped(json, false);
}

export function CreateProjectRequestToJSONTyped(value?: CreateProjectRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'relation': value['relation'],
        'start': value['start'] == null ? undefined : ((value['start']).toISOString().substring(0,10)),
        'end': value['end'] == null ? undefined : ((value['end']).toISOString().substring(0,10)),
    };
}

