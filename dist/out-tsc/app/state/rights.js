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
var UPDATE_RIGHTS = 'UPDATE_RIGHTS';
var initialState = {
    rightsConsent: '',
    rightsRelease: ''
};
export var rights = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_RIGHTS:
            return action.payload;
        default:
            return state;
    }
};
var RightsService = (function () {
    function RightsService(store) {
        this.store = store;
        this.rights$ = this.store.select('rights');
    }
    RightsService.prototype.updateRights = function (rights) {
        this.store.dispatch({ type: UPDATE_RIGHTS, payload: rights });
    };
    return RightsService;
}());
RightsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store])
], RightsService);
export { RightsService };
//# sourceMappingURL=../../../../src/app/state/rights.js.map