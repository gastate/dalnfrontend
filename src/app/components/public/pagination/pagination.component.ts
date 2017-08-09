import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Post } from '../../../model/post-model';
import { SearchService } from '../../../services/search.service';

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


  searchService : SearchService;

  // posts to pass off to post-list.
  pagedPost: Post[];

  currentPage: number;
  resultsPerPage: number;
  buttonArray: number[] = []; // holds all possible buttons
  displayButton: number[] = []; // for displaying buttons
  pagedButtonArray: number[] = []; // holds the current view buttons.
  pageHead: number;

  getdev: boolean; //for postlist


  constructor( _searchService: SearchService, private router: Router) {
    this.searchService = _searchService;
    this.currentPageEmitter = new EventEmitter<number>();
    // router.events.subscribe((val) => {
    //     this.buttonArray = [];
    // });
  }

  ngOnInit() {
     this.getdev = false;
     // intiate values from service.
     this.resultsPerPage = this.searchService.resultsSize;
     this.startOffset = this.searchService.pageNumber;
     this.pageHead = this.searchService.pageHead;

    console.log("pagination resultList: ", this.resultList);
    //  console.log("start vars for pagination", this.resultsPerPage, this.startOffset, this.pageHead);

  }


  /**
   * getPagedPost is the button click event to calulate the next indicies to split resultList by to get pagedPost and emit to the parent the current page.
   * @param  {number} event button number that was clicked on. Will output to parent component.
   */
  getPagedPost(event) {
      if(event && event.target) {
          this.currentPage = event.target.innerText; // button is just the event's innerText.
          console.log("Emit fired");
          this.currentPageEmitter.emit(this.currentPage); // emit to parent the currentPage.
          this.calculateIndicies(); // calculateIndicies to split the pagedPost from resultList.
      }
  }

  calculateIndicies() {

      // if this.currentPage (the button number clicked) is null,
      // then get the startOffset to calculate the indicies.
      if (!this.currentPage) {
          console.log("currentPage null, setting to startOffset", this.startOffset);
          this.currentPage = this.startOffset;
          this.resultsPerPage = this.searchService.resultsSize;
      }

    //   console.log("currentPage", this.currentPage);
    //   console.log("resultsPerPage", this.resultsPerPage);
      let firstIndex = ((this.currentPage * this.resultsPerPage) - this.resultsPerPage);
      let lastIndex = (firstIndex + this.resultsPerPage - 1); // minus one since index of array starts at 0.
      console.log("lastIndex, firstIndex", lastIndex, firstIndex);

      // populate pagedPost and push to the view.
      this.populatePosts(firstIndex, lastIndex);
  }

  calculateButtonRange() {

      console.log("total_offset", this.searchService.total_offset);
      for(let i = 0; i < this.searchService.total_offset; i++) {
        this.buttonArray.push(i + 1);
    }

    this.sliceButtonRange();

  }

  sliceButtonRange(){
      let buttonSlice = 6;
      let firstIndex = ((this.currentPage * this.resultsPerPage) - this.resultsPerPage);

      let startButton;

      if(firstIndex == 0) {
          startButton = 0;
      } else {
          startButton = this.currentPage - 3;
      }

      if (this.endOffset < this.searchService.total_offset) {
          this.displayButton =  this.buttonArray.slice(startButton, this.endOffset + buttonSlice);
      } else {
          this.displayButton = this.buttonArray;
      }
        console.log("Button Array", this.buttonArray);
        console.log("Display Button", this.displayButton);
  }

  populatePosts(firstIndex: number, lastIndex: number) {
      console.log("resultList:", this.resultList);
      // + 1 on lastIndex since slice() goes from 0 to actual number - 1
      this.pagedPost = this.resultList.slice(firstIndex, lastIndex + 1);
      console.log("PagedPost:", this.pagedPost);
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes['startOffset']) {
          console.log("startOffset change", this.startOffset);
          this.buttonArray = [];
          this.calculateButtonRange();
          this.sliceButtonRange();
          this.calculateIndicies();
      }
      if(changes['resultList']) {
          console.log("pagination change", this.resultList);
        this.buttonArray = [];
        this.calculateIndicies();
        this.calculateButtonRange();
        this.sliceButtonRange();
      }
      if (changes['endOffset']) {
          console.log("endOffset change", this.endOffset);
          this.calculateIndicies();
          this.sliceButtonRange();
      }

  }






}
