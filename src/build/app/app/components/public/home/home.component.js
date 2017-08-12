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
var post_service_1 = require("../../../services/post.service");
var search_service_1 = require("../../../services/search.service");
var user_login_service_1 = require("../../../services/user-login.service");
// import { routerTransition } from '../router.animations';
require("rxjs/add/observable/fromPromise");
var HomeComponent = (function () {
    function HomeComponent(_postService, _searchService, userService) {
        this._postService = _postService;
        this._searchService = _searchService;
        this.userService = userService;
        this.title = 'DALN Frontend';
        this.searchPosts = [];
        this.posts = [];
        this.showPage = true;
        this.loading = false;
        this.failed = false;
        this.userService.isAuthenticated(this);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPagePosts();
    };
    HomeComponent.prototype.getPagePosts = function () {
        var _this = this;
        this.loading = true;
        if (this._searchService.cache_posts.length === 0) {
            this._searchService.search_page("games", 8, 0).subscribe(function (data) {
                _this.posts = _this._searchService.translatePosts(data.hit);
                _this._searchService.cache_posts = _this.posts;
                _this.loading = false;
            }, //Bind to view
            function (//Bind to view
                err) {
                _this.loading = false;
                _this.failed = true;
                // Log errors if any
                console.log(err);
            });
        }
        else {
            this.posts = this._searchService.cache_posts;
            this.loading = false;
        }
        // Use for development if search is down.
        // this._postService.getMockPosts().then(
        //     (data) => {
        //         this.posts = this._searchService.translatePosts(data.hit);
        //         this.loading = false;
        //     },
        //     err => {
        //         this.loading = false;
        //         this.failed = true;
        //         console.log(err);
        // });
    };
    HomeComponent.prototype.showHomePage = function (event) {
        this.showPage = event;
    };
    HomeComponent.prototype.displayResults = function (event) {
        //   console.log("Search hit.", event);
        this.searchPosts = event;
    };
    HomeComponent.prototype.clearSearch = function () {
        this.searchPosts = [];
        this._searchService.searchQuery = "";
        // add to search history of browser
    };
    HomeComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            this.getdev = false;
            console.log("get dev false");
        }
        else {
            this.getdev = true;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        search_service_1.SearchService,
        user_login_service_1.UserLoginService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map