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
import { Store } from '@ngrx/store';
var ResultComponent = (function () {
    function ResultComponent(store) {
        this.store = store;
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    Component({
        selector: 'app-result',
        templateUrl: './result.component.html',
        styleUrls: ['./result.component.css']
    }),
    __metadata("design:paramtypes", [Store])
], ResultComponent);
export { ResultComponent };
//# sourceMappingURL=../../../../src/app/result/result.component.js.map