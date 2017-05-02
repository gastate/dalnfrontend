webpackJsonp([0,4],{

/***/ 1130:
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
const core_1 = __webpack_require__(0);
const forms_1 = __webpack_require__(59);
const common_1 = __webpack_require__(20);
const submit_form_component_1 = __webpack_require__(1137);
const submit_form_service_1 = __webpack_require__(1131);
const rights_component_1 = __webpack_require__(1136);
const metadata_component_1 = __webpack_require__(1135);
const description_component_1 = __webpack_require__(1133);
const media_component_1 = __webpack_require__(1134);
const license_component_1 = __webpack_require__(1141);
const summary_component_1 = __webpack_require__(1138);
const complete_component_1 = __webpack_require__(1132);
const submit_form_routing_module_1 = __webpack_require__(1142);
const result_component_1 = __webpack_require__(1139);
const datepicker_component_1 = __webpack_require__(1140);
let SubmitFormModule = class SubmitFormModule {
};
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
            result_component_1.ResultComponent,
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

/***/ 1131:
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
const core_1 = __webpack_require__(0);
const http_1 = __webpack_require__(142);
const Rx_1 = __webpack_require__(207);
__webpack_require__(144);
__webpack_require__(143);
const environment_1 = __webpack_require__(105);
let SubmitFormService = class SubmitFormService {
    constructor(_http) {
        this._http = _http;
        this.formData = new FormData();
        this.filename = null;
        this.endPoint = environment_1.environment.API_ENDPOINTS;
        this.title = null;
        this.postResult = null;
        this.description = null;
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
    getMedia(fileList) {
        let file;
        this.filename = fileList[0].name; // to use in the get_upload_link key.
        console.log(fileList);
        for (var i = 0; i < fileList.length; i++) {
            file = fileList[i];
            this.formData.append("userFile", file, file.name);
        }
    }
    uploadMedia() {
        console.log("Uploading Files...");
        console.log(this.endPoint.get_upload_link + this.filename);
        this._http.get(this.endPoint.get_upload_link + this.filename)
            .map((res) => res.json())
            .catch((error) => Rx_1.Observable.throw(error.json().error))
            .subscribe(
        // data is the link returned from get_upload_link, will use this link to submit the formData.
        data => {
            this._http.put(data, this.formData)
                .map((res) => res.json())
                .catch((error) => Rx_1.Observable.throw(error.json().error))
                .subscribe(data => { console.log('response', data); }, error => { console.log(error); });
        });
        //   // Testing mock http service
        //   this._http.put('https://httpbin.org/put', this.formData)
        //   .map((res: Response) => res.json())
        //   .catch((error: any) => Observable.throw(error.json().error))
        //   .subscribe(
        //       data => { console.log('response', data); },
        //       error => { console.log(error); }
        //   );
    }
    postCreate() {
        var tableName = "DALN-Posts-Dev";
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
            tableName: tableName
        };
        var str = JSON.stringify(data);
        console.log(str);
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let options = new http_1.RequestOptions({ headers: headers, method: "post" });
        this._http.post(this.endPoint.create_post, str, options)
            .map((res) => res.json())
            .subscribe(
        // data here is the postId. Using it for link_media.
        data => {
            this.postResult = data;
            console.log(data);
            var jsonLink = {};
            let headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            let options = new http_1.RequestOptions({ headers: headers, method: "post" });
            var input = JSON.stringify(jsonLink);
            this._http.post(this.endPoint.link_media, input, options)
                .map((res) => res.json())
                .catch((error) => Rx_1.Observable.throw(error.json().error))
                .subscribe(data => { console.log('Link response: ', data); }, error => { console.log(error); });
        }, err => {
            console.log(err);
        });
    }
};
SubmitFormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], SubmitFormService);
exports.SubmitFormService = SubmitFormService;
var _a;
//# sourceMappingURL=submit-form.service.js.map

/***/ }),

/***/ 1132:
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
const core_1 = __webpack_require__(0);
let CompleteComponent = class CompleteComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompleteComponent = __decorate([
    core_1.Component({
        selector: 'app-complete',
        template: __webpack_require__(1154),
        styles: [__webpack_require__(1144)]
    }),
    __metadata("design:paramtypes", [])
], CompleteComponent);
exports.CompleteComponent = CompleteComponent;
//# sourceMappingURL=complete.component.js.map

/***/ }),

