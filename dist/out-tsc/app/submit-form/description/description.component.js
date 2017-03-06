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
    function DescriptionComponent(_router, fb, _postCreate) {
        this._router = _router;
        this.fb = fb;
        this._postCreate = _postCreate;
        this.subjects = [];
        this.initForm();
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent.prototype.initForm = function () {
        this.descForm = this.fb.group({
            title: ['', Validators.required],
            description: [''],
        });
    };
    DescriptionComponent.prototype.addSubject = function (subjectInput) {
        this.subjects.push(subjectInput);
    };
    DescriptionComponent.prototype.removeSubject = function (subjectValue) {
        this.subjects.splice(this.subjects.indexOf(subjectValue), 1);
    };
    DescriptionComponent.prototype.next = function () {
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