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
var router_1 = require("@angular/router");
var search_service_1 = require("../../../services/search.service");
var PaginationComponent = (function () {
    function PaginationComponent(_searchService, router) {
        this.router = router;
        this.buttonArray = []; // holds all possible buttons
        this.displayButton = []; // for displaying buttons
        this.pagedButtonArray = []; // holds the current view buttons.
        this.searchService = _searchService;
        this.currentPageEmitter = new core_1.EventEmitter();
        // router.events.subscribe((val) => {
        //     this.buttonArray = [];
        // });
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.getdev = false;
        // intiate values from service.
        this.resultsPerPage = this.searchService.resultsSize;
        this.startOffset = this.searchService.pageNumber;
        this.pageHead = this.searchService.pageHead;
        console.log("pagination resultList: ", this.resultList);
        //  console.log("start vars for pagination", this.resultsPerPage, this.startOffset, this.pageHead);
    };
    /**
     * getPagedPost is the button click event to calulate the next indicies to split resultList by to get pagedPost and emit to the parent the current page.
     * @param  {number} event button number that was clicked on. Will output to parent component.
     */
    PaginationComponent.prototype.getPagedPost = function (event) {
        if (event && event.target) {
            this.currentPage = event.target.innerText; // button is just the event's innerText.
            this.currentPageEmitter.emit(this.currentPage); // emit to parent the currentPage.
            this.calculateIndicies(); // calculateIndicies to split the pagedPost from resultList.
        }
    };
    PaginationComponent.prototype.calculateIndicies = function () {
        // if this.currentPage (the button number clicked) is null,
        // then get the startOffset to calculate the indicies.
        if (!this.currentPage) {
            console.log("currentPage null, setting to startOffset", this.startOffset);
            this.currentPage = this.startOffset;
            this.resultsPerPage = this.searchService.resultsSize;
        }
        //   console.log("currentPage", this.currentPage);
        //   console.log("resultsPerPage", this.resultsPerPage);
        var firstIndex = ((this.currentPage * this.resultsPerPage) - this.resultsPerPage);
        var lastIndex = (firstIndex + this.resultsPerPage - 1); // minus one since index of array starts at 0.
        console.log("lastIndex, firstIndex", lastIndex, firstIndex);
        // populate pagedPost and push to the view.
        this.populatePosts(firstIndex, lastIndex);
    };
    PaginationComponent.prototype.calculateButtonRange = function () {
        console.log("total_offset", this.searchService.total_offset);
        for (var i = 0; i < this.searchService.total_offset; i++) {
            this.buttonArray.push(i + 1);
        }
        this.sliceButtonRange();
    };
    PaginationComponent.prototype.sliceButtonRange = function () {
        var buttonSlice = 6;
        var firstIndex = ((this.currentPage * this.resultsPerPage) - this.resultsPerPage);
        var startButton;
        if (firstIndex == 0) {
            startButton = 0;
        }
        else {
            startButton = this.currentPage - 3;
        }
        if (this.endOffset < this.searchService.total_offset) {
            this.displayButton = this.buttonArray.slice(startButton, this.endOffset + buttonSlice);
        }
        else {
            this.displayButton = this.buttonArray;
        }
        console.log("Button Array", this.buttonArray);
        console.log("Display Button", this.displayButton);
    };
    PaginationComponent.prototype.populatePosts = function (firstIndex, lastIndex) {
        console.log("resultList:", this.resultList);
        // + 1 on lastIndex since slice() goes from 0 to actual number - 1
        this.pagedPost = this.resultList.slice(firstIndex, lastIndex + 1);
        console.log("PagedPost:", this.pagedPost);
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes['startOffset']) {
            console.log("startOffset change", this.startOffset);
            this.buttonArray = [];
            this.calculateButtonRange();
            this.sliceButtonRange();
            this.calculateIndicies();
        }
        if (changes['resultList']) {
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
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PaginationComponent.prototype, "resultList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "startOffset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "endOffset", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PaginationComponent.prototype, "currentPageEmitter", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html'
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService, router_1.Router])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map