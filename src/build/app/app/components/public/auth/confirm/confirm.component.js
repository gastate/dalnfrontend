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
var LogoutComponent = (function () {
    function LogoutComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userService.isAuthenticated(this);
    }
    LogoutComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (isLoggedIn) {
            this.userService.logout();
            this.router.navigate(['/home']);
        }
        this.router.navigate(['/home']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        selector: 'logout',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_login_service_1.UserLoginService])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
var ConfirmComponent = (function () {
    function ConfirmComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.email = params['username'];
        });
        this.errorMessage = null;
    };
    ConfirmComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    core_1.Component({
        selector: 'app-confirm',
        templateUrl: './confirm.component.html',
        styleUrls: ['./confirm.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], ConfirmComponent);
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map