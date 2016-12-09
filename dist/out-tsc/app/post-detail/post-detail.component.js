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
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../model/post-model';
import 'rxjs/add/operator/switchMap';
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
            console.log(details);
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
    Input(),
    __metadata("design:type", Post)
], PostDetailComponent.prototype, "postDetail", void 0);
PostDetailComponent = __decorate([
    Component({
        selector: 'post-detail',
        templateUrl: './post-detail.component.html',
        styleUrls: ['./post-detail.component.css']
    }),
    __metadata("design:paramtypes", [PostService,
        ActivatedRoute,
        Location])
], PostDetailComponent);
export { PostDetailComponent };
//# sourceMappingURL=../../../../src/app/post-detail/post-detail.component.js.map