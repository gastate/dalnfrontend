import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../../model/post-model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})


export class PaginationComponent implements OnInit, OnChanges {

  // get the original resultList (api call of pageHead results)
  @Input()
  resultList: Post[];

  // get the startOffset (user defined pageNumber)
  @Input()
  startOffset: number;

  // get the endOffset (resultList length / results per page)
  @Input()
  endOffset: number;

  // output to the parent component to see what to do next.
  @Output()
  currentPageEmitter: EventEmitter<number>;

  // @Output()
  // skipToResultList: EventEmitter<any>;

  // posts to pass off to post-list.
  pagedPost: Post[];

  currentPage: number;
  resultsPerPage: number;
  buttonArray: number[] = [];
  pageHead: number;



  constructor( private searchService: SearchService) {
    //   this.searchService = _searchService;
    this.currentPageEmitter = new EventEmitter<number>();
  }

  ngOnInit() {
     // intiate values from service.
     this.resultsPerPage = this.searchService.resultsSize;
     this.startOffset = this.searchService.pageNumber;
     this.pageHead = this.searchService.pageHead;

  }


  /**
   * getPagedPost is the button click event to calulate the next indicies to split resultList by to get pagedPost and emit to the parent the current page.
   * @param  {number} event button number that was clicked on. Will output to parent component.
   */
  getPagedPost(event) {
      if(event && event.target) {
          console.log("getPagedPost target event", event.target);
          console.log("getPagedPost event", event.target.innerText);
          this.currentPage = event.target.innerText; // button is just the event's innerText.
          this.currentPageEmitter.emit(this.currentPage); // emit to parent the currentPage.
          this.calculateIndicies(); // calculateIndicies to split the pagedPost from resultList.
      }
  }

  calculateIndicies() {
      if (!this.currentPage) {
          console.log("starting offset", this.startOffset);
          this.currentPage = this.startOffset;
      }

      let firstIndex = ((this.currentPage * this.resultsPerPage) - this.resultsPerPage + 1);
      let lastIndex = (firstIndex + this.resultsPerPage - 1);
      console.log("lastIndex, firstIndex", lastIndex, firstIndex);
      if (firstIndex === 1) {
          firstIndex = 0;
      } else {
          lastIndex = lastIndex + 1;
      }
      this.populatePosts(firstIndex, lastIndex);
  }

  calculateButtonRange() {
      console.log("endOffset", this.endOffset);
      for(let i = 0; i < this.endOffset; i++) {
          this.buttonArray.push(i + 1);
      }
      console.log("Button Array", this.buttonArray);
  }

  populatePosts(firstIndex, lastIndex) {

      this.pagedPost = this.resultList.slice(firstIndex, lastIndex);
      console.log("PagedPost:", this.pagedPost);
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes['startOffset']) {
          console.log("startOffset change", this.startOffset);
          this.calculateButtonRange();
      }
      if(changes['resultList']) {
          console.log("pagination change", this.resultList);
        //   this.getPagedPost(event);
        this.calculateIndicies();
      }
    //   if (changes['endOffset']) {
    //       console.log("endOffset change", this.endOffset);
    //       this.calculateButtonRange();
    //   }

  }






}
