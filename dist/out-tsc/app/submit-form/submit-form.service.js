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
        this.endPoint = environment.API_ENDPOINTS;
        this.title = "";
        this.description = "";
        this.rightsConsent = "";
        this.rightsRelease = "";
        this.contributorAuthor = [];
        this.creatorGender = [];
        this.coveragePeriod = [];
        this.coverageNationality = [];
        this.coverageStateProvince = [];
        this.coverageRegion = [];
        this.coverageSpatial = [];
        this.language = [];
        this.subject = [];
    }
    SubmitFormService.prototype.getDescriptionFormValues = function (jsonValue) {
        var descriptionObj = JSON.parse(jsonValue);
        var keys = Object.keys(descriptionObj);
        for (var key in keys) {
            if (keys.indexOf("title") > -1) {
                this.title = descriptionObj.title;
            }
            else {
                this.title = null;
            }
            if (keys.indexOf("description") > -1) {
                this.description = descriptionObj.description;
            }
            else {
                this.description = null;
            }
            if (keys.indexOf("coveragePeriod") > -1) {
                this.coveragePeriod = descriptionObj.coveragePeriod;
            }
            else {
                this.coveragePeriod = null;
            }
        }
    };
    SubmitFormService.prototype.getRightsFormValues = function (jsonValue) {
        var rightsObj = JSON.parse(jsonValue);
        var keys = Object.keys(rightsObj);
        for (var key in keys) {
            if (keys.indexOf("rightsConsent") > -1) {
                this.rightsConsent = rightsObj.rightsConsent;
            }
            else {
                this.rightsConsent = null;
            }
            if (keys.indexOf("rightsRelease") > -1) {
                this.rightsRelease = rightsObj.rightsRelease;
            }
            else {
                this.rightsRelease = null;
            }
        }
    };
    SubmitFormService.prototype.getMetaFormValues = function (jsonValue) {
        var metaObj = JSON.parse(jsonValue);
        var keys = Object.keys(metaObj);
        for (var key in keys) {
            if (keys.indexOf("creatorGender") > -1) {
                this.creatorGender = metaObj.creatorGender;
            }
            else {
                this.creatorGender = null;
            }
        }
    };
    SubmitFormService.prototype.getMetaArrayValues = function (nameValues) {
        this.contributorAuthor = nameValues;
    };
    SubmitFormService.prototype.getDescriptionArrayValues = function (subjectValues, nationValues, regionValues, stateValues, geoValues, languageValues) {
        this.subject = subjectValues;
        this.coverageNationality = nationValues;
        this.coverageRegion = regionValues;
        this.coverageStateProvince = stateValues;
        this.coverageSpatial = geoValues;
        this.language = languageValues;
    };
    SubmitFormService.prototype.getFormData = function () {
        return "Hello";
    };
    SubmitFormService.prototype.makeDataJSON = function () {
        var BODY = {
            "title": this.title,
            "description": this.description,
            "rightsConsent": this.rightsConsent,
            "rightsRelease": this.rightsRelease,
            "contributorAuthor": this.contributorAuthor,
            "creatorGender": this.creatorGender,
            "coveragePeriod": this.coveragePeriod,
            "coverageNationality": this.coverageNationality,
            "coverageStateProvince": this.coverageStateProvince,
            "coverageRegion": this.coverageRegion,
            "coverageSpatial": this.coverageSpatial,
            "language": this.language,
            "subject": this.subject
        };
        console.log(BODY);
        var tango = JSON.stringify(BODY);
        console.log(tango);
    };
    SubmitFormService.prototype.postCreate = function () {
        var _this = this;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var options = new RequestOptions({ headers: headers, method: "post" });
        return this._http.post(this.endPoint.create_post, this.postString, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.postResult = data;
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