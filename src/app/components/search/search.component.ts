import { Component, OnInit, Input, Output, EventEmitter, Directive, ElementRef, Renderer} from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { SearchService } from '../../services/search.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post-model';



@Component({
  selector: 'app-search2',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  @Output()
  searchResults: EventEmitter<Post[]>;


  posts: Post[];
  pagedPosts: Post[];
  searchService : SearchService;

  showUtil: boolean = false;
  showFull : boolean = false;

  route: string;

  pageNumber: number; // user specified page number to start from.
  resultsSize : number; // number of results to display in search component.

  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    _searchService: SearchService,
    private _location : Location,
    private _router: Router) {

    this.searchService = _searchService;
    this.searchResults = new EventEmitter<Post[]>();

  }

  ngOnInit() {
      // replace with results size.
    //   this.numberOfPages = this.searchService.getPaginationParameter();
    //   console.log("Pages: " + this.numberOfPages);

    this.resultsSize = this.searchService.resultsSize;
    this.pageNumber = this.searchService.pageNumber;


       this._router.events.subscribe((val) => {
         // see also
         this.route = this._location.path();
         if (this.route == "/search"){
             console.log(this.searchService.searchQuery, this.searchService.resultsSize, this.searchService.pageNumber);
             this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, this.searchService.pageNumber );
             this.showUtil = true; // handles utility functions for ux.
             this.showFull = true; // handles expansion of search bar
         }
     });

  }

  onSearch(term: string, results: number, pageNumber: number): void {

     if(this.resultsSize != results) {
         this.resultsSize = results;
         this.searchService.changeResultsDisplayed(this.resultsSize);
     }

     if(this.pageNumber != pageNumber) {
         this.pageNumber = pageNumber;
         this.searchService.changePageStart(this.pageNumber);
     }


    if(term === '' || term === undefined){
      return null;
    }
      this.searchService.search_page(term, this.resultsSize, this.pageNumber)
      .subscribe((results) => {
        console.log("In Emmitter: ", results.length);
        if ((results === null) || results.length <= 0 ) {
            this.noResults = true;
        } else {
            this.noResults = false;
            this.posts = results;
        }

        if (this.searchService.resultsSize > this.posts.length) {
            this.pagedPosts = this.posts;
        } else {
            console.log("Greater.")
        }
        this.searchResults.emit(results),
        err => {
            console.log(err);
        }
    });

    // this._router.navigateByUrl('/search');

  }


 /**
  * All onFakeSearch does is take the given user input parameters for pagination and results and navigate to the search route. All parameters are intialized in the constructor if no user input is given.
  * @param {number} results    number of results to display on component
  * @param {number} pageNumber page number to start from
  */
  onFakeSearch(results: number, pageNumber: number) : void {

      if(this.resultsSize != results) {
          this.resultsSize = results;
          this.searchService.changeResultsDisplayed(this.resultsSize);
      }

      if(this.pageNumber != pageNumber) {
          this.pageNumber = pageNumber;
          this.searchService.changePageStart(this.pageNumber);
      }

      this._router.navigateByUrl('/search');

  }


}
