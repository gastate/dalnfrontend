
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';
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

  searchQuery: string; // holds the term for search.
  resultsDisplaySize: number; // user specified number of paginatorResults to display. (limit)
  pageNumber: number; // user specified page number to start from. (offset)



  // pagination
  pageHead: number; // admin specified number of paginatorResults to stay ahead of user.
  totalApiSearchPages: number; // total offsets for pagination.
  totalApiSearchResults: number; // total number of paginatorResults from search api.
  paginatorResults: Post[]; // holds the paginatorResults for the pagination component.


  private endPoint = environment.API_ENDPOINTS;

  constructor(private _http: Http, private _jsonp: Jsonp) {
    this.searchQuery = "";
    this.resultsDisplaySize = 12;
    this.pageNumber = 1;
    this.pageHead = 50;
    this.paginatorResults = [];
    this.totalApiSearchResults = 0;
    this.totalApiSearchPages = 0;
  }


  // These all can be observables...


  changeResultsDisplayed(results: number) {
    this.resultsDisplaySize = results;
    console.log("resultSize change", this.resultsDisplaySize);
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
  // format is the search endpoint + the term for search + the number of paginatorResults per page + the page number (page number == return 50 posts of 2 paginatorResults then the next two if incremented.)

  search_page(term: string, results: number, offset: number): Observable<any> {

    console.log(this.endPoint.search_posts + term + "/" + results + "/" + offset);

    return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + offset).map((res: Response) => {

      this.totalApiSearchResults = res.json().found;
      this.totalApiSearchPages = Math.ceil(this.totalApiSearchResults / this.resultsDisplaySize);
      // console.log("number of total offsets", this.totalApiSearchPages);

      // console.log("Search API Response", res.json());
      return res.json();
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  translatePosts(search_results: any[]) {
    let posts = [];
    //   console.log("translatePosts: ", search_results);
    search_results.forEach((i) => {
      let post = new Post();
      post.postId = i.id;
      post.title = i.fields.title[ 0 ];
      // console.log("Title of post:", post.title);


      // make sure description exists, but if not then add a no description provided.
      post.description = (i.fields.description && i.fields.description[ 0 ] ? i.fields.description[ 0 ] : "No description provided.");

      // limit post description length
      if (post.description.length > 80) {
        post.description = post.description.substring(0, 50) + "...";
      }

      // limit post title length
      if (post.title.length > 50) {
        post.title = post.title.substring(0, 30) + " ...";
      }
      // console.log("description of post:", post.description);
      post.assetList = this.translateAssets(i.fields);
      // console.log(post);
      posts.push(post);
    });
    return posts;
  }

  translateAssets(fields: any) {

    // assumes assetList will contain same number of elements across arrays.
    let assetList = [];

    // populate the assetList, but be sure to check that each property exists. These properties are all just strings so it is okay to fill in with a string.

    for (let i = 0; i < fields.assetembedlink.length; i++) {
      assetList[ i ] = new Asset();
      assetList[ i ].assettitle = (fields.assetname && fields.assetname[ i ] ? fields.assetname[ i ] : "No asset provided");
      assetList[ i ].assetType = (fields.assettype && fields.assettype[ i ] ? fields.assettype[ i ] : "No asset provided.");
      assetList[ i ].assetID = (fields.assetid && fields.assetid[ i ] ? fields.assetid[ i ] : "No asset provided");
      assetList[ i ].assetEmbedLink = (fields.assetembedlink && fields.assetembedlink[ i ] ? fields.assetembedlink[ i ] : "No asset provided");
      assetList[ i ].assetLocation = (fields.assetlocation && fields.assetlocation[ i ] ? fields.assetlocation[ i ] : "No asset provided.");
      assetList[ i ].assetDescription = (fields.assetdescription && fields.assetdescription[ i ] ? fields.assetdescription[ i ] : "No asset provided.");
    }
    //   console.log(assetList);
    return assetList;

  }





}
