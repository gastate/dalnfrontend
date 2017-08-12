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
var environment_1 = require("../../environments/environment");
//Only used in Mock
require("rxjs/add/operator/toPromise");
var mock_postlist_1 = require("./mock-postlist");
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.cache_admin_posts = [];
        this.unapproved_posts = [];
        this.selected_posts = [];
    }
    PostService.prototype.approvePosts = function (postId) {
        var _this = this;
        var tableName = this.endPoint.dev_ddb_table_name;
        var data;
        if (postId.length !== 0) {
            postId.forEach(function (i) {
                data = {
                    postId: i,
                    tableName: 'DALN-Posts'
                };
                var datastr = JSON.stringify(data);
                console.log(data);
                var headers = new http_1.Headers();
                headers.append('Content-Type', 'application/json');
                var options = new http_1.RequestOptions({ headers: headers, method: "post" });
                console.log(_this.endPoint.approve_post);
                _this._http.post(_this.endPoint.approve_post, datastr, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
            });
        }
    };
    PostService.prototype.getAllPosts = function () {
        //api call
        return this._http.get(this.endPoint.all_posts).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
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
    PostService.prototype.getDevPostById = function (id) {
        return this._http.get(this.endPoint.get_dev_post + id).map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    PostService.prototype.getUnapprovedPosts = function () {
        var data = {
            tableName: this.endPoint.dev_ddb_table_name
        };
        var str = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this._http.post(this.endPoint.get_unapproved_posts, str, options).map(function (res) {
            var posts = res.json();
            console.log("Unapproved Posts ", posts);
            return posts;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error...please check services.'); });
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
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map