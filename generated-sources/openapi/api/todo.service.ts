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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { ApiTodosGetCollection200Response } from '../model/apiTodosGetCollection200Response';
// @ts-ignore
import { Todo } from '../model/todo';
// @ts-ignore
import { TodoJsonld } from '../model/todoJsonld';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    TodoServiceInterface,
    ApiTodosGetCollectionRequestParams,
    ApiTodosIdDeleteRequestParams,
    ApiTodosIdGetRequestParams,
    ApiTodosIdPatchRequestParams,
    ApiTodosIdPutRequestParams,
    ApiTodosPostRequestParams
} from './todo.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class TodoService implements TodoServiceInterface {

    protected basePath = 'http://localhost:8000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Retrieves the collection of Todo resources.
     * Retrieves the collection of Todo resources.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTodosGetCollection(requestParameters: ApiTodosGetCollectionRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<ApiTodosGetCollection200Response>;
    public apiTodosGetCollection(requestParameters: ApiTodosGetCollectionRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<ApiTodosGetCollection200Response>>;
    public apiTodosGetCollection(requestParameters: ApiTodosGetCollectionRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<ApiTodosGetCollection200Response>>;
    public apiTodosGetCollection(requestParameters: ApiTodosGetCollectionRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        const page = requestParameters.page;

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>page, 'page');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/todos`;
        return this.httpClient.request<ApiTodosGetCollection200Response>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes the Todo resource.
     * Removes the Todo resource.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTodosIdDelete(requestParameters: ApiTodosIdDeleteRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<any>;
    public apiTodosIdDelete(requestParameters: ApiTodosIdDeleteRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<HttpResponse<any>>;
    public apiTodosIdDelete(requestParameters: ApiTodosIdDeleteRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<HttpEvent<any>>;
    public apiTodosIdDelete(requestParameters: ApiTodosIdDeleteRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiTodosIdDelete.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/todos/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a Todo resource.
     * Retrieves a Todo resource.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTodosIdGet(requestParameters: ApiTodosIdGetRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<TodoJsonld>;
    public apiTodosIdGet(requestParameters: ApiTodosIdGetRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<TodoJsonld>>;
    public apiTodosIdGet(requestParameters: ApiTodosIdGetRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<TodoJsonld>>;
    public apiTodosIdGet(requestParameters: ApiTodosIdGetRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiTodosIdGet.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/todos/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<TodoJsonld>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates the Todo resource.
     * Updates the Todo resource.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTodosIdPatch(requestParameters: ApiTodosIdPatchRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<TodoJsonld>;
    public apiTodosIdPatch(requestParameters: ApiTodosIdPatchRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<TodoJsonld>>;
    public apiTodosIdPatch(requestParameters: ApiTodosIdPatchRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<TodoJsonld>>;
    public apiTodosIdPatch(requestParameters: ApiTodosIdPatchRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiTodosIdPatch.');
        }
        const todo = requestParameters.todo;
        if (todo === null || todo === undefined) {
            throw new Error('Required parameter todo was null or undefined when calling apiTodosIdPatch.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/merge-patch+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/todos/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<TodoJsonld>('patch', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: todo,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replaces the Todo resource.
     * Replaces the Todo resource.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTodosIdPut(requestParameters: ApiTodosIdPutRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<TodoJsonld>;
    public apiTodosIdPut(requestParameters: ApiTodosIdPutRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<TodoJsonld>>;
    public apiTodosIdPut(requestParameters: ApiTodosIdPutRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<TodoJsonld>>;
    public apiTodosIdPut(requestParameters: ApiTodosIdPutRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiTodosIdPut.');
        }
        const todoJsonld = requestParameters.todoJsonld;
        if (todoJsonld === null || todoJsonld === undefined) {
            throw new Error('Required parameter todoJsonld was null or undefined when calling apiTodosIdPut.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/ld+json',
            'application/json',
            'text/html'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/todos/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<TodoJsonld>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: todoJsonld,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a Todo resource.
     * Creates a Todo resource.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTodosPost(requestParameters: ApiTodosPostRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<TodoJsonld>;
    public apiTodosPost(requestParameters: ApiTodosPostRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpResponse<TodoJsonld>>;
    public apiTodosPost(requestParameters: ApiTodosPostRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<HttpEvent<TodoJsonld>>;
    public apiTodosPost(requestParameters: ApiTodosPostRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/ld+json' | 'application/json' | 'text/html', context?: HttpContext}): Observable<any> {
        const todoJsonld = requestParameters.todoJsonld;
        if (todoJsonld === null || todoJsonld === undefined) {
            throw new Error('Required parameter todoJsonld was null or undefined when calling apiTodosPost.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/ld+json',
                'application/json',
                'text/html'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/ld+json',
            'application/json',
            'text/html'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/todos`;
        return this.httpClient.request<TodoJsonld>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: todoJsonld,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
