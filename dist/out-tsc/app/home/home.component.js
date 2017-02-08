var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ElementRef, Component } from '@angular/core';
import { PostService } from '../services/post.service';
var HomeComponent = (function () {
    function HomeComponent(elementRef, _postService) {
        this.elementRef = elementRef;
        this._postService = _postService;
        this.title = 'DALN Frontend';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllPosts();
    };
    HomeComponent.prototype.onSearch = function ($posts) {
        console.log("Post Event", $posts);
        if (!$posts) {
            this.getAllPosts();
        }
        console.log("in home component onSearch");
        this.posts = $posts;
    };
    HomeComponent.prototype.getAllPosts = function () {
        var _this = this;
        this._postService.getPostPage(10, 1).subscribe(function (data) {
            var IDs = [];
            var hold_posts = [];
            for (var x = 0; x < data.length; x++) {
                var data_object = data[x];
                IDs[x] = data_object.postId;
                _this._postService.getPostById(IDs[x]).subscribe(function (val) { return console.log(val); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [ElementRef, PostService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../src/app/home/home.component.js.map