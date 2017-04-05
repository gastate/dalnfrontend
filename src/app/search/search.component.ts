import { Component, OnInit, Input, Output, EventEmitter, Directive, ElementRef, Renderer} from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
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
})
export class SearchComponent { //implements OnInit {

  @Input()
  query: string;

  @Output()
  searchResults: EventEmitter<Post[]>;

  @Output() changeView : EventEmitter<boolean> = new EventEmitter<boolean>();

  posts: Post[];
  selectedPost: Post;

  showUtil: boolean = false;
  showFull : boolean = false;


  searchService : SearchService;

  route: string;
  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    _searchService: SearchService,
    private _location : Location,
    private _router: Router) {
    this.searchResults = new EventEmitter<Post[]>();

    this.searchService = _searchService;

    this._router.events.subscribe((val) => {
       // see also
       this.route = this._location.path();
       if (this.route == "/search"){
           this.onSearch(this.searchService.searchQuery, 10, 0 );
           this.showUtil = true; // handles utility functions for ux.
           this.showFull = true; // handles expansion of search bar
       }
   });

  }

  ngOnInit() : void {
  }

  onSearch(term: string, results: number, pageNum: number): void {
      let pageNumber = this.searchService.getPageNum();


    if (results == 0) {
        results = 10;
    }

    if(term === '' || term === undefined){
      return null;
    }
      this.searchService.search_page(term, results, pageNumber)
      .subscribe((results) => {
        console.log("In Emmitter: ", results);
        if ((results === null) || results.length <= 0 ) {
            this.noResults = true;
        } else {
            this.noResults = false;
            this.posts = results;
        }
        this.searchResults.emit(results),
        err => {
            console.log(err);
        }
    });

    // this._router.navigateByUrl('/search');

  }

  onFakeSearch(term: string, results: number, pageNumber: number) : void {

      if (results == 0) {
          results = 10;
      }
      if (pageNumber == 0) {
          pageNumber = 0;
      } else {
          pageNumber = pageNumber;
          console.log(pageNumber);
          this.searchService.setPageNum(pageNumber);
      }

      if(term === '' || term === undefined){
        return null;
      }
      this.changeView.emit(false);
      this._router.navigateByUrl('/search');

  }

}
