webpackJsonp([2,4],{

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(528);


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const http_1 = __webpack_require__(203);
//Use instead of Promise
const Rx_1 = __webpack_require__(487);
// Import RxJs required methods
__webpack_require__(205);
__webpack_require__(204);
const environment_1 = __webpack_require__(141);
//Only used in Mock
__webpack_require__(295);
const mock_postlist_1 = __webpack_require__(655);
let PostService = class PostService {
    constructor(_http) {
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
    }
    getAllPosts() {
        //api call
        return this._http.get(this.endPoint.all_posts).map((res) => {
            let posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        })
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
    ;
    getPostById(id) {
        return this._http.get(this.endPoint.post + id).map((res) => res.json())
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
    getPreview(postAssets) {
        if (postAssets) {
            let preview;
            preview = postAssets.find((asset) => asset.assetType === 'Audio/Video');
            if (preview) {
                return preview;
            }
            else {
                preview = postAssets.find((asset) => asset.assetType === 'Audio');
                if (preview) {
                    return preview;
                }
                else {
                    return postAssets[0];
                }
            }
        }
    }
    //Mock Services
    getMockPosts() {
        //replace with api call
        return Promise.resolve(mock_postlist_1.POSTS);
    }
    filterPostsById(posts, id) {
        let filtered = posts.find((post) => post.postId === id);
        return Promise.resolve(filtered);
    }
    getMockPostById(id) {
        // replace with api call
        return this.filterPostsById(mock_postlist_1.POSTS, id);
    }
};
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], PostService);
exports.PostService = PostService;
var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development";
const all_posts = api_url + "/posts/all";
const create_post = api_url + "/posts/create";
const page_posts = api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
const post = api_url + "/posts/get/";
const search_posts = api_url + "/posts/search/";
const upload_media = api_url + "/upload";
const update_post = api_url + "/update";
exports.environment = {
    production: false,
    API_ENDPOINTS: {
        all_posts: all_posts,
        api_url: api_url,
        create_post: create_post,
        page_posts: page_posts,
        post: post,
        search_posts: search_posts,
        upload_media: upload_media,
        update_post: update_post
    }
};
// const api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
// const all_posts = api_url + "/posts/all";
// const post = api_url + "/posts/get/";
// // const create_post = api_url + "/posts/create";
// // const upload_media = api_url + "/upload";
// // const update_post = api_url + "/update";
// const search_posts = api_url + "/posts/search/";
//
// export const environment = {
//   production: true,
//   API_ENDPOINTS: {
//     api_url: api_url,
//     all_posts: all_posts,
//     post: post,
//     // create_post: create_post,
//     // upload_media: upload_media,
//     // update_post: update_post
//     search_posts: search_posts
//   }
// };
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const http_1 = __webpack_require__(203);
//Use instead of Promise
const Rx_1 = __webpack_require__(487);
// Import RxJs required methods
__webpack_require__(205);
__webpack_require__(204);
__webpack_require__(295);
const environment_1 = __webpack_require__(141);
let SearchService = class SearchService {
    constructor(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
        this.pageUpdate = new core_1.EventEmitter();
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.pageNumber = 0;
        this.searchQuery = null;
    }
    nextPage() {
        this.pageNumber++;
        //   this.pageUpdate.emit(this.pageNumber);
    }
    prevPage() {
        this.pageNumber--;
        //   this.pageUpdate.emit(this.pageNumber);
    }
    getPageNum() {
        return this.pageNumber;
    }
    setPageNum(num) {
        this.pageNumber = num;
        console.log(this.pageNumber);
    }
    // Returning Search as Observable
    search(term) {
        //api call
        // you can replace the get() with https://cdn.rawgit.com/gastate/dalnfrontend/dev-currently-working/test.json to see it working.
        return this._http.get(this.endPoint.search_posts + term).map((res) => {
            let posts = res.json();
            console.log("Get Search Posts ", posts);
            return posts;
        }).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
    // https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production/posts/search/literacy/10/1
    // format is the search endpoint + the term for search + the number of results per page + the page number (page number == return 50 posts of 2 results then the next two if incremented.)
    search_page(term, results, page_size) {
        console.log(this.endPoint.search_posts + term + "/" + results + "/" + page_size);
        return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map((res) => {
            let posts = res.json();
            console.log("Get Search Page Posts", posts);
            return posts;
        }).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
};
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof http_1.Jsonp !== "undefined" && http_1.Jsonp) === "function" && _b || Object])
], SearchService);
exports.SearchService = SearchService;
var _a, _b;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
let AboutComponent = class AboutComponent {
    constructor() {
        this.title = 'About';
    }
    ngOnInit() {
    }
};
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__(823),
        styles: [__webpack_require__(813)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
let AppComponent = class AppComponent {
    constructor() {
        this._class = "container";
    }
    toggleFull() {
        if (this._class == "container") {
            this._class = "container-fluid";
        }
        else {
            this._class = "container";
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AppComponent.prototype, "_class", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'daln-app',
        template: __webpack_require__(825)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
let ContactComponent = class ContactComponent {
    constructor() {
        this.title = 'Contact';
    }
    ngOnInit() {
    }
};
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        template: __webpack_require__(826),
        styles: [__webpack_require__(815)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const post_service_1 = __webpack_require__(127);
const search_service_1 = __webpack_require__(180);
// import { routerTransition } from '../router.animations';
// TEMP code to run production and dev environments
const environment_1 = __webpack_require__(141);
let HomeComponent = class HomeComponent {
    constructor(elementRef, _postService, _searchService) {
        this.elementRef = elementRef;
        this._postService = _postService;
        this._searchService = _searchService;
        this.title = 'DALN Frontend';
        this.isInProd = environment_1.environment.production;
    }
    ngOnInit() {
        this.getPagePosts();
    }
    getPagePosts() {
        this._searchService.search_page("games", 10, 1).subscribe((data) => {
            this.posts = data;
        }, //Bind to view
        err => {
            // Log errors if any
            console.log(err);
        });
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(827),
        styles: [__webpack_require__(816)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _b || Object, typeof (_c = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _c || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class Post {
}
exports.Post = Post;
//# sourceMappingURL=post-model.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'app-page-not-found',
        template: __webpack_require__(828),
        styles: [__webpack_require__(817)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
const common_1 = __webpack_require__(20);
const post_service_1 = __webpack_require__(127);
const post_model_1 = __webpack_require__(443);
__webpack_require__(489);
let PostDetailComponent = class PostDetailComponent {
    constructor(_postService, _route, _location) {
        this._postService = _postService;
        this._route = _route;
        this._location = _location;
        this.isPDF = false;
    }
    ngOnInit() {
        this._route.params.switchMap((params) => this._postService.getPostById(params['id']))
            .subscribe((details) => {
            this.postDetail = details;
            // console.log(details);
            // console.log()
            this.selectedAsset = this._postService.getPreview(this.postDetail.assetList);
        });
    }
    goBack() {
        this._location.back();
    }
    onSelectedAsset(asset) {
        this.selectedAsset = asset;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof post_model_1.Post !== "undefined" && post_model_1.Post) === "function" && _a || Object)
], PostDetailComponent.prototype, "postDetail", void 0);
PostDetailComponent = __decorate([
    core_1.Component({
        selector: 'post-detail',
        template: __webpack_require__(830),
        styles: [__webpack_require__(819)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _d || Object])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=post-detail.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const search_service_1 = __webpack_require__(180);
let PostListComponent = class PostListComponent {
    constructor(page) {
        this.page = page;
    }
    ngOnInit() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PostListComponent.prototype, "postList", void 0);
PostListComponent = __decorate([
    core_1.Component({
        selector: 'post-list',
        template: __webpack_require__(832),
        styles: [__webpack_require__(821)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _a || Object])
], PostListComponent);
exports.PostListComponent = PostListComponent;
var _a;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const common_1 = __webpack_require__(20);
const router_1 = __webpack_require__(87);
const search_service_1 = __webpack_require__(180);
const post_service_1 = __webpack_require__(127);
let SearchComponent = class SearchComponent {
    constructor(_postService, _searchService, _location, _router) {
        this._postService = _postService;
        this._location = _location;
        this._router = _router;
        this.changeView = new core_1.EventEmitter();
        this.showUtil = false;
        this.showFull = false;
        this.noResults = false;
        this.searchResults = new core_1.EventEmitter();
        this.searchService = _searchService;
        this._router.events.subscribe((val) => {
            // see also
            this.route = this._location.path();
            if (this.route == "/search") {
                this.showUtil = true; // handles utility functions for ux.
                this.showFull = true; // handles expansion of search bar
            }
        });
    }
    ngOnInit() {
    }
    onSearch(term, results, pageNum, $posts) {
        let pageNumber = this.searchService.getPageNum();
        if (results == 0) {
            results = 10;
        }
        if (term === '' || term === undefined) {
            return null;
        }
        this.searchService.search_page(term, results, pageNumber)
            .subscribe((results) => {
            console.log("In Emmitter: ", results);
            if ((results === null) || results.length <= 0) {
                this.noResults = true;
            }
            else {
                this.noResults = false;
                this.posts = results;
            }
            this.searchResults.emit(results),
                err => {
                    console.log(err);
                };
        });
        // this._router.navigateByUrl('/search');
    }
    onFakeSearch(term, results, pageNumber, $posts) {
        if (results == 0) {
            results = 10;
        }
        if (pageNumber == 0) {
            pageNumber = 0;
        }
        else {
            pageNumber = pageNumber;
            console.log(pageNumber);
            this.searchService.setPageNum(pageNumber);
        }
        if (term === '' || term === undefined) {
            return null;
        }
        this.changeView.emit(false);
        this._router.navigateByUrl('/search');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "query", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SearchComponent.prototype, "searchResults", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], SearchComponent.prototype, "changeView", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search2',
        template: __webpack_require__(833),
        styles: [__webpack_require__(822)],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _c || Object, typeof (_d = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _d || Object, typeof (_e = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/submit-form/submit-form.module": [
		1126,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 527;


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(657);
const platform_browser_dynamic_1 = __webpack_require__(613);
const core_1 = __webpack_require__(0);
const environment_1 = __webpack_require__(141);
const _1 = __webpack_require__(650);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
let AppFooterComponent = class AppFooterComponent {
    constructor(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    twitterView() {
        //
        //    !function(d,s,id){
        //        var js: any,
        //            fjs=d.getElementsByTagName(s)[0],
        //            p='https';
        //        if(!d.getElementById(id)){
        //            js=d.createElement(s);
        //            js.id=id;
        //            js.src=p+"://platform.twitter.com/widgets.js";
        //            fjs.parentNode.insertBefore(js,fjs);
        //        }
        //    }
        //    (document,"script","twitter-wjs");
    }
    faceBookView() {
        //
        // (function(d, s, id) {
        //   var js, fjs = d.getElementsByTagName(s)[0];
        //   if (d.getElementById(id)) return;
        //   js = d.createElement(s); js.id = id;
        //   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        //   fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));
    }
};
AppFooterComponent = __decorate([
    core_1.Component({
        selector: 'daln-footer',
        template: __webpack_require__(824),
        styles: [__webpack_require__(814)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], AppFooterComponent);
exports.AppFooterComponent = AppFooterComponent;
var _a, _b;
//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
const home_component_1 = __webpack_require__(442);
const page_not_found_component_1 = __webpack_require__(444);
const post_list_component_1 = __webpack_require__(446);
const post_detail_component_1 = __webpack_require__(445);
const about_component_1 = __webpack_require__(439);
const contact_component_1 = __webpack_require__(441);
const search_component_1 = __webpack_require__(447);
const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'posts',
        component: post_list_component_1.PostListComponent
    },
    {
        path: 'detail/:id',
        component: post_detail_component_1.PostDetailComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'create',
        loadChildren: 'app/submit-form/submit-form.module#SubmitFormModule'
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

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
// Defaults
const platform_browser_1 = __webpack_require__(94);
const core_1 = __webpack_require__(0);
const forms_1 = __webpack_require__(59);
const http_1 = __webpack_require__(203);
//prevent 404 on refresh in s3
//See http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
const common_1 = __webpack_require__(20);
// Components
const ng_bootstrap_1 = __webpack_require__(645);
const app_component_1 = __webpack_require__(440);
const app_footer_component_1 = __webpack_require__(647);
const home_component_1 = __webpack_require__(442);
const post_list_component_1 = __webpack_require__(446);
const post_item_component_1 = __webpack_require__(653);
const post_detail_component_1 = __webpack_require__(445);
const about_component_1 = __webpack_require__(439);
const contact_component_1 = __webpack_require__(441);
const post_service_1 = __webpack_require__(127);
const search_service_1 = __webpack_require__(180);
const app_routing_module_1 = __webpack_require__(648);
const player_component_1 = __webpack_require__(652);
const search_component_1 = __webpack_require__(447);
const slider_component_1 = __webpack_require__(656);
const page_not_found_component_1 = __webpack_require__(444);
const safe_pipe_1 = __webpack_require__(654);
//Custom
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            post_list_component_1.PostListComponent,
            post_item_component_1.PostItemComponent,
            app_footer_component_1.AppFooterComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            post_detail_component_1.PostDetailComponent,
            player_component_1.PlayerComponent,
            search_component_1.SearchComponent,
            slider_component_1.SliderComponent,
            page_not_found_component_1.PageNotFoundComponent,
            safe_pipe_1.SafePipe
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        providers: [post_service_1.PostService, search_service_1.SearchService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(440));
__export(__webpack_require__(649));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by lkittogsuedu on 11/30/16.
 */

class Asset {
}
exports.Asset = Asset;
//# sourceMappingURL=asset-model.js.map

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const platform_browser_1 = __webpack_require__(94);
const asset_model_1 = __webpack_require__(651);
const common_1 = __webpack_require__(20);
const router_1 = __webpack_require__(87);
let PlayerComponent = class PlayerComponent {
    constructor(sanitizer, _location, _router) {
        this.sanitizer = sanitizer;
        this._location = _location;
        this._router = _router;
    }
    ngOnInit() {
        this._router.events.subscribe((val) => {
            // see also
            this.route = this._location.path();
            this.matchRoute = "/detail";
            if (this.route.indexOf(this.matchRoute) !== -1) {
                this.thumb = false;
            }
        });
        this.getUrl(this.postAsset);
    }
    getUrl(asset) {
        if (this.postAsset.assetType === "Audio/Video") {
            this.url = this.postAsset.assetEmbedLink;
        }
        else if (this.postAsset.assetType === "Audio") {
            var audioID = this.postAsset.assetEmbedLink;
            var pattern = /\d+/g;
            audioID = pattern.exec(audioID).toString();
            this.url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID;
        }
        else if (this.postAsset.assetType === "Text") {
            if (/\.(pdf)$/i.test(this.postAsset.assetEmbedLink)) {
                this.isPDF = true;
                this.url = this.postAsset.assetEmbedLink;
            }
            else {
                this.url = null;
            }
        }
        else {
            this.url = null;
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof asset_model_1.Asset !== "undefined" && asset_model_1.Asset) === "function" && _a || Object)
], PlayerComponent.prototype, "postAsset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PlayerComponent.prototype, "thumb", void 0);
PlayerComponent = __decorate([
    core_1.Component({
        selector: 'app-player',
        template: __webpack_require__(829),
        styles: [__webpack_require__(818)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
const post_service_1 = __webpack_require__(127);
const post_model_1 = __webpack_require__(443);
let PostItemComponent = class PostItemComponent {
    constructor(_router, _postService) {
        this._router = _router;
        this._postService = _postService;
    }
    //****************************
    getPreview(postAssets) {
        return this._postService.getPreview(postAssets);
    }
    onSelect(post) {
        this.selectedPost = post;
        //goto detail page
        this.gotoDetail();
    }
    gotoDetail() {
        this._router.navigate(['/detail', this.selectedPost.postId]);
    }
    ngOnInit() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof post_model_1.Post !== "undefined" && post_model_1.Post) === "function" && _a || Object)
], PostItemComponent.prototype, "postItem", void 0);
PostItemComponent = __decorate([
    core_1.Component({
        selector: 'post-item',
        template: __webpack_require__(831),
        styles: [__webpack_require__(820)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _c || Object])
], PostItemComponent);
exports.PostItemComponent = PostItemComponent;
var _a, _b, _c;
//# sourceMappingURL=post-item.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const platform_browser_1 = __webpack_require__(94);
let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe = __decorate([
    core_1.Pipe({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], SafePipe);
exports.SafePipe = SafePipe;
var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.POSTS = [
    {
        postId: "fae17a81-4513-476c-9649-a1738852d542",
        title: "Joshua Brunner's Literacy Narrative",
        description: "This is my boring story.",
        identifierUri: "http://hdl.handle.net/2374.DALN/60",
        dateAccessioned: "2008-11-13T20:45:19Z",
        dateAvailable: "2008-11-13T20:45:19Z",
        dateCreated: "2008-11-13",
        dateIssued: "2008-11-13T20:45:19Z",
        rightsConsent: "adult",
        rightsRelease: "adult",
        contributorAuthor: ["Brunner, Joshua"],
        creatorGender: ["Male"],
        creatorYearOfBirth: ["1986"],
        coveragePeriod: ["1980-1989", "1990-1999", "2000-2009"],
        assetList: [{
                assettitle: "Josh Brunner_final.mp3",
                assetType: "Audio",
                assetID: "a18e63be-04b8-4d67-bb83-d996e37d8afc",
                assetDescription: "None",
                assetEmbedLink: "https://api.soundcloud.com/tracks/292286292",
                assetLocation: "http://soundcloud.com/user-15072191/joshua-brunners-literacy-1"
            }]
    },
    {
        postId: "ce6d88fd-67e9-4499-9778-31def4ec263f",
        title: "Jeff Welbaum's Literacy Narrative",
        description: "",
        identifierUri: "http://hdl.handle.net/2374.DALN/66",
        dateAccessioned: "2008-12-18T18:56:20Z",
        dateAvailable: "2008-12-18T18:56:20Z",
        dateCreated: "2008-12-18",
        contributorAuthor: ["Welbaum, Jeff"],
        creatorGender: ["male"],
        creatorClass: ["working class"],
        creatorYearOfBirth: ["1988"],
        coveragePeriod: ["1980-1989", "1990-1999", "2000-2009"],
        assetList: [{
                assettitle: "Jeff Welbaum_final.mp3",
                assetType: "Audio",
                assetID: "d887c393-ea8b-4f7e-8890-47aa7627d3b3",
                assetDescription: "Jeff Welbaum's Literacy Narrative",
                assetEmbedLink: "https://api.soundcloud.com/tracks/292287360",
                assetLocation: "http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"
            }]
    },
    {
        postId: "32c922fe-96e9-46e9-a297-0507519fa7df",
        title: "Clayton Buffer's Literacy Narrative",
        description: "A sophomore undergraduate discusses folklore and explores the study's possibilities.",
        identifierUri: "http://hdl.handle.net/2374.DALN/99",
        dateAccessioned: "2009-02-25T09:20:46Z",
        dateAvailable: "2009-02-25T09:20:46Z",
        dateCreated: "2009-02-25",
        dateIssued: "2009-02-25T09:20:46Z",
        rightsConsent: "adult",
        rightsRelease: "adult",
        contributorAuthor: ["Buffer, Clayton"],
        creatorGender: ["Male"],
        coverageStateProvince: ["Ohio"],
        subject: ["ebonics", "university district", "folklore"],
        assetList: [{
                assettitle: "cb_final.mp3",
                assetType: "Audio",
                assetID: "ee094a7b-867a-4204-beda-038cdb7fa469",
                assetDescription: "None",
                assetEmbedLink: "https://api.soundcloud.com/tracks/292291281",
                assetLocation: "http://soundcloud.com/user-15072191/clayton-buffers-literacy"
            }]
    }
];
//# sourceMappingURL=mock-postlist.js.map

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

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
// Import Component form the angular core package
const core_1 = __webpack_require__(0);
// Compoent Decorator
let SliderComponent = class SliderComponent {
    constructor() {
        this.isVisible = true;
        this.visibility = 'shown';
    }
    ngOnChanges() {
        this.visibility = this.isVisible ? 'hidden' : 'shown';
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "isVisible", void 0);
SliderComponent = __decorate([
    core_1.Component({
        //Name of our tag
        selector: 'app-slider',
        //Template for the tag
        template: __webpack_require__(834),
        //Styles for the tag
        styles: [`slider.component.css`],
        animations: [
            core_1.trigger('visibilityChanged', [
                core_1.state('shown', core_1.style({ opacity: 1 })),
                core_1.state('hidden', core_1.style({ opacity: 0, display: 'none' })),
                core_1.transition('* => *', core_1.animate('.5s'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(671);
__webpack_require__(664);
__webpack_require__(660);
__webpack_require__(666);
__webpack_require__(665);
__webpack_require__(663);
__webpack_require__(662);
__webpack_require__(670);
__webpack_require__(659);
__webpack_require__(658);
__webpack_require__(668);
__webpack_require__(661);
__webpack_require__(669);
__webpack_require__(667);
__webpack_require__(672);
__webpack_require__(1123);
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "/* About CSS\r\n-------------------------------------------------- */\r\n\r\nh1 {\r\n    margin-top: 5%;\r\n}\r\n\r\n\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\nh1 {\r\n    margin-top: 5%;\r\n}\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/*#sc-widget {\r\n    width : \"100%\";\r\n    height : \"100%\";\r\n}\r\n\r\n.sproutvideo-player {\r\n    width : \"100%\";\r\n    height : \"100%\";\r\n}*/\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{title}}</h1>\r\n\r\n  <div class=\"about-info\">\r\n      <div id=\"about-image\">\r\n          <img src=\"assets/img/osugsu.jpg\" alt=\"\" />\r\n      </div>\r\n\r\n\r\n      <p>\r\n     Co-sponsored by The Ohio State University and Georgia State University, The DALN (daln.osu.edu) is a publicly available archive of personal literacy narratives in a variety of formats (text, video, audio) that together provide a historical record of the literacy practices and values of contributors, as those practices and values change.\r\n     </p>\r\n\r\n     <p>\r\n         The DALN invites people of all ages, races, communities, backgrounds, and interests to contribute stories about how — and in what circumstances — they read, write, and compose meaning, and how they learned to do so (or helped others learn).\r\n     </p>\r\n\r\n     <p>\r\n         We welcome personal narratives about reading and composing all kinds of texts, both formal and informal: diaries, blogs, poetry, music and musical lyrics, fan zines, school papers, videos, sermons, gaming profiles, speeches, chatroom exchanges, text messages, letters, stories, photographs, etc. We also invite contributors to supplement their narratives with samples of their own writing (papers, letters, zines, speeches, etc.) and compositions (music, photographs, videos, sound recordings, etc.).\r\n     </p>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n<daln-footer></daln-footer>\r\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\r\n\r\n        <h3 class=\"footer-heading\">Connect With Us</h3>\r\n        <!-- social begin here -->\r\n            <ul class=\"socicon\">\r\n              <!-- <li><a href=\"\" class=\"share-icon\"> </a></li> -->\r\n              <!-- <li><a href=\"#\" class=\"google\"> </a></li> -->\r\n              <li><a href=\"https://www.facebook.com/dalnarchive/\" target=\"_blank\" class=\"facebook\"> </a></li>\r\n              <li><a href=\"https://twitter.com/dalnarchive\" target=\"_blank\" class=\"twitter\"> </a></li>\r\n              <!-- <li><a href=\"#\" class=\"flickr\"> </a></li> -->\r\n              <!-- <li><a href=\"#\" class=\"dribbble\"> </a></li> -->\r\n              <!-- <li class=\"last\"><a href=\"#\" class=\"vimeo\"> </a></li> -->\r\n            </ul>\r\n\r\n        <h3 class=\"footer-heading\">Who We Are</h3>\r\n            <p>\r\n                Since 2007, the Digital Archive of Literacy Narratives has been collecting stories from the public about their experiences learning to read, write, and compose with different media types. Containing over 6000 individual narratives in text, video, audio, and other forms, the DALN is a resource not only for scholars and teachers, but the public at large. Tell us your story. <a routerLink=\"/create\">Submit today!</a>\r\n            </p>\r\n\r\n      </div>\r\n\r\n      <!-- tweets begin here -->\r\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\r\n        <h3 class=\"footer-heading\">Latest Tweets</h3>\r\n        <div class=\"tweets\">\r\n\r\n        </div>\r\n        <a class=\"twitter-timeline\" data-width=\"300\" data-height=\"330\" data-theme=\"dark\" href=\"https://twitter.com/dalnarchive\" target=\"_blank\">Tweets by dalnarchive</a>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\r\n        <h3 class=\"footer-heading\">From Facebook</h3>\r\n        <div class=\"fb-page\"\r\n            data-href=\"https://www.facebook.com/dalnarchive/\"\r\n            data-tabs=\"timeline\"\r\n            data-width=\"300\"\r\n            data-height=\"330\"\r\n            data-small-header=\"false\"\r\n            data-adapt-container-width=\"true\"\r\n            data-hide-cover=\"false\"\r\n            data-show-facepile=\"false\">\r\n            <blockquote cite=\"https://www.facebook.com/dalnarchive/\" class=\"fb-xfbml-parse-ignore\">\r\n                <a href=\"https://www.facebook.com/dalnarchive/\">Digital Archive of Literacy Narratives</a>\r\n            </blockquote>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "  <!-- Logo / Menu\r\n================================================== -->\r\n<!--\r\n<header class=\"header\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"span4\">\r\n       <div id=\"header-wrap\"> <a href=\"index.html\" class=\"logo\"> <img src=\"assets/img/Logo_transparent.png\" alt=\"\">         <h4>Digital Archive of Literacy Narratives</h4> </a>\r\n       </div>\r\n     </div>\r\n\r\n   <div class=\"span8\">\r\n      <nav>\r\n      <div id=\"menuToggle\">\r\n      <input id= \"menu-button\" type=\"checkbox\" />\r\n\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n\r\n              <ul class=\"right\" id=\"main-menu\">\r\n                  <li> <a routerLink=\"/home\"> home </a>\r\n                  <li> <a routerLink=\"/about\"> about </a> </li>\r\n                  <li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n                  <li> <a routerLink=\"/contact\"> contact </a> </li>\r\n                 <li> <a routerLink=\"/#\"> login </a> </li>\r\n                  <li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\r\n              </ul>\r\n      </div>\r\n      </nav>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n</header> -->\r\n\r\n\r\n<!--\r\n<div class=\"container\">\r\n<div class=\"navbar\">\r\n  <div class=\"navbar\">\r\n\r\n\r\n      <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </a>\r\n\r\n       <div class=\"header2\">\r\n           <img src=\"assets/img/Logo_transparent.png\" />\r\n            <a class=\"brand\" href=\"#\">Digital Archive of Literacy Narratives</a>\r\n        </div>\r\n\r\n      <div class=\"nav-collapse navbar-responsive-collapse collapse\">\r\n\r\n        <ul class=\"nav\">\r\n            <li> <a routerLink=\"/home\"> home </a>\r\n            <li> <a routerLink=\"/about\"> about </a> </li>\r\n            <li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n            <li> <a routerLink=\"/contact\"> contact </a> </li>\r\n            <li> <a routerLink=\"/#\"> login </a> </li>\r\n            <li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n  <router-outlet></router-outlet> -->\r\n\r\n<!-- <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\r\n  <div [className]=\"_class\">\r\n     <button (click)=\"toggleFull()\"><i class=\"icon-align-justify\"></i></button>\r\n\r\n\r\n  \t\t\t<a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\" onclick=\"var div = document.getElementById('navbarToggle'); div.style.height != '100%' ? div.style.height = '100%' : div.style.height = '0px';\">\r\n  \t\t\t\t<span class=\"icon-bar\"></span>\r\n  \t\t\t\t<span class=\"icon-bar\"></span>\r\n  \t\t\t\t<span class=\"icon-bar\"></span>\r\n  \t\t\t</a>\r\n\r\n  \t\t\t<div class=\"header2\">\r\n  \t\t\t\t<img src=\"assets/img/Logo_transparent.png\" />\r\n  \t\t\t\t<a class=\"brand\" href=\"#\">Digital Archive of Literacy Narratives</a>\r\n  \t\t\t</div>\r\n\r\n  \t\t\t<div class=\"nav-collapse navbar-responsive-collapse collapse\" id=\"navbarToggle\">\r\n  \t\t\t\t<ul class=\"nav\">\r\n  \t\t\t\t\t<li> <a routerLink=\"/home\"> home </a> </li>\r\n  \t\t\t\t\t<li> <a routerLink=\"/about\"> about </a> </li>\r\n  \t\t\t\t\t<li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n  \t\t\t\t\t<li> <a routerLink=\"/contact\"> contact </a> </li>\r\n  \t\t\t\t\t<li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\r\n  \t\t\t\t</ul>\r\n  \t\t\t</div>\r\n  </div>\r\n</nav>k\r\n\r\n<router-outlet></router-outlet> -->\r\n\r\n\r\n\r\n<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\r\n    <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseContent\" aria-controls=\"collapseContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\" ></span>\r\n      </button>\r\n\r\n      <a routerLink=\"/home\"><img src=\"assets/img/Logo_transparent.png\" id=\"logo\" /></a>\r\n\r\n\r\n      <div class=\"header2 col-5 offset-md-1\">\r\n          <a class=\"brand\" routerLink=\"/home\">Digital Archive of Literacy Narratives</a>\r\n      </div>\r\n\r\n      <div class=\"navbar-collapse collapse col-6\" id=\"collapseContent\" aria-expanded=\"true\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> home </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\"> about </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\"> contact </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/create\" routerLinkActive=\"active\"> submit a literacy narrative </a> </li>\r\n          </ul>\r\n       </div>\r\n\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{title}}</h1>\r\n\r\n\r\n    <div class=\"contact-info\">\r\n        <p>\r\n            <strong>Ben McCorkle</strong> is an associate professor of English and teaches courses in composition, rhetoric, and digital media studies, primarily on The Ohio State University’s Marion campus. He is the author of the book <span class=\"italic\">\r\n            Rhetorical Delivery as Technological Discourse: A Cross-Historical Study</span>, as well as several articles in publications including <span class=\"italic\"> Computers and Composition Online, Rhetoric Society Quarterly, and Composition Studies</span>. He is currently serving as Co-Director of the DALN. Email Ben: <a href=\"mailto:mccorkle.12@osu.edu\">mccorkle.12@osu.edu</a>.\r\n       </p>\r\n\r\n       <p>\r\n           <strong>Michael Harker </strong> is an associate professor of English and teaches courses in composition, rhetoric, and literacy studies at Georgia State University. He is the author of <span class=\"italic\">The Lure of Literacy: A Critical Reception of the Compulsory Composition Debate (SUNY Press)</span>. He has published articles in <span class=\"italic\"> College Composition and Communication, Literacy in Composition Studies, Computers and Composition: An International Journal</span>, and <span class=\"italic\">Computers and Composition Online</span>. He is a Co-Director of the Digital Archive of Literacy Narratives (DALN). Email Michael: <a href=\"mailto:mharker@gsu.edu\">mharker@gsu.edu</a>.\r\n       </p>\r\n    </div>\r\n\r\n</div>\r\n<!-- <daln-footer></daln-footer> -->\r\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <div class=\"container responsive_home\">\r\n\r\n        <!-- Search Component -->\r\n        <app-search2></app-search2>\r\n\r\n        <app-slider></app-slider>\r\n\r\n\r\n    </div>\r\n\r\n\r\n<div class=\"container responsive_home\" >\r\n    <div class=\"post_list\">\r\n        <post-list [postList]=\"posts\"></post-list>\r\n    </div>\r\n</div>\r\n\r\n<daln-footer></daln-footer>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\r\n<p>\r\n    Page not found.\r\n</p>\r\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postAsset\">\r\n\r\n  <!-- Null post - No Assets -->\r\n  <div class=\"postitem_null\" *ngIf=\"noAsset === true\">\r\n     <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n  <!-- Not recorded asset type -->\r\n  <div class=\"postitem_unknown\" *ngIf=\"postAsset.assetType !== 'Audio/Video' && postAsset.assetType !=='Audio' && postAsset.assetType !== 'Text'\">\r\n    <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n  <!-- Audio Post -->\r\n  <div class=\"postitem_soundcloud\" *ngIf=\"postAsset.assetType==='Audio'\">\r\n    <iframe id=\"sc-widget\" scrolling=\"no\" width=\"100%\" height=\"166px\"\r\n            [src]=\"url | safe\" ></iframe>\r\n  </div>\r\n\r\n  <!-- Video Post -->\r\n  <div class=\"postitem_video\" *ngIf=\"postAsset.assetType === 'Audio/Video'\">\r\n    <iframe *ngIf=\"!thumb\" class='sproutvideo-player' type='text/html'\r\n            [src]=\"url | safe\" allowfullscreen width=\"100%\" height=\"436px\"></iframe>\r\n    <iframe *ngIf=\"thumb\" class='sproutvideo-player' type='text/html' width=\"100%\" height=\"166px\"\r\n            [src]=\"url | safe\"></iframe>\r\n  </div>\r\n\r\n  <!-- Text post - only counts pdfs for now -->\r\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url !== null\">\r\n      <!-- <embed *ngIf=\"!thumb\" [src]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\" />\r\n      <embed *ngIf=\"thumb\" [src]=\"url | safe\" type=\"application/pdf\" /> -->\r\n      <object *ngIf=\"!thumb\" [data]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\"><p><b>This browser does not support PDFs.</b> Please download the PDF to view it: <a href=\"/pdf/sample-3pp.pdf\">Download PDF</a>.</p></object>\r\n      <object *ngIf=\"thumb\" [data]=\"url | safe\" type=\"application/pdf\"><p><b>This browser does not support PDFs. </b> Please click on the post to download the PDF to view.</p></object>\r\n  </div>\r\n\r\n  <!-- All other text posts that aren't pdf -->\r\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url === null\">\r\n      <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n  <!-- Web Asset -->\r\n  <!-- <div class=\"postitem_web\" *ngIf=\"postAsset.assetType === 'Web'\">\r\n      <iframe [src]=\"url | safe\" type=\"text/html\"></iframe>\r\n  </div> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"postDetail\">\r\n  <button class=\"btn btn-primary\" type=\"submit\" (click)=\"goBack()\">Back</button>\r\n\r\n  <section>\r\n\r\n\r\n    <div class=\"row\">\r\n      <!-- Project info\r\n      ================================================== -->\r\n\r\n\r\n      <div class=\"col-4\">\r\n\r\n        <!-- Use the ul class. -->\r\n        <ul class=\"metadata\">\r\n          <li>\r\n            <h3>{{postDetail.title}}</h3>\r\n            <p>{{postDetail.description}}</p>\r\n          <li>\r\n            <h3>Date Submitted</h3>\r\n            <p>{{postDetail.dateCreated}}</p>\r\n          </li>\r\n          <li>\r\n            <h3>Author</h3>\r\n            <p *ngFor=\"let author of postDetail.contributorAuthor\">{{author}}</p>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <ul class=\"tags\">\r\n          <li>\r\n            <h3>Collections</h3>\r\n            <p>All literacy narratives that are not part of a topical collection.</p>\r\n          </li>\r\n          <li>\r\n            <h3>Tags/Subjects</h3>\r\n            <ul class=\"tags-list\">\r\n              <!-- Track elements and limit tags with NgFor and TrackBy -->\r\n              <li class=\"tag\" *ngFor=\"let subject of postDetail.subject\"><span\r\n                class=\"label label-info\">{{subject}}</span></li>\r\n            </ul>\r\n\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <ul class=\"description\">\r\n          <li>\r\n            <h3>Description</h3>\r\n            <p>{{postDetail.description}}</p>\r\n          </li>\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <h3>Media List</h3>\r\n        <ul class=\"media\" *ngFor=\"let asset of postDetail.assetList\">\r\n\r\n            <li (click)=\"onSelectedAsset(asset)\">\r\n\r\n              <!-- Change event to be click event that changes player embed link -->\r\n              <h3>{{asset.assettitle}}</h3>\r\n              <p>{{asset.assetType}}: {{asset.assetDescription}}</p>\r\n              <p *ngIf=\"\">{{asset.assetType}}: {{asset.assetDescription}}</p>\r\n\r\n\r\n              <!--<div *ngIf=\"selectedAsset\">{{selectedAsset.assetID}}</div>-->\r\n            </li>\r\n\r\n          </ul>\r\n\r\n          <div class=\"details\" id=\"detail-drop\" role=\"tablist\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-header\" role=\"tab\" id=\"metadata\">\r\n                      <a data-toggle=\"collapse\" data-parent=\"#detail-drop\" href=\"#metadata-table\">\r\n                          Detailed Record\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div id=\"metadata-table\" class=\"collapsed collapse\" role=\"tabpanel\" style=\"height: auto;\">\r\n                  <div class=\"card-block\">\r\n                   <table class=\"table table-sm table-bordered\">\r\n                       <thead >\r\n                         <tr>\r\n                          <th>Metadata Tag</th>\r\n                          <th>Content</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr>\r\n                               <td>identifierUri</td>\r\n                               <td>{{postDetail.identifierUri}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateAvailable</td>\r\n                               <td>{{postDetail.dateAvailable}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateAccessioned</td>\r\n                               <td>{{postDetail.dateAccessioned}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateCreated</td>\r\n                               <td>{{postDetail.dateCreated}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateIssued</td>\r\n                               <td>{{postDetail.dateIssued}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>contributorAuthor</td>\r\n                               <td>\r\n                                  <ul>\r\n                                   <li *ngFor=\"let author of postDetail.contributorAuthor\">{{postDetail.contributorAuthor}}</li>\r\n                                  </ul>\r\n                               </td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>contributorInterviewer</td>\r\n                               <td>\r\n                                  <ul>\r\n                                   <li *ngFor=\"let author of postDetail.contributorInterviewer\">{{postDetail.contributorInterviewer}}</li>\r\n                                  </ul>\r\n                               </td>\r\n                          </tr>\r\n\r\n                      </tbody>\r\n                   </table>\r\n               </div>\r\n              </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Video\r\n      ================================================== -->\r\n\r\n          <div class=\"col-8\">\r\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Audio/Video' || selectedAsset.assetType==='Audio')\" [postAsset]=\"selectedAsset\"></app-player>\r\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Text')\" [postAsset]=\"selectedAsset\"></app-player>\r\n        <!-- TODO: Remove style tag -->\r\n        <!-- social begin here -->\r\n        <ul class=\"socicon right\" style=\"margin-bottom:10px;\">\r\n          <!-- <li>\r\n            <a href=\"#\" class=\"share-icon\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"google\">\r\n            </a>\r\n          </li>-->\r\n          <li>\r\n            <a href=\"https://www.facebook.com/dalnarchive/\" class=\"facebook\" target=\"_blank\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n              <a class=\"twitter twitter-share-button\"\r\n                href=\"https://twitter.com/intent/tweet?url=&text={{postDetail.title}}&via=dalnarchive\" target=\"_blank\"  ></a>\r\n          </li>\r\n          <!-- <li>\r\n            <a href=\"#\" class=\"flickr\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"linkedin\">\r\n            </a>\r\n          </li>\r\n          <li class=\"last\">\r\n            <a href=\"#\" class=\"vimeo\">\r\n            </a>\r\n          </li> -->\r\n\r\n        </ul>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div><!-- /container -->\r\n<daln-footer></daln-footer>\r\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div class=\"postItem col-xs-3\" *ngIf=\"postItem\">\r\n  <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\r\n\r\n    <app-player\r\n                [postAsset]=\"getPreview(postItem.assetList)\" [thumb]=\"true\"></app-player>\r\n  </a>\r\n<a [routerLink]=\"['/detail', postItem.postId]\">\r\n  <div class=\"desc\">\r\n     {{postItem.title}}\r\n    <p><em>{{postItem.description}}</em></p>\r\n  </div>\r\n</a>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<div id=\"list-container\" *ngIf=\"postList\">\r\n\r\n  <!-- <ul class=\"thumbnails list-unstyled\">\r\n    <li class=\"span3 item-block\" *ngFor=\"let post of postList\">\r\n      <post-item class=\"media\" [postItem]=\"post\"></post-item>\r\n    </li>\r\n  </ul> -->\r\n\r\n\r\n    <div class=\"row\">\r\n            <div class=\"col-xs-18 col-sm-6 col-md-3\" *ngFor=\"let post of postList\">\r\n              <div class=\"thumbnail\">\r\n                <post-item class=\"media\" [postItem]=\"post\"></post-item>\r\n              </div>\r\n            </div>\r\n    </div>\r\n<!-- \r\n<nav class=\"paginator\">\r\n  <ul class=\"pagination\">\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" (click)=\"page.nextPage()\" aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav> -->\r\n</div>\r\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-md-3 offset-md-2\" *ngIf=\"showUtil\">\r\n<button class=\"btn btn-primary\" type=\"submit\" (click)=\"this._router.navigateByUrl('/home')\">Go Back to Home Page</button>\r\n</div>\r\n\r\n<div id=\"search-component\">\r\n\r\n  <!-- Main Search Box -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n     <div class=\"input-group\">\r\n            <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-secondary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#options\">&#9660;</button>\r\n            </span>\r\n            <input #searchBox class=\"form-control\" id=\"search-box\" placeholder=\"Search the DALN...\" [value]=\"searchService.searchQuery\" (input)=\"searchService.searchQuery = $event.target.value\"/>\r\n           <button *ngIf=\"showUtil\" class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"onSearch(searchBox.value, results.value, pageNum.value, $posts)\" (click)=\"onSearch(searchBox.value, results.value, pageNum.value, $posts)\" >Search</button>\r\n           <button *ngIf=\"!showUtil\" class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"onFakeSearch(searchBox.value, results.value, pageNum.value, $posts)\" (click)=\"onFakeSearch(searchBox.value, results.value, pageNum.value, $posts)\" >Search</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Search Options -->\r\n  <div class=\"collapse\" id=\"options\">\r\n  <div class=\"card card-block\" [class.col-md-5]=\"showFull\" [class.offset-md-3]=\"showFull\">\r\n      <div class=\"card-header\" id=\"option-card\">\r\n          Options\r\n      </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"input-group \">\r\n                <span class=\"input-group-addon\">Results per page</span>\r\n                <input #results class=\"form-control\" id=\"results-size\" type=\"number\" min=\"0\" max=\"50\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 offset-md-4\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Page Number</span>\r\n                <input #pageNum class=\"form-control\" id=\"pageNumber\" type=\"number\" min=\"0\" max=\"50\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n<div class=\"row justify-content-center\">\r\n  <div class=\"no-results col-md-6 \" *ngIf=\"noResults == true\">\r\n      <p>\r\n          Sorry, there were no results for your query.\r\n      </p>\r\n  </div>\r\n </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container responsive_home\" >\r\n    <div class=\"post_list\">\r\n        <post-list [postList]=\"posts\"></post-list>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <daln-footer *ngIf=\"showUtil\"></daln-footer> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "\r\n<div [@visibilityChanged]=\"visibility\" class=\"slider_component\">\r\n    <ngb-carousel>\r\n        <template ngbSlide>\r\n            <div class=\"image-background\">\r\n                       <img src=\"assets/images/slider/jimmy-carter.jpg\" class=\"slider-img\"/>\r\n               </div>\r\n\r\n            <div class=\"carousel-caption\">\r\n                <a href=\"https://thedaln.wordpress.com/2015/07/06/exciting-news-revealed-president-jimmy-carters-narrative/\" target=\"_blank\">\r\n                    <h3>Exciting News Revealed: President Jimmy Carter's Narrative!</h3>\r\n                    <p>“I’m afraid I don’t have a very good story.” This is how Jimmy Carter begins. It’s a humble beginning to a truly beautiful narrative</p>\r\n                </a>\r\n            </div>\r\n        </template>\r\n      <template ngbSlide>\r\n        <img src=\"assets/images/slider/books.jpg\" alt=\"DALN Intro\" class=\"slider-img\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>DALN</h3>\r\n          <p>An Introduction to the Digital Archive of Literacy Narratives</p>\r\n        </div>\r\n      </template>\r\n      <template ngbSlide>\r\n        <img src=\"assets/images/slider/slider-img02.jpg\" alt=\"New DALN post\" class=\"slider-img\">\r\n        <div class=\"carousel-caption\">\r\n            <a href=\"https://thedaln.wordpress.com/2017/01/14/the-ocean/\" target=\"_blank\">\r\n                <h3>View new DALN Blog Post!</h3>\r\n                <p>If you ever find yourself overwhelmed with self-doubt about any writing project you may be doing, then check out the literacy narrative titled “The Ocean.”</p>\r\n            </a>\r\n        </div>\r\n      </template>\r\n\r\n    </ngb-carousel>\r\n</div>\r\n\r\n<!--\r\n<div class=\"carousel\">\r\n\r\n <ul class=\"images\">\r\n\r\n   <li *ngFor=\"let slide of slides\">\r\n     <h2>DALN</h2>\r\n     <img src=\"assets/images/slider/slider-img01.jpg\" alt=\"\">\r\n   </li>\r\n\r\n </ul>\r\n\r\n</div> -->\r\n"

/***/ })

},[1124]);
//# sourceMappingURL=main.bundle.map