/***/ 1133:
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
const core_1 = __webpack_require__(0);
const forms_1 = __webpack_require__(59);
const router_1 = __webpack_require__(87);
const submit_form_service_1 = __webpack_require__(1131);
let DescriptionComponent = class DescriptionComponent {
    constructor(_router, fb, _submitService) {
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
    ngOnInit() {
    }
    initForm() {
        this.descForm = this.fb.group({
            title: ['', forms_1.Validators.required],
            description: [''],
            coveragePeriod: ['']
        });
    }
    addSubject(subjectInput) {
        this.subjects.push(subjectInput);
    }
    removeSubject(subjectValue) {
        this.subjects.splice(this.subjects.indexOf(subjectValue), 1);
    }
    addNation(nation) {
        this.nations.push(nation);
    }
    removeNation(nation) {
        this.nations.splice(this.nations.indexOf(nation), 1);
    }
    addRegion(region) {
        this.regions.push(region);
    }
    removeRegion(region) {
        this.regions.splice(this.regions.indexOf(region), 1);
    }
    addState(state) {
        this.states.push(state);
    }
    removeState(state) {
        this.states.splice(this.states.indexOf(state), 1);
    }
    addGeo(geo) {
        this.geos.push(geo);
    }
    removeGeo(geo) {
        this.geos.splice(this.geos.indexOf(geo), 1);
    }
    addLanguage(language) {
        this.languages.push(language);
    }
    removeLanguage(language) {
        this.languages.splice(this.languages.indexOf(language), 1);
    }
    // getConsole() {
    //     console.log(this.subjects);
    //     console.log(this.nations);
    //     console.log(this.regions);
    //     console.log(this.states);
    //     console.log(this.geos);
    //     console.log(this.languages);
    // }
    next() {
        this.period = this.descForm.value.coveragePeriod;
        this.description = this.descForm.value.description;
        this.title = this.descForm.value.title;
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
        this._router.navigateByUrl('/create/media');
    }
};
DescriptionComponent = __decorate([
    core_1.Component({
        selector: 'app-description',
        template: __webpack_require__(1156),
        styles: [__webpack_require__(1146)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], DescriptionComponent);
exports.DescriptionComponent = DescriptionComponent;
var _a, _b, _c;
//# sourceMappingURL=description.component.js.map

/***/ }),

/***/ 1134:
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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
const submit_form_service_1 = __webpack_require__(1131);
let MediaComponent = class MediaComponent {
    constructor(_router, _submitService) {
        this._router = _router;
        this.submitService = _submitService;
    }
    ngOnInit() {
    }
    setMedia(event) {
        let fileList = event.target.files;
        this.submitService.getMedia(fileList);
    }
    uploadFiles() {
        this.submitService.uploadMedia();
    }
    next() {
        this._router.navigateByUrl('/create/summary');
    }
};
MediaComponent = __decorate([
    core_1.Component({
        selector: 'app-media',
        template: __webpack_require__(1158),
        styles: [__webpack_require__(1148)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _b || Object])
], MediaComponent);
exports.MediaComponent = MediaComponent;
var _a, _b;
//# sourceMappingURL=media.component.js.map

/***/ }),

/***/ 1135:
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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
const forms_1 = __webpack_require__(59);
const submit_form_service_1 = __webpack_require__(1131);
let MetadataComponent = class MetadataComponent {
    constructor(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this.names = [];
        this.interviewers = [];
        this.gender = [];
        this.birth_year = [];
        this.submitService = _submitService;
        this.initForm();
    }
    ngOnInit() {
    }
    initForm() {
        this.metaForm = this.fb.group({
            creatorGender: [''],
            creatorYearOfBirth: ['']
        });
    }
    addName(lastName, firstName) {
        let name = lastName + ", " + firstName;
        this.names.push(name);
    }
    removeName(name) {
        this.names.splice(this.names.indexOf(name), 1);
    }
    addInterviewer(lastNameInterviewer, firstNameInterviewer) {
        let interview = lastNameInterviewer + ", " + firstNameInterviewer;
        this.interviewers.push(interview);
    }
    removeInterviewer(interview) {
        this.interviewers.splice(this.interviewers.indexOf(interview), 1);
    }
    // getConsole(){
    //     console.log(this.names);
    //
    // }
    next() {
        this.gender = this.metaForm.value.creatorGender;
        this.birth_year = this.metaForm.value.creatorYearOfBirth;
        this.submitService.contributorAuthor = this.names;
        this.submitService.contributorInterviewer = this.interviewers;
        this.submitService.creatorGender = this.gender;
        this.submitService.creatorYearOfBirth = this.birth_year;
        this._router.navigateByUrl('/create/description');
    }
};
MetadataComponent = __decorate([
    core_1.Component({
        selector: 'app-metadata',
        template: __webpack_require__(1159),
        styles: [__webpack_require__(1149)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], MetadataComponent);
exports.MetadataComponent = MetadataComponent;
var _a, _b, _c;
//# sourceMappingURL=metadata.component.js.map

/***/ }),

/***/ 1136:
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
const core_1 = __webpack_require__(0);
const forms_1 = __webpack_require__(59);
const router_1 = __webpack_require__(87);
const submit_form_service_1 = __webpack_require__(1131);
let RightsComponent = class RightsComponent {
    constructor(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this.submitService = _submitService;
        this.initForm();
    }
    ngOnInit() {
        //   this.rightsService.rights$
        //     .subscribe(rights => {
        //         this.initForm(rights);
        //     });
    }
    initForm() {
        this.rightsForm = this.fb.group({
            rightsConsent: ['', forms_1.Validators.required],
            rightsRelease: ['', forms_1.Validators.required]
        });
        // check if submitService has value
    }
    next() {
        this.rightsConsent = this.rightsForm.value.rightsConsent;
        this.rightsRelease = this.rightsForm.value.rightsRelease;
        this.submitService.rightsConsent = this.rightsConsent;
        this.submitService.rightsRelease = this.rightsRelease;
        this._router.navigateByUrl('/create/metadata');
    }
};
RightsComponent = __decorate([
    core_1.Component({
        selector: 'app-rights',
        template: __webpack_require__(1160),
        styles: [__webpack_require__(1150)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _c || Object])
], RightsComponent);
exports.RightsComponent = RightsComponent;
var _a, _b, _c;
//# sourceMappingURL=rights.component.js.map

/***/ }),

/***/ 1137:
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
const core_1 = __webpack_require__(0);
let SubmitFormComponent = class SubmitFormComponent {
};
SubmitFormComponent = __decorate([
    core_1.Component({
        selector: 'app-submit-form',
        template: __webpack_require__(1161),
        styles: [__webpack_require__(1151)],
    }),
    __metadata("design:paramtypes", [])
], SubmitFormComponent);
exports.SubmitFormComponent = SubmitFormComponent;
//# sourceMappingURL=submit-form.component.js.map

/***/ }),

