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
import { CurrencyAndAmount } from './currencyAndAmount';

export class RealisedGainLoss {
    /**
    * The unqiue Lusid Instrument Id (LUID) of the instrument that this gain or loss is associated with.
    */
    'instrumentUid': string;
    /**
    * The number of units of the associated instrument against which the gain or loss has been realised.
    */
    'units': number;
    /**
    * The effective datetime that the units associated with this gain or loss where originally purchased.
    */
    'purchaseTradeDate'?: Date | null;
    /**
    * The effective datetime that the units associated with this gain or loss where originally settled.
    */
    'purchaseSettlementDate'?: Date | null;
    /**
    * The purchase price of each unit associated with this gain or loss.
    */
    'purchasePrice'?: number | null;
    'costTradeCcy': CurrencyAndAmount;
    'costPortfolioCcy': CurrencyAndAmount;
    'realisedTradeCcy': CurrencyAndAmount;
    'realisedTotal': CurrencyAndAmount;
    'realisedMarket'?: CurrencyAndAmount;
    'realisedCurrency'?: CurrencyAndAmount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instrumentUid",
            "baseName": "instrumentUid",
            "type": "string"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "number"
        },
        {
            "name": "purchaseTradeDate",
            "baseName": "purchaseTradeDate",
            "type": "Date"
        },
        {
            "name": "purchaseSettlementDate",
            "baseName": "purchaseSettlementDate",
            "type": "Date"
        },
        {
            "name": "purchasePrice",
            "baseName": "purchasePrice",
            "type": "number"
        },
        {
            "name": "costTradeCcy",
            "baseName": "costTradeCcy",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "costPortfolioCcy",
            "baseName": "costPortfolioCcy",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "realisedTradeCcy",
            "baseName": "realisedTradeCcy",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "realisedTotal",
            "baseName": "realisedTotal",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "realisedMarket",
            "baseName": "realisedMarket",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "realisedCurrency",
            "baseName": "realisedCurrency",
            "type": "CurrencyAndAmount"
        }    ];

    static getAttributeTypeMap() {
        return RealisedGainLoss.attributeTypeMap;
    }
}

