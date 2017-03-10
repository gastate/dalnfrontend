var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubmitFormService } from '../submit-form.service';
var DescriptionComponent = (function () {
    function DescriptionComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this._submitService = _submitService;
        this.subjects = [];
        this.nations = [];
        this.regions = [];
        this.states = [];
        this.geos = [];
        this.languages = [];
        this.initForm();
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent.prototype.initForm = function () {
        this.descForm = this.fb.group({
            title: ['', Validators.required],
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
    DescriptionComponent.prototype.back = function () {
    };
    DescriptionComponent.prototype.next = function () {
        var formObj = this.descForm.getRawValue();
        var serialize = JSON.stringify(formObj);
        this._submitService.getDescriptionFormValues(serialize);
        this._submitService.getDescriptionArrayValues(this.subjects, this.nations, this.regions, this.states, this.geos, this.languages);
        this._router.navigateByUrl('/create/media');
    };
    return DescriptionComponent;
}());
DescriptionComponent = __decorate([
    Component({
        selector: 'app-description',
        templateUrl: './description.component.html',
        styleUrls: ['./description.component.css'],
        providers: [SubmitFormService]
    }),
    __metadata("design:paramtypes", [Router,
        FormBuilder,
        SubmitFormService])
], DescriptionComponent);
export { DescriptionComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/description/description.component.js.map