/***/ 1138:
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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
const submit_form_service_1 = __webpack_require__(1131);
let SummaryComponent = class SummaryComponent {
    constructor(_router, _submitService) {
        this._router = _router;
        this._submitService = _submitService;
    }
    ngOnInit() {
    }
    next() {
        this._submitService.postCreate();
        this._router.navigateByUrl('/create/complete');
    }
};
SummaryComponent = __decorate([
    core_1.Component({
        selector: 'app-summary',
        template: __webpack_require__(1162),
        styles: [__webpack_require__(1152)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof submit_form_service_1.SubmitFormService !== "undefined" && submit_form_service_1.SubmitFormService) === "function" && _b || Object])
], SummaryComponent);
exports.SummaryComponent = SummaryComponent;
var _a, _b;
//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ 1139:
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
const core_1 = __webpack_require__(0);
let ResultComponent = class ResultComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ResultComponent = __decorate([
    core_1.Component({
        selector: 'app-result',
        template: __webpack_require__(1153),
        styles: [__webpack_require__(1143)]
    }),
    __metadata("design:paramtypes", [])
], ResultComponent);
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ 1140:
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
const core_1 = __webpack_require__(0);
let DatepickerComponent = class DatepickerComponent {
    constructor() { }
    ngOnInit() {
    }
};
DatepickerComponent = __decorate([
    core_1.Component({
        selector: 'app-datepicker',
        template: __webpack_require__(1155),
        styles: [__webpack_require__(1145)]
    }),
    __metadata("design:paramtypes", [])
], DatepickerComponent);
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ 1141:
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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
let LicenseComponent = class LicenseComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    next() {
        this._router.navigateByUrl('/create/summary');
    }
};
LicenseComponent = __decorate([
    core_1.Component({
        selector: 'app-license',
        template: __webpack_require__(1157),
        styles: [__webpack_require__(1147)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], LicenseComponent);
exports.LicenseComponent = LicenseComponent;
var _a;
//# sourceMappingURL=license.component.js.map

/***/ }),

/***/ 1142:
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
const core_1 = __webpack_require__(0);
const router_1 = __webpack_require__(87);
const submit_form_component_1 = __webpack_require__(1137);
const rights_component_1 = __webpack_require__(1136);
const metadata_component_1 = __webpack_require__(1135);
const description_component_1 = __webpack_require__(1133);
const media_component_1 = __webpack_require__(1134);
const summary_component_1 = __webpack_require__(1138);
const complete_component_1 = __webpack_require__(1132);
const submitFormRoutes = [
    {
        path: '',
        component: submit_form_component_1.SubmitFormComponent,
        children: [
            { path: '', redirectTo: 'rights', pathMatch: 'full' },
            { path: 'rights', component: rights_component_1.RightsComponent },
            { path: 'metadata', component: metadata_component_1.MetadataComponent },
            { path: 'description', component: description_component_1.DescriptionComponent },
            { path: 'media', component: media_component_1.MediaComponent },
            // { path: 'license', component: LicenseComponent },
            { path: 'summary', component: summary_component_1.SummaryComponent },
            { path: 'complete', component: complete_component_1.CompleteComponent }
        ]
    },
];
let SubmitFormRoutingModule = class SubmitFormRoutingModule {
};
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

/***/ 1143:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1144:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1145:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1146:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1147:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1148:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1149:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1150:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1151:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1152:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1153:
/***/ (function(module, exports) {

module.exports = "<h1>App store</h1>\n<pre>\n    {{store | async | json}}\n</pre>\n"

/***/ }),

/***/ 1154:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1>Post Submission Complete!</h1>\n\n    <p>\n        You can preview your post below. The post will be approved by an administrator soon.\n    </p>\n    <!-- Have a preview-post component and route that uses getdev/postid. -->\n    <!-- <a [routerLink]=\"['/detail', submitService.postResult]\">Post</a> -->\n</div>\n\n<!-- <app-result></app-result> -->\n"

/***/ }),

