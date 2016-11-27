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
var HomeComponent = (function () {
    function HomeComponent(_postService) {
        this._postService = _postService;
        this.title = 'DALN Frontend';
    }
    HomeComponent.prototype.getPosts = function () {
        var _this = this;
        this._postService.getAllPosts().then(function (data) { return _this.posts = data; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <post-list [postList]=\"posts\"></post-list>\n"
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.comp.js.map