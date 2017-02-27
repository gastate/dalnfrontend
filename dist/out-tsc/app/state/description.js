var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
var UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
var initialState = {
    title: ''
};
export var description = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_DESCRIPTION:
            return action.payload;
        default:
            return state;
    }
};
var DescriptionService = (function () {
    function DescriptionService(store) {
        this.store = store;
        this.description$ = this.store.select('description');
    }
    DescriptionService.prototype.updateDescription = function (description) {
        this.store.dispatch({ type: UPDATE_DESCRIPTION, payload: description });
    };
    return DescriptionService;
}());
DescriptionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store])
], DescriptionService);
export { DescriptionService };
//# sourceMappingURL=../../../../src/app/state/description.js.map