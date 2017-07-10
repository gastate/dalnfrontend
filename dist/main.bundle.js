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

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(521);


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
var http_1 = __webpack_require__(144);
//Use instead of Promise
var Rx_1 = __webpack_require__(205);
// Import RxJs required methods
__webpack_require__(146);
__webpack_require__(145);
var environment_1 = __webpack_require__(106);
//Only used in Mock
__webpack_require__(196);
var mock_postlist_1 = __webpack_require__(649);
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

/***/ 276:
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
        template: __webpack_require__(821)
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
        template: __webpack_require__(822),
        styles: [__webpack_require__(808)]
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
var auth_service_1 = __webpack_require__(443);
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
        template: __webpack_require__(823),
        styles: [__webpack_require__(809)]
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
        template: __webpack_require__(825),
        styles: [__webpack_require__(811)]
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
var common_1 = __webpack_require__(16);
var post_service_1 = __webpack_require__(129);
var search_service_1 = __webpack_require__(83);
// import { routerTransition } from '../router.animations';
__webpack_require__(488);
var HomeComponent = (function () {
    function HomeComponent(otherloc, _postService, _searchService) {
        this._postService = _postService;
        this._searchService = _searchService;
        this.title = 'DALN Frontend';
        this.searchPosts = [];
        this.posts = [];
        this.showPage = true;
        this.loading = false;
        this.failed = false;
        otherloc.onPopState(function () {
            console.log('pressed back!');
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPagePosts();
    };
    HomeComponent.prototype.getPagePosts = function () {
        var _this = this;
        this.loading = true;
        this._searchService.search_page("games", 8, 0).subscribe(function (data) {
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(826),
        styles: [__webpack_require__(812)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.PlatformLocation !== "undefined" && common_1.PlatformLocation) === "function" && _a || Object, typeof (_b = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _b || Object, typeof (_c = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _c || Object])
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
var router_1 = __webpack_require__(59);
var cognito_service_1 = __webpack_require__(444);
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
        template: __webpack_require__(827),
        styles: [__webpack_require__(813)]
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
var router_1 = __webpack_require__(59);
var common_1 = __webpack_require__(16);
var post_service_1 = __webpack_require__(129);
var post_model_1 = __webpack_require__(276);
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
        template: __webpack_require__(829),
        styles: [__webpack_require__(814)]
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
var http_1 = __webpack_require__(144);
//Use instead of Promise
var Rx_1 = __webpack_require__(205);
// Import RxJs required methods
__webpack_require__(146);
__webpack_require__(145);
__webpack_require__(196);
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
        template: __webpack_require__(833),
        styles: [__webpack_require__(817)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map

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
var search_service_1 = __webpack_require__(83);
var PostListComponent = (function () {
    function PostListComponent(page) {
        this.page = page;
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    PostListComponent.prototype.setPage = function () {
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
        template: __webpack_require__(836),
        styles: [__webpack_require__(820)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _a || Object])
], PostListComponent);
exports.PostListComponent = PostListComponent;
var _a;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/submit-form/submit-form.module": [
		1102,
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
webpackAsyncContext.id = 520;


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(653);
var platform_browser_dynamic_1 = __webpack_require__(606);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(106);
var _1 = __webpack_require__(646);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=main.js.map

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(59);
var about_component_1 = __webpack_require__(437);
var admin_component_1 = __webpack_require__(438);
var home_component_1 = __webpack_require__(440);
var login_component_1 = __webpack_require__(441);
var page_not_found_component_1 = __webpack_require__(445);
var post_list_component_1 = __webpack_require__(446);
var post_detail_component_1 = __webpack_require__(442);
var contact_component_1 = __webpack_require__(439);
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
        component: home_component_1.HomeComponent
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
// Defaults
var app_routing_module_1 = __webpack_require__(640);
var platform_browser_1 = __webpack_require__(96);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(60);
var http_1 = __webpack_require__(144);
//prevent 404 on refresh in s3
//See http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
var common_1 = __webpack_require__(16);
// Components
var admin_component_1 = __webpack_require__(438);
var app_component_1 = __webpack_require__(436);
var app_footer_component_1 = __webpack_require__(642);
var fancy_loader_component_1 = __webpack_require__(650);
var login_component_1 = __webpack_require__(441);
var home_component_1 = __webpack_require__(440);
var ng_bootstrap_1 = __webpack_require__(638);
var page_not_found_component_1 = __webpack_require__(445);
var pagination_component_1 = __webpack_require__(643);
var post_list_component_1 = __webpack_require__(446);
var post_item_component_1 = __webpack_require__(652);
var post_detail_component_1 = __webpack_require__(442);
var about_component_1 = __webpack_require__(437);
var contact_component_1 = __webpack_require__(439);
var player_component_1 = __webpack_require__(651);
var search_component_1 = __webpack_require__(644);
var slider_component_1 = __webpack_require__(645);
// Services
var post_service_1 = __webpack_require__(129);
var search_service_1 = __webpack_require__(83);
var auth_service_1 = __webpack_require__(443);
var cognito_service_1 = __webpack_require__(444);
// Other
var safe_pipe_1 = __webpack_require__(648);
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
var router_1 = __webpack_require__(59);
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
        template: __webpack_require__(824),
        styles: [__webpack_require__(810)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], AppFooterComponent);
exports.AppFooterComponent = AppFooterComponent;
var _a, _b;
//# sourceMappingURL=app-footer.component.js.map

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(59);
var search_service_1 = __webpack_require__(83);
var PaginationComponent = (function () {
    function PaginationComponent(searchService, router) {
        var _this = this;
        this.searchService = searchService;
        this.router = router;
        this.buttonArray = []; // holds all possible buttons
        this.pagedButtonArray = []; // holds the current view buttons.
        //   this.searchService = _searchService;
        this.currentPageEmitter = new core_1.EventEmitter();
        router.events.subscribe(function (val) {
            _this.buttonArray = [];
        });
    }
    PaginationComponent.prototype.ngOnInit = function () {
        // intiate values from service.
        this.resultsPerPage = this.searchService.resultsSize;
        this.startOffset = this.searchService.pageNumber;
        this.pageHead = this.searchService.pageHead;
    };
    /**
     * getPagedPost is the button click event to calulate the next indicies to split resultList by to get pagedPost and emit to the parent the current page.
     * @param  {number} event button number that was clicked on. Will output to parent component.
     */
    PaginationComponent.prototype.getPagedPost = function (event) {
        if (event && event.target) {
            this.currentPage = event.target.innerText; // button is just the event's innerText.
            this.currentPageEmitter.emit(this.currentPage); // emit to parent the currentPage.
            //   console.log("Emit fired");
            this.calculateIndicies(); // calculateIndicies to split the pagedPost from resultList.
        }
    };
    PaginationComponent.prototype.calculateIndicies = function () {
        if (!this.currentPage) {
            console.log("starting offset", this.startOffset);
            this.currentPage = this.startOffset;
        }
        var firstIndex = ((this.currentPage * this.resultsPerPage) - this.resultsPerPage + 1);
        var lastIndex = (firstIndex + this.resultsPerPage - 1);
        // since the index of the array starts at 0, just make the firstIndex = 0 whenever the value is 1.
        if (firstIndex === 1) {
            firstIndex = 0;
        }
        else {
            // else make the lastIndex + 1.
            lastIndex = lastIndex + 1;
        }
        //   console.log("lastIndex, firstIndex", lastIndex, firstIndex);
        // populate pagedPost and push to the view.
        this.populatePosts(firstIndex, lastIndex);
    };
    PaginationComponent.prototype.calculateButtonRange = function () {
        //   console.log("total_offset", this.searchService.total_offset);
        for (var i = 0; i < this.searchService.total_offset; i++) {
            this.buttonArray.push(i + 1);
        }
        //   console.log("Button Array", this.buttonArray);
    };
    PaginationComponent.prototype.populatePosts = function (firstIndex, lastIndex) {
        this.pagedPost = this.resultList.slice(firstIndex, lastIndex);
        //   console.log("PagedPost:", this.pagedPost);
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes['startOffset']) {
            //   console.log("startOffset change", this.startOffset);
            this.buttonArray = [];
            this.calculateButtonRange();
        }
        if (changes['resultList']) {
            //   console.log("pagination change", this.resultList);
            this.buttonArray = [];
            this.calculateIndicies();
            this.calculateButtonRange();
        }
        //   if (changes['endOffset']) {
        //       console.log("endOffset change", this.endOffset);
        //       this.calculateButtonRange();
        //   }
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PaginationComponent.prototype, "resultList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "startOffset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "endOffset", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PaginationComponent.prototype, "currentPageEmitter", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'app-pagination',
        template: __webpack_require__(828)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
var _a, _b, _c;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 644:
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
var common_1 = __webpack_require__(16);
var router_1 = __webpack_require__(59);
var search_service_1 = __webpack_require__(83);
var post_service_1 = __webpack_require__(129);
var SearchComponent = (function () {
    function SearchComponent(location, router, _postService, _searchService) {
        this._postService = _postService;
        this.posts = [];
        this.resultList = [];
        this.pageParameter = 0;
        this.noResults = false;
        this.location = location;
        this.searchService = _searchService;
        this.showHomePage = new core_1.EventEmitter();
        // this.searchResults = new EventEmitter<Post[]>();
        router.events.subscribe(function (val) {
            console.log(val instanceof router_1.NavigationEnd);
            // console.log(val.url);
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.errorMessage = null;
        this.resultsSize = this.searchService.resultsSize;
        this.pageNumber = this.searchService.pageNumber;
        this.total_offset = this.searchService.total_offset;
        this.total_results = this.searchService.total_results;
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
        this.searchService.search_page(term, this.searchService.pageHead, this.pageParameter)
            .subscribe(function (results) {
            // console.log("In Emmitter: ", this.resultsSize);
            if ((results === null) || results.length <= 0) {
                _this.errorMessage = "Something went wrong...Please try again.";
            }
            _this.posts = _this.searchService.translatePosts(results.hit);
            _this.resultList = _this.posts;
            _this.location.go('/search');
            _this.showHomePage.emit(false);
            // console.log("Search resultList", this.resultList);
            _this.calculateOffset();
            // this.searchResults.emit(this.resultList);
        }, function (err) {
            console.log(err);
        });
    };
    SearchComponent.prototype.calculateOffset = function () {
        this.startOffset = this.searchService.pageNumber;
        // console.log("Parent Offset", this.startOffset);
        this.endOffset = Math.floor(Math.max(this.resultList.length / this.searchService.resultsSize, 1));
        //   console.log("startOffset, endOffset", this.startOffset, this.endOffset);
    };
    SearchComponent.prototype.getResult = function (event) {
        //   console.log("Emit received");
        this.currentOffset = event;
        //   console.log("search comp event", event);
        // get the next resultList going forwards.
        if (this.currentOffset === this.endOffset - 1) {
            this.pageParameter++;
        }
        else if (this.currentOffset === this.startOffset + 1) {
            this.pageParameter--;
        }
        else if ((this.currentOffset === this.endOffset) || (this.currentOffset === this.startOffset)) {
            if (this.nextResultList !== null) {
                this.resultList = this.nextResultList;
            }
            else {
            }
        }
        else {
        }
    };
    return SearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SearchComponent.prototype, "showHomePage", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search2',
        template: __webpack_require__(830),
        styles: [__webpack_require__(815)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _d || Object, typeof (_e = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" && _e || Object])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 645:
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
        template: __webpack_require__(831),
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

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(436));
__export(__webpack_require__(641));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 647:
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
var platform_browser_1 = __webpack_require__(96);
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

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.POSTS = {
    count: 42,
    hit: [
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        },
        {
            postId: "fae17a81-4513-476c-9649-a1738852d542",
            fields: {
                title: ["My Literacy Narrative"],
                description: ["literacy narrative description"],
                assettitle: ["Coolio"],
                assetlocation: ["http://soundcloud.com/user-15072191/jeff-welbaums-literacy-1"],
                assetembedlink: ["https://api.soundcloud.com/tracks/292287360"],
                assetid: ["d887c393-ea8b-4f7e-8890-47aa7627d3b3"],
                assettype: ["Audio"],
                assetdescription: ["Literacy narrative asset description"]
            },
            exprs: {},
            highlights: {}
        }
    ]
};
//
// postId: "32c922fe-96e9-46e9-a297-0507519fa7df",
// title: "Clayton Buffer's Literacy Narrative",
// description: "A sophomore undergraduate discusses folklore and explores the study's possibilities.",
// identifierUri: "http://hdl.handle.net/2374.DALN/99",
// dateAccessioned: "2009-02-25T09:20:46Z",
// dateAvailable: "2009-02-25T09:20:46Z",
// dateCreated: "2009-02-25",
// dateIssued: "2009-02-25T09:20:46Z",
// rightsConsent: "adult",
// rightsRelease: "adult",
// contributorAuthor: ["Buffer, Clayton"],
// creatorGender: ["Male"],
// coverageStateProvince: ["Ohio"],
// subject: ["ebonics", "university district", "folklore"],
// assetList: [{
//   assettitle: "cb_final.mp3",
//   assetType: "Audio",
//   assetID: "ee094a7b-867a-4204-beda-038cdb7fa469",
//   assetDescription: "None",
//   assetEmbedLink: "https://api.soundcloud.com/tracks/292291281",
//   assetLocation: "http://soundcloud.com/user-15072191/clayton-buffers-literacy"
// }]
//# sourceMappingURL=mock-postlist.js.map

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
        template: __webpack_require__(832),
        styles: [__webpack_require__(816)]
    }),
    __metadata("design:paramtypes", [])
], FancyLoaderComponent);
exports.FancyLoaderComponent = FancyLoaderComponent;
//# sourceMappingURL=fancy-loader.component.js.map

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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(96);
var asset_model_1 = __webpack_require__(647);
var common_1 = __webpack_require__(16);
var router_1 = __webpack_require__(59);
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
        template: __webpack_require__(834),
        styles: [__webpack_require__(818)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=player.component.js.map

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(59);
var post_service_1 = __webpack_require__(129);
var post_model_1 = __webpack_require__(276);
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
        template: __webpack_require__(835),
        styles: [__webpack_require__(819)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" && _c || Object])
], PostItemComponent);
exports.PostItemComponent = PostItemComponent;
var _a, _b, _c;
//# sourceMappingURL=post-item.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(667);
__webpack_require__(660);
__webpack_require__(656);
__webpack_require__(662);
__webpack_require__(661);
__webpack_require__(659);
__webpack_require__(658);
__webpack_require__(666);
__webpack_require__(655);
__webpack_require__(654);
__webpack_require__(664);
__webpack_require__(657);
__webpack_require__(665);
__webpack_require__(663);
__webpack_require__(668);
__webpack_require__(1099);
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "/* About CSS\n-------------------------------------------------- */\n\nh1 {\n    margin-top: 5%;\n}\n\n\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\nh1 {\n    margin-top: 5%;\n}\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "\n/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

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

module.exports = ""

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n/*#sc-widget {\n    width : \"100%\";\n    height : \"100%\";\n}\n\n.sproutvideo-player {\n    width : \"100%\";\n    height : \"100%\";\n}*/\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "\n/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "\n/* Asset Audio and Video CSS\n-------------------------------------------------- */\n\n\n/* Responsive\n-------------------------------------------------- */\n\n@media (max-width: 480px) {\n\n}\n\n@media (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 480px) and (max-width: 768px) {\n\n\n\n}\n\n\n@media (min-width: 768px) and (max-width: 980px) {\n\n\n\n}\n\n\n@media (max-width: 980px) {\n\n\n\n}\n\n/* LARGE DESKTOP SCREENS */\n@media (min-width: 1210px) {\n\n\n}\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n    <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseContent\" aria-controls=\"collapseContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\" ></span>\n      </button>\n\n      <a routerLink=\"/home\"><img src=\"assets/img/Logo_transparent.png\" id=\"logo\" /></a>\n\n\n      <div class=\"header2 col-5 brandContainer\">\n          <a class=\"brand\" routerLink=\"/home\">Digital Archive of Literacy Narratives</a>\n      </div>\n\n      <div class=\"navbar-collapse collapse\" id=\"collapseContent\" aria-expanded=\"true\">\n          <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> home </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\"> about </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://thedaln.wordpress.com/\" target=\"_blank\"> DALN Blog </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\"> contact </a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/create\" routerLinkActive=\"active\"> submit a literacy narrative </a> </li>\n          </ul>\n       </div>\n\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{title}}</h1>\n\n  <div class=\"about-info\">\n      <div id=\"about-image\">\n          <img src=\"assets/img/osugsu.jpg\" alt=\"\" />\n      </div>\n\n\n      <p>\n     Co-sponsored by The Ohio State University and Georgia State University, The DALN (daln.osu.edu) is a publicly available archive of personal literacy narratives in a variety of formats (text, video, audio) that together provide a historical record of the literacy practices and values of contributors, as those practices and values change.\n     </p>\n\n     <p>\n         The DALN invites people of all ages, races, communities, backgrounds, and interests to contribute stories about how — and in what circumstances — they read, write, and compose meaning, and how they learned to do so (or helped others learn).\n     </p>\n\n     <p>\n         We welcome personal narratives about reading and composing all kinds of texts, both formal and informal: diaries, blogs, poetry, music and musical lyrics, fan zines, school papers, videos, sermons, gaming profiles, speeches, chatroom exchanges, text messages, letters, stories, photographs, etc. We also invite contributors to supplement their narratives with samples of their own writing (papers, letters, zines, speeches, etc.) and compositions (music, photographs, videos, sound recordings, etc.).\n     </p>\n\n     <!-- <div class=\"col-md-4 offset-md-4\" id=\"postCounter\">\n        <h3> Total Number of Posts\n            {{totalNumberOfPosts}}\n        </h3>\n     </div> -->\n  </div>\n\n\n\n</div>\n\n<daln-footer></daln-footer>\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <nav class=\"col-sm-3 col-md-2 bg-faded sidebar\">\n                <ul class=\"nav nav-pills flex-column admin-sidebar\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\">Overview</a>\n                        <a class=\"nav-link\">Statistics</a>\n                        <a class=\"nav-link\">Testing &amp; Service Status</a>\n                    </li>\n                </ul>\n                <ul class=\"nav nav-pills flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\">Community Management</a>\n                    </li>\n                </ul>\n                <ul class=\"nav nav-pills flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\">Post Approval</a>\n                        <a class=\"nav-link\">Post Editing</a>\n                        <a class=\"nav-link\">Import/Export Posts</a>\n                        <a class=\"nav-link\">Withdrawn Posts</a>\n                    </li>\n                </ul>\n                <ul class=\"nav nav-pills flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\">Admin List</a>\n                        <a class=\"nav-link\">Metadata Lists</a>\n                        <a class=\"nav-link\">Logs</a>\n                    </li>\n                </ul>\n            </nav>\n\n            <main class=\"col-sm-9  col-md-10  pt-3\">\n                <div class=\"col-md-4\">\n                    <h1>Admin post approval</h1>\n                    <p>\n                        Enter the PostId:\n                    </p>\n                    <input type=\"text\" name=\"postId\" #postId/>\n                    <button class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" (keydown.enter)=\"approvePost(postId.value)\" (click)=\"approvePost(postId.value)\">Submit</button>\n                </div>\n                <hr />\n                <div class=\"col-md-4\">\n                    <p>\n                        Changes the number of pages to stay ahead of the user. Determines the amount of data to load in order to stay ahead of the user.\n\n                        i.e. Staying 10 pages ahead of user x 10 results per page (user specified) = 100 posts to stay ahead of user\n\n                        i.e. Staying 50 pages ahead of user x 10 results per page = 500 posts to stay ahead of user.\n\n                        i.e. Staying 10 pages ahead of user x 100 results per page = 1000 posts to stay ahead of user.\n\n                        Will affect loading search page times at larger values and decrease at smaller values. Default is set to 10.\n                    </p>\n                    <input type=\"number\" class=\"form-control\"  min=\"1\" max=\"100\" #pageHead [value]=\"searchService.pageHead\"/>\n                    <button class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"changePageHead(pageHead.value)\" (click)=\"changePageHead(pageHead.value)\">Change Page Head</button>\n                </div>\n                <hr />\n                <!-- <div class=\"col-md-4\">\n                    <p>\n                        Approval List\n                    </p>\n                    <post-list [postList]=\"approval_list\"></post-list>\n\n                </div> -->\n            </main>\n\n            </div>\n\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\n\n        <h3 class=\"footer-heading\">Connect With Us</h3>\n        <!-- social begin here -->\n            <ul class=\"socicon\">\n              <!-- <li><a href=\"\" class=\"share-icon\"> </a></li> -->\n              <!-- <li><a href=\"#\" class=\"google\"> </a></li> -->\n              <li><a href=\"https://www.facebook.com/dalnarchive/\" target=\"_blank\" class=\"facebook\"> </a></li>\n              <li><a href=\"https://twitter.com/dalnarchive\" target=\"_blank\" class=\"twitter\"> </a></li>\n              <!-- <li><a href=\"#\" class=\"flickr\"> </a></li> -->\n              <!-- <li><a href=\"#\" class=\"dribbble\"> </a></li> -->\n              <!-- <li class=\"last\"><a href=\"#\" class=\"vimeo\"> </a></li> -->\n            </ul>\n\n        <h3 class=\"footer-heading\">Who We Are</h3>\n            <p>\n                Since 2007, the Digital Archive of Literacy Narratives has been collecting stories from the public about their experiences learning to read, write, and compose with different media types. Containing over 6000 individual narratives in text, video, audio, and other forms, the DALN is a resource not only for scholars and teachers, but the public at large. Tell us your story. <a routerLink=\"/create\">Submit today!</a>\n            </p>\n\n      </div>\n\n      <!-- tweets begin here -->\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\n        <h3 class=\"footer-heading\">Latest Tweets</h3>\n        <div class=\"tweets\">\n\n        </div>\n        <a class=\"twitter-timeline\" data-width=\"300\" data-height=\"330\" data-theme=\"dark\" href=\"https://twitter.com/dalnarchive\" target=\"_blank\">Tweets by dalnarchive</a>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-lg-4\">\n        <h3 class=\"footer-heading\">From Facebook</h3>\n        <div class=\"fb-page\"\n            data-href=\"https://www.facebook.com/dalnarchive/\"\n            data-tabs=\"timeline\"\n            data-width=\"300\"\n            data-height=\"330\"\n            data-small-header=\"false\"\n            data-adapt-container-width=\"true\"\n            data-hide-cover=\"false\"\n            data-show-facepile=\"false\">\n            <blockquote cite=\"https://www.facebook.com/dalnarchive/\" class=\"fb-xfbml-parse-ignore\">\n                <a href=\"https://www.facebook.com/dalnarchive/\">Digital Archive of Literacy Narratives</a>\n            </blockquote>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{title}}</h1>\n\n\n    <div class=\"contact-info\">\n        <p>\n            <strong>Ben McCorkle</strong> is an associate professor of English and teaches courses in composition, rhetoric, and digital media studies, primarily on The Ohio State University’s Marion campus. He is the author of the book <span class=\"italic\">\n            Rhetorical Delivery as Technological Discourse: A Cross-Historical Study</span>, as well as several articles in publications including <span class=\"italic\"> Computers and Composition Online, Rhetoric Society Quarterly, and Composition Studies</span>. He is currently serving as Co-Director of the DALN. Email Ben: <a href=\"mailto:mccorkle.12@osu.edu\">mccorkle.12@osu.edu</a>.\n       </p>\n\n       <p>\n           <strong>Michael Harker </strong> is an associate professor of English and teaches courses in composition, rhetoric, and literacy studies at Georgia State University. He is the author of <span class=\"italic\">The Lure of Literacy: A Critical Reception of the Compulsory Composition Debate (SUNY Press)</span>. He has published articles in <span class=\"italic\"> College Composition and Communication, Literacy in Composition Studies, Computers and Composition: An International Journal</span>, and <span class=\"italic\">Computers and Composition Online</span>. He is a Co-Director of the Digital Archive of Literacy Narratives (DALN). Email Michael: <a href=\"mailto:mharker@gsu.edu\">mharker@gsu.edu</a>.\n       </p>\n    </div>\n\n</div>\n<!-- <daln-footer></daln-footer> -->\n"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container responsive_home\">\n\n    <!-- Search Component -->\n    <!-- <app-search2 (searchResults)=\"displayResults($event)\"></app-search2> -->\n    <app-search2 (showHomePage)=\"showHomePage($event)\"></app-search2>\n\n    <app-slider *ngIf=\"showPage === true\"></app-slider>\n\n\n</div>\n\n\n<div class=\"container responsive_home\">\n\n        <div class=\"featured-post-list\" *ngIf=\"showPage === true\">\n            <h3>Featured Posts</h3>\n            <hr />\n            <post-list [postList]=\"posts\"></post-list>\n        </div>\n\n\n\n</div>\n\n<div class=\"container responsive_home\">\n    <div class=\"center add-top-margin\">\n      <app-fancy-loader [loading]=\"loading\" [failed]=\"failed\"></app-fancy-loader>\n    </div>\n</div>\n\n\n\n\n<daln-footer></daln-footer>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\">\n    <div class=\"row\">\n        <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n            <div class=\"form-group\">\n                <h2>Login</h2>\n            </div>\n            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n                {{ errorMessage }}\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"signupEmail\">Email</label>\n                <input id=\"signupEmail\" required type=\"email\" maxlength=\"100\" class=\"form-control\" [(ngModel)]=\"email\"\n                       [ngModelOptions]=\"{standalone: true}\">\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"signupPassword\">Password</label>\n                <input id=\"signupPassword\" required type=\"password\" maxlength=\"25\" class=\"form-control\"\n                       length=\"40\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group\">\n                <button (click)=\"onLogin()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\n                    Login\n                </button>\n            </div>\n\n            <hr>\n\n\n            <p><a [routerLink]=\"['/home/forgotPassword']\"> <i class=\"fa fa-fw fa-group\"></i> Forgot Password?</a></p>\n            <p>\n\n        </form>\n\n    </div>\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-div\" *ngIf=\"buttonArray.length > 0\">\n\n    <post-list [postList]=\"pagedPost\"></post-list>\n    <nav>\n      <ul class=\"pagination\">\n        <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li> -->\n        <li *ngFor=\"let button of buttonArray\" class=\"page-item\">\n            <a class=\"page-link\" (click)=\"getPagedPost($event)\">{{button}}</a>\n        </li>\n        <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li> -->\n      </ul>\n    </nav>\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\" *ngIf=\"postDetail\">\n  <button class=\"btn btn-primary\" type=\"submit\" (click)=\"goBack()\">Back</button>\n\n  <section>\n\n\n    <div class=\"row\">\n      <!-- Project info\n      ================================================== -->\n\n\n      <div class=\"col-md-4\">\n\n        <!-- Use the ul class. -->\n        <ul class=\"metadata\">\n          <li>\n            <h3>{{postDetail?.title}}</h3>\n            <p>{{postDetail?.description}}</p>\n          <li>\n            <h3>Date Submitted</h3>\n            <p>{{postDetail?.dateCreated}}</p>\n          </li>\n          <li>\n            <h3>Author</h3>\n            <p *ngFor=\"let author of postDetail.contributorAuthor\">{{author}}</p>\n          </li>\n\n        </ul>\n\n        <br/>\n\n        <ul class=\"tags\">\n          <li>\n            <h3>Collections</h3>\n            <p>All literacy narratives that are not part of a topical collection.</p>\n          </li>\n          <li>\n            <h3>Tags/Subjects</h3>\n            <ul class=\"tags-list\">\n              <!-- Track elements and limit tags with NgFor and TrackBy -->\n              <li class=\"tag\" *ngFor=\"let subject of postDetail.subject\"><span\n                class=\"label label-info\">{{subject}}</span></li>\n            </ul>\n\n        </ul>\n\n        <br/>\n\n        <ul class=\"description\">\n          <li>\n            <h3>Description</h3>\n            <p>{{postDetail?.description}}</p>\n          </li>\n        </ul>\n\n        <br/>\n\n        <h3>Media List</h3>\n        <ul class=\"media\" *ngFor=\"let asset of postDetail.assetList\">\n\n            <li (click)=\"onSelectedAsset(asset)\">\n\n              <!-- Change event to be click event that changes player embed link -->\n              <h3>{{asset.assettitle}}</h3>\n              <p>{{asset.assetType}}: {{asset.assetDescription}}</p>\n              <p *ngIf=\"\">{{asset.assetType}}: {{asset.assetDescription}}</p>\n\n\n              <!--<div *ngIf=\"selectedAsset\">{{selectedAsset.assetID}}</div>-->\n            </li>\n\n          </ul>\n\n\n\n              <div id=\"metadata-table\">\n                   <table class=\"table table-sm table-bordered\">\n                       <thead >\n                         <tr>\n                          <th>Metadata Tag</th>\n                          <th>Content</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                               <td>identifierUri</td>\n                               <td>{{postDetail?.identifierUri}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateAvailable</td>\n                               <td>{{postDetail?.dateAvailable}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateAccessioned</td>\n                               <td>{{postDetail?.dateAccessioned}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateCreated</td>\n                               <td>{{postDetail?.dateCreated}}</td>\n                          </tr>\n                          <tr>\n                               <td>dateIssued</td>\n                               <td>{{postDetail?.dateIssued}}</td>\n                          </tr>\n                          <tr>\n                               <td>contributorAuthor</td>\n                               <td>\n                                  <ul>\n                                   <li *ngFor=\"let author of postDetail.contributorAuthor\">{{postDetail?.contributorAuthor}}</li>\n                                  </ul>\n                               </td>\n                          </tr>\n                          <tr>\n                               <td>contributorInterviewer</td>\n                               <td>\n                                  <ul>\n                                   <li *ngFor=\"let author of postDetail.contributorInterviewer\">{{postDetail?.contributorInterviewer}}</li>\n                                  </ul>\n                               </td>\n                          </tr>\n\n                      </tbody>\n                   </table>\n              </div>\n\n\n\n\n\n      </div>\n\n      <!-- Video\n      ================================================== -->\n\n          <div class=\"col-md-8\">\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Audio/Video' || selectedAsset.assetType==='Audio')\" [postAsset]=\"selectedAsset\"></app-player>\n              <app-player *ngIf=\"selectedAsset && (selectedAsset.assetType==='Text')\" [postAsset]=\"selectedAsset\"></app-player>\n        <!-- TODO: Remove style tag -->\n        <!-- social begin here -->\n        <ul class=\"socicon right\" style=\"margin-bottom:10px;\">\n          <!-- <li>\n            <a href=\"#\" class=\"share-icon\">\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"google\">\n            </a>\n          </li>-->\n          <li>\n            <a href=\"https://www.facebook.com/dalnarchive/\" class=\"facebook\" target=\"_blank\">\n            </a>\n          </li>\n          <li>\n              <a class=\"twitter twitter-share-button\"\n                href=\"https://twitter.com/intent/tweet?url=&text={{postDetail?.title}}&via=dalnarchive\" target=\"_blank\"  ></a>\n          </li>\n          <!-- <li>\n            <a href=\"#\" class=\"flickr\">\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"linkedin\">\n            </a>\n          </li>\n          <li class=\"last\">\n            <a href=\"#\" class=\"vimeo\">\n            </a>\n          </li> -->\n\n        </ul>\n\n\n        </div>\n\n\n    </div>\n\n\n  </section>\n\n\n\n\n\n\n</div><!-- /container -->\n<div class=\"center\">\n    <app-fancy-loader [loading]=\"loading\" [failed]=\"failed\"></app-fancy-loader>\n</div>\n<daln-footer></daln-footer>\n"

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
var http_1 = __webpack_require__(144);
//Use instead of Promise
var Rx_1 = __webpack_require__(205);
// Import RxJs required methods
__webpack_require__(146);
__webpack_require__(145);
__webpack_require__(196);
var post_model_1 = __webpack_require__(276);
var environment_1 = __webpack_require__(106);
var SearchService = (function () {
    function SearchService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.searchQuery = null;
        this.resultsSize = 12;
        this.pageNumber = 1;
        this.pageHead = 50;
        this.total_results = 0;
        this.total_offset = 0;
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
        var _this = this;
        //   console.log("Query:" + this.searchQuery);
        console.log(this.endPoint.search_posts + term + "/" + results + "/" + page_size);
        return this._http.get(this.endPoint.search_posts + term + "/" + results + "/" + page_size).map(function (res) {
            _this.total_results = res.json().found;
            _this.total_offset = Math.ceil(_this.total_results / _this.resultsSize);
            // console.log("number of total offsets", this.total_offset);
            // console.log("Search API Response", res.json());
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
            post.description = (i.fields.description && i.fields.description[0] ? i.fields.description[0] : "No description provided.");
            _this.translateAssets(i.fields);
            // console.log("description of post:", post.description);
            post.assetList = [];
            // console.log(post);
            posts.push(post);
        });
        return posts;
    };
    SearchService.prototype.translateAssets = function (fields) {
        // assumes assetList will contain same number of elements across arrays.
        // get assetLocation, assetEmbedLink, assetId, assetName, assetDescription and assetType.
        var assetList = [];
        //   console.log(fields);
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

module.exports = "<div class=\"child-container\">\n\n\n    <div id=\"search-component\">\n\n      <!-- Main Search Box -->\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n         <div class=\"input-group\">\n                <span class=\"input-group-btn\">\n                  <button class=\"btn btn-secondary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#options\">&#9660;</button>\n                </span>\n                <input #searchBox class=\"form-control\" id=\"search-box\" placeholder=\"Search the DALN...\" [value]=\"searchService.searchQuery\" (input)=\"searchService.searchQuery = $event.target.value\"/>\n               <button class=\"btn btn-primary\" type=\"submit\" (keydown.enter)=\"onSearch(searchBox.value, results.value, pageNum.value)\" (click)=\"onSearch(searchBox.value, results.value, pageNum.value)\" >Search</button>\n          </div>\n\n        </div>\n\n      </div>\n\n      <!-- Search Options -->\n      <div class=\"collapse\" id=\"options\">\n      <div class=\"card card-block\" [class.col-md-6]=\"showFull\" [class.offset-md-3]=\"showFull\">\n          <div class=\"card-header\" id=\"option-card\">\n              Options\n          </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"input-group \">\n                    <span class=\"input-group-addon\">Results per page</span>\n                    <input #results class=\"form-control\" id=\"results-size\" type=\"number\" min=\"1\" max=\"50\" [value]=\"searchService.resultsSize\"/>\n                </div>\n            </div>\n            <div class=\"col-md-4 offset-md-4\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon\">Page Number</span>\n                    <input #pageNum class=\"form-control\" id=\"pageNumber\" type=\"number\" min=\"1\" max=\"50\" [value]=\"searchService.pageNumber\"/>\n                </div>\n            </div>\n        </div>\n      </div>\n      </div>\n\n    <div class=\"row justify-content-center\">\n      <div class=\"add-top-margin col-md-6 alert alert-danger\" *ngIf=\"errorMessage != null\">\n          <p>\n              {{errorMessage}}\n          </p>\n      </div>\n     </div>\n\n    </div>\n\n\n\n\n    <!-- <daln-footer *ngIf=\"showUtil\"></daln-footer> -->\n\n</div>\n\n<app-pagination (getResult)=\"getResult($event)\" [startOffset]=\"startOffset\" [endOffset]=\"endOffset\" [resultList]=\"resultList\"></app-pagination>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "\n<div [@visibilityChanged]=\"visibility\" class=\"slider_component\">\n    <ngb-carousel>\n        <template ngbSlide>\n            <div class=\"image-background\">\n                       <img src=\"assets/images/slider/jimmy-carter.jpg\" class=\"slider-img\"/>\n               </div>\n\n            <div class=\"carousel-caption\">\n                <a href=\"https://thedaln.wordpress.com/2015/07/06/exciting-news-revealed-president-jimmy-carters-narrative/\" target=\"_blank\">\n                    <h3>Exciting News Revealed: President Jimmy Carter's Narrative!</h3>\n                    <p>“I’m afraid I don’t have a very good story.” This is how Jimmy Carter begins. It’s a humble beginning to a truly beautiful narrative</p>\n                </a>\n            </div>\n        </template>\n      <template ngbSlide>\n        <img src=\"assets/images/slider/books.jpg\" alt=\"DALN Intro\" class=\"slider-img\">\n        <div class=\"carousel-caption\">\n          <h3>DALN</h3>\n          <p>An Introduction to the Digital Archive of Literacy Narratives</p>\n        </div>\n      </template>\n      <template ngbSlide>\n        <img src=\"assets/images/slider/slider-img02.jpg\" alt=\"New DALN post\" class=\"slider-img\">\n        <div class=\"carousel-caption\">\n            <a href=\"https://thedaln.wordpress.com/2017/01/14/the-ocean/\" target=\"_blank\">\n                <h3>View new DALN Blog Post!</h3>\n                <p>If you ever find yourself overwhelmed with self-doubt about any writing project you may be doing, then check out the literacy narrative titled “The Ocean.”</p>\n            </a>\n        </div>\n      </template>\n\n    </ngb-carousel>\n</div>\n\n<!--\n<div class=\"carousel\">\n\n <ul class=\"images\">\n\n   <li *ngFor=\"let slide of slides\">\n     <h2>DALN</h2>\n     <img src=\"assets/images/slider/slider-img01.jpg\" alt=\"\">\n   </li>\n\n </ul>\n\n</div> -->\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"center col-md-12 loading-grid\" *ngIf=\"loading\">\n     Loading...\n</div>\n\n<div class=\"col-md-12 failed-grid\" *ngIf=\"failed\">\n    Failed\n</div>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin \">\n    <div class=\"center\">\n        <h1>404</h1>\n        <p>\n            Page not found.\n        </p>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div class=\"postAsset\" *ngIf=\"postAsset\">\n\n  <!-- Null post - No Assets -->\n  <div class=\"postitem_null\" *ngIf=\"noAsset === true\">\n     <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\n  </div>\n\n  <!-- Not recorded asset type -->\n  <div class=\"postitem_unknown\" *ngIf=\"postAsset.assetType !== 'Audio/Video' && postAsset.assetType !=='Audio' && postAsset.assetType !== 'Text'\">\n    <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\n  </div>\n\n  <!-- Audio Post -->\n  <div class=\"postitem_soundcloud\" *ngIf=\"postAsset.assetType==='Audio'\">\n    <iframe id=\"sc-widget\" scrolling=\"no\" width=\"100%\" height=\"166px\"\n            [src]=\"url | safe\" ></iframe>\n  </div>\n\n  <!-- Video Post -->\n  <div class=\"postitem_video\" *ngIf=\"postAsset.assetType === 'Audio/Video'\">\n    <iframe *ngIf=\"!thumb\" class='sproutvideo-player' type='text/html'\n            [src]=\"url | safe\" width=\"100%\" height=\"436px\" allowfullscreen ></iframe>\n    <iframe *ngIf=\"thumb\" class='sproutvideo-player' type='text/html' width=\"100%\" height=\"166px\"\n            [src]=\"url | safe\" ></iframe>\n  </div>\n\n  <!-- Text post - only counts pdfs for now -->\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url !== null\">\n      <!-- <embed *ngIf=\"!thumb\" [src]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\" />\n      <embed *ngIf=\"thumb\" [src]=\"url | safe\" type=\"application/pdf\" /> -->\n      <object *ngIf=\"!thumb\" [data]=\"url | safe\" width=\"800px\" height=\"800px\" type=\"application/pdf\"><p><b>This browser does not support PDFs.</b> Please download the PDF to view it: <a href=\"/pdf/sample-3pp.pdf\">Download PDF</a>.</p></object>\n      <object *ngIf=\"thumb\" [data]=\"url | safe\" type=\"application/pdf\"><p><b>This browser does not support PDFs. </b> Please click on the post to download the PDF to view.</p></object>\n  </div>\n\n  <!-- All other text posts that aren't pdf -->\n  <div class=\"postitem_text\" *ngIf=\"postAsset.assetType === 'Text' && url === null\">\n      <img class=\"empty_post\" src=\"assets/img/example-sites/example1.jpg\" alt=\"example-item\">\n  </div>\n\n  <!-- Web Asset -->\n  <!-- <div class=\"postitem_web\" *ngIf=\"postAsset.assetType === 'Web'\">\n      <iframe [src]=\"url | safe\" type=\"text/html\"></iframe>\n  </div> -->\n\n</div>\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"postItem\" *ngIf=\"postItem\">\n    <article class=\"card\">\n        <header class=\"post-header\">\n        <div class=\"hover-post\">\n            <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\n                <h3>{{postItem?.title}}</h3>\n            </a>\n        </div>\n        </header>\n        <div class=\"card-block\">\n                <app-player [postAsset]=\"getPreview(postItem.assetList)\" [thumb]=\"true\"></app-player>\n                <div class=\"post-desc\">\n                    <div class=\"hover-post\">\n                        <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\n                            <p>{{postItem?.description}}</p>\n                        </a>\n                    </div>\n                </div>\n        </div>\n    </article>\n</div>\n\n<!-- <div class=\"postItem\" *ngIf=\"postItem\">\n      <div class=\"card\">\n        <app-player [postAsset]=\"getPreview(postItem.assetList)\" [thumb]=\"true\"></app-player>\n        <div class=\"card-block\">\n            <a class=\"thumbnail\" [routerLink]=\"['/detail', postItem.postId]\">\n                <h3>{{postItem?.title}}</h3>\n            </a>\n          <p class=\"card-text\">{{postItem?.description}}</p>\n        </div>\n      </div>\n</div> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"list-container\" *ngIf=\"postList\">\n\n    <!-- With Card Deck (differing post headers) -->\n    <!-- <div class=\"card-deck col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let post of postList\">\n        <post-item class=\"media\" [postItem]=\"post\"></post-item>\n    </div> -->\n\n\n    <!-- Without Card Deck (same post headers but not on special cases) -->\n    <div class=\"col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let post of postList\">\n        <post-item class=\"media\" [postItem]=\"post\"></post-item>\n    </div>\n\n\n</div>\n"

/***/ })

},[1100]);
//# sourceMappingURL=main.bundle.map