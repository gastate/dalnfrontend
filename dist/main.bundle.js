webpackJsonp([2,4],{

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(527);


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var api_url = "http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService";
var api_url2 = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
var all_posts = api_url + "/posts/all";
var create_post = api_url + "/posts/create";
var page_posts = api_url + "/posts/"; // becomes http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/posts/size=10page=1
var post = api_url + "/posts/";
// const search_posts = api_url + "/posts/search=";
var search_posts = api_url2 + "/posts/search/";
var upload_media = api_url + "/upload";
var update_post = api_url + "/update";
var environment = {
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
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/environment.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchService = (function () {
    function SearchService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
        this.endPoint = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_ENDPOINTS;
    }
    // ***************************
    //Using Mock data the search return successfully
    // ***************************
    // search(term: string): Promise<Post[]> {
    //   return Promise.resolve(POSTS);
    // }
    // Returning Search as Promise
    // search(term: string): Promise<Post[]> {
    //   return this._http.get(this.endPoint.search_posts + "search=" + term).toPromise().then((res) => {
    //     let results = res.json()
    //     console.log("Search Results from Service", results)
    //     return results as Post[]
    //   }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }
    // Returning Search as Observable
    SearchService.prototype.search = function (term) {
        //api call
        // you can replace the get() with https://cdn.rawgit.com/gastate/dalnfrontend/dev-currently-working/test.json to see it working.
        return this._http.get(this.endPoint.search_posts + term).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    // https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production/posts/search/literacy/10/1
    // format is the search endpoint + the term for search + the number of results per page + the page number (page number == return 50 posts of 2 results then the next two if incremented.)
    SearchService.prototype.search_page = function (term, results, page_size) {
        console.log(this.endPoint.search_posts + term + "/" + results + "/" + page_size);
        return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === 'function' && _b) || Object])
    ], SearchService);
    return SearchService;
    var _a, _b;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/search.service.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.title = 'About';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(825),
            styles: [__webpack_require__(815)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/about.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this._class = "container";
    }
    AppComponent.prototype.toggleFull = function () {
        if (this._class == "container") {
            this._class = "container-fluid";
        }
        else {
            this._class = "container";
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "_class", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'daln-app',
            template: __webpack_require__(827)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/app.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.title = 'Contact';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(828),
            styles: [__webpack_require__(817)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/contact.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(elementRef, _postService, _searchService) {
        this.elementRef = elementRef;
        this._postService = _postService;
        this._searchService = _searchService;
        this.title = 'DALN Frontend';
        this.isInProd = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.isInProd == false) {
            this.getPagePosts();
        }
        else {
            this.getAllPosts();
        }
    };
    HomeComponent.prototype.onSearch = function ($posts) {
        console.log("Post Event", $posts);
        if (!$posts) {
            this.getAllPosts();
        }
        console.log("in home component onSearch");
        this.posts = $posts;
    };
    HomeComponent.prototype.getAllPosts = function () {
        var _this = this;
        this._postService.getAllPosts().subscribe(function (data) {
            _this.posts = data;
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
        // //Mock Data method
        //   getMockPosts(): void {
        //     this._postService.getMockPosts().then((data) => this.posts = data);
        //   }
        // this._postService.getAllPosts().take(10).subscribe(
        //   (data) => this.posts = data, //Bind to view
        //   err => {
        //     // Log errors if any
        //     console.log(err);
        //   });
    };
    HomeComponent.prototype.getPagePosts = function () {
        var _this = this;
        this._searchService.search_page("literacy", 10, 1).subscribe(function (data) {
            _this.posts = data;
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'home',
            template: __webpack_require__(829),
            styles: [__webpack_require__(818)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/home.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
    }
    return Post;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/post-model.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__(830),
            styles: [__webpack_require__(819)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/page-not-found.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_post_model__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostDetailComponent = (function () {
    function PostDetailComponent(_postService, _route, _location) {
        this._postService = _postService;
        this._route = _route;
        this._location = _location;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.switchMap(function (params) { return _this._postService.getPostById(params['id']); })
            .subscribe(function (details) {
            _this.postDetail = details;
            // console.log(details);
            _this.selectedAsset = _this._postService.getPreview(_this.postDetail.assetList);
        });
    };
    PostDetailComponent.prototype.goBack = function () {
        this._location.back();
    };
    PostDetailComponent.prototype.onSelectedAsset = function (asset) {
        this.selectedAsset = asset;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__model_post_model__["a" /* Post */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__model_post_model__["a" /* Post */]) === 'function' && _a) || Object)
    ], PostDetailComponent.prototype, "postDetail", void 0);
    PostDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'post-detail',
            template: __webpack_require__(832),
            styles: [__webpack_require__(821)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */]) === 'function' && _d) || Object])
    ], PostDetailComponent);
    return PostDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/post-detail.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostListComponent = (function () {
    function PostListComponent() {
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(), 
        __metadata('design:type', Array)
    ], PostListComponent.prototype, "postList", void 0);
    PostListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'post-list',
            template: __webpack_require__(834),
            styles: [__webpack_require__(823)]
        }), 
        __metadata('design:paramtypes', [])
    ], PostListComponent);
    return PostListComponent;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/post-list.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".search-result{\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width:195px;\r\n  height: 20px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n#search-box{\r\n  width: 40%;\r\n  height: auto;\r\n  margin: 20px 10px;\r\n}\r\n\r\n#search-component {\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/submit-form/submit-form.module": [
		1127,
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
webpackAsyncContext.id = 526;


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(650);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/main.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'daln-footer',
            template: __webpack_require__(826),
            styles: [__webpack_require__(816)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/app-footer.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_detail_post_detail_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__(442);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'posts',
        component: __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__["a" /* PostListComponent */]
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__post_detail_post_detail_component__["a" /* PostDetailComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'create',
        loadChildren: 'app/submit-form/submit-form.module#SubmitFormModule'
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/app-routing.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_list_post_list_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_item_post_item_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_detail_post_detail_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_post_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__player_player_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_search_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__search_search2_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__slider_slider_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__page_not_found_page_not_found_component__ = __webpack_require__(445);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__post_list_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__post_item_post_item_component__["a" /* PostItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_detail_post_detail_component__["a" /* PostDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__search_search2_component__["a" /* SearchComponent2 */],
                __WEBPACK_IMPORTED_MODULE_19__slider_slider_component__["a" /* SliderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_post_service__["a" /* PostService */], { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/app.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(441);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(649);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/index.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asset; });
/**
 * Created by lkittogsuedu on 11/30/16.
 */
var Asset = (function () {
    function Asset() {
    }
    return Asset;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/asset-model.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_asset_model__ = __webpack_require__(651);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = (function () {
    function PlayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.checkAssetList = function (post) {
        if (this.postCheck.hasOwnProperty('assetList') === false) {
            this.noAsset = true;
        }
    };
    PlayerComponent.prototype.sanitizeUrl = function (asset) {
        if (this.postAsset.assetType === "Audio/Video") {
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.postAsset.assetEmbedLink);
        }
        else if (this.postAsset.assetType === "Audio") {
            var url = ""; // don't need let function scope. use for concatanating full audio url.
            var audioID = this.postAsset.assetEmbedLink;
            var pattern = /\d+/g;
            audioID = pattern.exec(audioID).toString(); // JS to find the audio track ID.
            url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID; // append the ID and query SoundCloud to get player.
            // sanitizer takes in a string.
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
        else {
            return null;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_asset_model__["a" /* Asset */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_asset_model__["a" /* Asset */]) === 'function' && _a) || Object)
    ], PlayerComponent.prototype, "postAsset", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], PlayerComponent.prototype, "thumb", void 0);
    PlayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__(831),
            styles: [__webpack_require__(820)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _b) || Object])
    ], PlayerComponent);
    return PlayerComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/player.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_post_model__ = __webpack_require__(444);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostItemComponent = (function () {
    function PostItemComponent(_router, _postService) {
        this._router = _router;
        this._postService = _postService;
    }
    //****************************
    PostItemComponent.prototype.getPreview = function (postAssets) {
        return this._postService.getPreview(postAssets);
    };
    PostItemComponent.prototype.onSelect = function (post) {
        this.selectedPost = post;
        //goto detail page
        this.gotoDetail();
    };
    PostItemComponent.prototype.gotoDetail = function () {
        this._router.navigate(['/detail', this.selectedPost.postId]);
    };
    PostItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_post_model__["a" /* Post */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__model_post_model__["a" /* Post */]) === 'function' && _a) || Object)
    ], PostItemComponent.prototype, "postItem", void 0);
    PostItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'post-item',
            template: __webpack_require__(833),
            styles: [__webpack_require__(822)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === 'function' && _c) || Object])
    ], PostItemComponent);
    return PostItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/post-item.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_search_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_post_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(_postService, _searchService, _router) {
        this._postService = _postService;
        this._searchService = _searchService;
        this._router = _router;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"](); // using a Subject retains the state of the given data, so later we can subscribe other Observables to it. Like future updates will include other things like "literacy + video games" or other enhanced search options.
    }
    SearchComponent.prototype.search = function (term) {
        this.searchTerm.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = this.searchTerm
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this._searchService.search(term) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        });
    };
    SearchComponent.prototype.gotoDetail = function (post) {
        //   let link = ['/detail', this.posts.subscribe(data => console.log(data))];
        //   this._router.navigate(link);
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(835),
            styles: [__webpack_require__(485)],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_post_service__["a" /* PostService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/search.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent2; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent2 = (function () {
    function SearchComponent2(_postService, _searchService, _router) {
        this._postService = _postService;
        this._searchService = _searchService;
        this._router = _router;
        this.searchResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* EventEmitter */]();
    }
    SearchComponent2.prototype.ngOnInit = function () {
    };
    // onSearch(term: any): void {
    //   if(term ==='' || term === undefined){
    //     return
    //   }
    //     this._searchService.search(term).then( (results) => {
    //       console.log("In Emmitter: ", results);
    //     this.searchResults.emit(results);
    //   });
    // }
    SearchComponent2.prototype.onSearch = function (term) {
        var _this = this;
        if (term === '' || term === undefined) {
            return null;
        }
        this._searchService.search_page(term, 10, 1)
            .subscribe(function (data) {
            // this.allIden = data.map(val => val.id);
            // console.log("All Ids:" , this.allIden);
            // console.log(typeof this.allIden);
            // console.log("In Emmitter: ", data);
            _this.searchResults.emit(data),
                function (//Bind to view
                    err) {
                    // Log errors if any
                    console.log(err);
                };
        });
    };
    __decorate([
        //implements OnInit {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(), 
        __metadata('design:type', String)
    ], SearchComponent2.prototype, "query", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SearchComponent2.prototype, "searchResults", void 0);
    SearchComponent2 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-search2',
            template: __webpack_require__(836),
            styles: [__webpack_require__(485)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], SearchComponent2);
    return SearchComponent2;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/search2.component.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POSTS; });
