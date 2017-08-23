webpackJsonp([0,4],{

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(70);
var common_1 = __webpack_require__(25);
var submit_form_component_1 = __webpack_require__(1416);
var submit_form_service_1 = __webpack_require__(1409);
var rights_component_1 = __webpack_require__(1415);
var metadata_component_1 = __webpack_require__(1414);
var description_component_1 = __webpack_require__(1411);
var media_component_1 = __webpack_require__(1413);
var license_component_1 = __webpack_require__(1412);
var summary_component_1 = __webpack_require__(1417);
var complete_component_1 = __webpack_require__(1410);
var submit_form_routing_module_1 = __webpack_require__(1419);
var datepicker_component_1 = __webpack_require__(1418);
var SubmitFormModule = (function () {
    function SubmitFormModule() {
    }
    return SubmitFormModule;
}());
SubmitFormModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            submit_form_routing_module_1.SubmitFormRoutingModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            rights_component_1.RightsComponent,
            metadata_component_1.MetadataComponent,
            description_component_1.DescriptionComponent,
            media_component_1.MediaComponent,
            license_component_1.LicenseComponent,
            summary_component_1.SummaryComponent,
            complete_component_1.CompleteComponent,
            submit_form_component_1.SubmitFormComponent,
            datepicker_component_1.DatepickerComponent
        ],
        providers: [
            submit_form_service_1.SubmitFormService
        ]
    }),
    __metadata("design:paramtypes", [])
], SubmitFormModule);
exports.SubmitFormModule = SubmitFormModule;
//# sourceMappingURL=submit-form.module.js.map

/***/ }),

/***/ 1409:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(169);
var Rx_1 = __webpack_require__(255);
__webpack_require__(171);
__webpack_require__(170);
var environment_1 = __webpack_require__(88);
var SubmitFormService = (function () {
    function SubmitFormService(_http) {
        this._http = _http;
        this.formData = new FormData(); // only data that needs to be sent to upload files.
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
    SubmitFormService.prototype.getMedia = function () {
        return this.fileList;
    };
    SubmitFormService.prototype.updatePost = function () {
        // tableName
        // whatever data
        // postId
    };
    SubmitFormService.prototype.returnPost = function () {
        var postData = {
            title: this.title,
            dateCreated: this.dateCreated,
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
        var tableName = this.endPoint.ddb_table_name;
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
            license: this.license,
            dateCreated: this.dateCreated,
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
            var jsonLink;
            if (_this.fileList && _this.fileList.length > 0) {
                for (var i = 0; i < _this.fileList.length; i++) {
                    jsonLink = {
                        stagingAreaBucketName: _this.endPoint.stagingAreaBucketName,
                        assetDescription: "Asset",
                        finalBucketName: _this.endPoint.finalBucketName,
                        PostId: _this.postResult,
                        key: _this.fileList[i].name,
                        tableName: _this.endPoint.ddb_table_name
                    };
                    console.log("data to link", jsonLink);
                    var headers_1 = new http_1.Headers();
                    headers_1.append('Content-Type', 'application/json');
                    var options_1 = new http_1.RequestOptions({ headers: headers_1, method: "post" });
                    var input = JSON.stringify(jsonLink);
                    // returns 504, make admin to check if went through.
                    _this._http.post(_this.endPoint.link_media, input, options_1)
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json().error); })
                        .subscribe(function (data) { console.log('Link response: ', data); }, function (error) { console.log(error); });
                }
            }
        });
    };
    return SubmitFormService;
}());
SubmitFormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], SubmitFormService);
exports.SubmitFormService = SubmitFormService;
var _a;
//# sourceMappingURL=submit-form.service.js.map

/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var CompleteComponent = (function () {
    function CompleteComponent() {
    }
    CompleteComponent.prototype.ngOnInit = function () {
    };
    return CompleteComponent;
}());
CompleteComponent = __decorate([
    core_1.Component({
        selector: 'app-complete',
        template: __webpack_require__(1429),
        styles: [__webpack_require__(1420)]
    }),
    __metadata("design:paramtypes", [])
], CompleteComponent);
exports.CompleteComponent = CompleteComponent;
//# sourceMappingURL=complete.component.js.map

/***/ }),

