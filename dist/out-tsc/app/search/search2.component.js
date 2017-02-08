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
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../services/search.service';
import { PostService } from '../services/post.service';
var SearchComponent2 = (function () {
    function SearchComponent2(_postService, _searchService, _router) {
        this._postService = _postService;
        this._searchService = _searchService;
        this._router = _router;
        this.searchTerm = new Subject();
        this.searchResults = new EventEmitter();
    }
    SearchComponent2.prototype.ngOnInit = function () {
    };
    SearchComponent2.prototype.onSearch = function (term) {
        var _this = this;
        if (term === '' || term === undefined) {
            return null;
        }
        this._searchService.search(term)
            .subscribe(function (data) {
            _this.searchResults.emit(data),
                function (err) {
                    console.log(err);
                };
        });
    };
    return SearchComponent2;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], SearchComponent2.prototype, "query", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SearchComponent2.prototype, "searchResults", void 0);
SearchComponent2 = __decorate([
    Component({
        selector: 'app-search2',
        templateUrl: './search2.component.html',
        styleUrls: ['./search.component.css'],
        providers: [SearchService]
    }),
    __metadata("design:paramtypes", [PostService,
        SearchService,
        Router])
], SearchComponent2);
export { SearchComponent2 };
//# sourceMappingURL=../../../../src/app/search/search2.component.js.map