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

  @Input() showPage: boolean;

  location: Location;

  posts: Post[];
  total_results: number;
  searchService : SearchService;

  pageNumber: number; // user specified page number to start from.
  resultsSize : number; // number of results to display in search component.


  private noResults: boolean = false;

  constructor(
    private _postService: PostService,
    _searchService: SearchService) {

    this.searchService = _searchService;
    this.searchResults = new EventEmitter<Post[]>();
    this.total_results = 0;

  }

  ngOnInit() {

    console.log("in search compoonent");
    this.resultsSize = this.searchService.resultsSize;
    this.pageNumber = this.searchService.pageNumber;

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

                this.total_results = results.found;
                
                this.posts = this.searchService.translatePosts(results.hit);

                this.searchResults.emit(this.posts);
            }

    }, err => {
        console.log(err);
    });

  }



}
