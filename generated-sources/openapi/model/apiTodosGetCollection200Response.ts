/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ApiTodosGetCollection200ResponseHydraSearch } from './apiTodosGetCollection200ResponseHydraSearch';
import { ApiTodosGetCollection200ResponseHydraView } from './apiTodosGetCollection200ResponseHydraView';
import { TodoJsonld } from './todoJsonld';


export interface ApiTodosGetCollection200Response { 
    hydramember: Array<TodoJsonld>;
    hydratotalItems?: number;
    hydraview?: ApiTodosGetCollection200ResponseHydraView;
    hydrasearch?: ApiTodosGetCollection200ResponseHydraSearch;
}
