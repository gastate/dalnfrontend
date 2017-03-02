var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';
var SearchComponent = (function () {
    function SearchComponent(_postService, _searchService, _router) {
        this._postService = _postService;
        this._searchService = _searchService;
        this._router = _router;
        this.noResults = false;
        this.searchResults = new EventEmitter();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSearch = function (term) {
        var _this = this;
        if (term === '' || term === undefined) {
            return null;
        }
        this._searchService.search_page(term, 10, 1)
            .subscribe(function (results) {
            console.log("In Emmitter: ", results);
            if ((results === null) || results.length <= 0) {
                _this.noResults = true;
            }
            else {
                _this.noResults = false;
            }
            _this.searchResults.emit(results),
                function (err) {
                    console.log(err);
                };
        });
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
        providers: [SearchService]
    }),
    __metadata("design:paramtypes", [PostService,
        SearchService,
        Router])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=../../../../src/app/search/search.component.js.map