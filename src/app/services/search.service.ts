import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//Use instead of Promise
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Post} from '../model/post-model';
import {environment} from '../../environments/environment'


@Injectable()
export class SearchService {

  constructor(private _http: Http) { }

  private endPoint = environment.API_ENDPOINTS;

  search(term: string) : Observable<Post[]> {

      this._http.get(this.endPoint.search_posts + "search=" + term).map(res => res.json()).subscribe(data => console.log(data));

      return this._http.get(this.endPoint.search_posts + "search=" + term).map((r: Response) => r.json().data as Post[]);

}

}