/***/ 1155:
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n              name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n      <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\n          <i class=\"icon-calendar\"></i>\n      </div>\n    </div>\n  </div>\n</form> -->\n"

/***/ }),

/***/ 1156:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <form [formGroup]=\"descForm\" novalidate (submit)=\"next()\">\n    <ul>\n\n        <li>\n            <span>Title</span>\n\n            <input class=\"meta-info\" type=\"text\" name=\"title\" formControlName=\"title\" [value]='submitService.title' (input)=\"submitService.title = $event.target.value\"> <br />\n\n            <p>\n            To help other DALN users find your literacy narrative, please provide a brief title for your literacy narrative. (Required)\n            </p>\n\n        </li>\n\n        <li>\n          <span>Description</span>\n          <input class=\"meta-info\" type=\"text\" name=\"description\" formControlName=\"description\" [value]=\"submitService.description\" (input)=\"$event.target.value\"> <br />\n          <p>\n            To help other DALN users find your literacy narrative, please describe your literacy narrative briefly in this box (Optional).\n          </p>\n        </li>\n\n        <li>\n          <span>Date Created</span>\n          <!-- <app-datepicker></app-datepicker> -->\n        <br />\n          <p>\n            Please provide the date on which you created your literacy narrative -- not necessarily the date on which you are filling out this form. (Optional)\n          </p>\n        </li>\n\n    </ul>\n\n<div class=\"card card-outline-primary\">\n    <div class=\"card-header\">\n        <p>\n            The following form fields are optional, but recommended:\n        </p>\n    </div>\n\n    <ul class=\"thumbnails\">\n        <li>\n          <span>Subject Keyword</span>\n          <div class=\"col-lg-6\">\n              <div class=\"input-group\">\n                  <input class=\"meta-info\" type=\"text\" name=\"subject\" #subjectInput>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addSubject(subjectInput.value)\">+</button>\n                  </span>\n              </div>\n          </div>\n          <p> Current Subject(s): </p>\n            <span *ngFor=\"let subject of subjects\" class=\"badge badge-primary\">{{subject}}\n              <button (click)=\"removeSubject(this.subject)\" type=\"button\" class=\"close\">\n              <span>&times;</span>\n            </button>\n            </span>\n          <br />\n\n          <p>\n            To help other DALN users find your literacy narrative, please enter appropriate subject keywords or phrases. You may enter as many as you like, but you should enter only one keyword or phrase at a time, then click \"Add More\" to enter additional keywords. (Optional)\n          </p>\n        </li>\n\n        <li>\n          <span>Decades covered</span>\n          <div class=\"form-group\">\n              <label for=\"decades\">Mutiple select list (hold shift to select more than one):</label>\n                    <select multiple class=\"form-control\" id=\"decades\" [(ngModel)]=\"coveragePeriod\" formControlName=\"coveragePeriod\">\n                      <option>1900-1909</option>\n                      <option>1910-1919</option>\n                      <option>1920-1929</option>\n                      <option>1930-1939</option>\n                      <option>1940-1949</option>\n                      <option>1950-1959</option>\n                      <option>1960-1969</option>\n                      <option>1970-1979</option>\n                      <option>1980-1989</option>\n                      <option>1990-1999</option>\n                      <option>2000-2009</option>\n                      <option>2010-2019</option>\n                    </select>\n          </div>\n            <p>\n              Please indicate the decades referred to in your literacy narrative. You can choose as many as necessary, but you may need to hold down the Shift or CTRL key to select multiple choices. (Optional)\n          </p>\n        </li>\n\n        <li>\n          <span>Nationality</span>\n          <div class=\"col-lg-6\">\n              <div class=\"input-group\">\n                  <input class=\"meta-info\" type=\"text\" name=\"nation\" #nationInput>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addNation(nationInput.value)\">+</button>\n                  </span>\n              </div>\n          </div>\n          <p> Nation(s) specified: </p>\n            <ul class=\"list-group\">\n                <li *ngFor=\"let nation of nations\" class=\"list-group-item\">{{nation}}\n                    <button (click)=\"removeNation(this.nation)\" type=\"button\" class=\"close\">\n                        <span>&times;</span>\n                    </button>\n                </li>\n            </ul>\n          <p>\n              To help other DALN users find narratives by people of a particular nationality, please list your nationality/nationalities during the period referred to in your narrative. (Optional)\n          </p>\n        </li>\n\n        <li>\n          <span>Region</span>\n          <div class=\"col-lg-6\">\n              <div class=\"input-group\">\n                  <input class=\"meta-info\" type=\"text\" name=\"region\" #regionInput>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addRegion(regionInput.value)\">+</button>\n                  </span>\n              </div>\n          </div>\n          <p> Region(s) specified: </p>\n            <ul class=\"list-group\">\n                <li *ngFor=\"let region of regions\" class=\"list-group-item\">{{region}}\n                    <button (click)=\"removeRegion(this.region)\" type=\"button\" class=\"close\">\n                        <span>&times;</span>\n                    </button>\n                </li>\n            </ul>\n          <p>\n            To help other DALN users find narratives from particular regions (e.g., New England, Rocky Mountains, Great Plains) please list the region(s) in which the events described in your narrative took place. (Optional)\n          </p>\n        </li>\n\n        <li>\n          <span>State or Province</span>\n          <div class=\"col-lg-6\">\n              <div class=\"input-group\">\n                  <input class=\"meta-info\" type=\"text\" name=\"state\" #stateInput>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addState(stateInput.value)\">+</button>\n                  </span>\n              </div>\n          </div>\n          <p> State(s) specified: </p>\n            <ul class=\"list-group\">\n                <li *ngFor=\"let state of states\" class=\"list-group-item\">{{state}}\n                    <button (click)=\"removeState(this.state)\" type=\"button\" class=\"close\">\n                        <span>&times;</span>\n                    </button>\n                </li>\n            </ul>\n            <br />\n          <p>\n            To help other DALN users find narratives from your state or province, please list the state(s) or province(s) in which the events described in your narrative took place. (Optional)\n          </p>\n        </li>\n\n        <li>\n          <span>Other Geographical Information</span>\n          <div class=\"col-lg-6\">\n              <div class=\"input-group\">\n                  <input class=\"meta-info\" type=\"text\" name=\"geo\" #geoInput>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addGeo(geoInput.value)\">+</button>\n                  </span>\n              </div>\n          </div>\n          <p> Georgraphical information added: </p>\n            <ul class=\"list-group\">\n                <li *ngFor=\"let geo of geos\" class=\"list-group-item\">{{geo}}\n                    <button (click)=\"removeGeo(this.geo)\" type=\"button\" class=\"close\">\n                        <span>&times;</span>\n                    </button>\n                </li>\n            </ul>\n          <br />\n          <p>\n            Please provide any further description of the places referred to in your narrative that you consider important (e.g., urban, suburban, rural, inner-city Detroit). (Optional)\n          </p>\n        </li>\n\n        <li>\n          <span>Language</span>\n          <div class=\"col-lg-6\">\n              <div class=\"input-group\">\n                  <input class=\"meta-info\" type=\"text\" name=\"language\" #languageInput>\n                  <span class=\"input-group-btn\">\n                      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addLanguage(languageInput.value)\">+</button>\n                  </span>\n              </div>\n          </div>\n          <p> Languages specified: </p>\n            <ul class=\"list-group\">\n                <li *ngFor=\"let language of languages\" class=\"list-group-item\">{{language}}\n                    <button (click)=\"removeLanguage(this.language)\" type=\"button\" class=\"close\">\n                        <span>&times;</span>\n                    </button>\n                </li>\n            </ul>\n          <br />\n          <p>\n            Please enter the language(s) used or referred to in your literacy narrative. (Optional)\n          </p>\n        </li>\n\n\n    </ul>\n</div>\n    </form>\n\n    <!-- <button type=\"submit\" [disabled]=\"form.invalid\" (click)=\"next()\">Next Step</button> -->\n    <!-- <button type=\"submit\" (click)=\"getConsole()\">Get Console</button> -->\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!descForm.valid\" (click)=\"next()\">Next Step</button>\n\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"!descForm.controls.title.valid\">\n        <strong > A title is required to make a post.</strong>\n    </div>\n\n</div>\n\n<!-- <p>\n    Form value:\n    {{descForm.value | json}}\n</p> -->\n"

