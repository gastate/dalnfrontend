
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//Use instead of Promise
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Post } from '../model/post-model';
import { environment } from '../../environments/environment';
import { POSTS } from './mock-postlist';


@Injectable()
export class SearchService {

  constructor(private _http: Http) { }

  private endPoint = environment.API_ENDPOINTS;

  // ***************************
  //Using Mock data the search return successfully
  // ***************************
  // search(term: string): Promise<Post[]> {
  //   return Promise.resolve(POSTS);
  // }

  // Returning Search as Promise
  // search(term: string): Promise<Post[]> {
  //   return this._http.get(this.endPoint.search_posts + "search=" + term).toPromise().then((res) => {
  //     let results = res.json()
  //     console.log("Search Results from Service", results)
  //     return results as Post[]
  //   }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }

  // Returning Search as Observable
  search(term: string): Observable<Post[]> {
    //api call
    return this._http.get(this.endPoint.search_posts + "search=" + term).map((res: Response) => {
      let posts = res.json();
      console.log("Get All Posts ", posts);
      return posts;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
