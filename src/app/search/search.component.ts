import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';
import { Post } from '../model/post-model';

@Component({
  selector: 'app-search2',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent { //implements OnInit {

  @Input()
  query: string;

  @Output()
  searchResults: EventEmitter<Post[]>;

  allIden: Array<string>;
  posts: Observable<Post[]>;
  selectedPost: Post;

  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    private _searchService: SearchService,
    private _router: Router) {
    this.searchResults = new EventEmitter<Post[]>();
  }

  ngOnInit() : void {

  }

  onSearch(term: string): void {
    if(term === '' || term === undefined){
      return null;
    }
      this._searchService.search_page(term, 10, 1)
      .subscribe((results) => {
        console.log("In Emmitter: ", results);
        if ((results === null) || results.length <= 0 ) {
            this.noResults = true;
        } else {
            this.noResults = false;
        }
        this.searchResults.emit(results),
        err => {
            console.log(err);
        }
    });
  }

  // trying to get by postid
  // onSearch(term: string): void {
  //   if (term === '' || term === undefined) {
  //     return null;
  //   }
  //   this._searchService.search_page(term, 10, 1)
  //     .subscribe(
  //     (data) => {
  //
  //       // this.allIden = data.map(val => val.id);
  //       // console.log("All Ids:" , this.allIden);
  //       // console.log(typeof this.allIden);
  //       // console.log("In Emmitter: ", data);
  //       this.searchResults.emit(data), //Bind to view
  //         err => {
  //           // Log errors if any
  //           console.log(err);
  //         }
  //     })
  // }
}
