# Angular Query String Helper

A tiny helper library for angular 2+ that returns the query string data as a javascript object.

## Getting started

### Prerequisites

If you want to install the library using the following method, you need to have [npm](https://www.npmjs.com/)  installed and working on your system.

### Installing

Install the package.

````
npm install --save angular-query-string-helper
````

Provide the library to the dependency injection system

````
import { QueryStringHelperService } from 'angular-query-string-helper'
...

@NgModule({
    ...
    providers: [QueryStringHelperService],
    ...
})
````

### Usage

Inject the service via the constructor in the class you want to access query strings (for example in app.module.ts).

````
export class AppComponent {
    ...
    constructor(private _queryStringHelper: QueryStringHelperService, ...) {}
    ...    
}
````

Access the query string as a javascript object in your methods.

````
var queryString = this._queryStringHelper.QueryString;
var value = queryString.key;
````

## License

This project is licensed under the MIT License.