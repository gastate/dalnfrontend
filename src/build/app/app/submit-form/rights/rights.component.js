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
        templateUrl: './rights.component.html',
        styleUrls: ['./rights.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        submit_form_service_1.SubmitFormService])
], RightsComponent);
exports.RightsComponent = RightsComponent;
//# sourceMappingURL=rights.component.js.map