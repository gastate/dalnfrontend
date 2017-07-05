import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../../model/post-model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  @Input()
  resultList: Post[];

  @Input()
  startOffset: number;

  @Output()
  currentPageOffset: EventEmitter<number>;

  @Output()
  skipToResultList: EventEmitter<any>;

  searchService: SearchService;
  pagedPost: Post[];


  resultsPerPage: number;


  constructor(_searchService: SearchService) {
      this.searchService = _searchService;
  }

  ngOnInit() {
     this.resultsPerPage = this.searchService.resultsSize;
  }

  getPagedPost() {
      let lastIndex = (this.startOffset * this.resultsPerPage - 1);
      let firstIndex = (lastIndex - this.resultsPerPage + 1);
      console.log("resultList", this.resultList);
  }

  calculateButtonRange() {
      let numberOfButtons = this.resultList.length / this.resultsPerPage;
  }







}
