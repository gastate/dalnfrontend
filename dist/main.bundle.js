webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

///////////////////////
// Cognito Functions //
///////////////////////
var region = 'us-east-1';
var userPoolId = 'us-east-1_0lPzLvk1m';
var clientId = '5jor2041aact5jm0ka79c67dr4';
var identityPoolId = "us-east-1:258aaf8f-4093-400c-83e8-84981352c82f";
//////////////////////
// Lambda Functions //
//////////////////////
var api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development";
var search_api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development"; // using prod endpoint on both dev and prod.
var all_posts = api_url + "/posts/all";
var create_post = api_url + "/posts/create";
var page_posts = search_api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
var post = search_api_url + "/posts/get/";
var get_dev_post = api_url + "/posts/getdev/"; // to get a post from the dev table (used for viewing purposes)
var rand_post = api_url + "/posts/random/"; // to get a list of random posts
var search_posts = search_api_url + "/posts/search/";
// Posts/search/(query)/(pageSize)/(start)/(field)/(order)
// start = index of first post
// field = assetlocation of whatever
// order = asc or desc
var search_size = search_api_url + "";
var approve_post = api_url + "/posts/approve/"; // to approve posts into search engine.
var unapprove_post = api_url + "/posts/unapprove";
var get_upload_link = api_url + "/asset/s3upload/"; // to get the link for file uploading.
var link_media = api_url + "/asset/apiupload/"; // to link the post to the files uploaded.
var get_unapproved_posts = api_url + "/posts/unapproved";
exports.environment = {
    production: false,
    API_ENDPOINTS: {
        all_posts: all_posts,
        approve_post: approve_post,
        api_url: api_url,
        create_post: create_post,
        get_upload_link: get_upload_link,
        get_unapproved_posts: get_unapproved_posts,
        link_media: link_media,
        page_posts: page_posts,
        post: post,
        search_posts: search_posts,
        search_size: search_size,
        unapprove_post: unapprove_post
    }, COGNITO_INFO: {
        region: region,
        userPoolId: userPoolId,
        identityPoolId: identityPoolId,
        clientId: clientId
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

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(520);


/***/ }),

