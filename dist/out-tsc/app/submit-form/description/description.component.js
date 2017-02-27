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
import { DescriptionService } from '../../state/description';
var DescriptionComponent = (function () {
    function DescriptionComponent(_router, fb, descriptionService) {
        this._router = _router;
        this.fb = fb;
        this.descriptionService = descriptionService;
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.descriptionService.description$
            .subscribe(function (description) {
            _this.initForm(description);
        });
    };
    DescriptionComponent.prototype.initForm = function (description) {
        this.form = this.fb.group({
            title: [description.title, Validators.required]
        });
    };
    DescriptionComponent.prototype.next = function () {
        this.descriptionService.updateDescription(this.form.value);
        this._router.navigateByUrl('/create/media');
    };
    return DescriptionComponent;
}());
DescriptionComponent = __decorate([
    Component({
        selector: 'app-description',
        templateUrl: './description.component.html',
        styleUrls: ['./description.component.css'],
        providers: [DescriptionService]
    }),
    __metadata("design:paramtypes", [Router,
        FormBuilder,
        DescriptionService])
], DescriptionComponent);
export { DescriptionComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/description/description.component.js.map