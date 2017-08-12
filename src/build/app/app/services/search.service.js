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
var http_1 = require("@angular/http");
//Use instead of Promise
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var post_model_1 = require("../model/post-model");
var asset_model_1 = require("../model/asset-model");
var environment_1 = require("../../environments/environment");
var SearchService = (function () {
    function SearchService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.searchQuery = null;
        this.resultsSize = 12;
        this.pageNumber = 1;
        this.pageHead = 50;
        this.results = [];
        this.cache_posts = [];
        this.total_results = 0;
        this.total_offset = 0;
    }
    // These all can be observables...
    SearchService.prototype.changeResultsDisplayed = function (results) {
        this.resultsSize = results;
        console.log("resultSize change", this.resultsSize);
    };
    SearchService.prototype.changePageStart = function (page) {
        this.pageNumber = page;
    };
    // Returning Search as Observable
    SearchService.prototype.search = function (term) {
        //api call
        // you can replace the get() with https://cdn.rawgit.com/gastate/dalnfrontend/dev-currently-working/test.json to see it working.
        return this._http.get(this.endPoint.search_posts + term).map(function (res) {
            var posts = res.json();
            console.log("Get Search Posts ", posts);
            return posts;
        }).catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    // https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production/posts/search/literacy/10/1
    // format is the search endpoint + the term for search + the number of results per page + the page number (page number == return 50 posts of 2 results then the next two if incremented.)
    SearchService.prototype.search_page = function (term, results, page_size) {
        var _this = this;
        //   console.log("Query:" + this.searchQuery);
        console.log(this.endPoint.search_posts + term + "/" + results + "/" + page_size);
        return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map(function (res) {
            _this.total_results = res.json().found;
            _this.total_offset = Math.ceil(_this.total_results / _this.resultsSize);
            // console.log("number of total offsets", this.total_offset);
            console.log("Search API Response", res.json());
            return res.json();
        }).catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    SearchService.prototype.translatePosts = function (search_results) {
        var _this = this;
        var posts = [];
        //   console.log("translatePosts: ", search_results);
        search_results.forEach(function (i) {
            var post = new post_model_1.Post();
            post.postId = i.id;
            post.title = i.fields.title[0];
            // console.log("Title of post:", post.title);
            // make sure description exists, but if not then add a no description provided.
            post.description = (i.fields.description && i.fields.description[0] ? i.fields.description[0] : "No description provided.");
            // limit post description length
            if (post.description.length > 80) {
                post.description = post.description.substring(0, 50) + "...";
            }
            // limit post title length
            if (post.title.length > 50) {
                post.title = post.title.substring(0, 30) + " ...";
            }
            // console.log("description of post:", post.description);
            post.assetList = _this.translateAssets(i.fields);
            // console.log(post);
            posts.push(post);
        });
        return posts;
    };
    SearchService.prototype.translateAssets = function (fields) {
        // assumes assetList will contain same number of elements across arrays.
        var assetList = [];
        // populate the assetList, but be sure to check that each property exists. These properties are all just strings so it is okay to fill in with a string.
        for (var i = 0; i < fields.assetembedlink.length; i++) {
            assetList[i] = new asset_model_1.Asset();
            assetList[i].assettitle = (fields.assetname && fields.assetname[i] ? fields.assetname[i] : "No asset provided");
            assetList[i].assetType = (fields.assettype && fields.assettype[i] ? fields.assettype[i] : "No asset provided.");
            assetList[i].assetID = (fields.assetid && fields.assetid[i] ? fields.assetid[i] : "No asset provided");
            assetList[i].assetEmbedLink = (fields.assetembedlink && fields.assetembedlink[i] ? fields.assetembedlink[i] : "No asset provided");
            assetList[i].assetLocation = (fields.assetlocation && fields.assetlocation[i] ? fields.assetlocation[i] : "No asset provided.");
            assetList[i].assetDescription = (fields.assetdescription && fields.assetdescription[i] ? fields.assetdescription[i] : "No asset provided.");
        }
        //   console.log(assetList);
        return assetList;
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map