/***/ 1411:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(70);
// import { DatepickerComponent } from '../datepicker/datepicker.component';
var router_1 = __webpack_require__(32);
var submit_form_service_1 = __webpack_require__(1409);
var DescriptionComponent = (function () {
    // dateCreated:string = "";
    function DescriptionComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this.subjects = [];
        this.nations = [];
        this.regions = [];
        this.states = [];
        this.geos = [];
        this.languages = [];
        this.period = [];
        this.submitService = _submitService;
        this.initForm();
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent.prototype.initForm = function () {
        this.descForm = this.fb.group({
            title: ['', forms_1.Validators.required],
            description: [''],
            coveragePeriod: [''],
            dateCreated: [''],
        });
    };
    DescriptionComponent.prototype.addSubject = function (subjectInput) {
        this.subjects.push(subjectInput);
    };
    DescriptionComponent.prototype.removeSubject = function (subjectValue) {
        this.subjects.splice(this.subjects.indexOf(subjectValue), 1);
    };
    DescriptionComponent.prototype.addNation = function (nation) {
        this.nations.push(nation);
    };
    DescriptionComponent.prototype.removeNation = function (nation) {
        this.nations.splice(this.nations.indexOf(nation), 1);
    };
    DescriptionComponent.prototype.addRegion = function (region) {
        this.regions.push(region);
    };
    DescriptionComponent.prototype.removeRegion = function (region) {
        this.regions.splice(this.regions.indexOf(region), 1);
    };
    DescriptionComponent.prototype.addState = function (state) {
        this.states.push(state);
    };
    DescriptionComponent.prototype.removeState = function (state) {
        this.states.splice(this.states.indexOf(state), 1);
    };
    DescriptionComponent.prototype.addGeo = function (geo) {
        this.geos.push(geo);
    };
    DescriptionComponent.prototype.removeGeo = function (geo) {
        this.geos.splice(this.geos.indexOf(geo), 1);
    };
    DescriptionComponent.prototype.addLanguage = function (language) {
        this.languages.push(language);
    };
    DescriptionComponent.prototype.removeLanguage = function (language) {
        this.languages.splice(this.languages.indexOf(language), 1);
    };
    // getConsole() {
    //     console.log(this.subjects);
    //     console.log(this.nations);
    //     console.log(this.regions);
    //     console.log(this.states);
    //     console.log(this.geos);
    //     console.log(this.languages);
    // }
    DescriptionComponent.prototype.next = function () {
        this.period = this.descForm.value.coveragePeriod;
        this.description = this.descForm.value.description;
        this.title = this.descForm.value.title;
        this.submitService.dateCreated = this.descForm.value.dateCreated;
        this.submitService.description = this.description;
        this.submitService.title = this.title;
        // singular service arrays are set to the plural local arrays.
        this.submitService.subject = this.subjects;
        this.submitService.language = this.languages;
        this.submitService.coveragePeriod = this.period;
        this.submitService.coverageNationality = this.nations;
        this.submitService.coverageRegion = this.regions;
        this.submitService.coverageStateProvince = this.states;
        this.submitService.coverageSpatial = this.geos;
        // console.log( this.submitService.returnPost() );
        this._router.navigateByUrl('/create/media');
    };
    return DescriptionComponent;
}());
DescriptionComponent = __decorate([
    core_1.Component({
        selector: 'app-description',
        template: __webpack_require__(1431),
        styles: [__webpack_require__(1422)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], DescriptionComponent);
exports.DescriptionComponent = DescriptionComponent;
var _a, _b, _c;
//# sourceMappingURL=description.component.js.map

/***/ }),

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(70);
var submit_form_service_1 = __webpack_require__(1409);
var LicenseComponent = (function () {
    function LicenseComponent(_router, fb, submitService) {
        this._router = _router;
        this.fb = fb;
        this.submitService = submitService;
        this.initForm();
    }
    LicenseComponent.prototype.ngOnInit = function () {
    };
    LicenseComponent.prototype.initForm = function () {
        this.licenseForm = this.fb.group({
            license: ['']
        });
    };
    LicenseComponent.prototype.next = function () {
        this.license = this.licenseForm.value.license;
        this.submitService.license = this.license;
        this._router.navigateByUrl('/create/summary');
    };
    return LicenseComponent;
}());
LicenseComponent = __decorate([
    core_1.Component({
        selector: 'app-license',
        template: __webpack_require__(1432),
        styles: [__webpack_require__(1423)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], LicenseComponent);
exports.LicenseComponent = LicenseComponent;
var _a, _b, _c;
//# sourceMappingURL=license.component.js.map

/***/ }),

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(32);
var http_1 = __webpack_require__(169);
var submit_form_service_1 = __webpack_require__(1409);
var environment_1 = __webpack_require__(88);
var MediaComponent = (function () {
    function MediaComponent(_router, _http, _submitService) {
        this._router = _router;
        this._http = _http;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.submitService = _submitService;
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent.prototype.setMedia = function (event) {
        this.fileList = event.target.files;
        console.log(this.fileList);
        for (var i = 0; i < this.fileList.length; i++) {
            var file = this.fileList[i];
            var file_size = this.fileList[i].size;
        }
    };
    MediaComponent.prototype.uploadFiles = function () {
        var fn = this.constructor.name + "#uploadFiles()"; // tslint:disable-line:no-unused-variable
        console.log(fn + ": invoked");
        // TODO: Workaround for video uploads, just use amazon. https://stackoverflow.com/questions/36010348/angular2-file-upload-for-amazon-s3-bucket
        //
        console.log(fn + ": fileList", this.fileList);
        // let headers = new Headers();
        // headers.append('Content-Type', ' ');
        // let options = new RequestOptions({
        //   headers: headers,
        //   method: "put"
        // });
        if (this.fileList && this.fileList.length > 0) {
            this.submitService.fileList = this.fileList;
            this.errorMessage = null;
            var request;
            var fileCount = this.fileList.length;
            for (var i = 0; i < fileCount; i++) {
                var success;
                var percentComplete;
                var file = this.fileList[i];
                // this.fileName = this.fileList[i].name;
                request = new XMLHttpRequest();
                request.open("POST", this.endPoint.get_upload_link + this.fileList[i].name, true);
                console.log(fn + ": getting presigned link from ", this.endPoint.get_upload_link + this.fileList[i].name);
                request.onload = function (oEvent) {
                    console.log(fn + ": quoted presigned link = ", request.responseText);
                    //var url = request.responseText.replace(/['"]+/g, ''); // this will replace all quotes, you only want to remove delimiting quotes
                    var url = request.responseText;
                    if (request.responseText[0] == "\"" && request.responseText[request.responseText.length - 1] == "\"") {
                        url = request.responseText.slice(1, -1);
                    }
                    console.log(fn + ": presigned link = ", url);
                    var presigned_link = new XMLHttpRequest();
                    presigned_link.onprogress = function updateProgress(evt) {
                        console.log(fn + ":/onprogress: invoked with evt = ", evt);
                        if (evt.lengthComputable) {
                            percentComplete = (evt.loaded / evt.total) * 100;
                            console.log(percentComplete);
                        }
                    };
                    presigned_link.onload = function (event) {
                        console.log(fn + ": response from put", event);
                        if (presigned_link.response.status === 200) {
                            success = "Files uploaded successfully! Please proceed to next step";
                        }
                    };
                    presigned_link.open("PUT", url, true);
                    console.log(fn + ": presigned url opened");
                    presigned_link.setRequestHeader("Content-Type", file.type);
                    presigned_link.send(file);
                    console.log(fn + ": send has begun");
                };
                // console.log( fn+": ", this.fileList[i] );
                request.send(file);
            }
        }
        else {
            this.errorMessage = "Please select a couple of files to upload to the DALN.";
        }
    };
    MediaComponent.prototype.next = function () {
        this._router.navigateByUrl('/create/license');
    };
    return MediaComponent;
}());
MediaComponent = __decorate([
    core_1.Component({
        selector: 'app-media',
        template: __webpack_require__(1433),
        styles: [__webpack_require__(1424)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], MediaComponent);
exports.MediaComponent = MediaComponent;
var _a, _b, _c;
//# sourceMappingURL=media.component.js.map

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(32);
var forms_1 = __webpack_require__(70);
var submit_form_service_1 = __webpack_require__(1409);
var MetadataComponent = (function () {
    function MetadataComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this.names = [];
        this.interviewers = [];
        this.gender = [];
        this.birth_year = [];
        this.submitService = _submitService;
        this.initForm();
    }
    MetadataComponent.prototype.ngOnInit = function () {
    };
    MetadataComponent.prototype.initForm = function () {
        this.metaForm = this.fb.group({
            creatorGender: [''],
            creatorYearOfBirth: ['']
        });
    };
    MetadataComponent.prototype.addName = function (lastName, firstName) {
        var name = lastName + ", " + firstName;
        this.names.push(name);
    };
    MetadataComponent.prototype.removeName = function (name) {
        this.names.splice(this.names.indexOf(name), 1);
    };
    MetadataComponent.prototype.addInterviewer = function (lastNameInterviewer, firstNameInterviewer) {
        var interview = lastNameInterviewer + ", " + firstNameInterviewer;
        this.interviewers.push(interview);
    };
    MetadataComponent.prototype.removeInterviewer = function (interview) {
        this.interviewers.splice(this.interviewers.indexOf(interview), 1);
    };
    // getConsole(){
    //     console.log(this.names);
    //
    // }
    MetadataComponent.prototype.next = function () {
        this.gender = this.metaForm.value.creatorGender;
        this.birth_year = this.metaForm.value.creatorYearOfBirth;
        this.submitService.contributorAuthor = this.names;
        this.submitService.contributorInterviewer = this.interviewers;
        this.submitService.creatorGender = this.gender;
        this.submitService.creatorYearOfBirth = this.birth_year;
        this._router.navigateByUrl('/create/description');
    };
    return MetadataComponent;
}());
MetadataComponent = __decorate([
    core_1.Component({
        selector: 'app-metadata',
        template: __webpack_require__(1434),
        styles: [__webpack_require__(1425)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], MetadataComponent);
exports.MetadataComponent = MetadataComponent;
var _a, _b, _c;
//# sourceMappingURL=metadata.component.js.map

/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(70);
var router_1 = __webpack_require__(32);
var submit_form_service_1 = __webpack_require__(1409);
var RightsComponent = (function () {
    function RightsComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this.submitService = _submitService;
        this.initForm();
    }
    RightsComponent.prototype.ngOnInit = function () {
        //   this.rightsService.rights$
        //     .subscribe(rights => {
        //         this.initForm(rights);
        //     });
    };
    RightsComponent.prototype.initForm = function () {
        this.rightsForm = this.fb.group({
            rightsConsent: ['', forms_1.Validators.required],
            rightsRelease: ['', forms_1.Validators.required]
        });
        // check if submitService has value
    };
    RightsComponent.prototype.next = function () {
        this.rightsConsent = this.rightsForm.value.rightsConsent;
        this.rightsRelease = this.rightsForm.value.rightsRelease;
        this.submitService.rightsConsent = this.rightsConsent;
        this.submitService.rightsRelease = this.rightsRelease;
        this._router.navigateByUrl('/create/metadata');
    };
    return RightsComponent;
}());
RightsComponent = __decorate([
    core_1.Component({
        selector: 'app-rights',
        template: __webpack_require__(1435),
        styles: [__webpack_require__(1426)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], RightsComponent);
exports.RightsComponent = RightsComponent;
var _a, _b, _c;
//# sourceMappingURL=rights.component.js.map

/***/ }),

/***/ 1416:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var SubmitFormComponent = (function () {
    function SubmitFormComponent() {
    }
    return SubmitFormComponent;
}());
SubmitFormComponent = __decorate([
    core_1.Component({
        selector: 'app-submit-form',
        template: __webpack_require__(1436),
        styles: [__webpack_require__(1427)],
    }),
    __metadata("design:paramtypes", [])
], SubmitFormComponent);
exports.SubmitFormComponent = SubmitFormComponent;
//# sourceMappingURL=submit-form.component.js.map

/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(32);
var submit_form_service_1 = __webpack_require__(1409);
var forms_1 = __webpack_require__(70);
var SummaryComponent = (function () {
    function SummaryComponent(fb, _router, _submitService) {
        this.fb = fb;
        this._router = _router;
        this._submitService = _submitService;
        this.initForm();
    }
    SummaryComponent.prototype.ngOnInit = function () {
        this.displayPost();
    };
    SummaryComponent.prototype.initForm = function () {
        this.emailForm = this.fb.group({
            email: ['', forms_1.Validators.required]
        });
    };
    SummaryComponent.prototype.displayPost = function () {
        this.data = this._submitService.returnPost();
    };
    SummaryComponent.prototype.next = function () {
        this.email = this.emailForm.value.email;
        this._submitService.email = this.email;
        this._submitService.postCreate();
        this._router.navigateByUrl('/create/complete');
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    core_1.Component({
        selector: 'app-summary',
        template: __webpack_require__(1437),
        styles: [__webpack_require__(1428)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], SummaryComponent);
exports.SummaryComponent = SummaryComponent;
var _a, _b, _c;
//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var DatepickerComponent = (function () {
    function DatepickerComponent() {
    }
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    return DatepickerComponent;
}());
DatepickerComponent = __decorate([
    core_1.Component({
        selector: 'app-datepicker',
        template: __webpack_require__(1430),
        styles: [__webpack_require__(1421)]
    }),
    __metadata("design:paramtypes", [])
], DatepickerComponent);
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(32);
var submit_form_component_1 = __webpack_require__(1416);
var rights_component_1 = __webpack_require__(1415);
var metadata_component_1 = __webpack_require__(1414);
var description_component_1 = __webpack_require__(1411);
var media_component_1 = __webpack_require__(1413);
var license_component_1 = __webpack_require__(1412);
var summary_component_1 = __webpack_require__(1417);
var complete_component_1 = __webpack_require__(1410);
var submitFormRoutes = [
    {
        path: '',
        component: submit_form_component_1.SubmitFormComponent,
        children: [
            { path: '', redirectTo: 'rights', pathMatch: 'full' },
            { path: 'rights', component: rights_component_1.RightsComponent },
            { path: 'metadata', component: metadata_component_1.MetadataComponent },
            { path: 'description', component: description_component_1.DescriptionComponent },
            { path: 'media', component: media_component_1.MediaComponent },
            { path: 'license', component: license_component_1.LicenseComponent },
            { path: 'summary', component: summary_component_1.SummaryComponent },
            { path: 'complete', component: complete_component_1.CompleteComponent }
        ]
    },
];
var SubmitFormRoutingModule = (function () {
    function SubmitFormRoutingModule() {
    }
    return SubmitFormRoutingModule;
}());
SubmitFormRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(submitFormRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], SubmitFormRoutingModule);
exports.SubmitFormRoutingModule = SubmitFormRoutingModule;
//# sourceMappingURL=submit-form-routing.module.js.map

/***/ }),

/***/ 1420:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1421:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1422:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1423:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1424:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1425:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1426:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1427:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1428:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1429:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\">\r\n\r\n    <h1>Post Submission Complete!</h1>\r\n\r\n    <p>\r\n        Thank you for taking the time to submit. The post will be approved by an administrator soon.\r\n    </p>\r\n    <!-- Have a preview-post component and route that uses getdev/postid. -->\r\n    <!-- <a [routerLink]=\"['/detail', submitService.postResult]\">Post</a> -->\r\n</div>\r\n\r\n<!-- <app-result></app-result> -->\r\n"

/***/ }),

/***/ 1430:
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <div class=\"input-group\">\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n              name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n      <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\r\n          <i class=\"icon-calendar\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form> -->\r\n"

/***/ }),

/***/ 1431:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"add-top-margin container\">\r\n\r\n    <form [formGroup]=\"descForm\" novalidate (submit)=\"next()\">\r\n       <div class=\"non-optional\">\r\n            <ul>\r\n                <li>\r\n                    <span>Title</span>\r\n\r\n                    <input class=\"meta-info\" type=\"text\" name=\"title\" formControlName=\"title\" [value]='submitService.title' (input)=\"submitService.title = $event.target.value\"> <br />\r\n\r\n                    <p>\r\n                    To help other DALN users find your literacy narrative, please provide a brief title for your literacy narrative. (Required)\r\n                    </p>\r\n\r\n                </li>\r\n\r\n                <li>\r\n                  <span>Description</span>\r\n                  <input class=\"meta-info\" type=\"text\" name=\"description\" formControlName=\"description\" [value]=\"submitService.description\" (input)=\"$event.target.value\"> <br />\r\n                  <p>\r\n                    To help other DALN users find your literacy narrative, please describe your literacy narrative briefly in this box (Optional).\r\n                  </p>\r\n                </li>\r\n\r\n                <li>\r\n                  <span>Date Created</span>\r\n                  <input type=\"date\" formControlName=\"dateCreated\" [value]=\"submitService.dateCreated\" (input)=\"$event.target.value\">\r\n                  <p>\r\n                    Please provide the date on which you created your literacy narrative -- not necessarily the date on which you are filling out this form. (Optional)\r\n                  </p>\r\n                </li>\r\n\r\n            </ul>\r\n         </div>\r\n\r\n    <div class=\"card-submit card-outline-primary\">\r\n        <div class=\"card-header\">\r\n            <p>\r\n                The following form fields are optional, but recommended:\r\n            </p>\r\n        </div>\r\n\r\n            <ul>\r\n                <li>\r\n                  <span>Subject Keyword</span>\r\n                      <div class=\"input-group\">\r\n                          <input class=\"meta-info\" type=\"text\" name=\"subject\" #subjectInput>\r\n                          <span class=\"input-group-btn\">\r\n                              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addSubject(subjectInput.value)\">+</button>\r\n                          </span>\r\n                      </div>\r\n                  <p> Current Subject(s): </p>\r\n                    <span *ngFor=\"let subject of subjects\" class=\"badge badge-primary\">{{subject}}\r\n                      <button (click)=\"removeSubject(this.subject)\" type=\"button\" class=\"close\">\r\n                      <span>&times;</span>\r\n                    </button>\r\n                    </span>\r\n                  <p>\r\n                    To help other DALN users find your literacy narrative, please enter appropriate subject keywords or phrases. You may enter as many as you like, but you should enter only one keyword or phrase at a time, then click \"Add More\" to enter additional keywords. (Optional)\r\n                  </p>\r\n                </li>\r\n\r\n                <li>\r\n                  <span>Decades covered</span>\r\n\r\n\r\n                  <div class=\"form-group\">\r\n                      <label for=\"decades\">Mutiple select list (hold shift to select more than one):</label>\r\n                            <select multiple class=\"form-control\" id=\"decades\" [(ngModel)]=\"coveragePeriod\" formControlName=\"coveragePeriod\">\r\n                              <option>1900-1909</option>\r\n                              <option>1910-1919</option>\r\n                              <option>1920-1929</option>\r\n                              <option>1930-1939</option>\r\n                              <option>1940-1949</option>\r\n                              <option>1950-1959</option>\r\n                              <option>1960-1969</option>\r\n                              <option>1970-1979</option>\r\n                              <option>1980-1989</option>\r\n                              <option>1990-1999</option>\r\n                              <option>2000-2009</option>\r\n                              <option>2010-2019</option>\r\n                            </select>\r\n                  </div>\r\n                    <p>\r\n                      Please indicate the decades referred to in your literacy narrative. You can choose as many as necessary, but you may need to hold down the Shift or CTRL key to select multiple choices. (Optional)\r\n                  </p>\r\n                </li>\r\n\r\n                <li>\r\n                  <span>Nationality</span>\r\n                      <div class=\"input-group\">\r\n                          <input class=\"meta-info\" type=\"text\" name=\"nation\" #nationInput>\r\n                          <span class=\"input-group-btn\">\r\n                              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addNation(nationInput.value)\">+</button>\r\n                          </span>\r\n                      </div>\r\n                  <p> Nation(s) specified: </p>\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let nation of nations\" class=\"list-group-item\">{{nation}}\r\n                            <button (click)=\"removeNation(this.nation)\" type=\"button\" class=\"close\">\r\n                                <span>&times;</span>\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                  <p>\r\n                      To help other DALN users find narratives by people of a particular nationality, please list your nationality/nationalities during the period referred to in your narrative. (Optional)\r\n                  </p>\r\n                </li>\r\n\r\n                <li>\r\n                  <span>Region</span>\r\n                      <div class=\"input-group\">\r\n                          <input class=\"meta-info\" type=\"text\" name=\"region\" #regionInput>\r\n                          <span class=\"input-group-btn\">\r\n                              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addRegion(regionInput.value)\">+</button>\r\n                          </span>\r\n                      </div>\r\n                  <p> Region(s) specified: </p>\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let region of regions\" class=\"list-group-item\">{{region}}\r\n                            <button (click)=\"removeRegion(this.region)\" type=\"button\" class=\"close\">\r\n                                <span>&times;</span>\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                  <p>\r\n                    To help other DALN users find narratives from particular regions (e.g., New England, Rocky Mountains, Great Plains) please list the region(s) in which the events described in your narrative took place. (Optional)\r\n                  </p>\r\n                </li>\r\n\r\n                <li>\r\n                  <span>State or Province</span>\r\n                      <div class=\"input-group\">\r\n                          <input class=\"meta-info\" type=\"text\" name=\"state\" #stateInput>\r\n                          <span class=\"input-group-btn\">\r\n                              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addState(stateInput.value)\">+</button>\r\n                          </span>\r\n                      </div>\r\n                  <p> State(s) specified: </p>\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let state of states\" class=\"list-group-item\">{{state}}\r\n                            <button (click)=\"removeState(this.state)\" type=\"button\" class=\"close\">\r\n                                <span>&times;</span>\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                    <br />\r\n                  <p>\r\n                    To help other DALN users find narratives from your state or province, please list the state(s) or province(s) in which the events described in your narrative took place. (Optional)\r\n                  </p>\r\n                </li>\r\n\r\n                <li>\r\n                  <span>Other Geographical Information</span>\r\n                      <div class=\"input-group\">\r\n                          <input class=\"meta-info\" type=\"text\" name=\"geo\" #geoInput>\r\n                          <span class=\"input-group-btn\">\r\n                              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addGeo(geoInput.value)\">+</button>\r\n                          </span>\r\n                      </div>\r\n                  <p> Georgraphical information added: </p>\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let geo of geos\" class=\"list-group-item\">{{geo}}\r\n                            <button (click)=\"removeGeo(this.geo)\" type=\"button\" class=\"close\">\r\n                                <span>&times;</span>\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                  <br />\r\n                  <p>\r\n                    Please provide any further description of the places referred to in your narrative that you consider important (e.g., urban, suburban, rural, inner-city Detroit). (Optional)\r\n                  </p>\r\n                </li>\r\n\r\n                <li>\r\n                  <span>Language</span>\r\n                      <div class=\"input-group\">\r\n                          <input class=\"meta-info\" type=\"text\" name=\"language\" #languageInput>\r\n                          <span class=\"input-group-btn\">\r\n                              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addLanguage(languageInput.value)\">+</button>\r\n                          </span>\r\n                      </div>\r\n                  <p> Languages specified: </p>\r\n                    <ul class=\"list-group\">\r\n                        <li *ngFor=\"let language of languages\" class=\"list-group-item\">{{language}}\r\n                            <button (click)=\"removeLanguage(this.language)\" type=\"button\" class=\"close\">\r\n                                <span>&times;</span>\r\n                            </button>\r\n                        </li>\r\n                    </ul>\r\n                  <br />\r\n                  <p>\r\n                    Please enter the language(s) used or referred to in your literacy narrative. (Optional)\r\n                  </p>\r\n                </li>\r\n            </ul>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-6 add-top-margin\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!descForm.valid\" (click)=\"next()\">Next Step</button>\r\n\r\n                <div class=\"alert alert-info add-top-margin\" role=\"alert\" *ngIf=\"!descForm.controls.title.valid\">\r\n                    <strong > A title is required to make a post.</strong>\r\n                </div>\r\n        </div>\r\n\r\n\r\n    </form>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 1432:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\">\r\n    <h1>Licensing Options</h1>\r\n    <p> Please assign one of the Creative Commons Media Licenses to your post.</p>\r\n\r\n    <div class=\"col-lg-6\">\r\n        <form [formGroup]=\"licenseForm\" novalidate (submit)=next()>\r\n            <select required [(ngModel)]=\"license\" formControlName=\"license\">\r\n                <option>\r\n                    Creative Commons CC0\r\n                </option>\r\n                <option>\r\n                    Creative Commons BY\r\n                </option>\r\n                <option>\r\n                    Creative Commons BY-SA\r\n                </option>\r\n                <option>\r\n                    Creative Commons BY-ND\r\n                </option>\r\n                <option>\r\n                    Creative Commons BY-NC\r\n                </option>\r\n                <option>\r\n                    Creative Commons BY-NC-SA\r\n                </option>\r\n                <option>\r\n                    Creative Commons BY-NC-ND\r\n                </option>\r\n            </select>\r\n\r\n        </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-lg-6 add-top-margin\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!licenseForm.valid\" (click)=\"next()\">Next Step</button>\r\n\r\n        <div class=\"alert alert-info add-top-margin\" role=\"alert\" *ngIf=\"!licenseForm.controls.license.valid\">\r\n            <strong > A license is required to make a post.</strong>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n<!-- <app-result></app-result> -->\r\n"

/***/ }),

/***/ 1433:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\">\r\n\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"add-top-margin col-md-6 alert alert-warning\" *ngIf=\"suggestMessage != null\">\r\n          <p>\r\n              {{suggestMessage}}\r\n          </p>\r\n      </div>\r\n     </div>\r\n\r\n     <div class=\"row justify-content-center\">\r\n       <div class=\"add-top-margin col-md-6 alert alert-danger\" *ngIf=\"errorMessage != null\">\r\n           <p>\r\n               {{errorMessage}}\r\n           </p>\r\n       </div>\r\n      </div>\r\n\r\n\r\n  <!-- <p><input class=\"btn btn-primary\" type=\"file\" name=\"file1\"></p> -->\r\n  <p><input type=\"file\" (change)=\"setMedia($event)\" placeholder=\"Upload file\" name=\"file\" multiple></p>\r\n\r\n\r\n\r\n    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"uploadFiles()\">Upload Files</button>\r\n\r\n\r\n\r\n    <p>\r\n        Please enter the full path of the file on your computer corresponding to your item. If you click \"Browse...\", a new window will allow you to select the file from your computer.\r\n\r\n       We recommend that you use the following file formats for compatibility with our system and broader accessiblity by end users, who typically must open the files on their own computers --\r\n\r\n       TEXT: Microsoft Word (.doc or .rtf); plain text (.txt); or Adobe Acrobat (.pdf)\r\n       IMAGES: JPEG (.jpg or .jpeg), GIF (.gif), or PNG (.png)\r\n       AUDIO: MP3 or QuickTime (.mov)\r\n       VIDEO: QuickTime (.mov)\r\n       WEB: HTML (.htm or .html)\r\n\r\n       If your file (particularly audio or video) is larger than 35 MB, we recommend that you split it into two or more files, with no single file larger than about 35 MB so that visitors to the site will be able to download your file(s) more conveniently.\r\n\r\n    </p>\r\n\r\n    <div *ngIf=\"fileList && fileList.length != 0 && fileName != null\">\r\n        <div class=\"file-list\" *ngFor=\"let file of fileList\">\r\n            <div class=\"progress\">\r\n                 <div class=\"progress-bar progress-bar-animated\" role=\"progressbar\" [attr.aria-valuenow]=\"percentUploaded\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{percentUploaded}}</div>\r\n             </div>\r\n             <p>\r\n                 {{file?.name}}\r\n             </p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n<!--\r\n    <li>\r\n      <span>File Description</span>\r\n      <input class=\"meta-info\" type=\"text\" name=\"file\"> <br />\r\n      <p>\r\n        Optionally, provide a brief description of the file, for example \"Main article\", or \"Experiment data readings\".\r\n      </p>\r\n    </li> -->\r\n\r\n    <div class=\"add-top-margin\" *ngIf=\"succeedMessage == null\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" disabled (click)=\"next()\">Next Step</button>\r\n    </div>\r\n    <div class=\"add-top-margin\" *ngIf=\"succeedMessage != null\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"next()\">Next Step</button>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"add-top-margin col-md-6 alert alert-success\" *ngIf=\"succeedMessage != null\">\r\n          <p>\r\n              {{succeedMessage}}\r\n          </p>\r\n      </div>\r\n     </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 1434:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container add-top-margin\">\r\n\r\n    <form [formGroup]=\"metaForm\" novalidate submit=next()>\r\n    <ul>\r\n\r\n        <li>\r\n            <span>Author</span>\r\n            <input class=\"meta-info\" type=\"text\" name=\"contributorAuthorLastName\" #lastName >\r\n            <input class=\"meta-info\" type=\"text\" name=\"contributorAuthorFirstName\" #firstName >\r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addName(lastName.value, firstName.value)\">Add More</button>\r\n            <p>Authors: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let name of names\" >{{name}}\r\n                    <button (click)=\"removeName(this.name)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n\r\n            <br />\r\n            <p>\r\n            If you wish, enter the name of the author of this literacy narrative (you can click \"Add More\" to enter multiple names for a collaborative narrative). (Optional)\r\n            </p>\r\n\r\n        </li>\r\n\r\n        <li>\r\n            <span>Interviewers</span>\r\n            <input class=\"meta-info\" type=\"text\" name=\"contributorInterviewerLastName\" #lastNameInterviewer >\r\n            <input class=\"meta-info\" type=\"text\" name=\"contributorInterviewerFirstName\" #firstNameInterviewer >\r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addInterviewer(lastNameInterviewer.value, firstNameInterviewer.value)\">Add More</button>\r\n            <p>Interviewers: </p>\r\n            <ul class=\"list-group\">\r\n                <li *ngFor=\"let interview of interviewers\" >{{interview}}\r\n                    <button (click)=\"removeInterviewer(this.interview)\" type=\"button\" class=\"close\">\r\n                        <span>&times;</span>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n            <br />\r\n            <p>\r\n            If you wish, enter the name of the interviewers of this literacy narrative (you can click \"Add More\" to enter multiple interviewers for a collaborative narrative). (Optional)\r\n            </p>\r\n\r\n        </li>\r\n\r\n        <li>\r\n          <span>Year-of-Birth</span>\r\n          <input class=\"meta-info\" type=\"text\" name=\"creatorYearOfBirth\" formControlName=\"creatorYearOfBirth\" [(ngModel)]=\"creatorYearOfBirth\"> <br />\r\n          <p>\r\n              To help other DALN users find narratives by people of a particular age group, please provide your year of birth (or years of birth for collaborative entries), using four digits. (Optional)\r\n          </p>\r\n        </li>\r\n\r\n        <li>\r\n          <span>Gender</span>\r\n          <div class=\"form-group\">\r\n              <input type=\"radio\" name=\"creatorGender\" value=\"Male\" formControlName=\"creatorGender\" [(ngModel)]=\"creatorGender\" /><p>\r\n                  Male\r\n              </p>\r\n              <input type=\"radio\" name=\"creatorGender\" value=\"Female\" formControlName=\"creatorGender\" [(ngModel)]=\"creatorGender\" /><p>\r\n                  Female\r\n              </p>\r\n\r\n              <input type=\"text\" name=\"creatorGender\" placeholder=\"Other (please specify)\" />\r\n          </div>\r\n          <br />\r\n          <p>\r\n             To help other DALN users find narratives by people of a particular gender or sexual orientation, please describe your gender (for example, male, female, transgender) and/or sexual orientation (for example: gay, bisexual, heterosexual). (Optional)\r\n          </p>\r\n        </li>\r\n\r\n    </ul>\r\n\r\n    </form>\r\n\r\n    <!-- <button type=\"submit\" (click)=\"getConsole()\">Get Console</button> -->\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\">Next Step</button>\r\n\r\n\r\n</div>\r\n\r\n<!-- <p>\r\n    Form value:\r\n    {{metaForm.value | json}}\r\n</p> -->\r\n"

/***/ }),

