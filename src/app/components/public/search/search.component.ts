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
  resultList: Post[] = [];
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
  lastClickedButton: number; // number of last middle button pressed in the pagination component to append results to the resultList.

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
        // console.log("Found Local Search: ", this.lastSearch.queryParams, [this.query, this.searchService.pageHead, this.searchService.pageNumber]);
          this.resultList = this.lastSearch.resultList;
          this.loading = false;
          // console.log("new resultList", this.resultList);

          // Not sure what this is for
          this.searchService.paginatorResults = this.resultList;
          this.searchService.totalApiSearchPages = this.lastSearch.totalOffset;
          
          this.startOffset = this.searchService.pageNumber;
          this.endOffset = Math.floor(Math.max(this.resultList.length / this.resultsPerPage, 1));
          this.total_offset = Math.floor(this.lastSearch.totalSearchResultSize / this.resultsPerPage);
          this.total_results = this.lastSearch.totalSearchResultSize ;


          this.calculateOffset();
          this.showHomePage.emit(false);

            
          this.router.navigate(['/search'], {queryParams: {query: this.query, page: this.pageNumber}});
          return;
        } 

        this.search(this.query, this.searchService.resultsDisplaySize, this.searchService.pageNumber);          
        

      }
    });

  }

  keyPressHandler(term: string, results: number, pageNumber: number): void {
    this.onSearch(term, results, pageNumber);
  }

  onSearch(term: string, results: number, pageNumber: number): void {
    this.resultsPerPage = results;

    if (pageNumber == 1) {
        this.pageNumber = pageNumber;
        pageNumber = 0;
      } else {
        this.pageNumber = pageNumber;        
      }
    
    if (term.length == 0 || term === undefined) {
      // console.log("TERM IS 0");
      this.router.navigate(['/home']);
    }
    if (term !== this.query) {
      // new query, empty the currently shown postList.
      this.query = term;
      this.searchService.paginatorResults = [];
    }

    this.searchService.searchQuery = this.query;
    this.router.navigate(['/search'], {queryParams: {query: term, page: this.pageNumber}});
  }

  search(term: string, results: number, pageNumber: number): void {
    this.resultsPerPage = results;
    // console.log("Before", this.query, term);
    this.lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
    // console.log("Last Search: ", this.lastSearch.queryParams, "term", term, "this.searchService.pageHead", this.searchService.pageNumber, "pageNumber", pageNumber);
    if (this.lastSearch !== null && this.lastSearch.queryParams[0] == term
      && this.lastSearch.queryParams[1] == this.searchService.pageNumber
      && this.lastSearch.queryParams[2] == pageNumber) {
    // console.log("Found Local Search: ", this.lastSearch.queryParams, [term, this.searchService.pageHead, pageNumber]);
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
    } else {
      // this search is not lastSearch, so empty resultList
      this.resultList = [];
      this.startOffset = pageNumber;
    }

    if (term === '' || term === undefined) {
      return null;
    }

    if (term !== this.query) {
      this.query = term;
    }

    this.searchService.searchQuery = this.query;

    let displayPage; // to use for url parameter

    // pageNumber controls the pagination, but it needs to start from 0 if the user puts in 1
    // since the first page in the api starts from page 0.
    if (pageNumber == 1) {
      displayPage = pageNumber;
      pageNumber = 0;
    } else {
      displayPage = pageNumber;
    }

    // console.log("Before", this.query, term);


    // this.searchService.paginatorResults = [];
    // TODO: uses input for all_results (this.paginatorResults should be all_results)
    // this.results = [];
    this.errorMessage = null;


    this.searchService.search_page(term, this.searchService.pageHead, pageNumber)
      .subscribe(
        (results) => {

          if ((results.found <= 0) || (results.found === null)) {
            this.errorMessage = "No Results found";
          }

          this.posts = this.searchService.translatePosts(results.hit);
          this.posts.forEach((i) => {
            this.resultList.push(i);
          });

          this.searchService.paginatorResults = this.resultList;
          // console.log("new resultList", this.resultList);

          // save to local storage
          localStorage.setItem("lastSearch", JSON.stringify({
            queryParams: [term, this.searchService.pageHead, pageNumber],
            resultList: this.resultList, totalOffset: this.searchService.totalApiSearchPages,
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
    // // console.log("startOffset, endOffset", this.startOffset, this.endOffset);
  }


  getButtonClickHandler(event) {
    this.pageNumber = event;  

  // console.log("function getButtonClickHandler()")
  // console.log("\tgetButtonClickHandler() pageNumber received: ", this.pageNumber);
  // console.log("\tlast button that should have data", this.endOffset);
  // console.log("\tresultList from search component", this.resultList);

    // if there is only one page of results for a search result, 
    // do not try to pull the next page of results.
    if(this.searchService.totalApiSearchPages == 1) {
      this.lastClickedButton = this.pageNumber;
    }
    
    if(this.pageNumber != this.lastClickedButton && (this.pageNumber >= (this.endOffset - 2)) ) {

      let pageNumberToStart = ((this.pageNumber - 1) * this.searchService.resultsDisplaySize);
      this.lastClickedButton = this.pageNumber;
    // console.log("lastClickedButton", this.lastClickedButton);

    // console.log("pageNumber TO START PULLING NEW POSTS", pageNumberToStart);
      this.searchService.search_page(this.query, this.searchService.pageHead, pageNumberToStart).subscribe(
        (results) => {
            this.posts = this.searchService.translatePosts(results.hit);
            this.posts.forEach((i) => {
              this.resultList.push(i);
            });

            this.searchService.paginatorResults = this.resultList;
            this.searchService.pageNumber = this.pageNumber;

            localStorage.setItem("lastSearch", JSON.stringify({
              queryParams: [this.query, this.searchService.pageHead, this.pageNumber],
              resultList: this.resultList, totalOffset: this.searchService.totalApiSearchPages,
              totalSearchResultSize: this.searchService.totalApiSearchResults
            }));
            
            this.calculateOffset();
          // console.log("new resultList with more posts", this.resultList);
          // console.log("new last button we should have data for", this.endOffset);
            
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
