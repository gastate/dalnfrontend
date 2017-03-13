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
var RightsComponent = (function () {
    function RightsComponent(_router, fb, _submitService) {
        this._router = _router;
        this.fb = fb;
        this._submitService = _submitService;
        this.initForm();
    }
    RightsComponent.prototype.ngOnInit = function () {
    };
    RightsComponent.prototype.initForm = function () {
        this.rightsForm = this.fb.group({
            rightsConsent: ['', Validators.required],
            rightsRelease: ['', Validators.required]
        });
    };
    RightsComponent.prototype.next = function () {
        this.rightsConsent = this.rightsForm.value.rightsConsent;
        this.rightsRelease = this.rightsForm.value.rightsRelease;
        var formObj = this.rightsForm.getRawValue();
        var serialize = JSON.stringify(formObj);
        this._submitService.getRightsFormValues(serialize);
        this._router.navigateByUrl('/create/metadata');
    };
    return RightsComponent;
}());
RightsComponent = __decorate([
    Component({
        selector: 'app-rights',
        templateUrl: './rights.component.html',
        styleUrls: ['./rights.component.css'],
        providers: [SubmitFormService]
    }),
    __metadata("design:paramtypes", [Router,
        FormBuilder,
        SubmitFormService])
], RightsComponent);
export { RightsComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/rights/rights.component.js.map