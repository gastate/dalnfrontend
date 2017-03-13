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
import { Router } from '@angular/router';
import { SubmitFormService } from '../submit-form.service';
var SummaryComponent = (function () {
    function SummaryComponent(_router, _submitService) {
        this._router = _router;
        this._submitService = _submitService;
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.next = function () {
        this._submitService.makeDataJSON();
        this._router.navigateByUrl('/create/complete');
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    Component({
        selector: 'app-summary',
        templateUrl: './summary.component.html',
        styleUrls: ['./summary.component.css'],
        providers: [SubmitFormService]
    }),
    __metadata("design:paramtypes", [Router,
        SubmitFormService])
], SummaryComponent);
export { SummaryComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/summary/summary.component.js.map