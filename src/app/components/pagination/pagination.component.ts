import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  buttonArray: number[] = []; // holds all possible buttons
  pagedButtonArray: number[] = []; // holds the current view buttons.
  pageHead: number;



  constructor( private searchService: SearchService, private router: Router) {
    //   this.searchService = _searchService;
    this.currentPageEmitter = new EventEmitter<number>();
    router.events.subscribe((val) => {
        console.log(val.url);
    });
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
          this.currentPage = event.target.innerText; // button is just the event's innerText.
          this.currentPageEmitter.emit(this.currentPage); // emit to parent the currentPage.
          console.log("Emit fired");
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

      // since the index of the array starts at 0, just make the firstIndex = 0 whenever the value is 1.
      if (firstIndex === 1) {
          firstIndex = 0;
      } else {
          // else make the lastIndex + 1.
          lastIndex = lastIndex + 1;
      }
      console.log("lastIndex, firstIndex", lastIndex, firstIndex);
      // populate pagedPost and push to the view.
      this.populatePosts(firstIndex, lastIndex);
  }

  calculateButtonRange() {

      console.log("total_offset", this.searchService.total_offset);
      for(let i = 0; i < this.searchService.total_offset; i++) {
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
          this.buttonArray = [];
          this.calculateButtonRange();
      }
      if(changes['resultList']) {
          console.log("pagination change", this.resultList);
        this.buttonArray = [];
        this.calculateIndicies();
        this.calculateButtonRange();
      }
    //   if (changes['endOffset']) {
    //       console.log("endOffset change", this.endOffset);
    //       this.calculateButtonRange();
    //   }

  }






}
