import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { SearchService } from "../../../services/search.service";
import { Post } from "../../../model/post-model";
import { CognitoUtil } from "../../../services/cognito.service";

@Component({
  selector: "app-search2",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input() selectedPage: number;
  router: Router;
  activatedRoute: ActivatedRoute;
  searchService: SearchService;
  queryParam: string;
  prevQueryParam: string;
  startParam: number;
  currentPageResults: Post[];
  isAdmin: boolean;
  errorMessage: string;
  loading: boolean;
  resultsPerPage: number;
  totalRecords: number;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    public cognitoService: CognitoUtil,
    _searchService: SearchService
  ) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.searchService = _searchService;
    this.queryParam = "";
    this.startParam = 0;
    this.currentPageResults = [];
    this.isAdmin = false;
    this.errorMessage = null;
    this.resultsPerPage = 12;
    this.totalRecords = 0;
    this.loading = false;
    this.prevQueryParam = "";
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.queryParam) {
        this.prevQueryParam = this.queryParam;
      }
      this.queryParam = this.activatedRoute.snapshot.queryParams["query"];
      let temp = (this.activatedRoute.snapshot.queryParams["page"] == 1)
        ? 0
        : Number(this.activatedRoute.snapshot.queryParams["page"]) - 1;
      this.startParam = this.resultsPerPage * temp;
      if (this.queryParam) {
        this.search();
      }
    });
  }

  search() {
    if (!this.queryParam.trim()) {
      return;
    }
    if (this.prevQueryParam && this.prevQueryParam != this.queryParam) {
      this.startParam = 0;
    }
    this.currentPageResults = [];
    this.loading = true;
    this.errorMessage = null;

    this.searchService
      .search_page(this.queryParam, this.resultsPerPage, this.startParam)
      .subscribe(results => {
        this.loading = false;
        if (!results.found || results.found == 0) {
          this.errorMessage =
            "No results found, please search for something else";
        } else {
          this.totalRecords = results.found;
          this.currentPageResults = results.hits;
        }
      });
  }

  receiveNewPageSelection($event: any) {
    this.router.navigate(["/search"], {
      queryParams: { query: this.queryParam, page: $event }
    });
  }
}
