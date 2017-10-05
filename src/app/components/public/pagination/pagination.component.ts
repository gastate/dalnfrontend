import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Post} from '../../../model/post-model';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})


export class PaginationComponent implements OnInit, OnChanges {

  // get the original resultList (api call of pageHead paginatorResults)
  @Input()
  resultList: Post[];

  // get the startOffset (user defined pageNumber)
  @Input()
  startOffset: number;

  // get the endOffset (resultList length / paginatorResults per page)
  @Input()
  endOffset: number;

  @Input()
  showPagination: boolean;

  // output to the parent component to see what to do next.
  @Output()
  currentPageEmitter: EventEmitter<number>;

  // @Output()
  // skipToResultList: EventEmitter<any>;
  //

  sub: any;
  searchService: SearchService;

  // posts to pass off to post-list.
  pagedPost: Post [];
  all_results: Post [] = [];

  currentPage: number;
  fetchIndex: number;


  resultsPerPage: number;
  buttonArray: number[] = []; // holds all possible buttons
  displayButton: number[] = []; // for displaying buttons
  pagedButtonArray: number[] = []; // holds the current view buttons.
  pageHead: number;

  getdev: boolean; //for postlist
  displayPagination: boolean; // to show pagination.
  showNextButton: boolean;
  showPrevButton: boolean;


  constructor(_searchService: SearchService, private router: Router) {
    this.searchService = _searchService;
    this.currentPageEmitter = new EventEmitter<number>();
    this.router = router;
  }

  ngOnInit() {
    this.getdev = false;
    // intiate values from service.
    this.resultsPerPage = this.searchService.resultsDisplaySize;
    this.startOffset = this.searchService.pageNumber;
    this.pageHead = this.searchService.pageHead;

  }


  /**
   * getPagedPost is the button click event to calulate the next indicies to split resultList by to get pagedPost and emit to the parent the current page.
   * @param  {number} event button number that was clicked on. Will output to parent component.
   */
  getPagedPost(event) {
    if (event && event.target) {
      this.currentPage = event.target.innerText; // button is just the event's innerText.
      this.currentPageEmitter.emit(this.currentPage); // emit to parent the currentPage.
      //   console.log("Emit fired");

      this.calculateIndicies(); // calculateIndicies to split the pagedPost from resultList.
    }
  }

  calculateIndicies() {

    this.resultsPerPage = this.resultsPerPage ? this.resultsPerPage : this.searchService.resultsDisplaySize;
    this.startOffset = this.startOffset ? this.startOffset : this.searchService.pageNumber;


    if (!this.currentPage) {
      // console.log("starting offset", this.startOffset);
      this.currentPage = this.startOffset;
    }

    // if you subtract 1 from the current page and multiply it by the number of results per page, 
    // then you get the index of array of posts to start displaying the next page at. 
    let firstIndex = ( ((this.currentPage - 1) * this.resultsPerPage));

    // this will pass the lastIndex + 1 since we use slice() in populatePosts() ]
    // (slice slices arrays from start to end, but does not include the end element. See Javascript MDN docs for more info.)
    let lastIndex = (firstIndex + this.resultsPerPage);

    console.log("lastIndex, firstIndex", lastIndex, firstIndex);
    // populate pagedPost and push to the view.
    this.populatePosts(firstIndex, lastIndex);
  }

  calculateButtonRange() {
    // console.log("totalApiSearchPages", this.searchService.totalApiSearchPages);
    // console.log("currentPage = ", this.currentPage );
    let side = 3;
    let maxButtons = 1+2*side;
    if( this.searchService.totalApiSearchPages <= maxButtons ) {
      console.log( "Showing buttons for all pages" );
      this.displayButton = new Array(this.searchService.totalApiSearchPages).fill(null).map((x,i)=>i+1);
    } else if( this.currentPage <= side ) {
      console.log( "Showing buttons for first pages" );
      this.displayButton = new Array(maxButtons).fill(null).map( (x,i) => {
        // console.log( x, i, i+1 );
        return i+1;
      } );
    } else if( this.currentPage >= this.searchService.totalApiSearchPages - side ) {
      console.log( "Showing buttons for last pages" );
      let first = this.searchService.totalApiSearchPages - maxButtons;
      this.displayButton = new Array(maxButtons).fill(null).map((x,i)=>i+first);
    } else {
      console.log( "Showing buttons for middle pages" );
      let first = this.currentPage - side;
      this.displayButton = new Array(maxButtons).fill(null).map((x,i)=>i+first);
    }
    // console.log("Button Array", this.displayButton);
  }

  populatePosts(firstIndex, lastIndex) {
    // Note that slice's last element is non-inclusive for the end item. 
    // Pass in the end + 1 if you wish to include the correct amount of posts.
    this.pagedPost = this.resultList.slice(firstIndex, lastIndex);
    console.log("PAGED POST", this.resultList);
    //   console.log("PagedPost:", this.pagedPost);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("IN CHANGES", this.resultList);
    if (changes['startOffset'] && (changes['startOffset'].currentValue !== changes['startOffset'].previousValue)) {
        console.log("button change", this.startOffset, this.resultList);

      console.log("pagination results", this.searchService.paginatorResults);
      this.buttonArray = [];
      this.calculateIndicies(); 
      this.calculateButtonRange();
    }
    // if (changes['resultList'] && (changes['resultList'].currentValue !== changes['resultList'].previousValue)) {
    //     console.log("pagination change", this.resultList);
    //   this.buttonArray = [];
    //   this.calculateIndicies();
    //   this.calculateButtonRange();
    // }


    //   if (changes['endOffset']) {
    //       console.log("endOffset change", this.endOffset);
    //       this.calculateButtonRange();
    //   }

  }


}
