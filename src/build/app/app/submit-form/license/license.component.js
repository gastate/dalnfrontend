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
        templateUrl: './license.component.html',
        styleUrls: ['./license.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        submit_form_service_1.SubmitFormService])
], LicenseComponent);
exports.LicenseComponent = LicenseComponent;
//# sourceMappingURL=license.component.js.map