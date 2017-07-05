import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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

  // @Output()
  // searchResults: EventEmitter<Post[]>;

  posts: Post[] = [];
  resultList: Post[];
  nextResultList: Post[];
  searchService : SearchService;

  // pagination
  startOffset: number;
  endOffset: number;
  total_offset: number;
  total_results: number;

  pageNumber: number; // user specified page number to start from.
  resultsSize : number; // number of results to display in search component.
  pageParameter: number = 0;

  currentOffset: number; // received by pagination component.



  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    _searchService: SearchService) {

    this.searchService = _searchService;
    // this.searchResults = new EventEmitter<Post[]>();

  }

  ngOnInit() {

    console.log("in search compoonent");
    this.resultsSize = this.searchService.resultsSize;
    this.pageNumber = this.searchService.pageNumber;
    this.total_offset = this.searchService.total_offset;
    this.total_results = this.searchService.total_results;

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

    this.searchService.search_page(term, this.searchService.pageHead, this.pageParameter)
      .subscribe(
        (results) => {
            // console.log("In Emmitter: ", this.resultsSize);
            if ((results === null) || results.length <= 0 ) {
                this.noResults = true;
            } else {
                this.noResults = false;

                this.posts = this.searchService.translatePosts(results.hit);
                this.resultList = this.posts;
                this.calculateOffset();
                // this.searchResults.emit(this.resultList);
            }


    }, err => {
        console.log(err);
    });

  }

  calculateOffset() {
      this.startOffset = this.searchService.pageNumber;
      // console.log("Parent Offset", this.startOffset);
      this.endOffset = this.searchService.total_offset;
      console.log("startOffset, endOffset", this.startOffset, this.endOffset);
  }

  getResult(event) {

      this.currentOffset = event;

      // get the next resultList going forwards.
      if (this.currentOffset === this.endOffset - 1) {
          this.pageParameter++;

        //   this.nextResultList = this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, this.pageParameter);

          console.log("PageNumber:", this.searchService.pageNumber);
          console.log("Next Result List:", this.nextResultList);

      // get the next result list going backwards.
      } else if (this.currentOffset === this.startOffset + 1) {
          this.pageParameter--;

        //   this.nextResultList = this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, this.pageParameter);

          console.log("PageNumber:", this.searchService.pageNumber);
          console.log("Next Result List:", this.nextResultList);

      // if currentOffset is either the start or end offset, either set the resultList to nextResultList or populate resultList.
      } else if ((this.currentOffset === this.endOffset) || (this.currentOffset === this.startOffset)) {
          if (this.nextResultList !== null) {
              this.resultList = this.nextResultList;
          } else {
            //    this.nextResultList = this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, this.pageParameter);
          }

      // all conditions fail so currentOffset > endOffset or < startOffset. Need to get the resultList corresponding to the currentOffset. (Skip function).
      } else {
          console.log("Skip.");
      }
  }



}
