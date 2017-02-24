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
  selectedPost: Post;


  constructor(
    private _postService: PostService,
    private _searchService: SearchService,
    private _router: Router) {
    this.searchResults = new EventEmitter<Post[]>();
  }

  ngOnInit() : void {

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

  onSearch(term: string): void {
    if (term === '' || term === undefined) {
      return null;
    }
    this._searchService.search_page(term, 10, 1)
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
