import { Component, OnInit, Input, Output, EventEmitter, Directive, ElementRef, Renderer} from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd} from '@angular/router';
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

  @Input() showPage: boolean;
  
  location: Location;

  posts: Post[];
  total_results: number;
  searchService : SearchService;

  showUtil: boolean = false;
  showFull : boolean = false;

  pager: any = {};
  pagedItems: any[];
  allPosts: any[];

  route: string;


  // count: number = 0; // number of total results returned from a query.
  pageNumber: number; // user specified page number to start from.
  resultsSize : number; // number of results to display in search component.
  // total_posts: number; // total number of posts in array NOTE: Currently not in use since endpoint does not return it.


  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    _searchService: SearchService,
    private _router: Router) {

    this.searchService = _searchService;
    this.searchResults = new EventEmitter<Post[]>();
    this.total_results = 0;

  }

  ngOnInit() {
      // replace with results size.
    //   this.numberOfPages = this.searchService.getPaginationParameter();
    //   console.log("Pages: " + this.numberOfPages);
    console.log("in search compoonent");
    this.resultsSize = this.searchService.resultsSize;
    this.pageNumber = this.searchService.pageNumber;

    //    this._router.events.subscribe((val) => {
    //      // see also
    //      this.route = this._location.path();
    //      if (this.route == "/search"){
    //          console.log(this.searchService.searchQuery, this.searchService.resultsSize, this.searchService.pageNumber);
    //          this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, this.searchService.pageNumber );
    //          this.showUtil = true; // handles utility functions for ux.
    //          this.showFull = true; // handles expansion of search bar
    //      }
    //  });

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

    this.searchService.search_page(term, this.searchService.pageHead, 0)
      .subscribe(
        (results) => {
            // console.log("In Emmitter: ", this.resultsSize);
            if ((results === null) || results.length <= 0 ) {
                this.noResults = true;
            } else {
                this.noResults = false;
                console.log("API resposne for hits: ", results.hit);
                console.log("API response for total hits: ", results.found);

                this.total_results = results.found;

                this.allPosts= this.searchService.translatePosts(results.hit);
                console.log("le posts: ", this.posts);

                // this.searchResults.emit(this.posts);
                this.setPage(1);

            }

    }, err => {
        console.log(err);
    });

    // this._router.navigateByUrl('/search');

  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      this.pager = this.searchService.getPager(this.total_results, page);
      this.pagedItems = this.allPosts.slice(this.pager.startIndex, this.pager.endIndex + 1);

      this.searchResults.emit(this.pagedItems);
  }




}