/***/ }),

/***/ 1157:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Licensing Options</h1>\n    <p>\n        If you assigned a Creative Commons license in the description of your narrative, you are finished with licensing. Please confirm your choice by checking \"I confirm my choice. . . .\" below, then clicking the \"Complete submission\" button.\n    </p>\n    <p>\n        If you did not assign a Creative Commons license in the description of your narrative, please read the terms of the Deed of Gift outlined below and confirm that you accept those terms.\n    </p>\n\n    <div class=\"tooltip-demo well\">\n\n\n    <p class=\"muted\">\n        PLEASE READ THE FOLLOWING INFORMATION ABOUT LICENSING YOUR LITERACY NARRATIVE\n\n        If you wish to transfer all rights to your narrative to the Digital Archive of Literacy Narratives (DALN) according to the terms of our DEED OF GIFT form (see below), please make sure you DID NOT add a Creative Commons license notice to your narrative's description. Any Creative Commons license you indicated in your description will take precedence over the Deed of Gift described below.\n        By checking \"I confirm my choice. . . .\" below, you confirm your choice of EITHER a Creative Commons license (as noted in your narrative's description, if applicable), OR you confirm that you are contributing your narrative to the Digital Archive of Literacy Narrative under a Deed of Gift (if you did not include a Creative Commons license notice in your narrative's description).\n        If you have questions about those options, you can step back through the submission forms by clicking the \"Previous\" button and reviewing information about the Creative Commons licensing options.\n        You may also click \"Save and Exit\" in order to save your submission and complete the submission process at a later time.\n\n        Once you have checked \"I confirm my choice. . . .\" below, you may click \"Complete submission.\"\n        Thank you for contributing to the Digital Archive of Literacy Narratives (DALN). We hope you will browse other people's narratives and encourage others to contribute. If you have suggestions about the submission process or the DALN in general, please send e-mail to Professor Cynthia Selfe (selfe.2@osu.edu).\n        ------------------------------------------\n        DEED OF GIFT\n        FOR ADULTS: I (the Contributor) give my literacy narrative (including all associated files and materials that are part of this literacy narrative) to the Digital Archive of Literacy Narrative (DALN) to become part of this public online collection of literacy narratives with the understandings listed below.\n        FOR CONTRIBUTORS UNDER 18: As the parent or legal guardian of the minor (the Contributor) who created this literacy narrative, I give this narrative (and all associated files and materials) to the Digital Archive of Literacy Narrative (DALN) to become part of this public online collection of literacy narratives with the understandings listed below:\n        - The DALN will store, preserve, and provide access to the gift in accordance with its archival practices.\n        - The DALN will organize, index, and/or create a guide to the gift in accordance with its archival practices.\n        - The DALN will put the gift on a web site that is accessible to members of the public.\n        - The DALN may appropriately dispose of materials that, after receipt, are deemed unsuitable to those collection about literacy.\n        REPRESENTATION AND WARRANTY\n        The Contributor represents and warrants that he/she is the sole owner of the gift and has the full right, title, and interest to make the donation, and that no agreement, assignment, sale, or encumbrance has been or will be made or entered into which would conflict with this deed.\n        ASSIGNMENT OF RIGHTS\n        The Contributor gives and grants to the DALN any and all rights and/or copyrights to this gift, including the right to archive, display, and provide public access to it through the DALN.\n        ACCESS TO THE ARCHIVE\n        It is the Contributor's wish that the Gift be made available for research as soon as possible following its transfer to the DALN. Materials in the DALN will be available for use by the public subject to policies about license and copyright that are posted on the DALN website.\n        PROCESSING THE COLLECTION\n        The DALN will create an archival finding aid for the collection, which will include a listing of all literacy narratives.\n        TRANSFER TO ANOTHER FORMAT\n        The DALN reserves the right to transfer material to other formats, which in the opinion of DALN Advisory Board, and according to national archival standards, will prolong the life of the material and/or facilitate access and use. In all instances the original items will also be retained. The DALN also reserves the right, within the limit of copyright provisions, to reproduce material from the collection for physical and electronic exhibits.\n        PROMOTING AWARENESS OF THE ARCHIVE\n        All literacy narratives in the DALN collection and the DALN's finding aid/index will be available on its website which is publicly accessible worldwide.\n        ADDITIONS TO THE ARCHIVE\n        The Contributor may make additions to the DALN collection subject to DALN policies.\n        ------------------------------------------\n\n    </p>\n</div>\n\n<button type=\"submit\" (click)=\"next()\">Next Step</button>\n\n</div>\n\n<!-- <app-result></app-result> -->\n"

