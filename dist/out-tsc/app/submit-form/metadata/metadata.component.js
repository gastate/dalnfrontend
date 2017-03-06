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
import { FormBuilder } from '@angular/forms';
var MetadataComponent = (function () {
    function MetadataComponent(_router, fb) {
        this._router = _router;
        this.fb = fb;
        this.names = [];
        this.initForm();
    }
    MetadataComponent.prototype.ngOnInit = function () {
    };
    MetadataComponent.prototype.initForm = function () {
        this.metaForm = this.fb.group({
            creatorGender: ['']
        });
    };
    MetadataComponent.prototype.addName = function (lastName, firstName) {
        var name = lastName + ", " + firstName;
        this.names.push(name);
    };
    MetadataComponent.prototype.removeName = function (name) {
        this.names.splice(this.names.indexOf(name), 1);
    };
    MetadataComponent.prototype.next = function () {
        this._router.navigateByUrl('/create/description');
    };
    return MetadataComponent;
}());
MetadataComponent = __decorate([
    Component({
        selector: 'app-metadata',
        templateUrl: './metadata.component.html',
        styleUrls: ['./metadata.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        FormBuilder])
], MetadataComponent);
export { MetadataComponent };
//# sourceMappingURL=../../../../../src/app/submit-form/metadata/metadata.component.js.map