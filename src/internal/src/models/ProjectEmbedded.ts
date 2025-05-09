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
import type { Relation } from './Relation';
import {
    RelationFromJSON,
    RelationFromJSONTyped,
    RelationToJSON,
    RelationToJSONTyped,
} from './Relation';

/**
 * 
 * @export
 * @interface ProjectEmbedded
 */
export interface ProjectEmbedded {
    /**
     * 
     * @type {Relation}
     * @memberof ProjectEmbedded
     */
    relation?: Relation;
}

/**
 * Check if a given object implements the ProjectEmbedded interface.
 */
export function instanceOfProjectEmbedded(value: object): value is ProjectEmbedded {
    return true;
}

export function ProjectEmbeddedFromJSON(json: any): ProjectEmbedded {
    return ProjectEmbeddedFromJSONTyped(json, false);
}

export function ProjectEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectEmbedded {
    if (json == null) {
        return json;
    }
    return {
        
        'relation': json['relation'] == null ? undefined : RelationFromJSON(json['relation']),
    };
}

export function ProjectEmbeddedToJSON(json: any): ProjectEmbedded {
    return ProjectEmbeddedToJSONTyped(json, false);
}

export function ProjectEmbeddedToJSONTyped(value?: ProjectEmbedded | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'relation': RelationToJSON(value['relation']),
    };
}