/***/ }),

/***/ 1158:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <!-- <p><input class=\"btn btn-primary\" type=\"file\" name=\"file1\"></p> -->\n  <p><input type=\"file\" (change)=\"setMedia($event)\" placeholder=\"Upload file\" name=\"file\" multiple></p>\n\n    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"uploadFiles()\">Upload Files</button>\n\n\n\n    <p>\n        Please enter the full path of the file on your computer corresponding to your item. If you click \"Browse...\", a new window will allow you to select the file from your computer.\n\n       We recommend that you use the following file formats for compatibility with our system and broader accessiblity by end users, who typically must open the files on their own computers --\n\n       TEXT: Microsoft Word (.doc or .rtf); plain text (.txt); or Adobe Acrobat (.pdf)\n       IMAGES: JPEG (.jpg or .jpeg), GIF (.gif), or PNG (.png)\n       AUDIO: MP3 or QuickTime (.mov)\n       VIDEO: QuickTime (.mov)\n       WEB: HTML (.htm or .html)\n\n       If your file (particularly audio or video) is larger than 35 MB, we recommend that you split it into two or more files, with no single file larger than about 35 MB so that visitors to the site will be able to download your file(s) more conveniently.\n\n    </p>\n<!--\n    <li>\n      <span>File Description</span>\n      <input class=\"meta-info\" type=\"text\" name=\"file\"> <br />\n      <p>\n        Optionally, provide a brief description of the file, for example \"Main article\", or \"Experiment data readings\".\n      </p>\n    </li> -->\n\n    <button class=\"btn btn-primary\" type=\"submit\" (click)=\"next()\">Next Step</button>\n\n\n</div>\n"

