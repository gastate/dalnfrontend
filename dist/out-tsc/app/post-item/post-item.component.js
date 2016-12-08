var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../model/post-model';
var PostItemComponent = (function () {
    function PostItemComponent(_router, _postService) {
        this._router = _router;
        this._postService = _postService;
    }
    PostItemComponent.prototype.onSelect = function (post) {
        this.selectedPost = post;
        this.gotoDetail();
    };
    PostItemComponent.prototype.gotoDetail = function () {
        this._router.navigate(['/detail', this.selectedPost.postId]);
    };
    PostItemComponent.prototype.ngOnInit = function () {
    };
    return PostItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Post)
], PostItemComponent.prototype, "postItem", void 0);
PostItemComponent = __decorate([
    Component({
        selector: 'post-item',
        templateUrl: './post-item.component.html',
        styleUrls: ['./post-item.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        PostService])
], PostItemComponent);
export { PostItemComponent };
//# sourceMappingURL=../../../../src/app/post-item/post-item.component.js.map