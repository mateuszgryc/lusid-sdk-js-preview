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
import { MetricValue } from './metricValue';
import { QuoteId } from './quoteId';

/**
* The quote id, value and lineage of the quotes all keyed by a unique correlation id.
*/
export class Quote {
    'quoteId': QuoteId;
    'metricValue'?: MetricValue;
    /**
    * Description of the quote\'s lineage e.g. \'FundAccountant_GreenQuality\'.
    */
    'lineage'?: string | null;
    /**
    * The cut label that this quote was updated or inserted with.
    */
    'cutLabel'?: string | null;
    /**
    * The unique id of the user that updated or inserted the quote.
    */
    'uploadedBy': string;
    /**
    * The asAt datetime at which the quote was committed to LUSID.
    */
    'asAt': Date;
    /**
    * An optional scale factor for non-standard scaling of quotes against the instrument. If not supplied, the default ScaleFactor is 1.
    */
    'scaleFactor'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "quoteId",
            "baseName": "quoteId",
            "type": "QuoteId"
        },
        {
            "name": "metricValue",
            "baseName": "metricValue",
            "type": "MetricValue"
        },
        {
            "name": "lineage",
            "baseName": "lineage",
            "type": "string"
        },
        {
            "name": "cutLabel",
            "baseName": "cutLabel",
            "type": "string"
        },
        {
            "name": "uploadedBy",
            "baseName": "uploadedBy",
            "type": "string"
        },
        {
            "name": "asAt",
            "baseName": "asAt",
            "type": "Date"
        },
        {
            "name": "scaleFactor",
            "baseName": "scaleFactor",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Quote.attributeTypeMap;
    }
}

