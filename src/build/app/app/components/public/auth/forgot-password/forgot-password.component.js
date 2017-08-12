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
var user_login_service_1 = require("../../../../services/user-login.service");
var ForgotPasswordStep1Component = (function () {
    function ForgotPasswordStep1Component(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMessage = null;
    }
    ForgotPasswordStep1Component.prototype.ngOnInit = function () {
        this.userService.isAuthenticated(this);
    };
    ForgotPasswordStep1Component.prototype.onNext = function () {
        this.errorMessage = null;
        console.log(this.email);
        this.userService.forgotPassword(this.email, this);
    };
    ForgotPasswordStep1Component.prototype.cognitoCallback = function (message, result) {
        if (message == null && result == null) {
            console.log(this.email);
            this.router.navigate(['/login/forgotPassword', this.email]);
        }
        else {
            this.errorMessage = message;
        }
    };
    ForgotPasswordStep1Component.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (isLoggedIn)
            alert("you are loggedIn dummy");
    };
    return ForgotPasswordStep1Component;
}());
ForgotPasswordStep1Component = __decorate([
    core_1.Component({
        selector: 'app-forgot-password',
        templateUrl: './forgot-password.component.html',
        styleUrls: ['./forgot-password.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, user_login_service_1.UserLoginService])
], ForgotPasswordStep1Component);
exports.ForgotPasswordStep1Component = ForgotPasswordStep1Component;
var ForgotPasswordStep2Component = (function () {
    function ForgotPasswordStep2Component(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        console.log("email from the url: " + this.email);
    }
    ForgotPasswordStep2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.email = params['email'];
        });
        this.errorMessage = null;
    };
    ForgotPasswordStep2Component.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ForgotPasswordStep2Component.prototype.onNext = function () {
        this.errorMessage = null;
        this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
    };
    ForgotPasswordStep2Component.prototype.cognitoCallback = function (message) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return ForgotPasswordStep2Component;
}());
ForgotPasswordStep2Component = __decorate([
    core_1.Component({
        selector: 'app-forgot-password',
        templateUrl: './forgot-password2.html',
        styleUrls: ['./forgot-password.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        user_login_service_1.UserLoginService])
], ForgotPasswordStep2Component);
exports.ForgotPasswordStep2Component = ForgotPasswordStep2Component;
//# sourceMappingURL=forgot-password.component.js.map