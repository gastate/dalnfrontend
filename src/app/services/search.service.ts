
import { Injectable } from '@angular/core';
import { Jsonp , Http, Response, Headers, RequestOptions } from '@angular/http';
//Use instead of Promise
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Post } from '../model/post-model';
import { environment } from '../../environments/environment.prod';
import { POSTS } from './mock-postlist';


@Injectable()
export class SearchService {

  constructor(private _http: Http, private _jsonp : Jsonp) { }

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
  search(term: string): Observable<Post[]> { // TODO : term needs to be url encoded to support multiple terms as well as boolean expressions.
    //api call
    console.log(this.endPoint.search_posts+ "/" + term);

    // you can replace the get with https://cdn.rawgit.com/gastate/dalnfrontend/dev-currently-working/test.json to see it working.
    return this._jsonp.get(this.endPoint.search_posts + "/" + term).map((res: Response) => {
      let posts = res.json();
      console.log("Get All Posts ", posts);
      return posts;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
