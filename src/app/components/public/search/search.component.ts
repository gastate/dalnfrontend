import {Component, OnInit,  HostListener,  Input, Output, EventEmitter} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../../services/search.service';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../model/post-model';



@Component({
  selector: 'app-search2',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {


  // TODO:
  //   - Add query parameters for page.
  //   - make buttons work, refresh
  //   - populate buttons on visiting the link, refresh, other cases
   

  // @Output()
  // searchResults: EventEmitter<Post[]>;

  @Output()
  showHomePage: EventEmitter<boolean>;

  location: Location;
  router: Router;
  activatedRoute: ActivatedRoute;
  searchService: SearchService;
  lastSearch: any;

  @Input()
  showPagination: boolean;

  posts: Post[];
  resultList: Post[];
  results: Post[];
  errorMessage: string;
  sub: any;
  subQuery: any;

  // pagination
  startOffset: number;
  endOffset: number;
  total_offset: number;
  total_results: number;

  
  // loading
  loading: boolean = false;
  failed: boolean = false;

  pageNumber: number; // user specified page number to start from.
  resultsPerPage: number; // number of paginatorResults to display in search component.
  lastMiddleButton: number; // number of last middle button pressed in the pagination component to append results to the resultList.

  currentOffset: number; // received by pagination component.
  currentPage: number;
  query: string;


  private noResults: boolean = false;

  constructor(location: Location,
              router: Router,
              activatedRoute: ActivatedRoute,
              private _postService: PostService,
              _searchService: SearchService) {

    this.location = location;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.searchService = _searchService;
    this.showHomePage = new EventEmitter<boolean>();
    // this.searchResults = new EventEmitter<Post[]>();

  }

  ngOnInit() {
    this.subQuery = this.activatedRoute.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.pageNumber = params['page'];
      this.showPagination = true;    
      this.posts = [];
      this.results = [];      
      if (this.query) {
        this.loading = true;          
        
        this.searchService.searchQuery = this.query;
        this.lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
        // console.log("Last Search: ", this.lastSearch.queryParams);
        // console.log("\nterm", this.query, "\nthis.searchService.pageHead",
        //   this.searchService.pageHead, "\nthis.searchService.pageNumber",
        //   this.searchService.pageNumber);
        
        // need to check if lastSearch is null else won't work.
        if (this.lastSearch !== null && this.lastSearch.queryParams[0] == this.query
          && this.lastSearch.queryParams[1] == this.searchService.pageHead
          && this.lastSearch.queryParams[2] ==
          (this.searchService.pageNumber == 1 ? 0 : this.searchService.pageNumber)) {
          // console.log("Same Search: ", this.lastSearch.queryParams, [this.query, this.searchService.pageHead, this.searchService.pageNumber]);
          this.resultList = this.lastSearch.resultList;
          this.loading = false;
          // console.log("new resultList", this.resultList);

          // Not sure what this is for
          this.searchService.paginatorResults = this.resultList;
          this.searchService.totalApiSearchPages = this.lastSearch.totalOffset;
          
          this.startOffset = this.searchService.pageNumber;
          this.endOffset = Math.floor(Math.max(this.resultList.length / this.resultsPerPage, 1));
          this.total_offset = Math.floor(this.lastSearch.totalSearchResultSize / this.resultsPerPage);
          this.total_results = this.lastSearch.totalSearchResultSize;


          this.calculateOffset();
          this.showHomePage.emit(false);

            
          this.router.navigate(['/search'], {queryParams: {query: this.query, page: this.pageNumber}});
          return;
        }
        
        this.search(this.query, this.searchService.resultsDisplaySize, this.searchService.pageNumber);
      }
    });

    // this.showPagination = true;
    // this.posts = [];
    // this.results = [];
    // this.resultList = this.searchService.paginatorResults;
    
    // this.startOffset = this.searchService.pageNumber;
    // this.endOffset = Math.floor(Math.max(this.searchService.paginatorResults.length / this.searchService.resultsDisplaySize, 1));
    // this.errorMessage = null;
    
    // this.resultsPerPage = this.searchService.resultsDisplaySize;
    // this.pageNumber = this.searchService.pageNumber;
    // this.total_offset = this.searchService.totalApiSearchPages;
    // this.total_results = this.searchService.totalApiSearchResults;
  }

  keyPressHandler(term: string, results: number, index: number): void {
    this.onSearch(term, results, index);
  }

  onSearch(term: string, results: number, index: number): void {
    this.resultsPerPage = results;

    if (index == 1) {
        this.pageNumber = index;
        index = 0;
      } else {
        this.pageNumber = index;        
      }
    
    if (term.length == 0 || term === undefined) {
      // console.log("TERM IS 0");
      this.router.navigate(['/home']);
    }
    if (term !== this.query) {
      this.query = term;
    }

    this.searchService.searchQuery = this.query;
    this.router.navigate(['/search'], {queryParams: {query: term, page: this.pageNumber}});
  }

  search(term: string, results: number, index: number): void {
    this.resultsPerPage = results;
    // console.log("Before", this.query, term);
    this.lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
    // console.log("Last Search: ", this.lastSearch.queryParams, "term", term, "this.searchService.pageHead", this.searchService.pageNumber, "index", index);
    if (this.lastSearch !== null && this.lastSearch.queryParams[0] == term
      && this.lastSearch.queryParams[1] == this.searchService.pageNumber
      && this.lastSearch.queryParams[2] == index) {
      // console.log("Same Search: ", this.lastSearch.queryParams, [term, this.searchService.pageHead, index]);
      this.resultList = this.lastSearch.resultList;
      // console.log("Search resultList", this.resultList);

      // TODO find out what these are used for
      this.startOffset = this.pageNumber;
      this.endOffset = Math.floor(Math.max(this.resultList.length / this.resultsPerPage, 1));
      this.total_offset = this.lastSearch.totalApiSearchPages;
      this.total_results = this.lastSearch.totalSearchResultSize;
      this.searchService.paginatorResults = this.resultList;
      this.router.navigate(['/search'], {queryParams: {query: term, page: this.pageNumber}});
      return;
    }

    if (term === '' || term === undefined) {
      return null;
    }

    if (term !== this.query) {
      this.query = term;
    }

    this.searchService.searchQuery = this.query;

    let displayPage; // to use for url parameter

    // index controls the pagination, but it needs to start from 0 if the user puts in 1
    // since the first page in the api starts from page 0.
    if (index == 1) {
      displayPage = index;
      index = 0;
    } else {
      displayPage = index;
    }

    // console.log("Before", this.query, term);


    this.searchService.paginatorResults = [];
    // TODO: uses input for all_results (this.paginatorResults should be all_results)
    this.results = [];
    this.errorMessage = null;


    this.searchService.search_page(term, this.searchService.pageHead, index)
      .subscribe(
        (results) => {
          if ((results.found <= 0) || (results.found === null)) {
            this.errorMessage = "No Results found";
          }

          this.posts = this.searchService.translatePosts(results.hit);
          this.posts.forEach((i) => {
            this.results.push(i);
          });

          this.resultList = this.results;
          this.searchService.paginatorResults = this.results;
          // console.log("new resultList", this.resultList);
          // save to local storage
          localStorage.setItem("lastSearch", JSON.stringify({
            queryParams: [term, this.searchService.pageHead, index],
            resultList: this.posts, totalOffset: this.searchService.totalApiSearchPages,
            totalSearchResultSize: this.searchService.totalApiSearchResults
          }));
          this.calculateOffset();
          this.showHomePage.emit(false);
          this.loading = false;
          this.router.navigate(['/search'], {queryParams: {query: term, page: this.pageNumber}});
          // console.log("Search resultList", this.resultList);

        }, err => {
            this.loading = false
            this.failed = true;
            this.errorMessage = "An error occured: \n" + err;
        });

  }

  calculateOffset() {
    this.startOffset = this.pageNumber;
    // console.log("Parent Offset", this.startOffset);
    this.endOffset = Math.floor(Math.max(this.resultList.length / this.searchService.resultsDisplaySize, 1));
    //   console.log("startOffset, endOffset", this.startOffset, this.endOffset);
  }


  getButtonClickHandler(event) {
    this.pageNumber = event;  

    console.log("function getButtonClickHandler()")
    console.log("getButtonClickHandler() pageNumber received: ", this.pageNumber);
    console.log("last button that should have data", this.endOffset);
    console.log("resultList from search component", this.resultList);

    if(this.pageNumber != this.lastMiddleButton && (this.pageNumber == (this.endOffset - 2))) {

      let indexToStart = ((this.pageNumber - 1) * this.searchService.resultsDisplaySize);
      this.lastMiddleButton = this.pageNumber;

      console.log("INDEX TO START PULLING NEW POSTS", indexToStart);
      this.searchService.search_page(this.query, this.searchService.pageHead, indexToStart).subscribe(
        (results) => {
     
            this.posts = this.searchService.translatePosts(results.hit);
            this.posts.forEach((i) => {
              this.results.push(i);
            });

            this.results.forEach((i)=> {
              this.resultList.push(i);
            });

            this.calculateOffset();
            console.log("new resultList with more posts", this.resultList);
            console.log("new last button we should have data for", this.endOffset);
            
        },
        (err) => {
          this.errorMessage = "An error occured retrieving the next set of posts: \n" + err + "\nPlease try again at a later time.";
        });
    }

    this.router.navigate(['/search'], {queryParams: {query: this.query, page: this.pageNumber}});

  }


  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
    if (this.subQuery)
      this.subQuery.unsubscribe();
    this.showPagination = false;
  }


}
