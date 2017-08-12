"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var search_service_1 = require("../../../services/search.service");
var post_service_1 = require("../../../services/post.service");
var SearchComponent = (function () {
    function SearchComponent(location, router, _postService, _searchService) {
        var _this = this;
        this._postService = _postService;
        this.pageParameter = 0;
        this.noResults = false;
        this.location = location;
        this.router = router;
        this.searchService = _searchService;
        this.showHomePage = new core_1.EventEmitter();
        // this.searchResults = new EventEmitter<Post[]>();
        this.posts = [];
        this.results = [];
        this.resultList = this.searchService.results;
        this.sub = router.events.subscribe(function (val) {
            // console.log(val instanceof NavigationEnd);
            // console.log(val.url);
            var route = val.url;
            if (route == "/home") {
                console.log("in home");
                _this.showHomePage.emit(true);
            }
            else if (route.startsWith("/search")) {
                console.log("in search");
                _this.showHomePage.emit(false);
            }
            else {
                console.log("in somewhere else");
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.startOffset = this.searchService.pageNumber;
        this.errorMessage = null;
        this.showPagination = true;
        this.resultsPerPage = this.searchService.resultsSize;
        this.pageNumber = this.searchService.pageNumber;
        this.total_offset = this.searchService.total_offset;
        this.total_results = this.searchService.total_results;
    };
    SearchComponent.prototype.onSearch = function (term, results, index) {
        //
        //  if(this.resultsPerPage != results) {
        //      this.resultsPerPage = results;
        //      this.searchService.changeResultsDisplayed(this.resultsPerPage);
        //  }
        //
        //  if(this.pageNumber != pageNumber) {
        //      this.pageNumber = pageNumber;
        //      this.searchService.changePageStart(this.pageNumber);
        //  }
        var _this = this;
        if (term === '' || term === undefined) {
            return null;
        }
        var displayPage; // to use for url parameter
        // index controls the pagination, but it needs to start from 0 if the user puts in 1
        // since the first page in the api starts from page 0.
        if (index == 1) {
            displayPage = index;
            index = 0;
        }
        else {
            displayPage = index;
        }
        // console.log(displayPage);
        // console.log(index);
        this.searchService.results = [];
        this.searchService.search_page(term, this.searchService.pageHead, index)
            .subscribe(function (results) {
            if ((results.found <= 0) || (results.found === null)) {
                _this.errorMessage = "No results found";
            }
            _this.posts = _this.searchService.translatePosts(results.hit);
            _this.posts.forEach(function (i) {
                _this.results.push(i);
            });
            _this.resultList = _this.results;
            _this.searchService.results = _this.results;
            console.log("new resultList", _this.resultList);
            _this.showPagination = false;
            _this.showHomePage.emit(false);
            _this.calculateOffset();
            _this.query = term;
            _this.router.navigate(['/search'], { queryParams: { query: term, page: _this.currentPage } });
            // console.log("Search resultList", this.resultList);
            // this.searchResults.emit(this.resultList);
        }, function (err) {
            console.log(err);
        });
    };
    SearchComponent.prototype.calculateOffset = function () {
        this.startOffset = this.searchService.pageNumber;
        // console.log("Parent Offset", this.startOffset);
        this.endOffset = Math.floor(Math.max(this.resultList.length / this.searchService.resultsSize, 1));
        console.log("startOffset, endOffset", this.startOffset, this.endOffset);
    };
    SearchComponent.prototype.getResultHandler = function (event) {
        console.log(this.resultList);
        this.currentOffset = event;
        this.currentPage = event;
        this.router.navigate(['/search'], { queryParams: { query: this.query, page: this.currentPage } });
        console.log("currentOffset", this.currentOffset);
        console.log("startOffset", this.startOffset);
        console.log("endOffset", this.endOffset);
        var leftOverItems = this.resultList.length % this.searchService.resultsSize;
        console.log("leftover", leftOverItems);
        if ((this.currentOffset < this.startOffset) || (this.currentOffset > this.endOffset)) {
            var index = ((this.currentOffset * this.searchService.resultsSize) - this.searchService.resultsSize);
            console.log("index outside offset, new index is: ", index);
            this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, index + leftOverItems);
        }
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return SearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SearchComponent.prototype, "showHomePage", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search2',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router,
        post_service_1.PostService,
        search_service_1.SearchService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map