
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//Use instead of Promise
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from '../model/post-model';
import { environment } from '../../environments/environment';
import { POSTS } from './mock-postlist';


@Injectable()
export class SearchService {

  constructor(private _http: Http) { }

  private endPoint = environment.API_ENDPOINTS;

  search(term: string): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  //   search(term: string): Observable<Post[]> {//Observable<Post[]> {

  //   return this._http.get(this.endPoint.search_posts + "search=" + term).map((res) => {
  //     return res.json() as Post[]
  //   }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }

}