/***/ }),

/***/ 1159:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <form [formGroup]=\"metaForm\" novalidate submit=next()>\n    <ul>\n\n        <li>\n            <span>Author</span>\n            <input class=\"meta-info\" type=\"text\" name=\"contributorAuthorLastName\" #lastName >\n            <input class=\"meta-info\" type=\"text\" name=\"contributorAuthorFirstName\" #firstName >\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addName(lastName.value, firstName.value)\">Add More</button>\n            <p>Authors: </p>\n            <ul class=\"list-group\">\n                <li *ngFor=\"let name of names\" >{{name}}\n                    <button (click)=\"removeName(this.name)\" type=\"button\" class=\"close\">\n                        <span>&times;</span>\n                    </button>\n                </li>\n            </ul>\n\n            <br />\n            <p>\n            If you wish, enter the name of the author of this literacy narrative (you can click \"Add More\" to enter multiple names for a collaborative narrative). (Optional)\n            </p>\n\n        </li>\n\n        <li>\n            <span>Interviewers</span>\n            <input class=\"meta-info\" type=\"text\" name=\"contributorInterviewerLastName\" #lastNameInterviewer >\n            <input class=\"meta-info\" type=\"text\" name=\"contributorInterviewerFirstName\" #firstNameInterviewer >\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"addInterviewer(lastNameInterviewer.value, firstNameInterviewer.value)\">Add More</button>\n            <p>Interviewers: </p>\n            <ul class=\"list-group\">\n                <li *ngFor=\"let interview of interviewers\" >{{interview}}\n                    <button (click)=\"removeInterviewer(this.interview)\" type=\"button\" class=\"close\">\n                        <span>&times;</span>\n                    </button>\n                </li>\n            </ul>\n            <br />\n            <p>\n            If you wish, enter the name of the interviewers of this literacy narrative (you can click \"Add More\" to enter multiple interviewers for a collaborative narrative). (Optional)\n            </p>\n\n        </li>\n\n        <li>\n          <span>Year-of-Birth</span>\n          <input class=\"meta-info\" type=\"text\" name=\"creatorYearOfBirth\" formControlName=\"creatorYearOfBirth\" [(ngModel)]=\"creatorYearOfBirth\"> <br />\n          <p>\n              To help other DALN users find narratives by people of a particular age group, please provide your year of birth (or years of birth for collaborative entries), using four digits. (Optional)\n          </p>\n        </li>\n\n        <li>\n          <span>Gender</span>\n          <div class=\"form-group\">\n              <input type=\"radio\" name=\"creatorGender\" value=\"Male\" formControlName=\"creatorGender\" [(ngModel)]=\"creatorGender\" /><p>\n                  Male\n              </p>\n              <input type=\"radio\" name=\"creatorGender\" value=\"Female\" formControlName=\"creatorGender\" [(ngModel)]=\"creatorGender\" /><p>\n                  Female\n              </p>\n\n              <input type=\"text\" name=\"creatorGender\" placeholder=\"Other (please specify)\" />\n          </div>\n          <br />\n          <p>\n             To help other DALN users find narratives by people of a particular gender or sexual orientation, please describe your gender (for example, male, female, transgender) and/or sexual orientation (for example: gay, bisexual, heterosexual). (Optional)\n          </p>\n        </li>\n\n    </ul>\n\n    </form>\n\n    <!-- <button type=\"submit\" (click)=\"getConsole()\">Get Console</button> -->\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\">Next Step</button>\n\n\n</div>\n\n<!-- <p>\n    Form value:\n    {{metaForm.value | json}}\n</p> -->\n"

