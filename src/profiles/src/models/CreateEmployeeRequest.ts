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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';

/**
 * Employee
 * @export
 * @interface CreateEmployeeRequest
 */
export interface CreateEmployeeRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateEmployeeRequest
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmployeeRequest
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmployeeRequest
     */
    middleName?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmployeeRequest
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmployeeRequest
     */
    email: string;
    /**
     * 
     * @type {Address}
     * @memberof CreateEmployeeRequest
     */
    address?: Address;
    /**
     * 
     * @type {string}
     * @memberof CreateEmployeeRequest
     */
    phone?: string;
}

/**
 * Check if a given object implements the CreateEmployeeRequest interface.
 */
export function instanceOfCreateEmployeeRequest(value: object): value is CreateEmployeeRequest {
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function CreateEmployeeRequestFromJSON(json: any): CreateEmployeeRequest {
    return CreateEmployeeRequestFromJSONTyped(json, false);
}

export function CreateEmployeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmployeeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'firstName': json['first-name'],
        'middleName': json['middle-name'] == null ? undefined : json['middle-name'],
        'lastName': json['last-name'],
        'email': json['email'],
        'address': json['address'] == null ? undefined : AddressFromJSON(json['address']),
        'phone': json['phone'] == null ? undefined : json['phone'],
    };
}

export function CreateEmployeeRequestToJSON(json: any): CreateEmployeeRequest {
    return CreateEmployeeRequestToJSONTyped(json, false);
}

export function CreateEmployeeRequestToJSONTyped(value?: Omit<CreateEmployeeRequest, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'first-name': value['firstName'],
        'middle-name': value['middleName'],
        'last-name': value['lastName'],
        'email': value['email'],
        'address': AddressToJSON(value['address']),
        'phone': value['phone'],
    };
}

