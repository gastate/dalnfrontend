
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Jsonp , Http, Response, Headers, RequestOptions } from '@angular/http';
//Use instead of Promise
import { Observable, Subject } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Post } from '../model/post-model';
import { Asset } from '../model/asset-model';
import { environment } from '../../environments/environment';
import { POSTS } from './mock-postlist';


@Injectable()
export class SearchService {


  searchQuery : string; // term to call the search engine with.
  resultsSize : number; // user specified number of results to display. (limit)
  pageNumber: number; // user specified page number to start from. (offset)

  pageHead: number; // admin specified number of results to stay ahead of user.


  private endPoint = environment.API_ENDPOINTS;

  constructor(private _http: Http, private _jsonp : Jsonp) {
      this.searchQuery = null;
      this.resultsSize = 12;
      this.pageNumber = 0;
      this.pageHead = 50;

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

  search_page(term: string, results: number, page_size: number) : Observable<any> {

    //   console.log("Query:" + this.searchQuery);
      console.log(this.endPoint.search_posts + term + "/" + results + "/" + page_size);

    return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map((res: Response) => {
        // let posts = res.json();
        // console.log("Get Search Page Posts", posts);
        // return posts;
        console.log("Search API Response", res.json());
        return res.json();
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  translatePosts(search_results: any[]) {
      let posts = [];
      console.log("translatePosts: ", search_results);
      search_results.forEach((i) => {
        let post = new Post();
        post.postId = i.id;
        post.title =  i.fields.title[0];
        // console.log("Title of post:", post.title);

        post.description = (i.fields.description && i.fields.description[0] ? i.fields.description[0]  : "No description provided.") ;
        this.translateAssets(i.fields);
        // console.log("description of post:", post.description);
        post.assetList = [];
        // console.log(post);
        posts.push(post);
      });
      return posts;
  }

  translateAssets(fields: any) {

      // assumes assetList will contain same number of elements across arrays.
      // get assetLocation, assetEmbedLink, assetId, assetName, assetDescription and assetType.

      let assetList = [];
    //   console.log(fields);

    }





}
