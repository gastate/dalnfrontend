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
var submit_form_service_1 = require("../submit-form.service");
var forms_1 = require("@angular/forms");
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
        templateUrl: './summary.component.html',
        styleUrls: ['./summary.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        submit_form_service_1.SubmitFormService])
], SummaryComponent);
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=summary.component.js.map