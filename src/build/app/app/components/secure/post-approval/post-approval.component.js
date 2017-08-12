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
var auth_service_1 = require("../../../services/auth.service");
var post_service_1 = require("../../../services/post.service");
var user_login_service_1 = require("../../../services/user-login.service");
var cognito_service_1 = require("../../../services/cognito.service");
var PostApprovalComponent = (function () {
    function PostApprovalComponent(authService, cognitoService, postService, userService, router) {
        this.authService = authService;
        this.cognitoService = cognitoService;
        this.postService = postService;
        this.userService = userService;
        this.router = router;
        this.approval_list = [];
        this.loading = false;
        this.failed = false;
        this.userService.isAuthenticated(this);
    }
    PostApprovalComponent.prototype.ngOnInit = function () {
        this.getUnapproved();
        this.getdev = true;
        this.errorMessage = null;
        this.noAdminPostsMessage = null;
    };
    PostApprovalComponent.prototype.approveSelected = function () {
        this.postService.approvePosts(this.postService.selected_posts);
        // b492f3ff-10ae-49be-b776-f98becbf55ad
    };
    PostApprovalComponent.prototype.getUnapproved = function () {
        var _this = this;
        this.loading = true;
        this.postPoolTitle = "Admins Post Pool";
        if (this.postService.cache_admin_posts.length === 0) {
            this.postService.getUnapprovedPosts().subscribe(function (data) {
                _this.approval_list = data;
                _this.postService.cache_admin_posts = data;
                if (_this.approval_list.length == 0) {
                    _this.noAdminPostsMessage = "No posts to be reviewed!";
                }
                _this.loading = false;
            }, function (err) {
                _this.errorMessage = err;
                _this.loading = false;
                _this.failed = true;
            });
        }
        else {
            this.approval_list = this.postService.cache_admin_posts;
            this.loading = false;
        }
    };
    PostApprovalComponent.prototype.getUserPostPool = function () {
        this.approval_list = [];
        this.errorMessage = null;
        this.noAdminPostsMessage = null;
        this.postPoolTitle = "Your Post Pool";
        this.loading = true;
        //   console.log(this.cognitoService.getCurrentUser());
    };
    PostApprovalComponent.prototype.approvePost = function (postId) {
        this.authService.adminApprovePost(postId);
        console.log("Approve post fired");
    };
    PostApprovalComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            console.log("Not logged in, returning to login page.");
            this.router.navigate(['/login']);
        }
    };
    return PostApprovalComponent;
}());
PostApprovalComponent = __decorate([
    core_1.Component({
        selector: 'app-post-approval',
        templateUrl: './post-approval.component.html',
        styleUrls: ['./post-approval.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        cognito_service_1.CognitoUtil,
        post_service_1.PostService,
        user_login_service_1.UserLoginService,
        router_1.Router])
], PostApprovalComponent);
exports.PostApprovalComponent = PostApprovalComponent;
//# sourceMappingURL=post-approval.component.js.map