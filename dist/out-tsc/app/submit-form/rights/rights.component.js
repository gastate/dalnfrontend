var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RightsService } from '../../state/rights';
var RightsComponent = (function () {
    function RightsComponent(_router, fb) {
        this._router = _router;
        this.fb = fb;
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
        this._router.navigateByUrl('/create/metadata');
    };
    return RightsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], RightsComponent.prototype, "rightsConsent", void 0);
RightsComponent = __decorate([
    Component({
        selector: 'app-rights',
        templateUrl: './rights.component.html',
        styleUrls: ['./rights.component.css'],
        providers: [RightsService]
    }),
    __metadata("design:paramtypes", [Router,
        FormBuilder])
], RightsComponent);
export { RightsComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/rights/rights.component.js.map