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
import { Property } from './property';
import { Version } from './version';

export class Person {
    /**
    * The display name of the Person
    */
    'displayName'?: string | null;
    /**
    * The description of the Person
    */
    'description'?: string | null;
    /**
    * The specifc Uniform Resource Identifier (URI) for this resource at the requested effective and asAt datetime.
    */
    'href'?: string | null;
    /**
    * The unique LUSID Person Identifier (LUPID) of the Person.
    */
    'lusidPersonId'?: string | null;
    /**
    * Unique client-defined identifiers of the Person.
    */
    'identifiers'?: { [key: string]: Property; } | null;
    /**
    * A set of properties associated to the Person. There can be multiple properties associated with a property key.
    */
    'properties'?: { [key: string]: Array<Property>; } | null;
    'version'?: Version;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "lusidPersonId",
            "baseName": "lusidPersonId",
            "type": "string"
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "{ [key: string]: Property; }"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: Array<Property>; }"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        }    ];

    static getAttributeTypeMap() {
        return Person.attributeTypeMap;
    }
}

