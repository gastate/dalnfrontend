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
// Import Component form the angular core package
var core_1 = require("@angular/core");
// Compoent Decorator
var SliderComponent = (function () {
    function SliderComponent() {
        this.isVisible = true;
        this.visibility = 'shown';
    }
    SliderComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'hidden' : 'shown';
    };
    return SliderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "isVisible", void 0);
SliderComponent = __decorate([
    core_1.Component({
        //Name of our tag
        selector: 'app-slider',
        //Template for the tag
        templateUrl: "slider.component.html",
        //Styles for the tag
        styles: ["slider.component.css"],
        animations: [
            core_1.trigger('visibilityChanged', [
                core_1.state('shown', core_1.style({ opacity: 1 })),
                core_1.state('hidden', core_1.style({ opacity: 0, display: 'none' })),
                core_1.transition('* => *', core_1.animate('.5s'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map