/***/ 1435:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\">\r\n\r\n\r\n\r\n<form [formGroup]=\"rightsForm\" novalidate (submit)=\"next()\">\r\n\r\n    <div class=\"rights-consent\">\r\n        <span>Consent to Participate</span>\r\n        <div class=\"well\">\r\n            <p>\r\n                Because we value your right to make an informed decision to participate in the DALN, we must have your consent before we accept a submission. Please click one of the following links to read our Adult Consent Form or Under-18 Consent Form before completing this field. Then you must select either \"Adult\" or \"Under-18\" below to affirm that you have read and agreed to the terms of the appropriate consent form.\r\n            </p>\r\n        </div>\r\n\r\n\r\n            <input class=\"rights-option\" type=\"radio\" name=\"rightsConsent\" value=\"Adult\" formControlName=\"rightsConsent\"> <p>Adult</p>\r\n            <input class=\"rights-option\" type=\"radio\" name=\"rightsConsent\" value=\"Under-18\" formControlName=\"rightsConsent\"> <p> Under-18</p>\r\n\r\n    </div>\r\n\r\n      <div class=\"materials-consent\">\r\n          <span>Release for Materials:</span>\r\n          <div class=\"well\">\r\n              <p>\r\n                Because we want you to know how your materials and personal information will be used in the DALN, we must have your release before we accept a submission. Please click one of the following links to read our Adult Release Form or Under-18 Release Form before completing this field. Then you must select either \"Adult\" or \"Under-18\" below to affirm that you have read and agreed to the terms of the appropriate release form.\r\n              </p>\r\n          </div>\r\n\r\n          <input type=\"radio\" name=\"rightsRelease\" value=\"Adult\" formControlName=\"rightsRelease\"> <p> Adult </p>\r\n          <input type=\"radio\" name=\"rightsRelease\" value=\"Under-18\" formControlName=\"rightsRelease\"> <p> Under-18 </p>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <button class=\"btn btn-primary\" type=\"submit\" (click)=\"next()\">Next Step</button>\r\n\r\n\r\n</div>\r\n\r\n<!-- <p>\r\n    Form value:\r\n    {{rightsForm.value | json}}\r\n</p> -->\r\n"

