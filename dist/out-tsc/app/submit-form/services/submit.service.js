var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
var HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
var SubmitService = (function () {
    function SubmitService(_http, _store) {
        this._http = _http;
        this._store = _store;
        this.endPoint = environment.API_ENDPOINTS;
    }
    SubmitService.prototype.setRightsConsent = function (value) {
        this.rightsConsent = value;
    };
    SubmitService.prototype.create = function (post) {
        console.log(this._http.post(this.endPoint.create_post, JSON.stringify(post), HEADER));
    };
    return SubmitService;
}());
SubmitService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Store])
], SubmitService);
export { SubmitService };
//# sourceMappingURL=../../../../../src/app/submit-form/services/submit.service.js.map