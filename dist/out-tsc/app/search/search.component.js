var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';
var SearchComponent = (function () {
    function SearchComponent(_postService, _searchService, _location, _router, el, renderer) {
        var _this = this;
        this._postService = _postService;
        this._searchService = _searchService;
        this._location = _location;
        this._router = _router;
        this.el = el;
        this.renderer = renderer;
        this.showUtil = false;
        this.showFull = false;
        this.noResults = false;
        this.searchResults = new EventEmitter();
        this._router.events.subscribe(function (val) {
            _this.route = _this._location.path();
            if (_this.route == "/search") {
                _this.showUtil = true;
                _this.showFull = true;
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSearch = function (term, results, pageNum, $posts) {
        var _this = this;
        var pageNumber = this._searchService.getPageNum();
        if (results == 0) {
            results = 10;
        }
        if (term === '' || term === undefined) {
            return null;
        }
        this._searchService.search_page(term, results, pageNumber)
            .subscribe(function (results) {
            console.log("In Emmitter: ", results);
            if ((results === null) || results.length <= 0) {
                _this.noResults = true;
            }
            else {
                _this.noResults = false;
                _this.posts = results;
            }
            _this.searchResults.emit(results),
                function (err) {
                    console.log(err);
                };
        });
    };
    SearchComponent.prototype.onFakeSearch = function (term, results, pageNumber, $posts) {
        if (results == 0) {
            results = 10;
        }
        if (pageNumber == 0) {
            pageNumber = 0;
        }
        else {
            pageNumber = pageNumber;
            console.log(pageNumber);
            this._searchService.setPageNum(pageNumber);
        }
        if (term === '' || term === undefined) {
            return null;
        }
        this._router.navigateByUrl('/search');
    };
    return SearchComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "query", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SearchComponent.prototype, "searchResults", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'app-search2',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
    }),
    __metadata("design:paramtypes", [PostService,
        SearchService,
        Location,
        Router,
        ElementRef,
        Renderer])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=../../../../src/app/search/search.component.js.map