/***/ }),

/***/ 1436:
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 1437:
/***/ (function(module, exports) {

module.exports = "<div class=\"container add-top-margin\">\r\n\r\n    <p>\r\n        Summary of Post Submission\r\n    </p>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-block\">\r\n            <p>Post Title: {{data?.title}}</p>\r\n            <p>Post description: {{data?.description}}</p>\r\n            <p>Rights Consent: {{data?.rightsConsent}}</p>\r\n            <p>Rights Relase: {{data?.rightsRelease}}</p>\r\n            <p>Creator Gender: {{data?.creatorGender}}</p>\r\n            <p>Creator Year of Birth: {{data?.creatorYearOfBirth}}</p>\r\n            <p>Author(s): {{data?.contributorAuthor}}</p>\r\n            <p>Interviewer(s): {{data?.contributorInterviewer}}</p>\r\n            <p>Coverage Period: {{data?.coveragePeriod}}</p>\r\n            <p>Nationality: {{data?.coverageNationality}}</p>\r\n            <p>Spatial: {{data?.coverageSpatial}}</p>\r\n            <p>State: {{data?.coverageStateProvince}}</p>\r\n            <p>Subject: {{data?.subject}}</p>\r\n            <p>language: {{data?.language}}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <form [formGroup]=\"emailForm\" novalidate submt=\"next()\">\r\n        <label class=\"control-label\" for=\"signupEmail\">Email</label>\r\n            <input id=\"signupEmail\" required type=\"email\" maxlength=\"100\" class=\"form-control\"\r\n            [(ngModel)]=\"email\"\r\n            formControlName=\"email\"\r\n            [value]=\"_submitService.email\">\r\n\r\n        </form>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!emailForm.valid\" (click)=\"next()\">Next Step</button>\r\n\r\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"!emailForm.controls.email.valid\">\r\n        <strong > An email is required to make a post.</strong>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- <app-result></app-result> -->\r\n"

/***/ })

});
//# sourceMappingURL=0.bundle.map