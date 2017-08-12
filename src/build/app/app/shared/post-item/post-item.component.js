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
var router_1 = require("@angular/router");
var post_service_1 = require("../../services/post.service");
var post_model_1 = require("../../model/post-model");
var PostItemComponent = (function () {
    function PostItemComponent(_router, _postService) {
        this._router = _router;
        this._postService = _postService;
    }
    PostItemComponent.prototype.ngOnInit = function () {
        //   console.log(this.getdev);
    };
    PostItemComponent.prototype.getPreview = function (postAssets) {
        return this._postService.getPreview(postAssets);
    };
    PostItemComponent.prototype.sendPostId = function () {
        if (this.isChecked === true) {
            this._postService.selected_posts.push(this.postItem.postId);
        }
        else {
            var position = this._postService.selected_posts.indexOf(this.postItem.postId);
            var remove_post = this._postService.selected_posts.splice(position, 1);
        }
    };
    return PostItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PostItemComponent.prototype, "getdev", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", post_model_1.Post)
], PostItemComponent.prototype, "postItem", void 0);
PostItemComponent = __decorate([
    core_1.Component({
        selector: 'post-item',
        templateUrl: './post-item.component.html',
        styleUrls: ['./post-item.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        post_service_1.PostService])
], PostItemComponent);
exports.PostItemComponent = PostItemComponent;
//# sourceMappingURL=post-item.component.js.map