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
var post_service_1 = require('./post.service');
var post_1 = require('./post');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var PostDetailComponent = (function () {
    function PostDetailComponent(_postService, _route, _location) {
        this._postService = _postService;
        this._route = _route;
        this._location = _location;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.switchMap(function (params) { return _this._postService.getPostById(params['id']); })
            .subscribe(function (details) { return _this.postDetail = details; });
    };
    PostDetailComponent.prototype.goBack = function () {
        this._location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostDetailComponent.prototype, "postDetail", void 0);
    PostDetailComponent = __decorate([
        core_1.Component({
            selector: 'post-detail',
            templateUrl: '../templates/post-detail.html'
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute, common_1.Location])
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.comp.js.map