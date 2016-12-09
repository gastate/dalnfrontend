var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Asset } from '../model/asset-model';
var PlayerComponent = (function () {
    function PlayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.sanitizeUrl = function (asset) {
        if (this.postAsset.assetType === "Audio/Video") {
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.postAsset.assetEmbedLink);
        }
        else if (this.postAsset.assetType === "Audio") {
            var url = "";
            var audioID = this.postAsset.assetEmbedLink;
            var pattern = /\d+/g;
            audioID = pattern.exec(audioID).toString();
            url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID;
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
        else {
            return null;
        }
    };
    return PlayerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Asset)
], PlayerComponent.prototype, "postAsset", void 0);
PlayerComponent = __decorate([
    Component({
        selector: 'app-player',
        templateUrl: './player.component.html',
        styleUrls: ['./player.component.css']
    }),
    __metadata("design:paramtypes", [DomSanitizer])
], PlayerComponent);
export { PlayerComponent };
//# sourceMappingURL=../../../../src/app/player/player.component.js.map