import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { ISentiment, ILanguageDetect, ILanguageKeyPhrase } from './models/text.models';

@Injectable()
export class BingSearchService extends DataService {

    constructor(protected _http: Http) {
        super(_http)
        console.log("how many of me are there")
    }

    private key = environment.apiKeys.textAnalytics;

    getFirstResult(text: string): Promise<any> {
        let url = `https://api.cognitive.microsoft.com/bing/v7.0/search`;
        url += "?q=" + encodeURI(text);
        return this.get<any>(url, this.key);
    }


}
