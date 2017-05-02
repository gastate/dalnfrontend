webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development";
const search_api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production"; // using prod endpoint on both dev and prod.
const all_posts = api_url + "/posts/all";
const create_post = api_url + "/posts/create";
const page_posts = search_api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
const post = api_url + "/posts/get/";
const get_dev_post = api_url + "/posts/getdev/"; // to get a post from the dev table (used for viewing purposes)
const search_posts = search_api_url + "/posts/search/";
const approve_post = api_url + "/posts/approve/"; // to approve posts into search engine.
const get_upload_link = search_api_url + "/asset/s3upload/"; // to get the link for file uploading.
const link_media = search_api_url + "/asset/apiupload/"; // to link the post to the files uploaded.
exports.environment = {
    production: false,
    API_ENDPOINTS: {
        all_posts: all_posts,
        approve_post: approve_post,
        api_url: api_url,
        create_post: create_post,
        page_posts: page_posts,
        post: post,
        search_posts: search_posts,
        get_upload_link: get_upload_link,
        link_media: link_media
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

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(530);


/***/ }),

/***/ 128:
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
const http_1 = __webpack_require__(142);
//Use instead of Promise
const Rx_1 = __webpack_require__(207);
// Import RxJs required methods
__webpack_require__(144);
__webpack_require__(143);
const environment_1 = __webpack_require__(105);
//Only used in Mock
__webpack_require__(196);
const mock_postlist_1 = __webpack_require__(657);
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

/***/ 183:
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
const http_1 = __webpack_require__(142);
//Use instead of Promise
const Rx_1 = __webpack_require__(207);
// Import RxJs required methods
__webpack_require__(144);
__webpack_require__(143);
__webpack_require__(196);
const environment_1 = __webpack_require__(105);
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
        //   console.log("Query:" + this.searchQuery);
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
        template: __webpack_require__(826),
        styles: [__webpack_require__(815)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

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
const auth_service_1 = __webpack_require__(450);
let AdminComponent = class AdminComponent {
    constructor(_authService) {
        this.authService = _authService;
    }
    ngOnInit() {
    }
    approvePost(postId) {
        this.authService.adminApprovePost(postId);
        console.log("Approvepost fired");
    }
};
AdminComponent = __decorate([
    core_1.Component({
        selector: 'app-admin',
        template: __webpack_require__(827),
        styles: [__webpack_require__(816)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], AdminComponent);
exports.AdminComponent = AdminComponent;
var _a;
//# sourceMappingURL=admin.component.js.map

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
        template: __webpack_require__(829)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
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
        template: __webpack_require__(830),
        styles: [__webpack_require__(818)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map

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
const post_service_1 = __webpack_require__(128);
const search_service_1 = __webpack_require__(183);
// import { routerTransition } from '../router.animations';
// TEMP code to run production and dev environments
const environment_1 = __webpack_require__(105);
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
        template: __webpack_require__(831),
        styles: [__webpack_require__(819)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _b || Object, typeof (_c = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _c || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class Post {
}
exports.Post = Post;
//# sourceMappingURL=post-model.js.map

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
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'app-page-not-found',
        template: __webpack_require__(832),
        styles: [__webpack_require__(820)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map

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
const router_1 = __webpack_require__(87);
const common_1 = __webpack_require__(20);
const post_service_1 = __webpack_require__(128);
const post_model_1 = __webpack_require__(445);
__webpack_require__(491);
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
        template: __webpack_require__(834),
        styles: [__webpack_require__(822)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _d || Object])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=post-detail.component.js.map

/***/ }),

/***/ 448:
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
const search_service_1 = __webpack_require__(183);
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
        template: __webpack_require__(836),
        styles: [__webpack_require__(824)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _a || Object])
], PostListComponent);
exports.PostListComponent = PostListComponent;
var _a;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ 449:
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
const search_service_1 = __webpack_require__(183);
const post_service_1 = __webpack_require__(128);
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
                this.onSearch(this.searchService.searchQuery, 10, 0);
                this.showUtil = true; // handles utility functions for ux.
                this.showFull = true; // handles expansion of search bar
            }
        });
    }
    ngOnInit() {
    }
    onSearch(term, results, pageNum) {
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
    onFakeSearch(term, results, pageNumber) {
        if (results == 0) {
            results = 10;
        }
        if (pageNumber == 0) {
            pageNumber = 0;
        }
        if (term === '' || term === undefined) {
            return null;
        }
        this.changeView.emit(false);
        this._router.navigateByUrl('/search');
    }
};
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
        template: __webpack_require__(837),
        styles: [__webpack_require__(825)],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _c || Object, typeof (_d = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _d || Object, typeof (_e = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 450:
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
const http_1 = __webpack_require__(142);
//Use instead of Promise
const Rx_1 = __webpack_require__(207);
// Import RxJs required methods
__webpack_require__(144);
__webpack_require__(143);
__webpack_require__(196);
const environment_1 = __webpack_require__(105);
let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
    }
    adminApprovePost(postId) {
        var tableName = 'DALN-Posts-Dev';
        var data = {
            postId: postId,
            tableName: tableName
        };
        var datastr = JSON.stringify(data);
        console.log(data);
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let options = new http_1.RequestOptions({ headers: headers, method: "post" });
        console.log(this.endPoint.approve_post);
        this._http.post(this.endPoint.approve_post, datastr, options)
            .map((res) => res.json())
            .catch((error) => Rx_1.Observable.throw(error.json().error))
            .subscribe(data => { console.log(data); }, err => { console.log(err); });
        console.log("adminApprovePost fired");
    }
};
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AuthService);
exports.AuthService = AuthService;
var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/submit-form/submit-form.module": [
		1130,
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
webpackAsyncContext.id = 529;


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(659);
const platform_browser_dynamic_1 = __webpack_require__(615);
const core_1 = __webpack_require__(0);
const environment_1 = __webpack_require__(105);
const _1 = __webpack_require__(652);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=main.js.map

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
        template: __webpack_require__(828),
        styles: [__webpack_require__(817)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], AppFooterComponent);
