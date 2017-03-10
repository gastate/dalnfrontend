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
var MediaComponent = (function () {
    function MediaComponent(_router) {
        this._router = _router;
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent.prototype.next = function () {
        this._router.navigateByUrl('/create/summary');
    };
    return MediaComponent;
}());
MediaComponent = __decorate([
    Component({
        selector: 'app-media',
        templateUrl: './media.component.html',
        styleUrls: ['./media.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], MediaComponent);
export { MediaComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/media/media.component.js.map