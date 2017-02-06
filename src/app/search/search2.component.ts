import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';
import { Post } from '../model/post-model';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent2 { //implements OnInit {

  @Input()
  query: string;

  @Output()
  searchResults: EventEmitter<Post[]>;

  allIden: Array<string>;
  posts: Observable<Post[]>;
  private searchTerm = new Subject<string>();
  // using a Subject retains the state of the given data, so later we can subscribe other Observables to it. Like future updates will include other things like "literacy + video games" or other enhanced search options.
  // Note that Subject errors might be hard to catch. So if there is a problem...
  selectedPost: Post;


  constructor(
    private _postService: PostService,
    private _searchService: SearchService,
    private _router: Router) {
    this.searchResults = new EventEmitter<Post[]>();
  }

  // onSearch(term: any): void {
  //   if(term ==='' || term === undefined){
  //     return
  //   }
  //     this._searchService.search(term).then( (results) => {
  //       console.log("In Emmitter: ", results);
  //     this.searchResults.emit(results);
  //   });
  // }

  onSearch(term: any): void {
    if (term === '' || term === undefined) {
      return null;
    }
    this._searchService.search(term)
      .subscribe(
      (data) => {

        // this.allIden = data.map(val => val.id);
        // console.log("All Ids:" , this.allIden);
        // console.log(typeof this.allIden);
        // console.log("In Emmitter: ", data);
        this.searchResults.emit(data), //Bind to view
          err => {
            // Log errors if any
            console.log(err);
          }
      })
  }
}
