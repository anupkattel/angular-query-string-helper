import { Injectable } from '@angular/core';


@Injectable()
export class QueryStringHelperService {

    private GetQueryString(): { [s: string]: string; } {
        var search = location.search.substring(1)
        return search ?
            JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
            : {}
    }    
}