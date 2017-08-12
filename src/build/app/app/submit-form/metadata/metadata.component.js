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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var submit_form_service_1 = require("../submit-form.service");
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
        templateUrl: './metadata.component.html',
        styleUrls: ['./metadata.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        submit_form_service_1.SubmitFormService])
], MetadataComponent);
exports.MetadataComponent = MetadataComponent;
//# sourceMappingURL=metadata.component.js.map