exports.AppFooterComponent = AppFooterComponent;
var _a, _b;
//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ 650:
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
const admin_component_1 = __webpack_require__(441);
const home_component_1 = __webpack_require__(444);
const page_not_found_component_1 = __webpack_require__(446);
const post_list_component_1 = __webpack_require__(448);
const post_detail_component_1 = __webpack_require__(447);
const about_component_1 = __webpack_require__(440);
const contact_component_1 = __webpack_require__(443);
const search_component_1 = __webpack_require__(449);
const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent
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

/***/ 651:
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
const http_1 = __webpack_require__(142);
//prevent 404 on refresh in s3
//See http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
const common_1 = __webpack_require__(20);
// Components
const admin_component_1 = __webpack_require__(441);
const app_component_1 = __webpack_require__(442);
const app_footer_component_1 = __webpack_require__(649);
const home_component_1 = __webpack_require__(444);
const ng_bootstrap_1 = __webpack_require__(647);
const post_list_component_1 = __webpack_require__(448);
const post_item_component_1 = __webpack_require__(655);
const post_detail_component_1 = __webpack_require__(447);
const about_component_1 = __webpack_require__(440);
const contact_component_1 = __webpack_require__(443);
const app_routing_module_1 = __webpack_require__(650);
const player_component_1 = __webpack_require__(654);
const search_component_1 = __webpack_require__(449);
const slider_component_1 = __webpack_require__(658);
const page_not_found_component_1 = __webpack_require__(446);
// Services
const post_service_1 = __webpack_require__(128);
const search_service_1 = __webpack_require__(183);
const auth_service_1 = __webpack_require__(450);
// Other
const safe_pipe_1 = __webpack_require__(656);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            admin_component_1.AdminComponent,
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
        providers: [auth_service_1.AuthService, post_service_1.PostService, search_service_1.SearchService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(442));
__export(__webpack_require__(651));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 653:
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
const asset_model_1 = __webpack_require__(653);
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
        template: __webpack_require__(833),
        styles: [__webpack_require__(821)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 655:
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
const post_service_1 = __webpack_require__(128);
const post_model_1 = __webpack_require__(445);
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
        template: __webpack_require__(835),
        styles: [__webpack_require__(823)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _c || Object])
], PostItemComponent);
exports.PostItemComponent = PostItemComponent;
var _a, _b, _c;
//# sourceMappingURL=post-item.component.js.map

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

