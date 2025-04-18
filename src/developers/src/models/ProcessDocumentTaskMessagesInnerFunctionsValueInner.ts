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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProcessDocumentTaskMessagesInnerFunctionsValueInner
 */
export interface ProcessDocumentTaskMessagesInnerFunctionsValueInner {
    /**
     * 
     * @type {object}
     * @memberof ProcessDocumentTaskMessagesInnerFunctionsValueInner
     */
    input: object;
    /**
     * 
     * @type {object}
     * @memberof ProcessDocumentTaskMessagesInnerFunctionsValueInner
     */
    output: object;
}

/**
 * Check if a given object implements the ProcessDocumentTaskMessagesInnerFunctionsValueInner interface.
 */
export function instanceOfProcessDocumentTaskMessagesInnerFunctionsValueInner(value: object): value is ProcessDocumentTaskMessagesInnerFunctionsValueInner {
    if (!('input' in value) || value['input'] === undefined) return false;
    if (!('output' in value) || value['output'] === undefined) return false;
    return true;
}

export function ProcessDocumentTaskMessagesInnerFunctionsValueInnerFromJSON(json: any): ProcessDocumentTaskMessagesInnerFunctionsValueInner {
    return ProcessDocumentTaskMessagesInnerFunctionsValueInnerFromJSONTyped(json, false);
}

export function ProcessDocumentTaskMessagesInnerFunctionsValueInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessDocumentTaskMessagesInnerFunctionsValueInner {
    if (json == null) {
        return json;
    }
    return {
        
        'input': json['input'],
        'output': json['output'],
    };
}

export function ProcessDocumentTaskMessagesInnerFunctionsValueInnerToJSON(json: any): ProcessDocumentTaskMessagesInnerFunctionsValueInner {
    return ProcessDocumentTaskMessagesInnerFunctionsValueInnerToJSONTyped(json, false);
}

export function ProcessDocumentTaskMessagesInnerFunctionsValueInnerToJSONTyped(value?: ProcessDocumentTaskMessagesInnerFunctionsValueInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'input': value['input'],
        'output': value['output'],
    };
}

