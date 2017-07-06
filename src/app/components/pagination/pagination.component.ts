import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../../model/post-model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {

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
  buttonArray: number[] = [];



  constructor(_searchService: SearchService) {
      this.searchService = _searchService;
  }

  ngOnInit() {
     this.resultsPerPage = this.searchService.resultsSize;
  }

  getPagedPost() {
      let lastIndex = (this.startOffset * this.resultsPerPage - 1);
      let firstIndex = (lastIndex - this.resultsPerPage + 1);
      this.calculateButtonRange();
  }

  calculateButtonRange() {
      let numberOfButtons = this.resultList.length / this.resultsPerPage;

      for(var i = 0; i < numberOfButtons; i++) {
          this.buttonArray.push(this.startOffset);
          this.startOffset++;
      }
      console.log("Button Array", this.buttonArray);
  }

  ngOnChanges(changes: SimpleChanges) {
      if(changes['resultList']) {
          console.log("pagination change", this.resultList);
          this.getPagedPost();
      }
  }






}