/***/ 129:
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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(143);
//Use instead of Promise
var Rx_1 = __webpack_require__(204);
// Import RxJs required methods
__webpack_require__(145);
__webpack_require__(144);
var environment_1 = __webpack_require__(106);
//Only used in Mock
__webpack_require__(194);
var mock_postlist_1 = __webpack_require__(647);
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
    }
    PostService.prototype.getAllPosts = function () {
        //api call
        return this._http.get(this.endPoint.all_posts).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ;
    PostService.prototype.getPostById = function (id) {
        return this._http.get(this.endPoint.post + id).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
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
        return Promise.resolve(mock_postlist_1.POSTS);
    };
    PostService.prototype.filterPostsById = function (posts, id) {
        var filtered = posts.find(function (post) { return post.postId === id; });
        return Promise.resolve(filtered);
    };
    PostService.prototype.getMockPostById = function (id) {
        // replace with api call
        return this.filterPostsById(mock_postlist_1.POSTS, id);
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], PostService);
exports.PostService = PostService;
var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Post = (function () {
    function Post() {
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post-model.js.map

/***/ }),

/***/ 436:
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
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'daln-app',
        template: __webpack_require__(820)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 437:
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
var core_1 = __webpack_require__(0);
var search_service_1 = __webpack_require__(83);
var AboutComponent = (function () {
    function AboutComponent(_searchService) {
        this.title = 'About';
        this.searchService = _searchService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        //   this.searchService.getSearchEngineSize().subscribe( (data) => {
        //      console.log("Number of Posts: " + data);
        //      this.numberOfPosts = data;
        //   });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__(821),
        styles: [__webpack_require__(806)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _a || Object])
], AboutComponent);
exports.AboutComponent = AboutComponent;
var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 438:
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
var core_1 = __webpack_require__(0);
var auth_service_1 = __webpack_require__(444);
var search_service_1 = __webpack_require__(83);
var AdminComponent = (function () {
    function AdminComponent(_authService, _searchService) {
        this.authService = _authService;
        this.searchService = _searchService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        //   this.getApproveList();
    };
    AdminComponent.prototype.approvePost = function (postId) {
        this.authService.adminApprovePost(postId);
        console.log("Approve post fired");
    };
    AdminComponent.prototype.changePageHead = function (page) {
        this.searchService.pageHead = page;
        console.log("page head changed to " + this.searchService.pageHead);
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'app-admin',
        template: __webpack_require__(822),
        styles: [__webpack_require__(807)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _b || Object])
], AdminComponent);
exports.AdminComponent = AdminComponent;
var _a, _b;
//# sourceMappingURL=admin.component.js.map

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
var core_1 = __webpack_require__(0);
var ContactComponent = (function () {
    function ContactComponent() {
        this.title = 'Contact';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        template: __webpack_require__(824),
        styles: [__webpack_require__(809)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map

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
var core_1 = __webpack_require__(0);
var post_service_1 = __webpack_require__(129);
var search_service_1 = __webpack_require__(83);
// import { routerTransition } from '../router.animations';
var HomeComponent = (function () {
    function HomeComponent(elementRef, _postService, _searchService) {
        this.elementRef = elementRef;
        this._postService = _postService;
        this._searchService = _searchService;
        this.title = 'DALN Frontend';
        this.searchPosts = [];
        this.posts = [];
        this.loading = false;
        this.failed = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPagePosts();
    };
    HomeComponent.prototype.getPagePosts = function () {
        var _this = this;
        this.loading = true;
        this._searchService.search_page("games", 8, 1).subscribe(function (data) {
            _this.posts = _this._searchService.translatePosts(data.hit);
            _this.loading = false;
        }, //Bind to view
        function (//Bind to view
            err) {
            _this.loading = false;
            _this.failed = true;
            // Log errors if any
            console.log(err);
        });
    };
    HomeComponent.prototype.displayResults = function (event) {
        console.log("Search hit.", event);
        this.searchPosts = event;
    };
    HomeComponent.prototype.clearSearch = function () {
        this.searchPosts = [];
        this._searchService.searchQuery = "";
        // add to search history of browser
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(825),
        styles: [__webpack_require__(810)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _b || Object, typeof (_c = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _c || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(74);
var cognito_service_1 = __webpack_require__(445);
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMessage = null;
        this.userService.isAuthenticated(this);
    };
    LoginComponent.prototype.onLogin = function () {
        if (this.email == null || this.password == null) {
            this.errorMessage = "All fields are required";
            return;
        }
        this.errorMessage = null;
        this.userService.authenticate(this.email, this.password, this);
    };
    LoginComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        }
        else {
            // this.ddb.writeLogEntry("login");
            this.router.navigate(['/admin']);
        }
    };
    LoginComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (isLoggedIn)
            this.router.navigate(['/admin']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__(826),
        styles: [__webpack_require__(811)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof cognito_service_1.UserLoginService !== "undefined" && cognito_service_1.UserLoginService) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(74);
var common_1 = __webpack_require__(20);
var post_service_1 = __webpack_require__(129);
var post_model_1 = __webpack_require__(275);
__webpack_require__(489);
var PostDetailComponent = (function () {
    function PostDetailComponent(_postService, _route, _location) {
        this._postService = _postService;
        this._route = _route;
        this._location = _location;
        this.loading = false;
        this.failed = false;
        this.isPDF = false;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._route.params.switchMap(function (params) { return _this._postService.getPostById(params['id']); })
            .subscribe(function (details) {
            _this.loading = false;
            _this.postDetail = details;
            // console.log(details);
            _this.selectedAsset = _this._postService.getPreview(_this.postDetail.assetList);
        }, function (err) {
            _this.loading = false;
            _this.failed = true;
            console.log(err);
        });
    };
    PostDetailComponent.prototype.goBack = function () {
        this._location.back();
    };
    PostDetailComponent.prototype.onSelectedAsset = function (asset) {
        this.selectedAsset = asset;
    };
    return PostDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof post_model_1.Post !== "undefined" && post_model_1.Post) === "function" && _a || Object)
], PostDetailComponent.prototype, "postDetail", void 0);
PostDetailComponent = __decorate([
    core_1.Component({
        selector: 'post-detail',
        template: __webpack_require__(828),
        styles: [__webpack_require__(813)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _d || Object])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=post-detail.component.js.map

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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(20);
var router_1 = __webpack_require__(74);
var search_service_1 = __webpack_require__(83);
var post_service_1 = __webpack_require__(129);
var SearchComponent = (function () {
    function SearchComponent(_postService, _searchService, _location, _router) {
        this._postService = _postService;
        this._location = _location;
        this._router = _router;
        this.showUtil = false;
        this.showFull = false;
        // total_posts: number; // total number of posts in array NOTE: Currently not in use since endpoint does not return it.
        this.noResults = false;
        this.searchService = _searchService;
        this.searchResults = new core_1.EventEmitter();
        this.totalResults = new core_1.EventEmitter();
    }
    SearchComponent.prototype.ngOnInit = function () {
        // replace with results size.
        //   this.numberOfPages = this.searchService.getPaginationParameter();
        //   console.log("Pages: " + this.numberOfPages);
        console.log("in search compoonent");
        this.resultsSize = this.searchService.resultsSize;
        this.pageNumber = this.searchService.pageNumber;
        //    this._router.events.subscribe((val) => {
        //      // see also
        //      this.route = this._location.path();
        //      if (this.route == "/search"){
        //          console.log(this.searchService.searchQuery, this.searchService.resultsSize, this.searchService.pageNumber);
        //          this.onSearch(this.searchService.searchQuery, this.searchService.resultsSize, this.searchService.pageNumber );
        //          this.showUtil = true; // handles utility functions for ux.
        //          this.showFull = true; // handles expansion of search bar
        //      }
        //  });
    };
    SearchComponent.prototype.onSearch = function (term, results, pageNumber) {
        var _this = this;
        if (this.resultsSize != results) {
            this.resultsSize = results;
            this.searchService.changeResultsDisplayed(this.resultsSize);
        }
        if (this.pageNumber != pageNumber) {
            this.pageNumber = pageNumber;
            this.searchService.changePageStart(this.pageNumber);
        }
        if (term === '' || term === undefined) {
            return null;
        }
        this.searchService.search_page(term, this.resultsSize, this.pageNumber)
            .subscribe(function (results) {
            // console.log("In Emmitter: ", this.resultsSize);
            if ((results === null) || results.length <= 0) {
                _this.noResults = true;
            }
            else {
                _this.noResults = false;
                console.log("API resposne for hits: ", results.hit);
                console.log("API response for total hits: ", results.found);
                _this.total_results = results.found;
                _this.posts = _this.searchService.translatePosts(results.hit);
                console.log("le posts: ", _this.posts);
                _this.searchResults.emit(_this.posts);
                _this.totalResults.emit(_this.total_results);
            }
        }, function (err) {
            console.log(err);
        });
        // this._router.navigateByUrl('/search');
    };
    return SearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SearchComponent.prototype, "searchResults", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], SearchComponent.prototype, "totalResults", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search2',
        template: __webpack_require__(829),
        styles: [__webpack_require__(814)],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _c || Object, typeof (_d = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _d || Object, typeof (_e = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=search.component.js.map

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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(143);
//Use instead of Promise
var Rx_1 = __webpack_require__(204);
// Import RxJs required methods
__webpack_require__(145);
__webpack_require__(144);
__webpack_require__(194);
var environment_1 = __webpack_require__(106);
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
    }
    AuthService.prototype.adminApprovePost = function (postId) {
        var tableName = 'DALN-Posts-Dev';
        var data = {
            postId: postId,
            tableName: tableName
        };
        var datastr = JSON.stringify(data);
        console.log(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        console.log(this.endPoint.approve_post);
        this._http.post(this.endPoint.approve_post, datastr, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error); })
            .subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
        console.log("adminApprovePost fired");
    };
    AuthService.prototype.getApprovalList = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        console.log(this.endPoint.get_unapproved_posts);
        return this._http.post(this.endPoint.get_unapproved_posts, options)
            .map(function (res) {
            var posts = res.json();
            console.log("Unapproved Posts:", posts);
            return posts;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error); });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AuthService);
exports.AuthService = AuthService;
var _a;
//# sourceMappingURL=auth.service.js.map

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
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(106);
var CognitoUtil = (function () {
    function CognitoUtil() {
    }
    CognitoUtil.getAwsCognito = function () {
        return AWSCognito;
    };
    CognitoUtil.prototype.getUserPool = function () {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(CognitoUtil._POOL_DATA);
    };
    CognitoUtil.prototype.getCurrentUser = function () {
        return this.getUserPool().getCurrentUser();
    };
    CognitoUtil.prototype.getCognitoIdentity = function () {
        return AWS.config.credentials.identityId;
    };
    CognitoUtil.prototype.getIdToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getIdToken is null...error");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials: " + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    }
                    else {
                        console.log("CognitoUtil: Got the id token, but session isn't valid.");
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    return CognitoUtil;
}());
// environment setup
CognitoUtil._REGION = environment_1.environment.COGNITO_INFO.region;
CognitoUtil._USER_POOL_ID = environment_1.environment.COGNITO_INFO.userPoolId;
CognitoUtil._IDENTITY_POOL_ID = environment_1.environment.COGNITO_INFO.identityPoolId;
CognitoUtil._CLIENT_ID = environment_1.environment.COGNITO_INFO.clientId;
CognitoUtil._POOL_DATA = {
    UserPoolId: CognitoUtil._USER_POOL_ID,
    ClientId: CognitoUtil._CLIENT_ID
};
CognitoUtil = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CognitoUtil);
exports.CognitoUtil = CognitoUtil;
var UserLoginService = (function () {
    function UserLoginService(cognitoUtil) {
        this.cognitoUtil = cognitoUtil;
    }
    UserLoginService.prototype.authenticate = function (username, password, callback) {
        AWS.config.update({ accessKeyId: 'anything', secretAccessKey: 'anything' });
        var authenticationData = {
            Username: username,
            Password: password
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };
        console.log("Authenticating user...");
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            // cool way to write a function
            onSuccess: function (result) {
                var logins = {};
                // sending request to amazon region instance.
                logins['cognito-idp.' + CognitoUtil._REGION + '.amazonaws.com/' + CognitoUtil._USER_POOL_ID] = result.getIdToken().getJwtToken();
                console.log(logins);
                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: CognitoUtil._IDENTITY_POOL_ID,
                    Logins: logins
                });
                console.log("UserLoginService: setting AWS credentials - " + JSON.stringify(AWS.config.credentials));
                console.log("UserLoginService: setting AWSCognito credentials - " + JSON.stringify(AWSCognito.config.credentials));
                AWS.config.credentials.get(function (err) {
                    if (!err) {
                        callback.cognitoCallback(null, result);
                    }
                    else {
                        callback.cognitoCallback(err.message, null);
                    }
                });
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
        });
    };
    // logout() {
    //     console.log("UserLoginService: Logging out");
    //     this.ddb.writeLogEntry("logout");
    //     this.cognitoUtil.getCurrentUser().signOut();
    // }
    UserLoginService.prototype.isAuthenticated = function (callback) {
        if (callback == null)
            throw ("UserLoginService: Callback in isAuthenticated() cannot be null");
        var cognitoUser = this.cognitoUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
                    callback.isLoggedIn(err, false);
                }
                else {
                    console.log("UserLoginService: Session is " + session.isValid());
                    callback.isLoggedIn(err, session.isValid());
                }
            });
        }
        else {
            console.log("UserLoginService: can't retrieve the current user");
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
        }
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [CognitoUtil])
], UserLoginService);
exports.UserLoginService = UserLoginService;
//# sourceMappingURL=cognito.service.js.map

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
var core_1 = __webpack_require__(0);
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'app-page-not-found',
        template: __webpack_require__(832),
        styles: [__webpack_require__(816)]
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
var core_1 = __webpack_require__(0);
var search_service_1 = __webpack_require__(83);
var PostListComponent = (function () {
    function PostListComponent(page) {
        this.page = page;
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    PostListComponent.prototype.setPage = function () {
    };
    PostListComponent.prototype.hoverLink = function () {
        var elms = document.getElementsByClassName("hover-post");
        // var n = elms.length;
        // function changeColor(color) {
        //     for(var i = 0; i < n; i ++) {
        //         elms[i].style.backgroundColor = color;
        //     }
        // }
        // for(var i = 0; i < n; i ++) {
        //     elms[i].onmouseover = function() {
        //         changeColor("yellow");
        //     };
        //     elms[i].onmouseout = function() {
        //         changeColor("white");
        //     };
        // }
    };
    return PostListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PostListComponent.prototype, "postList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PostListComponent.prototype, "totalNumberOfPosts", void 0);
PostListComponent = __decorate([
    core_1.Component({
        selector: 'post-list',
        template: __webpack_require__(835),
        styles: [__webpack_require__(819)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _a || Object])
], PostListComponent);
exports.PostListComponent = PostListComponent;
var _a;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/submit-form/submit-form.module": [
		1099,
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
webpackAsyncContext.id = 519;


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(651);
var platform_browser_dynamic_1 = __webpack_require__(605);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(106);
var _1 = __webpack_require__(644);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 639:
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(74);
var about_component_1 = __webpack_require__(437);
var admin_component_1 = __webpack_require__(438);
var home_component_1 = __webpack_require__(440);
var login_component_1 = __webpack_require__(441);
var page_not_found_component_1 = __webpack_require__(446);
var post_list_component_1 = __webpack_require__(447);
var post_detail_component_1 = __webpack_require__(442);
var contact_component_1 = __webpack_require__(439);
var search_component_1 = __webpack_require__(443);
var routes = [
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
        path: 'login',
        component: login_component_1.LoginComponent
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
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
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

/***/ 640:
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
var platform_browser_1 = __webpack_require__(95);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(59);
var http_1 = __webpack_require__(143);
//prevent 404 on refresh in s3
//See http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
var common_1 = __webpack_require__(20);
// Components
var admin_component_1 = __webpack_require__(438);
var app_component_1 = __webpack_require__(436);
var app_footer_component_1 = __webpack_require__(641);
var fancy_loader_component_1 = __webpack_require__(648);
var login_component_1 = __webpack_require__(441);
var home_component_1 = __webpack_require__(440);
var ng_bootstrap_1 = __webpack_require__(637);
var pagination_component_1 = __webpack_require__(642);
var post_list_component_1 = __webpack_require__(447);
var post_item_component_1 = __webpack_require__(650);
var post_detail_component_1 = __webpack_require__(442);
var about_component_1 = __webpack_require__(437);
var contact_component_1 = __webpack_require__(439);
var app_routing_module_1 = __webpack_require__(639);
var player_component_1 = __webpack_require__(649);
var search_component_1 = __webpack_require__(443);
var slider_component_1 = __webpack_require__(643);
var page_not_found_component_1 = __webpack_require__(446);
// Services
var post_service_1 = __webpack_require__(129);
var search_service_1 = __webpack_require__(83);
var auth_service_1 = __webpack_require__(444);
var cognito_service_1 = __webpack_require__(445);
// Other
var safe_pipe_1 = __webpack_require__(646);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            admin_component_1.AdminComponent,
            app_component_1.AppComponent,
            fancy_loader_component_1.FancyLoaderComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            post_list_component_1.PostListComponent,
            post_item_component_1.PostItemComponent,
            app_footer_component_1.AppFooterComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            pagination_component_1.PaginationComponent,
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
        providers: [auth_service_1.AuthService, cognito_service_1.CognitoUtil, post_service_1.PostService, search_service_1.SearchService, cognito_service_1.UserLoginService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 641:
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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(74);
var AppFooterComponent = (function () {
    function AppFooterComponent(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent.prototype.ngAfterViewInit = function () {
    };
    AppFooterComponent.prototype.twitterView = function () {
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
    };
    AppFooterComponent.prototype.faceBookView = function () {
        //
        // (function(d, s, id) {
        //   var js, fjs = d.getElementsByTagName(s)[0];
        //   if (d.getElementById(id)) return;
        //   js = d.createElement(s); js.id = id;
        //   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        //   fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));
    };
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    core_1.Component({
        selector: 'daln-footer',
        template: __webpack_require__(823),
        styles: [__webpack_require__(808)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], AppFooterComponent);
exports.AppFooterComponent = AppFooterComponent;
var _a, _b;
//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ 642:
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
var core_1 = __webpack_require__(0);
var search_service_1 = __webpack_require__(83);
var PaginationComponent = (function () {
    function PaginationComponent(_searchService) {
        // If you're wondering about the paraentheses, see: http://g00glen00b.be/component-angular-2/ and check out what each parameter means here: https://pokeapi.co/docsv2/ and test out the parameters here: http://pokeapi.co/api/v2/evolution-chain/?limit=10&offset=0
        this.pageNumber = 0; // user specified page number to start from. (offset)
        this.resultsSize = 1; // number of results to display in post-list component. (limit)
        this.total_posts = 1; // number of total results in a search query. (size)
        this.range = 10; // page range to display. (range)
        this.searchService = _searchService;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.currentPage = 0;
        this.total_posts = 0;
        this.more_pages = true;
        this.next_posts = 0;
        this.currentPageEmitter = new core_1.EventEmitter();
    };
    PaginationComponent.prototype.ngOnChanges = function () {
    };
    PaginationComponent.prototype.setCurrentPage = function (page) {
        this.currentPage = page;
        this.currentPageEmitter.emit(this.currentPage);
    };
    // getCurrentPage(){
    // }
    PaginationComponent.prototype.getTotalPages = function () {
    };
    PaginationComponent.prototype.createButtons = function () {
        // total_posts / resultsSize = total_pages; // number of total pages
        // total_pages = total_buttons // ngfor through to create buttons
    };
    PaginationComponent.prototype.getNextPage = function () {
        // increment the index of searchPosts array.slice of searchPosts
        // displayPosts will be searchPosts, searchPosts will be the pagination head array.
    };
    // getMaxPages() {
    //     this.searchService.search_page(this.searchService.searchQuery, this.searchService.pageHead, 0)
    //       .subscribe((data) => {
    //           if ((data == null) || (data.length <= 0) ){
    //               this.max_pages = 0;
    //           } else if (data.length <= this.searchService.pageHead) {
    //               this.max_pages = Math.ceil(Math.max(this.searchService.pageHead, 1) / Math.max(this.searchService.resultsSize, 1));
    //           }
    //       });
    // }
    PaginationComponent.prototype.areMorePages = function () {
        var _this = this;
        this.searchService.search_page(this.searchService.searchTerm, this.searchService.pageHead, this.next_posts)
            .subscribe(function (data) {
            if ((data == null) || (data.length <= 0)) {
                _this.more_pages = false;
            }
            else {
                _this.next_posts++;
                _this.more_pages = true;
            }
        });
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PaginationComponent.prototype, "currentPageEmitter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pageNumber", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "resultsSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "total_posts", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "range", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'app-pagination',
        template: __webpack_require__(827),
        styles: [__webpack_require__(812)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _b || Object])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
var _a, _b;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 643:
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
var core_1 = __webpack_require__(0);
// Compoent Decorator
var SliderComponent = (function () {
    function SliderComponent() {
        this.isVisible = true;
        this.visibility = 'shown';
    }
    SliderComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'hidden' : 'shown';
    };
    return SliderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "isVisible", void 0);
SliderComponent = __decorate([
    core_1.Component({
        //Name of our tag
        selector: 'app-slider',
        //Template for the tag
        template: __webpack_require__(830),
        //Styles for the tag
        styles: ["slider.component.css"],
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

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(436));
__export(__webpack_require__(640));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by lkittogsuedu on 11/30/16.
 */

var Asset = (function () {
    function Asset() {
    }
    return Asset;
}());
exports.Asset = Asset;
//# sourceMappingURL=asset-model.js.map

/***/ }),

/***/ 646:
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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(95);
var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
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

/***/ 647:
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
var core_1 = __webpack_require__(0);
var FancyLoaderComponent = (function () {
    function FancyLoaderComponent() {
        this.loading = false;
        this.failed = false;
    }
    FancyLoaderComponent.prototype.ngOnInit = function () {
    };
    return FancyLoaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FancyLoaderComponent.prototype, "loading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FancyLoaderComponent.prototype, "failed", void 0);
FancyLoaderComponent = __decorate([
    core_1.Component({
        selector: 'app-fancy-loader',
        template: __webpack_require__(831),
        styles: [__webpack_require__(815)]
    }),
    __metadata("design:paramtypes", [])
], FancyLoaderComponent);
exports.FancyLoaderComponent = FancyLoaderComponent;
//# sourceMappingURL=fancy-loader.component.js.map

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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(95);
var asset_model_1 = __webpack_require__(645);
var common_1 = __webpack_require__(20);
var router_1 = __webpack_require__(74);
var PlayerComponent = (function () {
    function PlayerComponent(sanitizer, _location, _router) {
        this.sanitizer = sanitizer;
        this._location = _location;
        this._router = _router;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (val) {
            // see also
            _this.route = _this._location.path();
            _this.matchRoute = "/detail";
            if (_this.route.indexOf(_this.matchRoute) !== -1) {
                _this.thumb = false;
            }
        });
        this.getUrl(this.postAsset);
    };
    PlayerComponent.prototype.getUrl = function (asset) {
        if (!asset) {
            this.url = null;
        }
        else if (this.postAsset.assetType === "Audio/Video") {
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
    };
    return PlayerComponent;
}());
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
        styles: [__webpack_require__(817)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=player.component.js.map

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(74);
var post_service_1 = __webpack_require__(129);
var post_model_1 = __webpack_require__(275);
var PostItemComponent = (function () {
    function PostItemComponent(_router, _postService) {
        this._router = _router;
        this._postService = _postService;
    }
    PostItemComponent.prototype.ngOnInit = function () {
        //   if (this.postItem.description ==)
    };
    PostItemComponent.prototype.getPreview = function (postAssets) {
        return this._postService.getPreview(postAssets);
    };
    return PostItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof post_model_1.Post !== "undefined" && post_model_1.Post) === "function" && _a || Object)
], PostItemComponent.prototype, "postItem", void 0);
PostItemComponent = __decorate([
    core_1.Component({
        selector: 'post-item',
        template: __webpack_require__(834),
        styles: [__webpack_require__(818)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _c || Object])
], PostItemComponent);
exports.PostItemComponent = PostItemComponent;
var _a, _b, _c;
//# sourceMappingURL=post-item.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(665);
__webpack_require__(658);
__webpack_require__(654);
__webpack_require__(660);
__webpack_require__(659);
__webpack_require__(657);
__webpack_require__(656);
__webpack_require__(664);
__webpack_require__(653);
__webpack_require__(652);
__webpack_require__(662);
__webpack_require__(655);
__webpack_require__(663);
__webpack_require__(661);
__webpack_require__(666);
__webpack_require__(1096);
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "/* About CSS\r\n-------------------------------------------------- */\r\n\r\nh1 {\r\n    margin-top: 5%;\r\n}\r\n\r\n\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\nh1 {\r\n    margin-top: 5%;\r\n}\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n/*#sc-widget {\r\n    width : \"100%\";\r\n    height : \"100%\";\r\n}\r\n\r\n.sproutvideo-player {\r\n    width : \"100%\";\r\n    height : \"100%\";\r\n}*/\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "\r\n/* Asset Audio and Video CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Responsive\r\n-------------------------------------------------- */\r\n\r\n@media (max-width: 480px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 480px) and (max-width: 768px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (max-width: 980px) {\r\n\r\n\r\n\r\n}\r\n\r\n/* LARGE DESKTOP SCREENS */\r\n@media (min-width: 1210px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\r\n    <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseContent\" aria-controls=\"collapseContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\" ></span>\r\n      </button>\r\n\r\n      <a routerLink=\"/home\"><img src=\"assets/img/Logo_transparent.png\" id=\"logo\" /></a>\r\n\r\n\r\n      <div class=\"header2 col-5 brandContainer\">\r\n          <a class=\"brand\" routerLink=\"/home\">Digital Archive of Literacy Narratives</a>\r\n      </div>\r\n\r\n      <div class=\"navbar-collapse collapse\" id=\"collapseContent\" aria-expanded=\"true\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> home </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\"> about </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\"> contact </a> </li>\r\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/create\" routerLinkActive=\"active\"> submit a literacy narrative </a> </li>\r\n          </ul>\r\n       </div>\r\n\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{title}}</h1>\r\n\r\n  <div class=\"about-info\">\r\n      <div id=\"about-image\">\r\n          <img src=\"assets/img/osugsu.jpg\" alt=\"\" />\r\n      </div>\r\n\r\n\r\n      <p>\r\n     Co-sponsored by The Ohio State University and Georgia State University, The DALN (daln.osu.edu) is a publicly available archive of personal literacy narratives in a variety of formats (text, video, audio) that together provide a historical record of the literacy practices and values of contributors, as those practices and values change.\r\n     </p>\r\n\r\n     <p>\r\n         The DALN invites people of all ages, races, communities, backgrounds, and interests to contribute stories about how — and in what circumstances — they read, write, and compose meaning, and how they learned to do so (or helped others learn).\r\n     </p>\r\n\r\n     <p>\r\n         We welcome personal narratives about reading and composing all kinds of texts, both formal and informal: diaries, blogs, poetry, music and musical lyrics, fan zines, school papers, videos, sermons, gaming profiles, speeches, chatroom exchanges, text messages, letters, stories, photographs, etc. We also invite contributors to supplement their narratives with samples of their own writing (papers, letters, zines, speeches, etc.) and compositions (music, photographs, videos, sound recordings, etc.).\r\n     </p>\r\n\r\n     <!-- <div class=\"col-md-4 offset-md-4\" id=\"postCounter\">\r\n        <h3> Total Number of Posts\r\n            {{totalNumberOfPosts}}\r\n        </h3>\r\n     </div> -->\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n<daln-footer></daln-footer>\r\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <h1>Admin post approval</h1>\r\n\r\n\r\n    <div class=\"col-md-4\">\r\n        <p>\r\n            Enter the PostId:\r\n        </p>\r\n        <input type=\"text\" name=\"postId\" #postId/>\r\n        <button class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" (keydown.enter)=\"approvePost(postId.value)\" (click)=\"approvePost(postId.value)\">Submit</button>\r\n    </div>\r\n    <hr />\r\n    <div class=\"col-md-4\">\r\n        <p>\r\n            Changes the number of pages to stay ahead of the user. Determines the amount of data to load in order to stay ahead of the user.\r\n\r\n            i.e. Staying 10 pages ahead of user x 10 results per page (user specified) = 100 posts to stay ahead of user\r\n\r\n            i.e. Staying 50 pages ahead of user x 10 results per page = 500 posts to stay ahead of user.\r\n\r\n            i.e. Staying 10 pages ahead of user x 100 results per page = 1000 posts to stay ahead of user.\r\n\r\n            Will affect loading search page times at larger values and decrease at smaller values. Default is set to 10.\r\n        </p>\r\n        <input type=\"number\" class=\"form-control\"  min=\"1\" max=\"100\" #pageHead [value]=\"searchService.pageHead\"/>\r\n        <button class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"changePageHead(pageHead.value)\" (click)=\"changePageHead(pageHead.value)\">Change Page Head</button>\r\n    </div>\r\n    <hr />\r\n    <!-- <div class=\"col-md-4\">\r\n        <p>\r\n            Approval List\r\n        </p>\r\n        <post-list [postList]=\"approval_list\"></post-list>\r\n\r\n    </div> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\r\n\r\n        <h3 class=\"footer-heading\">Connect With Us</h3>\r\n        <!-- social begin here -->\r\n            <ul class=\"socicon\">\r\n              <!-- <li><a href=\"\" class=\"share-icon\"> </a></li> -->\r\n              <!-- <li><a href=\"#\" class=\"google\"> </a></li> -->\r\n              <li><a href=\"https://www.facebook.com/dalnarchive/\" target=\"_blank\" class=\"facebook\"> </a></li>\r\n              <li><a href=\"https://twitter.com/dalnarchive\" target=\"_blank\" class=\"twitter\"> </a></li>\r\n              <!-- <li><a href=\"#\" class=\"flickr\"> </a></li> -->\r\n              <!-- <li><a href=\"#\" class=\"dribbble\"> </a></li> -->\r\n              <!-- <li class=\"last\"><a href=\"#\" class=\"vimeo\"> </a></li> -->\r\n            </ul>\r\n\r\n        <h3 class=\"footer-heading\">Who We Are</h3>\r\n            <p>\r\n                Since 2007, the Digital Archive of Literacy Narratives has been collecting stories from the public about their experiences learning to read, write, and compose with different media types. Containing over 6000 individual narratives in text, video, audio, and other forms, the DALN is a resource not only for scholars and teachers, but the public at large. Tell us your story. <a routerLink=\"/create\">Submit today!</a>\r\n            </p>\r\n\r\n      </div>\r\n\r\n      <!-- tweets begin here -->\r\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\r\n        <h3 class=\"footer-heading\">Latest Tweets</h3>\r\n        <div class=\"tweets\">\r\n\r\n        </div>\r\n        <a class=\"twitter-timeline\" data-width=\"300\" data-height=\"330\" data-theme=\"dark\" href=\"https://twitter.com/dalnarchive\" target=\"_blank\">Tweets by dalnarchive</a>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\r\n        <h3 class=\"footer-heading\">From Facebook</h3>\r\n        <div class=\"fb-page\"\r\n            data-href=\"https://www.facebook.com/dalnarchive/\"\r\n            data-tabs=\"timeline\"\r\n            data-width=\"300\"\r\n            data-height=\"330\"\r\n            data-small-header=\"false\"\r\n            data-adapt-container-width=\"true\"\r\n            data-hide-cover=\"false\"\r\n            data-show-facepile=\"false\">\r\n            <blockquote cite=\"https://www.facebook.com/dalnarchive/\" class=\"fb-xfbml-parse-ignore\">\r\n                <a href=\"https://www.facebook.com/dalnarchive/\">Digital Archive of Literacy Narratives</a>\r\n            </blockquote>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{title}}</h1>\r\n\r\n\r\n    <div class=\"contact-info\">\r\n        <p>\r\n            <strong>Ben McCorkle</strong> is an associate professor of English and teaches courses in composition, rhetoric, and digital media studies, primarily on The Ohio State University’s Marion campus. He is the author of the book <span class=\"italic\">\r\n            Rhetorical Delivery as Technological Discourse: A Cross-Historical Study</span>, as well as several articles in publications including <span class=\"italic\"> Computers and Composition Online, Rhetoric Society Quarterly, and Composition Studies</span>. He is currently serving as Co-Director of the DALN. Email Ben: <a href=\"mailto:mccorkle.12@osu.edu\">mccorkle.12@osu.edu</a>.\r\n       </p>\r\n\r\n       <p>\r\n           <strong>Michael Harker </strong> is an associate professor of English and teaches courses in composition, rhetoric, and literacy studies at Georgia State University. He is the author of <span class=\"italic\">The Lure of Literacy: A Critical Reception of the Compulsory Composition Debate (SUNY Press)</span>. He has published articles in <span class=\"italic\"> College Composition and Communication, Literacy in Composition Studies, Computers and Composition: An International Journal</span>, and <span class=\"italic\">Computers and Composition Online</span>. He is a Co-Director of the Digital Archive of Literacy Narratives (DALN). Email Michael: <a href=\"mailto:mharker@gsu.edu\">mharker@gsu.edu</a>.\r\n       </p>\r\n    </div>\r\n\r\n</div>\r\n<!-- <daln-footer></daln-footer> -->\r\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container responsive_home\">\r\n\r\n    <!-- Search Component -->\r\n    <app-search2 (searchResults)=\"displayResults($event)\"></app-search2>\r\n\r\n    <app-slider *ngIf=\"searchPosts.length === 0\"></app-slider>\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container responsive_home\" >\r\n\r\n        <div class=\"featured-post-list\" *ngIf=\"searchPosts.length === 0\">\r\n            <h3>Featured Posts</h3>\r\n            <post-list [postList]=\"posts\" [totalNumberOfPosts]=\"posts.length\"></post-list>\r\n        </div>\r\n\r\n\r\n        <div class=\"search-post-list\" *ngIf=\"searchPosts.length > 0\">\r\n            <button (click)=\"clearSearch()\" class=\"btn btn-primary\" type=\"submit\">Clear Search</button>\r\n            <post-list [postList]=\"searchPosts\" [totalNumberOfPosts]=\"searchPosts.length\"></post-list>\r\n        </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"container responsive_home\">\r\n    <div class=\"center add-top-margin\">\r\n      <app-fancy-loader [loading]=\"loading\" [failed]=\"failed\"></app-fancy-loader>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<daln-footer></daln-footer>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\">\r\n    <div class=\"row\">\r\n        <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n            <div class=\"form-group\">\r\n                <h2>Login</h2>\r\n            </div>\r\n            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n                {{ errorMessage }}\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"signupEmail\">Email</label>\r\n                <input id=\"signupEmail\" required type=\"email\" maxlength=\"100\" class=\"form-control\" [(ngModel)]=\"email\"\r\n                       [ngModelOptions]=\"{standalone: true}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"signupPassword\">Password</label>\r\n                <input id=\"signupPassword\" required type=\"password\" maxlength=\"25\" class=\"form-control\"\r\n                       length=\"40\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button (click)=\"onLogin()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\r\n                    Login\r\n                </button>\r\n            </div>\r\n\r\n            <hr>\r\n\r\n\r\n            <p><a [routerLink]=\"['/home/forgotPassword']\"> <i class=\"fa fa-fw fa-group\"></i> Forgot Password?</a></p>\r\n            <p>\r\n\r\n        </form>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"page navigation\">\r\n  <ul class=\"pagination\">\r\n    <li class=\"page-item\" *ngFor=\"let page of postPages\" [ngClass]=\"{active: pagedPosts.length < this.searchService.resultsSize}\">\r\n        <a class=\"page-link\">{{this.pageNumber}}</a>\r\n    </li>\r\n    <!-- <p>\r\n        asdasdsadsa\r\n    </p> -->\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\" *ngIf=\"postDetail\">\r\n  <button class=\"btn btn-primary\" type=\"submit\" (click)=\"goBack()\">Back</button>\r\n\r\n  <section>\r\n\r\n\r\n    <div class=\"row\">\r\n      <!-- Project info\r\n      ================================================== -->\r\n\r\n\r\n      <div class=\"col-md-4\">\r\n\r\n        <!-- Use the ul class. -->\r\n        <ul class=\"metadata\">\r\n          <li>\r\n            <h3>{{postDetail?.title}}</h3>\r\n            <p>{{postDetail?.description}}</p>\r\n          <li>\r\n            <h3>Date Submitted</h3>\r\n            <p>{{postDetail?.dateCreated}}</p>\r\n          </li>\r\n          <li>\r\n            <h3>Author</h3>\r\n            <p *ngFor=\"let author of postDetail.contributorAuthor\">{{author}}</p>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <ul class=\"tags\">\r\n          <li>\r\n            <h3>Collections</h3>\r\n            <p>All literacy narratives that are not part of a topical collection.</p>\r\n          </li>\r\n          <li>\r\n            <h3>Tags/Subjects</h3>\r\n            <ul class=\"tags-list\">\r\n              <!-- Track elements and limit tags with NgFor and TrackBy -->\r\n              <li class=\"tag\" *ngFor=\"let subject of postDetail.subject\"><span\r\n                class=\"label label-info\">{{subject}}</span></li>\r\n            </ul>\r\n\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <ul class=\"description\">\r\n          <li>\r\n            <h3>Description</h3>\r\n            <p>{{postDetail?.description}}</p>\r\n          </li>\r\n        </ul>\r\n\r\n        <br/>\r\n\r\n        <h3>Media List</h3>\r\n        <ul class=\"media\" *ngFor=\"let asset of postDetail.assetList\">\r\n\r\n            <li (click)=\"onSelectedAsset(asset)\">\r\n\r\n              <!-- Change event to be click event that changes player embed link -->\r\n              <h3>{{asset.assettitle}}</h3>\r\n              <p>{{asset.assetType}}: {{asset.assetDescription}}</p>\r\n              <p *ngIf=\"\">{{asset.assetType}}: {{asset.assetDescription}}</p>\r\n\r\n\r\n              <!--<div *ngIf=\"selectedAsset\">{{selectedAsset.assetID}}</div>-->\r\n            </li>\r\n\r\n          </ul>\r\n\r\n\r\n\r\n              <div id=\"metadata-table\">\r\n                   <table class=\"table table-sm table-bordered\">\r\n                       <thead >\r\n                         <tr>\r\n                          <th>Metadata Tag</th>\r\n                          <th>Content</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr>\r\n                               <td>identifierUri</td>\r\n                               <td>{{postDetail?.identifierUri}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateAvailable</td>\r\n                               <td>{{postDetail?.dateAvailable}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateAccessioned</td>\r\n                               <td>{{postDetail?.dateAccessioned}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateCreated</td>\r\n                               <td>{{postDetail?.dateCreated}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>dateIssued</td>\r\n                               <td>{{postDetail?.dateIssued}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>contributorAuthor</td>\r\n                               <td>\r\n                                  <ul>\r\n                                   <li *ngFor=\"let author of postDetail.contributorAuthor\">{{postDetail?.contributorAuthor}}</li>\r\n                                  </ul>\r\n                               </td>\r\n                          </tr>\r\n                          <tr>\r\n                               <td>contributorInterviewer</td>\r\n                               <td>\r\n                                  <ul>\r\n                                   <li *ngFor=\"let author of postDetail.contributorInterviewer\">{{postDetail?.contributorInterviewer}}</li>\r\n                                  </ul>\r\n                               </td>\r\n                          </tr>\r\n\r\n                      </tbody>\r\n                   </table>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Video\r\n      ================================================== -->\r\n\r\n          <div class=\"col-md-8\">\r\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Audio/Video' || selectedAsset.assetType==='Audio')\" [postAsset]=\"selectedAsset\"></app-player>\r\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Text')\" [postAsset]=\"selectedAsset\"></app-player>\r\n        <!-- TODO: Remove style tag -->\r\n        <!-- social begin here -->\r\n        <ul class=\"socicon right\" style=\"margin-bottom:10px;\">\r\n          <!-- <li>\r\n            <a href=\"#\" class=\"share-icon\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"google\">\r\n            </a>\r\n          </li>-->\r\n          <li>\r\n            <a href=\"https://www.facebook.com/dalnarchive/\" class=\"facebook\" target=\"_blank\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n              <a class=\"twitter twitter-share-button\"\r\n                href=\"https://twitter.com/intent/tweet?url=&text={{postDetail?.title}}&via=dalnarchive\" target=\"_blank\"  ></a>\r\n          </li>\r\n          <!-- <li>\r\n            <a href=\"#\" class=\"flickr\">\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" class=\"linkedin\">\r\n            </a>\r\n          </li>\r\n          <li class=\"last\">\r\n            <a href=\"#\" class=\"vimeo\">\r\n            </a>\r\n          </li> -->\r\n\r\n        </ul>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div><!-- /container -->\r\n<div class=\"center\">\r\n    <app-fancy-loader [loading]=\"loading\" [failed]=\"failed\"></app-fancy-loader>\r\n</div>\r\n<daln-footer></daln-footer>\r\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<div class=\"child-container\">\r\n\r\n\r\n    <div id=\"search-component\">\r\n\r\n      <!-- Main Search Box -->\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-6\">\r\n         <div class=\"input-group\">\r\n                <span class=\"input-group-btn\">\r\n                  <button class=\"btn btn-secondary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#options\">&#9660;</button>\r\n                </span>\r\n                <input #searchBox class=\"form-control\" id=\"search-box\" placeholder=\"Search the DALN...\" [value]=\"searchService.searchQuery\" (input)=\"searchService.searchQuery = $event.target.value\"/>\r\n               <button class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"onSearch(searchBox.value, results.value, pageNum.value)\" (click)=\"onSearch(searchBox.value, results.value, pageNum.value)\" >Search</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Search Options -->\r\n      <div class=\"collapse\" id=\"options\">\r\n      <div class=\"card card-block\" [class.col-md-6]=\"showFull\" [class.offset-md-3]=\"showFull\">\r\n          <div class=\"card-header\" id=\"option-card\">\r\n              Options\r\n          </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"input-group \">\r\n                    <span class=\"input-group-addon\">Results per page</span>\r\n                    <input #results class=\"form-control\" id=\"results-size\" type=\"number\" min=\"1\" max=\"50\" [value]=\"searchService.resultsSize\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 offset-md-4\">\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">Page Number</span>\r\n                    <input #pageNum class=\"form-control\" id=\"pageNumber\" type=\"number\" min=\"0\" max=\"50\" [value]=\"searchService.pageNumber\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"no-results col-md-6 \" *ngIf=\"noResults == true\">\r\n          <p>\r\n              Sorry, there were no results for your query.\r\n          </p>\r\n      </div>\r\n     </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <!-- <daln-footer *ngIf=\"showUtil\"></daln-footer> -->\r\n\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 83:
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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(143);
//Use instead of Promise
var Rx_1 = __webpack_require__(204);
// Import RxJs required methods
__webpack_require__(145);
__webpack_require__(144);
__webpack_require__(194);
var post_model_1 = __webpack_require__(275);
var environment_1 = __webpack_require__(106);
var SearchService = (function () {
    function SearchService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.searchQuery = null;
        this.resultsSize = 12;
        this.pageNumber = 0;
        //   this.total_posts = 0; // NOTE: Currently not in use since endpoint does not return it.
        this.pageHead = 50;
    }
    // These all can be observables...
    SearchService.prototype.changeResultsDisplayed = function (results) {
        this.resultsSize = results;
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
        //   console.log("Query:" + this.searchQuery);
        console.log(this.endPoint.search_posts + term + "/" + results + "/" + page_size);
        this.searchTerm = term; // NOTE: Temp for pagination.
        this.resultsSize = results; // NOTE: Temp for pagination.
        return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map(function (res) {
            // let posts = res.json();
            // console.log("Get Search Page Posts", posts);
            // return posts;
            //
            return res.json();
        }).catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        //   Q1) Is the size of the post object returned in search slowing down the request?
        //
        //   - If so, create a seperate search endpoint that returns a minimal post object with only the items needed for display
        //
        //   Try to bring back 1000 results quickly. or at the very least 100 results.
        //
        //   Then, divide the length of results by display result parameter
        //
        //   this = the number of pages
        //
        //   The other thing that shakib give you is the totla number of results
        //
        //   This will let you know if you need to make additional calls to the server to get more results
        //
        //   create an totla atribute on the json that = total_number_results
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
            post.description = (i.fields.description && i.fields.description[0] ? i.fields.description[0] : "No description provided.");
            _this.translateAssets(i.fields.assettype, i.fields.assetembedlink);
            // console.log("description of post:", post.description);
            post.assetList = [];
            posts.push(post);
        });
        return posts;
    };
    SearchService.prototype.translateAssets = function (assetType, assetList) {
        //   console.log("assetType available: ",  assetType);
        //   console.log("assetList available: " , assetList);
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof http_1.Jsonp !== "undefined" && http_1.Jsonp) === "function" && _b || Object])
], SearchService);
exports.SearchService = SearchService;
var _a, _b;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "\r\n<div [@visibilityChanged]=\"visibility\" class=\"slider_component\">\r\n    <ngb-carousel>\r\n        <template ngbSlide>\r\n            <div class=\"image-background\">\r\n                       <img src=\"assets/images/slider/jimmy-carter.jpg\" class=\"slider-img\"/>\r\n               </div>\r\n\r\n            <div class=\"carousel-caption\">\r\n                <a href=\"https://thedaln.wordpress.com/2015/07/06/exciting-news-revealed-president-jimmy-carters-narrative/\" target=\"_blank\">\r\n                    <h3>Exciting News Revealed: President Jimmy Carter's Narrative!</h3>\r\n                    <p>“I’m afraid I don’t have a very good story.” This is how Jimmy Carter begins. It’s a humble beginning to a truly beautiful narrative</p>\r\n                </a>\r\n            </div>\r\n        </template>\r\n      <template ngbSlide>\r\n        <img src=\"assets/images/slider/books.jpg\" alt=\"DALN Intro\" class=\"slider-img\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>DALN</h3>\r\n          <p>An Introduction to the Digital Archive of Literacy Narratives</p>\r\n        </div>\r\n      </template>\r\n      <template ngbSlide>\r\n        <img src=\"assets/images/slider/slider-img02.jpg\" alt=\"New DALN post\" class=\"slider-img\">\r\n        <div class=\"carousel-caption\">\r\n            <a href=\"https://thedaln.wordpress.com/2017/01/14/the-ocean/\" target=\"_blank\">\r\n                <h3>View new DALN Blog Post!</h3>\r\n                <p>If you ever find yourself overwhelmed with self-doubt about any writing project you may be doing, then check out the literacy narrative titled “The Ocean.”</p>\r\n            </a>\r\n        </div>\r\n      </template>\r\n\r\n    </ngb-carousel>\r\n</div>\r\n\r\n<!--\r\n<div class=\"carousel\">\r\n\r\n <ul class=\"images\">\r\n\r\n   <li *ngFor=\"let slide of slides\">\r\n     <h2>DALN</h2>\r\n     <img src=\"assets/images/slider/slider-img01.jpg\" alt=\"\">\r\n   </li>\r\n\r\n </ul>\r\n\r\n</div> -->\r\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"center col-md-12 loading-grid\" *ngIf=\"loading\">\r\n     Loading...\r\n</div>\r\n\r\n<div class=\"col-md-12 failed-grid\" *ngIf=\"failed\">\r\n    Failed\r\n</div>\r\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin \">\r\n    <div class=\"center\">\r\n        <h1>404</h1>\r\n        <p>\r\n            Page not found.\r\n        </p>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"postAsset\" *ngIf=\"postAsset\">\r\n\r\n  <!-- Null post - No Assets -->\r\n  <div class=\"postitem_null\" *ngIf=\"noAsset === true\">\r\n     <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n  <!-- Not recorded asset type -->\r\n  <div class=\"postitem_unknown\" *ngIf=\"postAsset.assetType !== 'Audio/Video' && postAsset.assetType !=='Audio' && postAsset.assetType !== 'Text'\">\r\n    <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n  <!-- Audio Post -->\r\n  <div class=\"postitem_soundcloud\" *ngIf=\"postAsset.assetType==='Audio'\">\r\n    <iframe id=\"sc-widget\" scrolling=\"no\" width=\"100%\" height=\"166px\"\r\n            [src]=\"url | safe\" ></iframe>\r\n  </div>\r\n\r\n  <!-- Video Post -->\r\n  <div class=\"postitem_video\" *ngIf=\"postAsset.assetType === 'Audio/Video'\">\r\n    <iframe *ngIf=\"!thumb\" class='sproutvideo-player' type='text/html'\r\n            [src]=\"url | safe\" width=\"100%\" height=\"436px\" allowfullscreen ></iframe>\r\n    <iframe *ngIf=\"thumb\" class='sproutvideo-player' type='text/html' width=\"100%\" height=\"166px\"\r\n            [src]=\"url | safe\" ></iframe>\r\n  </div>\r\n\r\n  <!-- Text post - only counts pdfs for now -->\r\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url !== null\">\r\n      <!-- <embed *ngIf=\"!thumb\" [src]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\" />\r\n      <embed *ngIf=\"thumb\" [src]=\"url | safe\" type=\"application/pdf\" /> -->\r\n      <object *ngIf=\"!thumb\" [data]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\"><p><b>This browser does not support PDFs.</b> Please download the PDF to view it: <a href=\"/pdf/sample-3pp.pdf\">Download PDF</a>.</p></object>\r\n      <object *ngIf=\"thumb\" [data]=\"url | safe\" type=\"application/pdf\"><p><b>This browser does not support PDFs. </b> Please click on the post to download the PDF to view.</p></object>\r\n  </div>\r\n\r\n  <!-- All other text posts that aren't pdf -->\r\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url === null\">\r\n      <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\r\n  </div>\r\n\r\n  <!-- Web Asset -->\r\n  <!-- <div class=\"postitem_web\" *ngIf=\"postAsset.assetType === 'Web'\">\r\n      <iframe [src]=\"url | safe\" type=\"text/html\"></iframe>\r\n  </div> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div class=\"postItem\" *ngIf=\"postItem\">\r\n    <article class=\"card\">\r\n        <header class=\"post-header\">\r\n        <div class=\"hover-post\">\r\n            <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\r\n                <h3>{{postItem?.title}}</h3>\r\n            </a>\r\n        </div>\r\n        </header>\r\n        <div class=\"card-block\">\r\n                <!-- <app-player [postAsset]=\"getPreview(postItem.assetList)\" [thumb]=\"true\"></app-player> -->\r\n                <div class=\"post-desc\">\r\n                    <div class=\"hover-post\">\r\n                        <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\r\n                            <p>{{postItem?.description}}</p>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n    </article>\r\n</div>\r\n\r\n<!-- <div class=\"postItem\" *ngIf=\"postItem\">\r\n      <div class=\"card\">\r\n        <app-player [postAsset]=\"getPreview(postItem.assetList)\" [thumb]=\"true\"></app-player>\r\n        <div class=\"card-block\">\r\n            <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\r\n                <h3>{{postItem?.title}}</h3>\r\n            </a>\r\n          <p class=\"card-text\">{{postItem?.description}}</p>\r\n        </div>\r\n      </div>\r\n</div> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"list-container\" *ngIf=\"postList\">\r\n\r\n    <!-- With Card Deck (differing post headers) -->\r\n    <!-- <div class=\"card-deck col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let post of postList\">\r\n        <post-item class=\"media\" [postItem]=\"post\"></post-item>\r\n    </div> -->\r\n\r\n\r\n    <!-- Without Card Deck (same post headers but not on special cases) -->\r\n    <div class=\"col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let post of postList\">\r\n        <post-item class=\"media\" [postItem]=\"post\"></post-item>\r\n    </div>\r\n\r\n    <app-pagination></app-pagination>\r\n\r\n</div>\r\n"

/***/ })

},[1097]);
//# sourceMappingURL=main.bundle.map