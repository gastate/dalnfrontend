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

  @Output()
  searchResults: EventEmitter<Post[]>;


  location: Location;

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




  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    _searchService: SearchService) {

    this.searchService = _searchService;
    this.searchResults = new EventEmitter<Post[]>();

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

    this.searchService.search_page(term, this.searchService.pageHead, this.searchService.pageNumber)
      .subscribe(
        (results) => {
            // console.log("In Emmitter: ", this.resultsSize);
            if ((results === null) || results.length <= 0 ) {
                this.noResults = true;
            } else {
                this.noResults = false;

                this.resultList = this.searchService.translatePosts(results.hit);

                this.searchResults.emit(this.resultList);
            }

    }, err => {
        console.log(err);
    });

  }

  calculateOffset(event) {
      this.total_offset = this.searchService.total_offset;

  }



}
