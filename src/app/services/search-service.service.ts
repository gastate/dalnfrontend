import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//Use instead of Promise
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Post} from '../model/post-model';
import {environment} from '../../environments/environment'


@Injectable()
export class SearchServiceService {

    constructor(private _http: Http) {}

    private endPoint = environment.API_ENDPOINTS;

    search(term: string) : Observable<Post[]> {
        return this._http.get(`app/heroes/?name=${term}`).map((r: Response) => r.json().data as Post[]);
    }


}
