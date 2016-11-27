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
var core_1 = require('@angular/core');
var mock_postlist_1 = require('./mock-postlist');
var PostService = (function () {
    function PostService() {
    }
    PostService.prototype.getAllPosts = function () {
        return Promise.resolve(mock_postlist_1.POSTS);
    };
    PostService.prototype.filterPostsById = function (posts, id) {
        var filtered = posts.find(function (post) { return post.postId === id; });
        return Promise.resolve(filtered);
    };
    PostService.prototype.getPostById = function (id) {
        // replace with api call
        return this.filterPostsById(mock_postlist_1.POSTS, id);
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map