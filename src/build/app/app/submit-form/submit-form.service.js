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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
const environment_1 = require("../../environments/environment");
let SubmitFormService = class SubmitFormService {
    constructor(_http) {
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.title = null;
        this.postResult = null;
        //   this.description = null;
        //   this.rightsConsent = null;
        //   this.rightsRelease = null;
        //   this.contributorAuthor = [];
        //   this.creatorGender = [];
        //   this.coveragePeriod= [];
        //   this.coverageNationality = [];
        //   this.coverageStateProvince = [];
        //   this.coverageRegion = [];
        //   this.coverageSpatial = [];
        //   this.language = [];
        //   this.subject = [];
    }
    postCreate() {
        var tableName = "DALN-Posts-Dev";
        var data = {
            title: this.title,
            tableName: tableName
        };
        var str = JSON.stringify(data);
        console.log(str);
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this._http.post(this.endPoint.create_post, str, options)
            .map((res) => res.json())
            .subscribe(data => {
            this.postResult = data;
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
};
SubmitFormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SubmitFormService);
exports.SubmitFormService = SubmitFormService;
//# sourceMappingURL=submit-form.service.js.map