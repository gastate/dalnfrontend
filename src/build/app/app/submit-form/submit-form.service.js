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
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var environment_1 = require("../../environments/environment");
var SubmitFormService = (function () {
    function SubmitFormService(_http) {
        this._http = _http;
        this.formData = new FormData(); // only data that needs to be sent to upload files.
        this.filename = null;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.title = null;
        this.postResult = null;
        this.description = null;
        this.email = null;
        this.license = null;
        this.rightsConsent = null;
        this.rightsRelease = null;
        this.contributorAuthor = [];
        this.contributorInterviewer = [];
        this.creatorGender = [];
        this.creatorYearOfBirth = [];
        this.coveragePeriod = [];
        this.coverageNationality = [];
        this.coverageStateProvince = [];
        this.coverageRegion = [];
        this.coverageSpatial = [];
        this.language = [];
        this.subject = [];
    }
    SubmitFormService.prototype.getMedia = function (fileList) {
        var file;
        console.log(fileList);
        for (var i = 0; i < fileList.length; i++) {
            file = fileList[i];
            this.formData.append("userFile", file, file.name);
        }
    };
    SubmitFormService.prototype.uploadMedia = function (file) {
        var _this = this;
        // TODO: loop through every file in the fileList
        var headers = new http_1.Headers();
        headers.append('Content-Type', ' ');
        var options = new http_1.RequestOptions({ headers: headers, method: "put" });
        if (file) {
            console.log(this.endPoint.get_upload_link + file.name);
            this._http.get(this.endPoint.get_upload_link + file.name)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error.json.error); })
                .subscribe(
            // data is the link returned from get_upload_link, will use this link to submit the formData.
            function (data) {
                _this._http.put(data, _this.formData, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { console.log('response', data); }, function (error) { console.log(error); });
            });
        }
        else {
            console.log("The fileList is empty");
        }
        //   console.log("Uploading Files...");
        //   console.log(this.endPoint.get_upload_l
        //       ink + this.filename);
        //   // Testing mock http service
        //   this._http.put('https://httpbin.org/put', this.formData)
        //   .map((res: Response) => res.json())
        //   .catch((error: any) => Observable.throw(error.json().error))
        //   .subscribe(
        //       data => { console.log('response', data); },
        //       error => { console.log(error); }
        //   );
    };
    SubmitFormService.prototype.returnPost = function () {
        var postData = {
            title: this.title,
            description: this.description,
            rightsConsent: this.rightsConsent,
            rightsRelease: this.rightsRelease,
            creatorGender: this.creatorGender,
            creatorYearOfBirth: this.creatorYearOfBirth,
            contributorAuthor: this.contributorAuthor,
            contributorInterviewer: this.contributorInterviewer,
            coveragePeriod: this.coveragePeriod,
            coverageRegion: this.coverageRegion,
            coverageNationality: this.coverageNationality,
            coverageSpatial: this.coverageSpatial,
            coverageStateProvince: this.coverageStateProvince,
            subject: this.subject,
            language: this.language,
        };
        return postData;
    };
    SubmitFormService.prototype.postCreate = function () {
        var _this = this;
        var tableName = this.endPoint.dev_ddb_table_name;
        var data = {
            title: this.title,
            description: this.description,
            rightsConsent: this.rightsConsent,
            rightsRelease: this.rightsRelease,
            creatorGender: this.creatorGender,
            creatorYearOfBirth: this.creatorYearOfBirth,
            contributorAuthor: this.contributorAuthor,
            contributorInterviewer: this.contributorInterviewer,
            coveragePeriod: this.coveragePeriod,
            coverageRegion: this.coverageRegion,
            coverageNationality: this.coverageNationality,
            coverageSpatial: this.coverageSpatial,
            coverageStateProvince: this.coverageStateProvince,
            subject: this.subject,
            language: this.language,
            tableName: tableName,
            email: this.email,
            license: this.license
        };
        var str = JSON.stringify(data);
        console.log(str);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        this._http.post(this.endPoint.create_post, str, options)
            .map(function (res) { return res.json(); })
            .subscribe(
        // data here is the postId. Using it for link_media.
        function (data) {
            _this.postResult = data;
            console.log(data);
            var jsonLink = {
                stagingAreaBucketName: _this.endPoint.stagingAreaBucketName,
                assetDescription: "Asset",
                finalBucketName: _this.endPoint.finalBucketName,
                PostId: _this.postResult,
                key: _this.filename
            };
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            var options = new http_1.RequestOptions({ headers: headers, method: "post" });
            var input = JSON.stringify(jsonLink);
            _this._http.post(_this.endPoint.link_media, input, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return Rx_1.Observable.throw(error.json().error); })
                .subscribe(function (data) { console.log('Link response: ', data); }, function (error) { console.log(error); });
        }, function (err) {
            console.log(err);
        });
    };
    return SubmitFormService;
}());
SubmitFormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SubmitFormService);
exports.SubmitFormService = SubmitFormService;
//# sourceMappingURL=submit-form.service.js.map