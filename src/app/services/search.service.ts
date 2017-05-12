
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


  searchQuery : string; // term to call the search engine with.
  resultsSize : number; // number of results to display in search component.
  pageNumber: number; // user specified page number to start from.
  resultHead: number; // admin specified number of results to stay ahead of user.

  private endPoint = environment.API_ENDPOINTS;

  constructor(private _http: Http, private _jsonp : Jsonp) {
      this.searchQuery = null;
      this.pageNumber = 0;
      this.resultsSize = 12;
      this.resultHead = 50;
    }


// These all can be observables...


  changeResultsDisplayed(results: number) {
    this.resultsSize = results;
  }

  changePageStart(page: number) {
      this.pageNumber = page;
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
  //

  // getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
  //       // calculate total pages
  //       let totalPages = Math.ceil(totalItems / pageSize);
  //
  //       let startPage: number, endPage: number;
  //       if (totalPages <= 10) {
  //           // less than 10 total pages so show all
  //           startPage = 1;
  //           endPage = totalPages;
  //       } else {
  //           // more than 10 total pages so calculate start and end pages
  //           if (currentPage <= 6) {
  //               startPage = 1;
  //               endPage = 10;
  //           } else if (currentPage + 4 >= totalPages) {
  //               startPage = totalPages - 9;
  //               endPage = totalPages;
  //           } else {
  //               startPage = currentPage - 5;
  //               endPage = currentPage + 4;
  //           }
  //       }
  //
  //       // calculate start and end item indexes
  //       let startIndex = (currentPage - 1) * pageSize;
  //       let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  //
  //       // create an array of pages to ng-repeat in the pager control
  //       let pages = _.range(startPage, endPage + 1);
  //
  //       // return object with all pager properties required by the view
  //       return {
  //           totalItems: totalItems,
  //           currentPage: currentPage,
  //           pageSize: pageSize,
  //           totalPages: totalPages,
  //           startPage: startPage,
  //           endPage: endPage,
  //           startIndex: startIndex,
  //           endIndex: endIndex,
  //           pages: pages
  //       };
  //   }



}
