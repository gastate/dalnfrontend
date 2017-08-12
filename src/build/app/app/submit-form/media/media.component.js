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
var MediaComponent = (function () {
    function MediaComponent(_router, _submitService) {
        this._router = _router;
        this.submitService = _submitService;
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent.prototype.setMedia = function (event) {
        this.fileList = event.target.files;
        this.submitService.getMedia(this.fileList);
    };
    MediaComponent.prototype.uploadFiles = function () {
        var _this = this;
        Array.from(this.fileList).forEach(function (file) { return _this.submitService.uploadMedia(file); });
    };
    MediaComponent.prototype.next = function () {
        this._router.navigateByUrl('/create/license');
    };
    return MediaComponent;
}());
MediaComponent = __decorate([
    core_1.Component({
        selector: 'app-media',
        templateUrl: './media.component.html',
        styleUrls: ['./media.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        submit_form_service_1.SubmitFormService])
], MediaComponent);
exports.MediaComponent = MediaComponent;
//# sourceMappingURL=media.component.js.map