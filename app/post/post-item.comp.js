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
var post_service_1 = require('../services/post.service');
var post_model_1 = require('../model/post-model');
var router_1 = require('@angular/router');
var PostItemComponent = (function () {
    function PostItemComponent(_router, _postService) {
        this._router = _router;
        this._postService = _postService;
    }
    PostItemComponent.prototype.onSelect = function (post) {
        this.selectedPost = post;
        //goto detail page
        this.gotoDetail();
    };
    PostItemComponent.prototype.gotoDetail = function () {
        this._router.navigate(['/detail', this.selectedPost.postId]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_model_1.Post)
    ], PostItemComponent.prototype, "postItem", void 0);
    PostItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post-item',
            templateUrl: './post-item.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, post_service_1.PostService])
    ], PostItemComponent);
    return PostItemComponent;
}());
exports.PostItemComponent = PostItemComponent;
//# sourceMappingURL=post-item.comp.js.map