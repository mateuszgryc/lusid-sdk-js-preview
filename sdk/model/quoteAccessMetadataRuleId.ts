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
* An identifier that uniquely identifies a set of Quote access control metadata.
*/
export class QuoteAccessMetadataRuleId {
    /**
    * The platform or vendor that provided the quote, e.g. \'DataScope\', \'LUSID\' etc.
    */
    'provider'?: string | null;
    /**
    * The source or originator of the quote, e.g. a bank or financial institution.
    */
    'priceSource'?: string | null;
    /**
    * The value of the instrument identifier that uniquely identifies the instrument that the quote is for, e.g. \'BBG00JX0P539\'.
    */
    'instrumentId'?: string | null;
    /**
    * The type of instrument identifier used to uniquely identify the instrument that the quote is for, e.g. \'Figi\'.
    */
    'instrumentIdType'?: string | null;
    /**
    * The type of the quote. This allows for quotes other than prices e.g. rates or spreads to be used.
    */
    'quoteType'?: string | null;
    /**
    * The field of the quote e.g. bid, mid, ask etc. This should be consistent across a time series of quotes. The allowed values are dependant on the specified Provider.
    */
    'field'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        },
        {
            "name": "priceSource",
            "baseName": "priceSource",
            "type": "string"
        },
        {
            "name": "instrumentId",
            "baseName": "instrumentId",
            "type": "string"
        },
        {
            "name": "instrumentIdType",
            "baseName": "instrumentIdType",
            "type": "string"
        },
        {
            "name": "quoteType",
            "baseName": "quoteType",
            "type": "string"
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return QuoteAccessMetadataRuleId.attributeTypeMap;
    }
}

