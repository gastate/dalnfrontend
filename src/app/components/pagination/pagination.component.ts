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
  parentStartOffset;

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







}
