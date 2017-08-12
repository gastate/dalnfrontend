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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var submit_form_service_1 = require("../submit-form.service");
var DescriptionComponent = (function () {
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
            coveragePeriod: ['']
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
    };
    return DescriptionComponent;
}());
DescriptionComponent = __decorate([
    core_1.Component({
        selector: 'app-description',
        templateUrl: './description.component.html',
        styleUrls: ['./description.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        submit_form_service_1.SubmitFormService])
], DescriptionComponent);
exports.DescriptionComponent = DescriptionComponent;
//# sourceMappingURL=description.component.js.map