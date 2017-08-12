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
var search_service_1 = require("../../../../services/search.service");
var user_login_service_1 = require("../../../../services/user-login.service");
var AdminComponent = (function () {
    function AdminComponent(searchService, userService, router) {
        this.searchService = searchService;
        this.userService = userService;
        this.router = router;
        this.userService.isAuthenticated(this);
        console.log("In AdminComponent.");
    }
    AdminComponent.prototype.ngOnInit = function () {
        //   this.getApproveList();
    };
    AdminComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            console.log("Not logged in, returning to login page.");
            this.currentlyLoggedIn = false;
            this.router.navigate(['/login']);
        }
        this.currentlyLoggedIn = true;
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.css']
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService,
        user_login_service_1.UserLoginService,
        router_1.Router])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map