/***/ 657:
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

/***/ 658:
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
        template: __webpack_require__(838),
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

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(673);
__webpack_require__(666);
__webpack_require__(662);
__webpack_require__(668);
__webpack_require__(667);
__webpack_require__(665);
__webpack_require__(664);
__webpack_require__(672);
__webpack_require__(661);
__webpack_require__(660);
__webpack_require__(670);
__webpack_require__(663);
__webpack_require__(671);
__webpack_require__(669);
__webpack_require__(674);
__webpack_require__(1127);
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "/* About CSS\n-------------------------------------------------- */\n\nh1 {\n    margin-top: 5%;\n}\n\n\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\nh1 {\n    margin-top: 5%;\n}\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n/*#sc-widget {\n    width : \"100%\";\n    height : \"100%\";\n}\n\n.sproutvideo-player {\n    width : \"100%\";\n    height : \"100%\";\n}*/\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "\n/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "\n/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "\n/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{title}}</h1>\n\n  <div class=\"about-info\">\n      <div id=\"about-image\">\n          <img src=\"assets/img/osugsu.jpg\" alt=\"\" />\n      </div>\n\n\n      <p>\n     Co-sponsored by The Ohio State University and Georgia State University, The DALN (daln.osu.edu) is a publicly available archive of personal literacy narratives in a variety of formats (text, video, audio) that together provide a historical record of the literacy practices and values of contributors, as those practices and values change.\n     </p>\n\n     <p>\n         The DALN invites people of all ages, races, communities, backgrounds, and interests to contribute stories about how — and in what circumstances — they read, write, and compose meaning, and how they learned to do so (or helped others learn).\n     </p>\n\n     <p>\n         We welcome personal narratives about reading and composing all kinds of texts, both formal and informal: diaries, blogs, poetry, music and musical lyrics, fan zines, school papers, videos, sermons, gaming profiles, speeches, chatroom exchanges, text messages, letters, stories, photographs, etc. We also invite contributors to supplement their narratives with samples of their own writing (papers, letters, zines, speeches, etc.) and compositions (music, photographs, videos, sound recordings, etc.).\n     </p>\n  </div>\n\n\n\n</div>\n\n<daln-footer></daln-footer>\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1>Admin post approval</h1>\n\n    <p>\n        Enter the PostId:\n    </p>\n    <input type=\"text\" value=\"c6098589-4253-4649-974e-02ce17e16d27\" name=\"postId\" #postId/>\n    <button class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" (keydown.enter)=\"approvePost(postId.value)\" (click)=\"approvePost(postId.value)\">Submit</button>\n</div>\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\n\n        <h3 class=\"footer-heading\">Connect With Us</h3>\n        <!-- social begin here -->\n            <ul class=\"socicon\">\n              <!-- <li><a href=\"\" class=\"share-icon\"> </a></li> -->\n              <!-- <li><a href=\"#\" class=\"google\"> </a></li> -->\n              <li><a href=\"https://www.facebook.com/dalnarchive/\" target=\"_blank\" class=\"facebook\"> </a></li>\n              <li><a href=\"https://twitter.com/dalnarchive\" target=\"_blank\" class=\"twitter\"> </a></li>\n              <!-- <li><a href=\"#\" class=\"flickr\"> </a></li> -->\n              <!-- <li><a href=\"#\" class=\"dribbble\"> </a></li> -->\n              <!-- <li class=\"last\"><a href=\"#\" class=\"vimeo\"> </a></li> -->\n            </ul>\n\n        <h3 class=\"footer-heading\">Who We Are</h3>\n            <p>\n                Since 2007, the Digital Archive of Literacy Narratives has been collecting stories from the public about their experiences learning to read, write, and compose with different media types. Containing over 6000 individual narratives in text, video, audio, and other forms, the DALN is a resource not only for scholars and teachers, but the public at large. Tell us your story. <a routerLink=\"/create\">Submit today!</a>\n            </p>\n\n      </div>\n\n      <!-- tweets begin here -->\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\n        <h3 class=\"footer-heading\">Latest Tweets</h3>\n        <div class=\"tweets\">\n\n        </div>\n        <a class=\"twitter-timeline\" data-width=\"300\" data-height=\"330\" data-theme=\"dark\" href=\"https://twitter.com/dalnarchive\" target=\"_blank\">Tweets by dalnarchive</a>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\n        <h3 class=\"footer-heading\">From Facebook</h3>\n        <div class=\"fb-page\"\n            data-href=\"https://www.facebook.com/dalnarchive/\"\n            data-tabs=\"timeline\"\n            data-width=\"300\"\n            data-height=\"330\"\n            data-small-header=\"false\"\n            data-adapt-container-width=\"true\"\n            data-hide-cover=\"false\"\n            data-show-facepile=\"false\">\n            <blockquote cite=\"https://www.facebook.com/dalnarchive/\" class=\"fb-xfbml-parse-ignore\">\n                <a href=\"https://www.facebook.com/dalnarchive/\">Digital Archive of Literacy Narratives</a>\n            </blockquote>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "  <!-- Logo / Menu\n================================================== -->\n<!--\n<header class=\"header\">\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"span4\">\n       <div id=\"header-wrap\"> <a href=\"index.html\" class=\"logo\"> <img src=\"assets/img/Logo_transparent.png\" alt=\"\">         <h4>Digital Archive of Literacy Narratives</h4> </a>\n       </div>\n     </div>\n\n   <div class=\"span8\">\n      <nav>\n      <div id=\"menuToggle\">\n      <input id= \"menu-button\" type=\"checkbox\" />\n\n          <span></span>\n          <span></span>\n          <span></span>\n\n              <ul class=\"right\" id=\"main-menu\">\n                  <li> <a routerLink=\"/home\"> home </a>\n                  <li> <a routerLink=\"/about\"> about </a> </li>\n                  <li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\n                  <li> <a routerLink=\"/contact\"> contact </a> </li>\n                 <li> <a routerLink=\"/#\"> login </a> </li>\n                  <li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\n              </ul>\n      </div>\n      </nav>\n      </div>\n    </div>\n\n\n</div>\n</header> -->\n\n\n<!--\n<div class=\"container\">\n<div class=\"navbar\">\n  <div class=\"navbar\">\n\n\n      <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </a>\n\n       <div class=\"header2\">\n           <img src=\"assets/img/Logo_transparent.png\" />\n            <a class=\"brand\" href=\"#\">Digital Archive of Literacy Narratives</a>\n        </div>\n\n      <div class=\"nav-collapse navbar-responsive-collapse collapse\">\n\n        <ul class=\"nav\">\n            <li> <a routerLink=\"/home\"> home </a>\n            <li> <a routerLink=\"/about\"> about </a> </li>\n            <li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\n            <li> <a routerLink=\"/contact\"> contact </a> </li>\n            <li> <a routerLink=\"/#\"> login </a> </li>\n            <li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n\n\n\n  <router-outlet></router-outlet> -->\n\n<!-- <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <div [className]=\"_class\">\n     <button (click)=\"toggleFull()\"><i class=\"icon-align-justify\"></i></button>\n\n\n  \t\t\t<a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\" onclick=\"var div = document.getElementById('navbarToggle'); div.style.height != '100%' ? div.style.height = '100%' : div.style.height = '0px';\">\n  \t\t\t\t<span class=\"icon-bar\"></span>\n  \t\t\t\t<span class=\"icon-bar\"></span>\n  \t\t\t\t<span class=\"icon-bar\"></span>\n  \t\t\t</a>\n\n  \t\t\t<div class=\"header2\">\n  \t\t\t\t<img src=\"assets/img/Logo_transparent.png\" />\n  \t\t\t\t<a class=\"brand\" href=\"#\">Digital Archive of Literacy Narratives</a>\n  \t\t\t</div>\n\n  \t\t\t<div class=\"nav-collapse navbar-responsive-collapse collapse\" id=\"navbarToggle\">\n  \t\t\t\t<ul class=\"nav\">\n  \t\t\t\t\t<li> <a routerLink=\"/home\"> home </a> </li>\n  \t\t\t\t\t<li> <a routerLink=\"/about\"> about </a> </li>\n  \t\t\t\t\t<li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\n  \t\t\t\t\t<li> <a routerLink=\"/contact\"> contact </a> </li>\n  \t\t\t\t\t<li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\n  \t\t\t\t</ul>\n  \t\t\t</div>\n  </div>\n</nav>k\n\n<router-outlet></router-outlet> -->\n\n\n\n<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n    <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseContent\" aria-controls=\"collapseContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\" ></span>\n      </button>\n\n      <a routerLink=\"/home\"><img src=\"assets/img/Logo_transparent.png\" id=\"logo\" /></a>\n\n\n      <div class=\"header2 col-5 offset-md-1\">\n          <a class=\"brand\" routerLink=\"/home\">Digital Archive of Literacy Narratives</a>\n      </div>\n\n      <div class=\"navbar-collapse collapse col-6\" id=\"collapseContent\" aria-expanded=\"true\">\n          <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> home </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\"> about </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\"> contact </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/create\" routerLinkActive=\"active\"> submit a literacy narrative </a> </li>\n          </ul>\n       </div>\n\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{title}}</h1>\n\n\n    <div class=\"contact-info\">\n        <p>\n            <strong>Ben McCorkle</strong> is an associate professor of English and teaches courses in composition, rhetoric, and digital media studies, primarily on The Ohio State University’s Marion campus. He is the author of the book <span class=\"italic\">\n            Rhetorical Delivery as Technological Discourse: A Cross-Historical Study</span>, as well as several articles in publications including <span class=\"italic\"> Computers and Composition Online, Rhetoric Society Quarterly, and Composition Studies</span>. He is currently serving as Co-Director of the DALN. Email Ben: <a href=\"mailto:mccorkle.12@osu.edu\">mccorkle.12@osu.edu</a>.\n       </p>\n\n       <p>\n           <strong>Michael Harker </strong> is an associate professor of English and teaches courses in composition, rhetoric, and literacy studies at Georgia State University. He is the author of <span class=\"italic\">The Lure of Literacy: A Critical Reception of the Compulsory Composition Debate (SUNY Press)</span>. He has published articles in <span class=\"italic\"> College Composition and Communication, Literacy in Composition Studies, Computers and Composition: An International Journal</span>, and <span class=\"italic\">Computers and Composition Online</span>. He is a Co-Director of the Digital Archive of Literacy Narratives (DALN). Email Michael: <a href=\"mailto:mharker@gsu.edu\">mharker@gsu.edu</a>.\n       </p>\n    </div>\n\n</div>\n<!-- <daln-footer></daln-footer> -->\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"container responsive_home\">\n\n        <!-- Search Component -->\n        <app-search2></app-search2>\n\n        <app-slider></app-slider>\n\n\n    </div>\n\n\n<div class=\"container responsive_home\" >\n    <div class=\"post_list\">\n        <post-list [postList]=\"posts\"></post-list>\n    </div>\n</div>\n\n<daln-footer></daln-footer>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\n<p>\n    Page not found.\n</p>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postAsset\">\n\n  <!-- Null post - No Assets -->\n  <div class=\"postitem_null\" *ngIf=\"noAsset === true\">\n     <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\n  </div>\n\n  <!-- Not recorded asset type -->\n  <div class=\"postitem_unknown\" *ngIf=\"postAsset.assetType !== 'Audio/Video' && postAsset.assetType !=='Audio' && postAsset.assetType !== 'Text'\">\n    <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\n  </div>\n\n  <!-- Audio Post -->\n  <div class=\"postitem_soundcloud\" *ngIf=\"postAsset.assetType==='Audio'\">\n    <iframe id=\"sc-widget\" scrolling=\"no\" width=\"100%\" height=\"166px\"\n            [src]=\"url | safe\" ></iframe>\n  </div>\n\n  <!-- Video Post -->\n  <div class=\"postitem_video\" *ngIf=\"postAsset.assetType === 'Audio/Video'\">\n    <iframe *ngIf=\"!thumb\" class='sproutvideo-player' type='text/html'\n            [src]=\"url | safe\" allowfullscreen width=\"100%\" height=\"436px\"></iframe>\n    <iframe *ngIf=\"thumb\" class='sproutvideo-player' type='text/html' width=\"100%\" height=\"166px\"\n            [src]=\"url | safe\"></iframe>\n  </div>\n\n  <!-- Text post - only counts pdfs for now -->\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url !== null\">\n      <!-- <embed *ngIf=\"!thumb\" [src]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\" />\n      <embed *ngIf=\"thumb\" [src]=\"url | safe\" type=\"application/pdf\" /> -->\n      <object *ngIf=\"!thumb\" [data]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\"><p><b>This browser does not support PDFs.</b> Please download the PDF to view it: <a href=\"/pdf/sample-3pp.pdf\">Download PDF</a>.</p></object>\n      <object *ngIf=\"thumb\" [data]=\"url | safe\" type=\"application/pdf\"><p><b>This browser does not support PDFs. </b> Please click on the post to download the PDF to view.</p></object>\n  </div>\n\n  <!-- All other text posts that aren't pdf -->\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url === null\">\n      <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\n  </div>\n\n  <!-- Web Asset -->\n  <!-- <div class=\"postitem_web\" *ngIf=\"postAsset.assetType === 'Web'\">\n      <iframe [src]=\"url | safe\" type=\"text/html\"></iframe>\n  </div> -->\n\n</div>\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"postDetail\">\n  <button class=\"btn btn-primary\" type=\"submit\" (click)=\"goBack()\">Back</button>\n\n  <section>\n\n\n    <div class=\"row\">\n      <!-- Project info\n      ================================================== -->\n\n\n      <div class=\"col-4\">\n\n        <!-- Use the ul class. -->\n        <ul class=\"metadata\">\n          <li>\n            <h3>{{postDetail.title}}</h3>\n            <p>{{postDetail.description}}</p>\n          <li>\n            <h3>Date Submitted</h3>\n            <p>{{postDetail.dateCreated}}</p>\n          </li>\n          <li>\n            <h3>Author</h3>\n            <p *ngFor=\"let author of postDetail.contributorAuthor\">{{author}}</p>\n          </li>\n\n        </ul>\n\n        <br/>\n\n        <ul class=\"tags\">\n          <li>\n            <h3>Collections</h3>\n            <p>All literacy narratives that are not part of a topical collection.</p>\n          </li>\n          <li>\n            <h3>Tags/Subjects</h3>\n            <ul class=\"tags-list\">\n              <!-- Track elements and limit tags with NgFor and TrackBy -->\n              <li class=\"tag\" *ngFor=\"let subject of postDetail.subject\"><span\n                class=\"label label-info\">{{subject}}</span></li>\n            </ul>\n\n        </ul>\n\n        <br/>\n\n        <ul class=\"description\">\n          <li>\n            <h3>Description</h3>\n            <p>{{postDetail.description}}</p>\n          </li>\n        </ul>\n\n        <br/>\n\n        <h3>Media List</h3>\n        <ul class=\"media\" *ngFor=\"let asset of postDetail.assetList\">\n\n            <li (click)=\"onSelectedAsset(asset)\">\n\n              <!-- Change event to be click event that changes player embed link -->\n              <h3>{{asset.assettitle}}</h3>\n              <p>{{asset.assetType}}: {{asset.assetDescription}}</p>\n              <p *ngIf=\"\">{{asset.assetType}}: {{asset.assetDescription}}</p>\n\n\n              <!--<div *ngIf=\"selectedAsset\">{{selectedAsset.assetID}}</div>-->\n            </li>\n\n          </ul>\n\n          <div class=\"details\" id=\"detail-drop\" role=\"tablist\">\n              <div class=\"card\">\n                  <div class=\"card-header\" role=\"tab\" id=\"metadata\">\n                      <a data-toggle=\"collapse\" data-parent=\"#detail-drop\" href=\"#metadata-table\">\n                          Detailed Record\n                      </a>\n                  </div>\n              </div>\n\n\n\n              <div id=\"metadata-table\" class=\"collapsed collapse\" role=\"tabpanel\" style=\"height: auto;\">\n                  <div class=\"card-block\">\n                   <table class=\"table table-sm table-bordered\">\n                       <thead >\n                         <tr>\n                          <th>Metadata Tag</th>\n                          <th>Content</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                               <td>identifierUri</td>\n                               <td>{{postDetail.identifierUri}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateAvailable</td>\n                               <td>{{postDetail.dateAvailable}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateAccessioned</td>\n                               <td>{{postDetail.dateAccessioned}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateCreated</td>\n                               <td>{{postDetail.dateCreated}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateIssued</td>\n                               <td>{{postDetail.dateIssued}}</td>\n                          </tr>\n                          <tr>\n                               <td>contributorAuthor</td>\n                               <td>\n                                  <ul>\n                                   <li *ngFor=\"let author of postDetail.contributorAuthor\">{{postDetail.contributorAuthor}}</li>\n                                  </ul>\n                               </td>\n                          </tr>\n                          <tr>\n                               <td>contributorInterviewer</td>\n                               <td>\n                                  <ul>\n                                   <li *ngFor=\"let author of postDetail.contributorInterviewer\">{{postDetail.contributorInterviewer}}</li>\n                                  </ul>\n                               </td>\n                          </tr>\n\n                      </tbody>\n                   </table>\n               </div>\n              </div>\n\n        </div>\n\n\n\n\n      </div>\n\n      <!-- Video\n      ================================================== -->\n\n          <div class=\"col-8\">\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Audio/Video' || selectedAsset.assetType==='Audio')\" [postAsset]=\"selectedAsset\"></app-player>\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Text')\" [postAsset]=\"selectedAsset\"></app-player>\n        <!-- TODO: Remove style tag -->\n        <!-- social begin here -->\n        <ul class=\"socicon right\" style=\"margin-bottom:10px;\">\n          <!-- <li>\n            <a href=\"#\" class=\"share-icon\">\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"google\">\n            </a>\n          </li>-->\n          <li>\n            <a href=\"https://www.facebook.com/dalnarchive/\" class=\"facebook\" target=\"_blank\">\n            </a>\n          </li>\n          <li>\n              <a class=\"twitter twitter-share-button\"\n                href=\"https://twitter.com/intent/tweet?url=&text={{postDetail.title}}&via=dalnarchive\" target=\"_blank\"  ></a>\n          </li>\n          <!-- <li>\n            <a href=\"#\" class=\"flickr\">\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"linkedin\">\n            </a>\n          </li>\n          <li class=\"last\">\n            <a href=\"#\" class=\"vimeo\">\n            </a>\n          </li> -->\n\n        </ul>\n\n\n        </div>\n\n\n    </div>\n\n\n  </section>\n\n\n\n\n\n\n</div><!-- /container -->\n<daln-footer></daln-footer>\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"postItem col-xs-3\" *ngIf=\"postItem\">\n  <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\n\n    <app-player\n                [postAsset]=\"getPreview(postItem.assetList)\" [thumb]=\"true\"></app-player>\n  </a>\n<a [routerLink]=\"['/detail', postItem.postId]\">\n  <div class=\"desc\">\n     {{postItem.title}}\n    <p><em>{{postItem.description}}</em></p>\n  </div>\n</a>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div id=\"list-container\" *ngIf=\"postList\">\n\n  <!-- <ul class=\"thumbnails list-unstyled\">\n    <li class=\"span3 item-block\" *ngFor=\"let post of postList\">\n      <post-item class=\"media\" [postItem]=\"post\"></post-item>\n    </li>\n  </ul> -->\n\n\n    <div class=\"row\">\n            <div class=\"col-xs-18 col-sm-6 col-md-3\" *ngFor=\"let post of postList\">\n              <div class=\"thumbnail\">\n                <post-item class=\"media\" [postItem]=\"post\"></post-item>\n              </div>\n            </div>\n    </div>\n<!-- \n<nav class=\"paginator\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\">\n      <a class=\"page-link\" (click)=\"page.nextPage()\" aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </li>\n  </ul>\n</nav> -->\n</div>\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-3 offset-md-2\" *ngIf=\"showUtil\">\n<button class=\"btn btn-primary\" type=\"submit\" (click)=\"this._router.navigateByUrl('/home')\">Go Back to Home Page</button>\n</div>\n\n<div id=\"search-component\">\n\n  <!-- Main Search Box -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n     <div class=\"input-group\">\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-secondary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#options\">&#9660;</button>\n            </span>\n            <input #searchBox class=\"form-control\" id=\"search-box\" placeholder=\"Search the DALN...\" [value]=\"searchService.searchQuery\" (input)=\"searchService.searchQuery = $event.target.value\"/>\n           <button *ngIf=\"showUtil\" class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"onSearch(searchBox.value, results.value, pageNum.value, $posts)\" (click)=\"onSearch(searchBox.value, results.value, pageNum.value)\" >Search</button>\n           <button *ngIf=\"!showUtil\" class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"onFakeSearch(searchBox.value, results.value, pageNum.value, $posts)\" (click)=\"onFakeSearch(searchBox.value, results.value, pageNum.value)\" >Search</button>\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- Search Options -->\n  <div class=\"collapse\" id=\"options\">\n  <div class=\"card card-block\" [class.col-md-5]=\"showFull\" [class.offset-md-3]=\"showFull\">\n      <div class=\"card-header\" id=\"option-card\">\n          Options\n      </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"input-group \">\n                <span class=\"input-group-addon\">Results per page</span>\n                <input #results class=\"form-control\" id=\"results-size\" type=\"number\" min=\"0\" max=\"50\"/>\n            </div>\n        </div>\n        <div class=\"col-md-4 offset-md-4\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">Page Number</span>\n                <input #pageNum class=\"form-control\" id=\"pageNumber\" type=\"number\" min=\"0\" max=\"50\"/>\n            </div>\n        </div>\n    </div>\n  </div>\n  </div>\n\n<div class=\"row justify-content-center\">\n  <div class=\"no-results col-md-6 \" *ngIf=\"noResults == true\">\n      <p>\n          Sorry, there were no results for your query.\n      </p>\n  </div>\n </div>\n\n\n\n\n\n\n</div>\n\n\n<div class=\"container responsive_home\" >\n    <div class=\"post_list\">\n        <post-list [postList]=\"posts\"></post-list>\n    </div>\n</div>\n\n\n\n<!-- <daln-footer *ngIf=\"showUtil\"></daln-footer> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "\n<div [@visibilityChanged]=\"visibility\" class=\"slider_component\">\n    <ngb-carousel>\n        <template ngbSlide>\n            <div class=\"image-background\">\n                       <img src=\"assets/images/slider/jimmy-carter.jpg\" class=\"slider-img\"/>\n               </div>\n\n            <div class=\"carousel-caption\">\n                <a href=\"https://thedaln.wordpress.com/2015/07/06/exciting-news-revealed-president-jimmy-carters-narrative/\" target=\"_blank\">\n                    <h3>Exciting News Revealed: President Jimmy Carter's Narrative!</h3>\n                    <p>“I’m afraid I don’t have a very good story.” This is how Jimmy Carter begins. It’s a humble beginning to a truly beautiful narrative</p>\n                </a>\n            </div>\n        </template>\n      <template ngbSlide>\n        <img src=\"assets/images/slider/books.jpg\" alt=\"DALN Intro\" class=\"slider-img\">\n        <div class=\"carousel-caption\">\n          <h3>DALN</h3>\n          <p>An Introduction to the Digital Archive of Literacy Narratives</p>\n        </div>\n      </template>\n      <template ngbSlide>\n        <img src=\"assets/images/slider/slider-img02.jpg\" alt=\"New DALN post\" class=\"slider-img\">\n        <div class=\"carousel-caption\">\n            <a href=\"https://thedaln.wordpress.com/2017/01/14/the-ocean/\" target=\"_blank\">\n                <h3>View new DALN Blog Post!</h3>\n                <p>If you ever find yourself overwhelmed with self-doubt about any writing project you may be doing, then check out the literacy narrative titled “The Ocean.”</p>\n            </a>\n        </div>\n      </template>\n\n    </ngb-carousel>\n</div>\n\n<!--\n<div class=\"carousel\">\n\n <ul class=\"images\">\n\n   <li *ngFor=\"let slide of slides\">\n     <h2>DALN</h2>\n     <img src=\"assets/images/slider/slider-img01.jpg\" alt=\"\">\n   </li>\n\n </ul>\n\n</div> -->\n"

/***/ })

},[1128]);
//# sourceMappingURL=main.bundle.map