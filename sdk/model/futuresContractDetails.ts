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
* Most, if not all, information about contracts is standardized. See, e.g. https://www.cmegroup.com/ for              common codes and similar data. This appears to be in common use by well known market information providers, e.g. Bloomberg and Refinitiv.
*/
export class FuturesContractDetails {
    /**
    * currency in which the contract is paid.
    */
    'domCcy': string;
    /**
    * The two letter contract code abbreviation. e.g. CL => Crude Oil.
    */
    'contractCode': string;
    /**
    * which month does the contract trade for.  Supported string (enumeration) values are: [F, G, H, J, K, M, N, Q, U, V, X, Z].
    */
    'contractMonth': string;
    /**
    * Size of a single contract. By default this should be set to 1000 if otherwise unknown and is defaulted to such.
    */
    'contractSize': number;
    /**
    * If appropriate, the day count convention method used in pricing (rates futures)
    */
    'convention': string;
    /**
    * Country (code) for the exchange.
    */
    'country': string;
    /**
    * Description of contract
    */
    'description': string;
    /**
    * Exchange code for contract  Supported string (enumeration) values are: [ASX, CBOT, CBF, CME, CMX, EOP, HKG, KFE, MFM, OSE, SGX, NYBOT, KCBT, MGE, MATIF, SFE, NYFE, NYM, LIFFE, EUREX, ICE, MSE].
    */
    'exchangeCode': string;
    /**
    * Exchange name (for when code is not automatically recognized)
    */
    'exchangeName': string;
    /**
    * Minimal step size change in ticker
    */
    'tickerStep': number;
    /**
    * The value in the currency of a 1 unit change in the contract price
    */
    'unitValue': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domCcy",
            "baseName": "domCcy",
            "type": "string"
        },
        {
            "name": "contractCode",
            "baseName": "contractCode",
            "type": "string"
        },
        {
            "name": "contractMonth",
            "baseName": "contractMonth",
            "type": "string"
        },
        {
            "name": "contractSize",
            "baseName": "contractSize",
            "type": "number"
        },
        {
            "name": "convention",
            "baseName": "convention",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "exchangeCode",
            "baseName": "exchangeCode",
            "type": "string"
        },
        {
            "name": "exchangeName",
            "baseName": "exchangeName",
            "type": "string"
        },
        {
            "name": "tickerStep",
            "baseName": "tickerStep",
            "type": "number"
        },
        {
            "name": "unitValue",
            "baseName": "unitValue",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FuturesContractDetails.attributeTypeMap;
    }
}

