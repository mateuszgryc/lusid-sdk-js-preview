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
import { EquitySwapAllOf } from './equitySwapAllOf';
import { FlowConventions } from './flowConventions';
import { InstrumentLeg } from './instrumentLeg';
import { LusidInstrument } from './lusidInstrument';

/**
* Lusid-ibor internal representation of an Equity Swap instrument.
*/
export class EquitySwap extends LusidInstrument {
    /**
    * The start date of the EquitySwap
    */
    'startDate': Date;
    /**
    * The maturity date of the EquitySwap.
    */
    'maturityDate': Date;
    /**
    * The code of the underlying.
    */
    'code': string;
    'equityFlowConventions': FlowConventions;
    'fundingLeg': InstrumentLeg;
    /**
    * Dividend inclusion flag, if true dividends are included in the equity leg (total return).
    */
    'includeDividends': boolean;
    /**
    * The initial equity price of the Equity Swap.
    */
    'initialPrice': number;
    /**
    * Notional reset flag, if true the notional of the funding leg is reset at the start of every  coupon to match the value of the equity leg (equity price at start of coupon times quantity)
    */
    'notionalReset': boolean;
    /**
    * The quantity or number of shares in the Equity Swap.
    */
    'quantity': number;
    /**
    * external market codes and identifiers for the EquitySwap, e.g. RIC.  Supported string (enumeration) values are: [LusidInstrumentId, Isin, Sedol, Cusip, ClientInternal, Figi, RIC, QuotePermId, REDCode, BBGId, ICECode].
    */
    'underlyingIdentifier': string;
    /**
    * The available values are: QuotedSecurity, InterestRateSwap, FxForward, Future, ExoticInstrument, FxOption, CreditDefaultSwap, InterestRateSwaption, Bond, EquityOption, FixedLeg, FloatingLeg, BespokeCashFlowsLeg, Unknown, TermDeposit, ContractForDifference, EquitySwap, CashPerpetual, CashSettled, CdsIndex, Basket, FundingLeg, CrossCurrencySwap, FxSwap, ForwardRateAgreement, SimpleInstrument, Repo, Equity
    */
    'instrumentType': EquitySwap.InstrumentTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "maturityDate",
            "baseName": "maturityDate",
            "type": "Date"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "equityFlowConventions",
            "baseName": "equityFlowConventions",
            "type": "FlowConventions"
        },
        {
            "name": "fundingLeg",
            "baseName": "fundingLeg",
            "type": "InstrumentLeg"
        },
        {
            "name": "includeDividends",
            "baseName": "includeDividends",
            "type": "boolean"
        },
        {
            "name": "initialPrice",
            "baseName": "initialPrice",
            "type": "number"
        },
        {
            "name": "notionalReset",
            "baseName": "notionalReset",
            "type": "boolean"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "underlyingIdentifier",
            "baseName": "underlyingIdentifier",
            "type": "string"
        },
        {
            "name": "instrumentType",
            "baseName": "instrumentType",
            "type": "EquitySwap.InstrumentTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EquitySwap.attributeTypeMap);
    }
}

export namespace EquitySwap {
    export enum InstrumentTypeEnum {
        QuotedSecurity = <any> 'QuotedSecurity',
        InterestRateSwap = <any> 'InterestRateSwap',
        FxForward = <any> 'FxForward',
        Future = <any> 'Future',
        ExoticInstrument = <any> 'ExoticInstrument',
        FxOption = <any> 'FxOption',
        CreditDefaultSwap = <any> 'CreditDefaultSwap',
        InterestRateSwaption = <any> 'InterestRateSwaption',
        Bond = <any> 'Bond',
        EquityOption = <any> 'EquityOption',
        FixedLeg = <any> 'FixedLeg',
        FloatingLeg = <any> 'FloatingLeg',
        BespokeCashFlowsLeg = <any> 'BespokeCashFlowsLeg',
        Unknown = <any> 'Unknown',
        TermDeposit = <any> 'TermDeposit',
        ContractForDifference = <any> 'ContractForDifference',
        EquitySwap = <any> 'EquitySwap',
        CashPerpetual = <any> 'CashPerpetual',
        CashSettled = <any> 'CashSettled',
        CdsIndex = <any> 'CdsIndex',
        Basket = <any> 'Basket',
        FundingLeg = <any> 'FundingLeg',
        CrossCurrencySwap = <any> 'CrossCurrencySwap',
        FxSwap = <any> 'FxSwap',
        ForwardRateAgreement = <any> 'ForwardRateAgreement',
        SimpleInstrument = <any> 'SimpleInstrument',
        Repo = <any> 'Repo',
        Equity = <any> 'Equity'
    }
}
