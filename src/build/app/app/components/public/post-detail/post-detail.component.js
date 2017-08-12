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
var common_1 = require("@angular/common");
var post_service_1 = require("../../../services/post.service");
var post_model_1 = require("../../../model/post-model");
require("rxjs/add/operator/switchMap");
var PostDetailComponent = (function () {
    function PostDetailComponent(_postService, _route, _location, router) {
        this._postService = _postService;
        this._route = _route;
        this._location = _location;
        this.router = router;
        this.loading = false;
        this.failed = false;
        this.isPDF = false;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.sub = this.router.events.subscribe(function (val) {
            if (val.url.startsWith('/getdev')) {
                _this.onDevDetail();
            }
            else {
                _this.onDetail();
                _this.route = "http%3A%2F%2Fdaln.gsu.edu%2F%23%2Fdetail%2F" + val.url.substring(8);
            }
        });
    };
    PostDetailComponent.prototype.onDetail = function () {
        var _this = this;
        this._route.params.switchMap(function (params) { return _this._postService.getPostById(params['id']); })
            .subscribe(function (details) {
            _this.loading = false;
            _this.postDetail = details;
            console.log(_this.postDetail);
            _this.assets = _this.postDetail.assetList;
            if (_this.assets && _this.assets.length) {
                for (var i = 0; i <= _this.assets.length - 1; i++) {
                    if (_this.assets[i].assetType === "Text") {
                        _this.isText = true;
                    }
                }
            }
            // twitter doesn't take over 140 characters in the title
            // slice it down to 50
            if (_this.postDetail.title && _this.postDetail.title.length) {
                _this.text = _this.postDetail.title.length > 140 ? _this.postDetail.title.substring(0, 50) + '...' : _this.postDetail.title;
            }
            _this.selectedAsset = _this._postService.getPreview(_this.postDetail.assetList);
        }, function (err) {
            _this.loading = false;
            _this.failed = true;
            console.log(err);
        });
    };
    PostDetailComponent.prototype.onDevDetail = function () {
        var _this = this;
        this._route.params.switchMap(function (params) { return _this._postService.getDevPostById(params['id']); })
            .subscribe(function (details) {
            _this.postDetail = details;
            console.log(_this.postDetail);
            _this.assets = _this.postDetail.assetList;
            if (_this.assets && _this.assets.length) {
                for (var i = 0; i <= _this.assets.length - 1; i++) {
                    if (_this.assets[i].assetType === "Text") {
                        _this.isText = true;
                    }
                }
            }
            _this.selectedAsset = _this._postService.getPreview(_this.postDetail.assetList);
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.failed = true;
            console.log(err);
        });
    };
    PostDetailComponent.prototype.goBack = function () {
        this._location.back();
    };
    PostDetailComponent.prototype.onSelectedAsset = function (asset) {
        this.selectedAsset = asset;
    };
    PostDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return PostDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", post_model_1.Post)
], PostDetailComponent.prototype, "postDetail", void 0);
PostDetailComponent = __decorate([
    core_1.Component({
        selector: 'post-detail',
        templateUrl: './post-detail.component.html',
        styleUrls: ['./post-detail.component.css']
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map