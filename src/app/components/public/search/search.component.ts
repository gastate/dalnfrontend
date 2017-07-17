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
  posts: Post[] = [];
  resultList: Post[] = [];
  results: Post[] = [];
  searchService : SearchService;
  errorMessage: string;

  // pagination
  startOffset: number;
  endOffset: number;
  total_offset: number;
  total_results: number;

  pageNumber: number; // user specified page number to start from.
  resultsPerPage : number; // number of results to display in search component.
  pageParameter: number = 0;

  currentOffset: number; // received by pagination component.



  private noResults: boolean = false;

  constructor(
    location: Location,
    router: Router,
    private _postService: PostService,
    _searchService: SearchService) {

    this.location = location;
    this.searchService = _searchService;
    this.showHomePage = new EventEmitter<boolean>();
    // this.searchResults = new EventEmitter<Post[]>();

    router.events.subscribe((val) => {
        // console.log(val instanceof NavigationEnd);
        // console.log(val.url);
    });


  }

  ngOnInit() {

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

    if(index == 1) {
        index = 0;
    }

    this.searchService.search_page(term, this.searchService.pageHead, index)
      .subscribe(
        (results) => {
            if ((results === null) || results.length <= 0 ) {
                this.errorMessage = "Something went wrong...Please try again.";
            }

            this.posts = this.searchService.translatePosts(results.hit);
            this.posts.forEach((i) => {
                this.results.push(i);
            });
            this.resultList = this.results;
            console.log("new resultList", this.resultList);
            this.location.go('/search');
            this.showHomePage.emit(false);
            // console.log("Search resultList", this.resultList);
            this.calculateOffset();
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




}
