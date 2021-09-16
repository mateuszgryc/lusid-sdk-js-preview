/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3502
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* CDSs generally conform to fairly standard definitions, but can be tweaked in a number of different ways.  This class gathers a number of common features which may deviate. These will default to the market standard when  no overrides are provided
*/
export class CdsProtectionDetailSpecification {
    /**
    * The available values are: Unknown, SNR, SUB, JRSUBUT2, PREFT1, SECDOM, SNRFOR, SUBLT2
    */
    'seniority': CdsProtectionDetailSpecification.SeniorityEnum;
    /**
    * The available values are: Unknown, CR, MR, MM, XR
    */
    'restructuringType': CdsProtectionDetailSpecification.RestructuringTypeEnum;
    /**
    * Does the protection leg pay out in the case of default on the start date
    */
    'protectStartDay': boolean;
    /**
    * Should accrued interest on the premium leg be paid if a credit event occurs
    */
    'payAccruedInterestOnDefault': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "seniority",
            "baseName": "seniority",
            "type": "CdsProtectionDetailSpecification.SeniorityEnum"
        },
        {
            "name": "restructuringType",
            "baseName": "restructuringType",
            "type": "CdsProtectionDetailSpecification.RestructuringTypeEnum"
        },
        {
            "name": "protectStartDay",
            "baseName": "protectStartDay",
            "type": "boolean"
        },
        {
            "name": "payAccruedInterestOnDefault",
            "baseName": "payAccruedInterestOnDefault",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CdsProtectionDetailSpecification.attributeTypeMap;
    }
}

export namespace CdsProtectionDetailSpecification {
    export enum SeniorityEnum {
        Unknown = <any> 'Unknown',
        Snr = <any> 'SNR',
        Sub = <any> 'SUB',
        Jrsubut2 = <any> 'JRSUBUT2',
        Preft1 = <any> 'PREFT1',
        Secdom = <any> 'SECDOM',
        Snrfor = <any> 'SNRFOR',
        Sublt2 = <any> 'SUBLT2'
    }
    export enum RestructuringTypeEnum {
        Unknown = <any> 'Unknown',
        Cr = <any> 'CR',
        Mr = <any> 'MR',
        Mm = <any> 'MM',
        Xr = <any> 'XR'
    }
}
