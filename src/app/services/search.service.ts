
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Jsonp , Http, Response, Headers, RequestOptions } from '@angular/http';
//Use instead of Promise
import { Observable, Subject } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Post } from '../model/post-model';
import { environment } from '../../environments/environment';
import { POSTS } from './mock-postlist';



@Injectable()
export class SearchService {

  pageNumber : number;

  searchQuery : string;
  resultsSize : number;

  private endPoint = environment.API_ENDPOINTS;

  constructor(private _http: Http, private _jsonp : Jsonp) {
      this.searchQuery = null;
      this.pageNumber = 1;
      this.resultsSize = 0;
 }

  changePaginationSize(newPageSize : number) {
      this.pageNumber = newPageSize;
      console.log("Page Parameter changed"); // replace with user notice.
  }

  getPaginationParameter() {
      return this.pageNumber;
  }


  getPageNum() : number {
      return this.pageNumber;
  }

  setPageNum(num: number) {
     this.pageNumber = num;
     console.log(this.pageNumber);
  }

  // Returning Search as Observable
  search(term: string): Observable<Post[]> { // TODO : term needs to be url encoded to support multiple terms as well as boolean expressions.
    //api call

    // you can replace the get() with https://cdn.rawgit.com/gastate/dalnfrontend/dev-currently-working/test.json to see it working.
    return this._http.get(this.endPoint.search_posts + term).map((res: Response) => {
      let posts = res.json();
      console.log("Get Search Posts ", posts);
      return posts;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  // https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production/posts/search/literacy/10/1
  // format is the search endpoint + the term for search + the number of results per page + the page number (page number == return 50 posts of 2 results then the next two if incremented.)

  search_page(term: string, results: number, page_size: number) : Observable<Post[]> {

    //   console.log("Query:" + this.searchQuery);
      console.log(this.endPoint.search_posts + term + "/" + results + "/" + page_size);


      // X = results aka number of results to stay ahead

      return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map((res: Response) => {
        let posts = res.json();
        console.log("Get Search Page Posts", posts);
        return posts;
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  // getSearchEngineSize(){
  //     console.log(this.endPoint.search_size);
  //     return this._http.get(this.endPoint.search_size)
  //       .map( res => {
  //           let data = res.json();
  //           this.totalNumberOfPosts = data;
  //           return this.totalNumberOfPosts;
  //       });
  //
  // }



}
