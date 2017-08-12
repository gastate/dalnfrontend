import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { SearchService } from '../../../services/search.service';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../model/post-model';




@Component({
  selector: 'app-search2',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  // @Output()
  // searchResults: EventEmitter<Post[]>;

  @Output()
  showHomePage: EventEmitter<boolean>;

  location: Location;
  router: Router;
  searchService : SearchService;

  showPagination: boolean;

  posts: Post[];
  resultList: Post[];
  results: Post[];
  errorMessage: string;
  sub:any;

  // pagination
  startOffset: number;
  endOffset: number;
  total_offset: number;
  total_results: number;

  pageNumber: number; // user specified page number to start from.
  resultsPerPage : number; // number of results to display in search component.
  pageParameter: number = 0;

  currentOffset: number; // received by pagination component.
  currentPage: number;
  query: string;



  private noResults: boolean = false;

  constructor(
    location: Location,
    router: Router,
    private _postService: PostService,
    _searchService: SearchService) {

    this.location = location;
    this.router = router;
    this.searchService = _searchService;
    this.showHomePage = new EventEmitter<boolean>();
    // this.searchResults = new EventEmitter<Post[]>();

    this.showPagination = true;
    this.posts = [];
    this.results = [];
    this.resultList = this.searchService.results;



    this.sub = router.events.subscribe((val) => {
        // console.log(val instanceof NavigationEnd);
        // console.log(val.url);
        let route = val.url;

        if(route == "/home") {
            console.log("in home");
            this.showHomePage.emit(true);
            this.showPagination = false;
        } else if (route.startsWith("/search")) {
            console.log("in search");
            this.showHomePage.emit(false);
        } else {
            console.log("in somewhere else");
        }
    });


  }

  ngOnInit() {
    this.startOffset = this.searchService.pageNumber;
    this.errorMessage = null;


    this.resultsPerPage = this.searchService.resultsSize;
    this.pageNumber = this.searchService.pageNumber;
    this.total_offset = this.searchService.total_offset;
    this.total_results = this.searchService.total_results;
  }

  onSearch(term: string, results: number, index: number): void {
     //
    //  if(this.resultsPerPage != results) {
    //      this.resultsPerPage = results;
    //      this.searchService.changeResultsDisplayed(this.resultsPerPage);
    //  }
     //
    //  if(this.pageNumber != pageNumber) {
    //      this.pageNumber = pageNumber;
    //      this.searchService.changePageStart(this.pageNumber);
    //  }

    if(term === '' || term === undefined){
      return null;
    }

    var displayPage; // to use for url parameter

    // index controls the pagination, but it needs to start from 0 if the user puts in 1
    // since the first page in the api starts from page 0.
    if(index == 1) {
        displayPage = index;
        index = 0;
    } else {
        displayPage = index;
    }

    // console.log(displayPage);
    // console.log(index);


    this.searchService.results = [];

    this.searchService.search_page(term, this.searchService.pageHead, index)
      .subscribe(
        (results) => {
            if ( (results.found <= 0) || (results.found === null)  ) {
                this.errorMessage = "No results found";
            }

            this.posts = this.searchService.translatePosts(results.hit);
            this.posts.forEach((i) => {
                this.results.push(i);
            });

            this.resultList = this.results;
            this.searchService.results = this.results;
            console.log("new resultList", this.resultList);
            this.showHomePage.emit(false);
            this.calculateOffset();
            this.query = term;

            this.router.navigate(['/search'], { queryParams: { query: term, page: this.currentPage } });
            // console.log("Search resultList", this.resultList);
            // this.searchResults.emit(this.resultList);

    }, err => {
        console.log(err);
    });

  }

  calculateOffset() {
      this.startOffset = this.searchService.pageNumber;
      // console.log("Parent Offset", this.startOffset);
      this.endOffset = Math.floor(Math.max(this.resultList.length / this.searchService.resultsSize, 1));
      console.log("startOffset, endOffset", this.startOffset, this.endOffset);
  }

  getResultHandler(event) {
      console.log(this.resultList);
      this.currentOffset = event;
      this.currentPage = event;
      this.router.navigate(['/search'], { queryParams: { query: this.query, page: this.currentPage } });
      console.log("currentOffset", this.currentOffset);
      console.log("startOffset", this.startOffset);
      console.log("endOffset", this.endOffset);

      let leftOverItems = this.resultList.length % this.searchService.resultsSize;
      console.log("leftover", leftOverItems);

      if((this.currentOffset < this.startOffset) || (this.currentOffset > this.endOffset)) {
          let index = ((this.currentOffset * this.searchService.resultsSize) - this.searchService.resultsSize);
          console.log("index outside offset, new index is: ", index);
          this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, index + leftOverItems);
      }
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }





}
