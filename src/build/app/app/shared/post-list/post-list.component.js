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
var search_service_1 = require("../../services/search.service");
var PostListComponent = (function () {
    function PostListComponent(page) {
        this.page = page;
    }
    PostListComponent.prototype.ngOnInit = function () {
        //   console.log(this.getdev);
    };
    PostListComponent.prototype.setPage = function () {
    };
    return PostListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PostListComponent.prototype, "getdev", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PostListComponent.prototype, "postList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PostListComponent.prototype, "totalNumberOfPosts", void 0);
PostListComponent = __decorate([
    core_1.Component({
        selector: 'post-list',
        templateUrl: './post-list.component.html',
        styleUrls: ['./post-list.component.css']
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], PostListComponent);
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map