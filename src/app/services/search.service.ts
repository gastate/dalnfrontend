
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

  // If you're wondering about the paraentheses, see: http://g00glen00b.be/component-angular-2/
  //  check out what each parameter means here: https://pokeapi.co/docsv2/
  //  test out the parameters on the pokeapi endpoint here: http://pokeapi.co/api/v2/evolution-chain/?limit=10&offset=0

  searchQuery : string; // term to call the search engine with.
  resultsSize : number; // user specified number of results to display. (limit)
  pageNumber: number; // user specified page number to start from. (offset)
  // total_posts: number; // total number of posts in array (count) NOTE: Currently not in use since endpoint does not return it.

  pageHead: number; // admin specified number of results to stay ahead of user.

  // NOTE: Temp pagination parameters.
  searchTerm: string;

  private endPoint = environment.API_ENDPOINTS;

  constructor(private _http: Http, private _jsonp : Jsonp) {
      this.searchQuery = null;
      this.resultsSize = 12;
      this.pageNumber = 0;
    //   this.total_posts = 0; // NOTE: Currently not in use since endpoint does not return it.

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

    this.searchTerm = term; // NOTE: Temp for pagination.
    this.resultsSize = results; // NOTE: Temp for pagination.

    return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map((res: Response) => {
        // let posts = res.json();
        // console.log("Get Search Page Posts", posts);
        // return posts;
        //
        return res.json();
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    //   Q1) Is the size of the post object returned in search slowing down the request?
    //
    //   - If so, create a seperate search endpoint that returns a minimal post object with only the items needed for display
    //
    //   Try to bring back 1000 results quickly. or at the very least 100 results.
    //
    //   Then, divide the length of results by display result parameter
    //
    //   this = the number of pages
    //
    //   The other thing that shakib give you is the totla number of results
    //
    //   This will let you know if you need to make additional calls to the server to get more results
    //
    //   create an totla atribute on the json that = total_number_results
  }

  translatePosts(search_results: any[]) {
      let posts = [];
    //   console.log("translatePosts: ", search_results);
      search_results.forEach((i) => {
        let post = new Post();
        post.postId = i.id;
        post.title =  i.fields.title[0];
        console.log("Title of post:", post.title);

        post.description = (i.fields.description && i.fields.description[0] ? i.fields.description[0]  : "No description provided.") ;
        console.log("description of post:", post.description);
        post.assetList = [];
        posts.push(post);
      });
      return posts;
  }








}
