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
 * VAT filing type
 * @export
 */
export const VATFilingType = {
    Vat: 'nl_vat',
    Oss: 'nl_oss'
} as const;
export type VATFilingType = typeof VATFilingType[keyof typeof VATFilingType];


export function instanceOfVATFilingType(value: any): boolean {
    for (const key in VATFilingType) {
        if (Object.prototype.hasOwnProperty.call(VATFilingType, key)) {
            if (VATFilingType[key as keyof typeof VATFilingType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function VATFilingTypeFromJSON(json: any): VATFilingType {
    return VATFilingTypeFromJSONTyped(json, false);
}

export function VATFilingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VATFilingType {
    return json as VATFilingType;
}

export function VATFilingTypeToJSON(value?: VATFilingType | null): any {
    return value as any;
}

export function VATFilingTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): VATFilingType {
    return value as VATFilingType;
}

