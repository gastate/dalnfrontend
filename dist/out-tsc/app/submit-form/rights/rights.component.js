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
import { RightsService } from '../../state/rights';
var RightsComponent = (function () {
    function RightsComponent(_router, fb, rightsService) {
        this._router = _router;
        this.fb = fb;
        this.rightsService = rightsService;
    }
    RightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rightsService.rights$
            .subscribe(function (rights) {
            _this.initForm(rights);
        });
    };
    RightsComponent.prototype.initForm = function (rights) {
        this.form = this.fb.group({
            rightsConsent: [rights.rightsConsent, Validators.required],
            rightsRelease: [rights.rightsRelease, Validators.required]
        });
    };
    RightsComponent.prototype.next = function () {
        this.rightsService.updateRights(this.form.value);
        this._router.navigateByUrl('/create/metadata');
    };
    return RightsComponent;
}());
RightsComponent = __decorate([
    Component({
        selector: 'app-rights',
        templateUrl: './rights.component.html',
        styleUrls: ['./rights.component.css'],
        providers: [RightsService]
    }),
    __metadata("design:paramtypes", [Router,
        FormBuilder,
        RightsService])
], RightsComponent);
export { RightsComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/rights/rights.component.js.map