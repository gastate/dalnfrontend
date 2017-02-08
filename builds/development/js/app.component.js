System.register(['angular2/core', './post-list.comp', './post-detail.comp', 'angular2/router', './PostService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_list_comp_1, post_detail_comp_1, router_1, PostService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_list_comp_1_1) {
                post_list_comp_1 = post_list_comp_1_1;
            },
            function (post_detail_comp_1_1) {
                post_detail_comp_1 = post_detail_comp_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (PostService_1_1) {
                PostService_1 = PostService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    this._postService = _postService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.posts = this._postService.getAllPosts();
                    console.log("app.com postList: ", this.posts);
                    // this._postService.getAllPosts().subscribe((data)=>{
                    // 	this.postList = data;
                    // 	console.log("app.com postList: ", this.postList);
                    // });
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: AppComponent },
                        { path: '/details/:id', component: post_detail_comp_1.PostDetailComponent }]),
                    core_1.Component({
                        selector: 'daln-app',
                        templateUrl: 'templates/home.html',
                        directives: [post_list_comp_1.PostListComponent]
                    }), 
                    __metadata('design:paramtypes', [PostService_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