/***/ }),

/***/ 1160:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n\n<form [formGroup]=\"rightsForm\" novalidate (submit)=\"next()\">\n\n    <div class=\"rights-consent\">\n        <span>Consent to Participate</span>\n        <div class=\"well\">\n            <p>\n                Because we value your right to make an informed decision to participate in the DALN, we must have your consent before we accept a submission. Please click one of the following links to read our Adult Consent Form or Under-18 Consent Form before completing this field. Then you must select either \"Adult\" or \"Under-18\" below to affirm that you have read and agreed to the terms of the appropriate consent form.\n            </p>\n        </div>\n\n\n            <input class=\"rights-option\" type=\"radio\" name=\"rightsConsent\" value=\"Adult\" formControlName=\"rightsConsent\"> <p>Adult</p>\n            <input class=\"rights-option\" type=\"radio\" name=\"rightsConsent\" value=\"Under-18\" formControlName=\"rightsConsent\"> <p> Under-18</p>\n\n    </div>\n\n      <div class=\"materials-consent\">\n          <span>Release for Materials:</span>\n          <div class=\"well\">\n              <p>\n                Because we want you to know how your materials and personal information will be used in the DALN, we must have your release before we accept a submission. Please click one of the following links to read our Adult Release Form or Under-18 Release Form before completing this field. Then you must select either \"Adult\" or \"Under-18\" below to affirm that you have read and agreed to the terms of the appropriate release form.\n              </p>\n          </div>\n\n          <input type=\"radio\" name=\"rightsRelease\" value=\"Adult\" formControlName=\"rightsRelease\"> <p> Adult </p>\n          <input type=\"radio\" name=\"rightsRelease\" value=\"Under-18\" formControlName=\"rightsRelease\"> <p> Under-18 </p>\n\n      </div>\n    </form>\n\n    <button class=\"btn btn-primary\" type=\"submit\" (click)=\"next()\">Next Step</button>\n\n\n</div>\n\n<!-- <p>\n    Form value:\n    {{rightsForm.value | json}}\n</p> -->\n"

/***/ }),

/***/ 1161:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 1162:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <p>\n        Summary of Post Submission\n    </p>\n\n    <!-- <input type=\"checkbox\" /> <p>\n        Confirmation check\n    </p> -->\n    <button type=\"submit\" (click)=\"next()\">Next Step</button>\n\n</div>\n\n<!-- <app-result></app-result> -->\n"

/***/ })

});
//# sourceMappingURL=0.bundle.map