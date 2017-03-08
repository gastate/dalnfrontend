var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
var SubmitFormService = (function () {
    function SubmitFormService(_http) {
        this._http = _http;
        this.title = 'hellotesting';
        this.endPoint = environment.API_ENDPOINTS;
    }
    SubmitFormService.prototype.getDescriptionValue = function (jsonValue) {
        this.title = jsonValue;
    };
    SubmitFormService.prototype.getFormData = function () {
    };
    SubmitFormService.prototype.postCreate = function () {
        var _this = this;
        var body = this.title;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new RequestOptions({ headers: headers, method: "post" });
        return this._http.post(this.endPoint.create_post, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.result = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    return SubmitFormService;
}());
SubmitFormService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], SubmitFormService);
export { SubmitFormService };
//# sourceMappingURL=../../../../src/app/submit-form/submit-form.service.js.map