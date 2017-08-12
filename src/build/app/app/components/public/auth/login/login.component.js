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
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        console.log("In LoginComponent");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMessage = null;
        this.userService.isAuthenticated(this);
    };
    LoginComponent.prototype.onLogin = function () {
        if (this.email == null || this.password == null) {
            this.errorMessage = "All fields are required";
            return;
        }
        this.errorMessage = null;
        this.userService.authenticate(this.email, this.password, this);
    };
    LoginComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
            if (this.errorMessage === 'User is not confirmed.') {
                console.log("redirecting");
                this.router.navigate(['/login/confirmAccount', this.email]);
            }
            else if (this.errorMessage === 'User needs to set password.') {
                console.log("redirecting to set new password");
                this.router.navigate(['/login/newPassword']);
            }
            else if (this.errorMessage === 'User does not exist.') {
                console.log("User doesn't exist");
                this.errorMessage = this.errorMessage + 'If you are sure you have an account, please try your username instead of your email. If problem persists, please contact known administrators.';
            }
        }
        else {
            // this.ddb.writeLogEntry("login");
            this.router.navigate(['/admin/overview']);
        }
    };
    LoginComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (isLoggedIn)
            this.router.navigate(['/admin/overview']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_login_service_1.UserLoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map