import { Injectable } from '@angular/core';


@Injectable()
export class QueryStringHelperService {

    get QueryString(): { [s: string]: string; } {
        var search = location.search.substring(1)
        if (search) {
            return JSON.parse('{"' +
                decodeURIComponent(search.replace(/\+/g, '%20')) //Replace the + with spaces before decoding to preserve actual + sign
                    .replace(/"/g, '\\"')   // unescape the double quotes
                    .replace(/&/g, '","')   // & separates the key value pairs so create a new property by using a comma
                    .replace(/=/g, '":"')   // = should be replaced to : for json objects.
                + '"}')
        }

        return {}
    }
}