var POSTS = [
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
    },
    {
        postId: "35f94a41-f310-4d7b-93c1-616cb6096535",
        title: "test post 111116",
    }
];
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/mock-postlist.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Compoent Decorator
var SliderComponent = (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            //Name of our tag
            selector: 'app-slider',
            //Template for the tag
            template: __webpack_require__(837),
            //Styles for the tag
            styles: ["slider.component.css"],
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: []
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/slider.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/polyfills.js.map

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/* About CSS\r\n-------------------------------------------------- */\r\n\r\nh1 {\r\n    margin-top: 5%;\r\n}\r\n\r\n\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\nh1 {\r\n    margin-top: 5%;\r\n}\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/*#sc-widget {\r\n    width : \"100%\";\r\n    height : \"100%\";\r\n}\r\n\r\n.sproutvideo-player {\r\n    width : \"100%\";\r\n    height : \"100%\";\r\n}*/\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n.tag {\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{title}}</h1>\r\n\r\n  <div class=\"about-info\">\r\n      <div id=\"about-image\">\r\n          <img src=\"assets/img/osugsu.jpg\" alt=\"\" />\r\n      </div>\r\n\r\n\r\n      <p>\r\n     Co-sponsored by The Ohio State University and Georgia State University, The DALN (daln.osu.edu) is a publicly available archive of personal literacy narratives in a variety of formats (text, video, audio) that together provide a historical record of the literacy practices and values of contributors, as those practices and values change.\r\n     </p>\r\n\r\n     <p>\r\n         The DALN invites people of all ages, races, communities, backgrounds, and interests to contribute stories about how — and in what circumstances — they read, write, and compose meaning, and how they learned to do so (or helped others learn).\r\n     </p>\r\n\r\n     <p>\r\n         We welcome personal narratives about reading and composing all kinds of texts, both formal and informal: diaries, blogs, poetry, music and musical lyrics, fan zines, school papers, videos, sermons, gaming profiles, speeches, chatroom exchanges, text messages, letters, stories, photographs, etc. We also invite contributors to supplement their narratives with samples of their own writing (papers, letters, zines, speeches, etc.) and compositions (music, photographs, videos, sound recordings, etc.).\r\n     </p>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"span4\">\r\n        <h3>About</h3>\r\n        <p>The DALN is a publicly available online archive of over <strong>7,000</strong> personal literacy narratives\r\nthat has international reach in terms of both submitters and end users. The archive consists\r\nof a variety of files and media formats (text, video, audio) that together provide a historical\r\nrecord of the literacy practices and values of contributors. The project, initially developed\r\nin 2005, is currently directed by faculty from The Ohio State University and Georgia State\r\nUniversity.</p>\r\n        <h3>Connect With Us</h3>\r\n        <!-- social begin here -->\r\n        <ul class=\"socicon left\">\r\n          <li><a href=\"#\" class=\"share-icon\"> </a></li>\r\n          <!-- <li><a href=\"#\" class=\"google\"> </a></li> -->\r\n          <li><a href=\"#\" class=\"facebook\"> </a></li>\r\n          <li><a href=\"#\" class=\"twitter\"> </a></li>\r\n          <!-- <li><a href=\"#\" class=\"flickr\"> </a></li> -->\r\n          <!-- <li><a href=\"#\" class=\"dribbble\"> </a></li> -->\r\n          <li><a href=\"#\" class=\"linkedin\"> </a></li>\r\n          <!-- <li class=\"last\"><a href=\"#\" class=\"vimeo\"> </a></li> -->\r\n        </ul>\r\n      </div>\r\n      <!-- tweets begin here -->\r\n      <div class=\"span4\">\r\n        <h3>Latest Tweets</h3>\r\n        <div class=\"tweets\">\r\n\r\n        </div>\r\n        <a class=\"twitter-timeline\" data-width=\"300\" data-height=\"330\" data-theme=\"dark\" href=\"https://twitter.com/dalnarchive\" target=\"_blank\">Tweets by dalnarchive</a>\r\n      </div>\r\n      <div class=\"span4\"> <!-- flickr begin here -->\r\n        <h3>From Flickr</h3>\r\n      </div>\r\n      <div class=\"span12 copy\"> LICENSE INFO </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "  <!-- Logo / Menu\r\n================================================== -->\r\n<!--\r\n<header class=\"header\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"span4\">\r\n       <div id=\"header-wrap\"> <a href=\"index.html\" class=\"logo\"> <img src=\"assets/img/Logo_transparent.png\" alt=\"\">         <h4>Digital Archive of Literacy Narratives</h4> </a>\r\n       </div>\r\n     </div>\r\n\r\n   <div class=\"span8\">\r\n      <nav>\r\n      <div id=\"menuToggle\">\r\n      <input id= \"menu-button\" type=\"checkbox\" />\r\n\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n\r\n              <ul class=\"right\" id=\"main-menu\">\r\n                  <li> <a routerLink=\"/home\"> home </a>\r\n                  <li> <a routerLink=\"/about\"> about </a> </li>\r\n                  <li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n                  <li> <a routerLink=\"/contact\"> contact </a> </li>\r\n                 <li> <a routerLink=\"/#\"> login </a> </li>\r\n                  <li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\r\n              </ul>\r\n      </div>\r\n      </nav>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n</header> -->\r\n\r\n\r\n<!--\r\n<div class=\"container\">\r\n<div class=\"navbar\">\r\n  <div class=\"navbar\">\r\n\r\n\r\n      <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </a>\r\n\r\n       <div class=\"header2\">\r\n           <img src=\"assets/img/Logo_transparent.png\" />\r\n            <a class=\"brand\" href=\"#\">Digital Archive of Literacy Narratives</a>\r\n        </div>\r\n\r\n      <div class=\"nav-collapse navbar-responsive-collapse collapse\">\r\n\r\n        <ul class=\"nav\">\r\n            <li> <a routerLink=\"/home\"> home </a>\r\n            <li> <a routerLink=\"/about\"> about </a> </li>\r\n            <li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n            <li> <a routerLink=\"/contact\"> contact </a> </li>\r\n            <li> <a routerLink=\"/#\"> login </a> </li>\r\n            <li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n  <router-outlet></router-outlet> -->\r\n\r\n<!-- <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\r\n  <div [className]=\"_class\">\r\n     <button (click)=\"toggleFull()\"><i class=\"icon-align-justify\"></i></button>\r\n\r\n\r\n  \t\t\t<a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\" onclick=\"var div = document.getElementById('navbarToggle'); div.style.height != '100%' ? div.style.height = '100%' : div.style.height = '0px';\">\r\n  \t\t\t\t<span class=\"icon-bar\"></span>\r\n  \t\t\t\t<span class=\"icon-bar\"></span>\r\n  \t\t\t\t<span class=\"icon-bar\"></span>\r\n  \t\t\t</a>\r\n\r\n  \t\t\t<div class=\"header2\">\r\n  \t\t\t\t<img src=\"assets/img/Logo_transparent.png\" />\r\n  \t\t\t\t<a class=\"brand\" href=\"#\">Digital Archive of Literacy Narratives</a>\r\n  \t\t\t</div>\r\n\r\n  \t\t\t<div class=\"nav-collapse navbar-responsive-collapse collapse\" id=\"navbarToggle\">\r\n  \t\t\t\t<ul class=\"nav\">\r\n  \t\t\t\t\t<li> <a routerLink=\"/home\"> home </a> </li>\r\n  \t\t\t\t\t<li> <a routerLink=\"/about\"> about </a> </li>\r\n  \t\t\t\t\t<li> <a href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n  \t\t\t\t\t<li> <a routerLink=\"/contact\"> contact </a> </li>\r\n  \t\t\t\t\t<li> <a routerLink=\"/create\"> submit a literacy narrative </a> </li>\r\n  \t\t\t\t</ul>\r\n  \t\t\t</div>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet> -->\r\n\r\n<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\r\n      <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"header2\">\r\n          <img src=\"assets/img/Logo_transparent.png\" />\r\n          <a class=\"brand\" href=\"#\">Digital Archive of Literacy Narratives</a>\r\n      </div>\r\n\r\n      <div class=\"navbar-collapse \" id=\"navbarsExampleDefault\" aria-expanded=\"true\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item active\"> <a class=\"nav-link\" routerLink=\"/home\"> home </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/about\"> about </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/contact\"> contact </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/create\"> submit a literacy narrative </a> </li>\r\n          </ul>\r\n       </div>\r\n\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{title}}</h1>\r\n\r\n\r\n    <div class=\"contact-info\">\r\n        <p>\r\n            <strong>Ben McCorkle</strong> is an associate professor of English and teaches courses in composition, rhetoric, and digital media studies, primarily on The Ohio State University’s Marion campus. He is the author of the book Rhetorical Delivery as Technological Discourse: A Cross-Historical Study, as well as several articles in publications including Computers and Composition Online, Rhetoric Society Quarterly, and Composition Studies. He is currently serving as Co-Director of the DALN. Email Ben: <a href=\"mailto:mccorkle.12@osu.edu\">mccorkle.12@osu.edu</a>.\r\n       </p>\r\n\r\n       <p>\r\n           <strong>Michael Harker </strong> is an associate professor of English and teaches courses in composition, rhetoric, and literacy studies at Georgia State University. He is the author of The Lure of Literacy: A Critical Reception of the Compulsory Composition Debate (SUNY Press). He has published articles in College Composition and Communication, Literacy in Composition Studies, Computers and Composition: An International Journal, and Computers and Composition Online. He is a Co-Director of the Digital Archive of Literacy Narratives (DALN). Email Michael: <a href=\"mailto:mharker@gsu.edu\">mharker@gsu.edu</a>.\r\n       </p>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"container\">\r\n\r\n            <app-slider></app-slider>\r\n\r\n            <!-- Search Component -->\r\n            <app-search2 (searchResults)=\"onSearch($event)\" ></app-search2>\r\n\r\n\r\n    </div>\r\n\r\n\r\n<div class=\" container\">\r\n     <post-list [postList]=\"posts\"></post-list>\r\n</div>\r\n\r\n<daln-footer></daln-footer>\r\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\r\n<p>\r\n    Page not found.\r\n</p>\r\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash; SoundCloud &ndash;&gt;-->\r\n<div  *ngIf=\"postAsset\">\r\n\r\n  <div *ngIf=\"noAsset === true\">\r\n     <img src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n  <div  *ngIf=\"postAsset.assetType==='Audio'\">\r\n    <iframe id=\"sc-widget\" scrolling=\"no\" width=\"100%\" height=\"166px\"\r\n            [src]=\"sanitizeUrl()\"></iframe>\r\n  </div>\r\n\r\n  <div *ngIf=\"postAsset.assetType === 'Audio/Video'\">\r\n    <iframe *ngIf=\"!thumb\" class='sproutvideo-player' type='text/html'\r\n            [src]='sanitizeUrl()' allowfullscreen ></iframe>\r\n    <iframe *ngIf=\"thumb\" class='sproutvideo-player' type='text/html' width=\"100%\" height=\"166px\"\r\n            [src]='sanitizeUrl()' allowfullscreen ></iframe>\r\n  </div>\r\n\r\n  <div *ngIf=\"postAsset.assetType !== 'Audio/Video' && postAsset.assetType !=='Audio'\">\r\n    <img src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"postDetail\">\r\n  <button (click)=\"goBack()\">Back</button>\r\n\r\n  <section>\r\n\r\n\r\n    <div class=\"row\">\r\n      <!-- Project info\r\n      ================================================== -->\r\n\r\n\r\n      <div class=\"span4\">\r\n\r\n        <!-- Use the ul class. -->\r\n        <ul class=\"nav nav-list\">\r\n          <li>\r\n            <h3>{{postDetail.title}}</h3>\r\n            <p>{{postDetail.description}}</p>\r\n          <li>\r\n            <h3>Date Submitted</h3>\r\n            <p>{{postDetail.dateCreated}}</p>\r\n          </li>\r\n          <li>\r\n            <h3>Author</h3>\r\n            <p *ngFor=\"let author of postDetail.contributorAuthor\">{{author}}</p>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <ul class=\"nav nav-list\">\r\n          <li>\r\n            <h3>Collections</h3>\r\n            <p>All literacy narratives that are not part of a topical collection.</p>\r\n          </li>\r\n          <li>\r\n            <h3>Tags/Subjects</h3>\r\n            <ul class=\"tags-list\">\r\n              <!-- Track elements and limit tags with NgFor and TrackBy -->\r\n              <li class=\"tag\" *ngFor=\"let subject of postDetail.subject\"><span\r\n                class=\"label label-info\">{{subject}}</span></li>\r\n            </ul>\r\n\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <ul class=\"nav nav-list\">\r\n          <li>\r\n            <h3>Description</h3>\r\n            <p>{{postDetail.description}}</p>\r\n          </li>\r\n        </ul>\r\n\r\n        <br/>\r\n        <ul class=\"nav nav-list\">\r\n          <li>\r\n            <h3>Media List</h3>\r\n          </li>\r\n          <ul *ngFor=\"let asset of postDetail.assetList\">\r\n\r\n            <li (click)=\"onSelectedAsset(asset)\">\r\n              <!-- Change event to be click event that changes player embed link -->\r\n              <h3>{{asset.assettitle}}</h3>\r\n              <p>{{asset.assetType}}: {{asset.assetDescription}}</p>\r\n\r\n              <!--<div *ngIf=\"selectedAsset\">{{selectedAsset.assetID}}</div>-->\r\n            </li>\r\n\r\n          </ul>\r\n        </ul>\r\n\r\n        <!--<div class=\"span8\">-->\r\n        <!--<app-player class=\"\" [postAsset]=\"selectedAsset\"></app-player>-->\r\n\r\n        <!--</div>-->\r\n\r\n\r\n        <!-- Idea from here: http://commkit.gsu.edu/shortcodes/ -->\r\n        <!-- Needs work -->\r\n        <!-- TODO: Add CSS class; REMOVE style tags-->\r\n\r\n        <div class=\"details\" id=\"detail-drop\" style=\"margin-bottom:35px;\">\r\n          <div class=\"accordion-group\">\r\n            <div class=\"accordion-heading\">\r\n              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseOne\">\r\n                Detailed Record\r\n              </a>\r\n            </div>\r\n            <div id=\"collapseOne\" class=\"accordion-body in collapse\" style=\"height: auto;\">\r\n              <div class=\"span4\">\r\n                <div class=\"accordion-inner\">\r\n                  <!-- TODO: Requires testing -->\r\n                  <p *ngFor=\"let author of postDetail.contributorAuthor\">{{postDetail.contributorAuthor}}</p>\r\n                  <p *ngFor=\"let interview of postDetail.contributorInterviewer\">\r\n                    {{postDetail.contributorInterviewer}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Video\r\n      ================================================== -->\r\n      <div class=\"row\">\r\n\r\n        <!-- TODO: Remove style tag -->\r\n        <!-- social begin here -->\r\n        <ul class=\"socicon right\" style=\"margin-bottom:10px;\">\r\n          <!-- <li>\r\n            <a href=\"#\" class=\"share-icon\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"google\">\r\n            </a>\r\n          </li>-->\r\n          <li>\r\n            <a href=\"#\" class=\"facebook\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n              <a class=\"twitter twitter-share-button\"\r\n                href=\"https://twitter.com/intent/tweet?url=&text={{postDetail.title}}&via=dalnarchive\" target=\"_blank\"  ></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"flickr\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"linkedin\">\r\n            </a>\r\n          </li>\r\n          <li class=\"last\">\r\n            <a href=\"#\" class=\"vimeo\">\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n        <div class=\"span8\">\r\n            <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Audio/Video' || selectedAsset.assetType==='Audio')\" class=\"\"\r\n                        [postAsset]=\"selectedAsset\"></app-player>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </section>\r\n\r\n\r\n\r\n\r\n  <div class=\"divider\"></div>\r\n\r\n</div><!-- /container -->\r\n<daln-footer></daln-footer>\r\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"postItem\" *ngIf=\"postItem\">\r\n  <a href=\"#\" class=\"link\"></a>\r\n  <a class=\"thumbnail\" href=\"#\">\r\n\r\n    <app-player class=\"\"\r\n                [postAsset]=\"getPreview(postItem.assetList)\" [thumb]=\"true\"></app-player>\r\n  </a>\r\n  <div class=\"desc\">\r\n    <a [routerLink]=\"['/detail', postItem.postId]\"> {{postItem.title}} </a>\r\n    <p><em>{{postItem.description}}</em></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div id=\"list-container\" *ngIf=\"postList\">\r\n\r\n  <ul class=\"thumbnails\">\r\n    <li class=\"span3 item-block\" *ngFor=\"let post of postList\">\r\n      <post-item class=\"\" [postItem]=\"post\"></post-item>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\r\n  <h4>Search</h4>\r\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\r\n  <div>\r\n    <div *ngFor=\"let post of posts | async\"\r\n         (click)=\"gotoDetail(post)\" class=\"search-result\" >\r\n      {{post.fields.title[0]}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\r\n<form>\r\n\r\n  <input #searchBox id=\"search-box\" placeholder=\"Search the DALN...\" (keydown.enter)=\"onSearch(searchBox.value)\" />\r\n  <!-- <div class=\"no-results\" *ngIf=\"noResults == true\">\r\n      <p>\r\n          Sorry, there were no results for your query.\r\n      </p>\r\n  </div> -->\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "\r\n<ngb-carousel>\r\n  <template ngbSlide>\r\n    <img src=\"assets/images/slider/slider-img01.jpg\" alt=\"Random first slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>DALN</h3>\r\n      <p>An Introduction to the Digital Archive of Literacy Narratives</p>\r\n    </div>\r\n  </template>\r\n  <template ngbSlide>\r\n    <img src=\"assets/images/slider/slider-img02.jpg\" alt=\"Random second slide\">\r\n    <div class=\"carousel-caption\">\r\n        <a href=\"https://thedaln.wordpress.com/2017/01/14/the-ocean/\" target=\"_blank\">\r\n            <h3>View new DALN Blog Post!</h3>\r\n            <p>If you ever find yourself overwhelmed with self-doubt about any writing project you may be doing, then check out the literacy narrative titled “The Ocean.”</p>\r\n        </a>\r\n    </div>\r\n  </template>\r\n\r\n</ngb-carousel>\r\n\r\n<!--\r\n<div class=\"carousel\">\r\n\r\n <ul class=\"images\">\r\n\r\n   <li *ngFor=\"let slide of slides\">\r\n     <h2>DALN</h2>\r\n     <img src=\"assets/images/slider/slider-img01.jpg\" alt=\"\">\r\n   </li>\r\n\r\n </ul>\r\n\r\n</div> -->\r\n"

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mock_postlist__ = __webpack_require__(656);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.endPoint = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].API_ENDPOINTS;
    }
    PostService.prototype.getAllPosts = function () {
        //api call
        return this._http.get(this.endPoint.all_posts).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ;
    // getPostPage(size: number, page: number): Observable<Post[]> {
    //
    //     //size is the number of posts per page, page is the position of posts to cycle through.
    //     //so a parameter of size 10 returns 10 post IDs per page, page 1 is the first 0-10 postIDs, then page 2 is the next 11-20 postIDs.
    //
    //     return this._http.get(this.endPoint.page_posts + "size=" + size + "page=" + page).map((res: Response) => res.json())
    //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    // };
    PostService.prototype.getPostById = function (id) {
        console.log(this._http.get(this.endPoint.post + id).map(function (res) { return res.json().data; }));
        return this._http.get(this.endPoint.post + id).map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    PostService.prototype.getPreview = function (postAssets) {
        if (postAssets) {
            var preview = void 0;
            preview = postAssets.find(function (asset) { return asset.assetType === 'Audio/Video'; });
            if (preview) {
                return preview;
            }
            else {
                preview = postAssets.find(function (asset) { return asset.assetType === 'Audio'; });
                if (preview) {
                    return preview;
                }
                else {
                    return postAssets[0];
                }
            }
        }
    };
    //Mock Services
    PostService.prototype.getMockPosts = function () {
        //replace with api call
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_7__mock_postlist__["a" /* POSTS */]);
    };
    PostService.prototype.filterPostsById = function (posts, id) {
        var filtered = posts.find(function (post) { return post.postId === id; });
        return Promise.resolve(filtered);
    };
    PostService.prototype.getMockPostById = function (id) {
        // replace with api call
        return this.filterPostsById(__WEBPACK_IMPORTED_MODULE_7__mock_postlist__["a" /* POSTS */], id);
    };
    PostService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PostService);
    return PostService;
    var _a;
}());
//# sourceMappingURL=D:/ThingsOfAll/CURVE/DALN Project/dalnfrontend/src/post.service.js.map

/***/ })

},[1125]);
//# sourceMappingURL=main.bundle.js.map