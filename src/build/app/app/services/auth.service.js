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
var http_1 = require("@angular/http");
//Use instead of Promise
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var environment_1 = require("../../environments/environment");
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
    }
    AuthService.prototype.adminApprovePost = function (postId) {
        var tableName = 'DALN-Posts-Dev';
        var data = {
            postId: postId,
            tableName: tableName
        };
        var datastr = JSON.stringify(data);
        console.log(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        console.log(this.endPoint.approve_post);
        this._http.post(this.endPoint.approve_post, datastr, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error); })
            .subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
        console.log("adminApprovePost fired");
    };
    AuthService.prototype.getApprovalList = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        console.log(this.endPoint.get_unapproved_posts);
        return this._http.post(this.endPoint.get_unapproved_posts, options)
            .map(function (res) {
            var posts = res.json();
            console.log("Unapproved Posts:", posts);
            return posts;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error); });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map