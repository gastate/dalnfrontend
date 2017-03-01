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
import { SearchService } from '../services/search.service';
import { environment } from '../../environments/environment';
var HomeComponent = (function () {
    function HomeComponent(elementRef, _postService, _searchService) {
        this.elementRef = elementRef;
        this._postService = _postService;
        this._searchService = _searchService;
        this.title = 'DALN Frontend';
        this.isInProd = environment.production;
    }
    HomeComponent.prototype.ngOnInit = function () {
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
        this._postService.getAllPosts().subscribe(function (data) {
            _this.posts = data;
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
        styleUrls: ['./home.component.css'],
        providers: [SearchService]
    }),
    __metadata("design:paramtypes", [ElementRef, PostService, SearchService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../src/app/home/home.component.js.map