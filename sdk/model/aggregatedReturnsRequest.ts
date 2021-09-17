/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3504
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PerformanceReturnsMetric } from './performanceReturnsMetric';
import { ResourceId } from './resourceId';

/**
* The request used in the AggregatedReturns.
*/
export class AggregatedReturnsRequest {
    /**
    * A list of metrics to calculate in the AggregatedReturns.
    */
    'metrics': Array<PerformanceReturnsMetric>;
    'recipeId'?: ResourceId;
    /**
    * The method used to calculate the Portfolio performance: Equal/Asset.
    */
    'compositeMethod'?: string | null;
    /**
    * The type of the returns used to calculate the aggregation result: Daily/Monthly.
    */
    'period'?: string | null;
    /**
    * The type of calculated output: Daily/Weekly/Monthly/Quarterly/Half-Yearly/Yearly.
    */
    'outputFrequency'?: string | null;
    /**
    * The type of calculated output: Daily/Weekly/Monthly/Quarterly/Half-Yearly/Yearly.
    */
    'alternativeInceptionDate'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "Array<PerformanceReturnsMetric>"
        },
        {
            "name": "recipeId",
            "baseName": "recipeId",
            "type": "ResourceId"
        },
        {
            "name": "compositeMethod",
            "baseName": "compositeMethod",
            "type": "string"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "string"
        },
        {
            "name": "outputFrequency",
            "baseName": "outputFrequency",
            "type": "string"
        },
        {
            "name": "alternativeInceptionDate",
            "baseName": "alternativeInceptionDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AggregatedReturnsRequest.attributeTypeMap;
    }
}

