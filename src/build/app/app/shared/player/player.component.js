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
var platform_browser_1 = require("@angular/platform-browser");
var asset_model_1 = require("../../model/asset-model");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var PlayerComponent = (function () {
    function PlayerComponent(sanitizer, _location, _router) {
        this.sanitizer = sanitizer;
        this._location = _location;
        this._router = _router;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.getUrl(this.postAsset);
        // console.log(this.getdev);
    };
    PlayerComponent.prototype.getUrl = function (asset) {
        if (!asset) {
            this.url = null;
        }
        else if (this.postAsset.assetType === "Audio/Video") {
            this.url = this.postAsset.assetEmbedLink;
        }
        else if (this.postAsset.assetType === "Audio") {
            var audioID = this.postAsset.assetEmbedLink;
            var pattern = /\d+/g;
            audioID = pattern.exec(audioID).toString();
            this.url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID;
        }
        else if (this.postAsset.assetType === "Text") {
            if (/\.(pdf)$/i.test(this.postAsset.assetEmbedLink)) {
                this.isPDF = true;
                this.url = this.postAsset.assetEmbedLink;
            }
            else {
                this.url = null;
            }
        }
        else {
            this.url = null;
        }
    };
    return PlayerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", asset_model_1.Asset)
], PlayerComponent.prototype, "postAsset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PlayerComponent.prototype, "thumb", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PlayerComponent.prototype, "getdev", void 0);
PlayerComponent = __decorate([
    core_1.Component({
        selector: 'app-player',
        templateUrl: './player.component.html',
        styleUrls: ['./player.component.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, common_1.Location, router_1.Router])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map