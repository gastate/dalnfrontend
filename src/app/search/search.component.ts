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

  posts: Post[];
  allIden: Array<string>;
  selectedPost: Post;

  showUtil: boolean = false;
  showFull : boolean = false;



  route: string;
  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    private _searchService: SearchService,
    private _location : Location,
    private _router: Router,
    public el: ElementRef,
    public renderer: Renderer) {
    this.searchResults = new EventEmitter<Post[]>();
    // this._searchService.pageUpdate.subscribe(
    //   (pageNum) => {
    //     this.pageNumber = this._searchService.getPage();
    //   }
    // );

    this._router.events.subscribe((val) => {
       // see also
       this.route = this._location.path();
       if (this.route == "/search"){
           this.showUtil = true; // handles utility functions for ux.
           this.showFull = true; // handles expansion of search bar
       }
   });

  }

  ngOnInit() : void {
  }

  onSearch(term: string, results: number, pageNum: number, $posts: Post[]): void {
      let pageNumber = this._searchService.getPageNum();


    if (results == 0) {
        results = 10;
    }

    if(term === '' || term === undefined){
      return null;
    }
      this._searchService.search_page(term, results, pageNumber)
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

  onFakeSearch(term: string, results: number, pageNumber: number, $posts: Post[]) : void {

      if (results == 0) {
          results = 10;
      }
      if (pageNumber == 0) {
          pageNumber = 0;
      } else {
          pageNumber = pageNumber;
          console.log(pageNumber);
          this._searchService.setPageNum(pageNumber);
      }

      if(term === '' || term === undefined){
        return null;
      }
      this._router.navigateByUrl('/search');

  }

}
