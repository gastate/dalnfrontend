var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { POSTS } from './mock-postlist';
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.endPoint = environment.API_ENDPOINTS;
    }
    PostService.prototype.getAllPosts = function () {
        return this._http.get(this.endPoint.all_posts).map(function (res) {
            var posts = res.json();
            console.log("Get All Posts ", posts);
            return posts;
        })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    ;
    PostService.prototype.getPostById = function (id) {
        console.log(this._http.get(this.endPoint.post + id).map(function (res) { return res.json().data; }));
        return this._http.get(this.endPoint.post + id).map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
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
    PostService.prototype.getMockPosts = function () {
        return Promise.resolve(POSTS);
    };
    PostService.prototype.filterPostsById = function (posts, id) {
        var filtered = posts.find(function (post) { return post.postId === id; });
        return Promise.resolve(filtered);
    };
    PostService.prototype.getMockPostById = function (id) {
        return this.filterPostsById(POSTS, id);
    };
    return PostService;
}());
PostService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], PostService);
export { PostService };
//# sourceMappingURL=../../../../src/app/services/post.service.js.map