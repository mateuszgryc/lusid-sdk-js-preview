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
import { Link } from './link';
import { LusidInstrument } from './lusidInstrument';
import { Property } from './property';
import { ResourceId } from './resourceId';
import { Version } from './version';

/**
* A list of instruments.
*/
export class Instrument {
    /**
    * The specific Uniform Resource Identifier (URI) for this resource at the requested effective and asAt datetime.
    */
    'href'?: string | null;
    /**
    * The unique LUSID Instrument Identifier (LUID) of the instrument.
    */
    'lusidInstrumentId': string;
    'version': Version;
    /**
    * The name of the instrument.
    */
    'name': string;
    /**
    * The set of identifiers that can be used to identify the instrument.
    */
    'identifiers': { [key: string]: string; };
    /**
    * The requested instrument properties. These will be from the \'Instrument\' domain.
    */
    'properties'?: Array<Property> | null;
    'lookthroughPortfolio'?: ResourceId;
    'instrumentDefinition'?: LusidInstrument;
    /**
    * The state of of the instrument at the asAt datetime of this version of the instrument definition. The available values are: Active, Inactive
    */
    'state': Instrument.StateEnum;
    /**
    * Collection of links.
    */
    'links'?: Array<Link> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "lusidInstrumentId",
            "baseName": "lusidInstrumentId",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<Property>"
        },
        {
            "name": "lookthroughPortfolio",
            "baseName": "lookthroughPortfolio",
            "type": "ResourceId"
        },
        {
            "name": "instrumentDefinition",
            "baseName": "instrumentDefinition",
            "type": "LusidInstrument"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Instrument.StateEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return Instrument.attributeTypeMap;
    }
}

export namespace Instrument {
    export enum StateEnum {
        Active = <any> 'Active',
        Inactive = <any> 'Inactive'
    }
}
