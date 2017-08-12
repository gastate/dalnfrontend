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
var search_service_1 = require("../../../services/search.service");
var user_login_service_1 = require("../../../services/user-login.service");
var ConfigComponent = (function () {
    function ConfigComponent(authService, searchService, userService, router) {
        this.authService = authService;
        this.searchService = searchService;
        this.userService = userService;
        this.router = router;
        this.userService.isAuthenticated(this);
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.changePageHead = function (page) {
        this.searchService.pageHead = page;
        console.log("page head changed to " + this.searchService.pageHead);
    };
    ConfigComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            console.log("Not logged in, returning to login page.");
            this.router.navigate(['/login']);
        }
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    core_1.Component({
        selector: 'app-config',
        templateUrl: './config.component.html',
        styleUrls: ['./config.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        search_service_1.SearchService,
        user_login_service_1.UserLoginService,
        router_1.Router])
], ConfigComponent);
exports.ConfigComponent = ConfigComponent;
//# sourceMappingURL=config.component.js.map