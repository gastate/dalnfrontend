var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
var SearchService = (function () {
    function SearchService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
        this.pageUpdate = new EventEmitter();
        this.endPoint = environment.API_ENDPOINTS;
        this.pageNumber = 0;
    }
    SearchService.prototype.nextPage = function () {
        this.pageNumber++;
    };
    SearchService.prototype.prevPage = function () {
        this.pageNumber--;
    };
    SearchService.prototype.getPageNum = function () {
        return this.pageNumber;
    };
    SearchService.prototype.setPageNum = function (num) {
        this.pageNumber = num;
        console.log(this.pageNumber);
    };
    SearchService.prototype.search = function (term) {
        return this._http.get(this.endPoint.search_posts + term).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        }).catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    SearchService.prototype.search_page = function (term, results, page_size) {
        console.log(this.endPoint.search_posts2 + term + "/" + results + "/" + page_size);
        return this._http.get(this.endPoint.search_posts2 + term + "/" + results + "/" + page_size).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        }).catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Jsonp])
], SearchService);
export { SearchService };
//# sourceMappingURL=../../../../src/app/services/search.service.js.map