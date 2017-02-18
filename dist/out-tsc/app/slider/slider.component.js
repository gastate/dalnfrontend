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
var SliderComponent = (function () {
    function SliderComponent() {
        this.slides = SLIDES;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    Component({
        selector: 'app-slider',
        templateUrl: "slider.component.html",
        styles: ["\n.carousel{\n    overflow:hidden;\n    width:100%;\n}\n.slides{\n    list-style:none;\n    position:relative;\n    width:500%; /* Number of panes * 100% */\n    overflow:hidden; /* Clear floats */\n        /* Slide effect Animations*/\n    -moz-animation:carousel 30s infinite;\n    -webkit-animation:carousel 30s infinite;\n    animation:carousel 30s infinite;\n}\n.slides > li{\n    position:relative;\n    float:left;\n    width: 20%; /* 100 / number of panes */\n}\n.carousel img{\n    display:block;\n    width:100%;\n    max-width:100%;\n}\n.carousel h2{\n    margin-bottom: 0;\n    font-size:1em;\n    padding:1.5em 0.5em 1.5em 0.5em;\n    position:absolute;\n    right:0px;\n    bottom:0px;\n    left:0px;\n    text-align:center;\n    color:#fff;\n    background-color:rgba(0,0,0,0.75);\n    text-transform: uppercase;\n}\n\n@keyframes carousel{\n    0%    { left:-5%; }\n    11%   { left:-5%; }\n    12.5% { left:-105%; }\n    23.5% { left:-105%; }\n    25%   { left:-205%; }\n    36%   { left:-205%; }\n    37.5% { left:-305%; }\n    48.5% { left:-305%; }\n    50%   { left:-405%; }\n    61%   { left:-405%; }\n    62.5% { left:-305%; }\n    73.5% { left:-305%; }\n    75%   { left:-205%; }\n    86%   { left:-205%; }\n    87.5% { left:-105%; }\n    98.5% { left:-105%; }\n    100%  { left:-5%; }\n}\n  "],
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
export { SliderComponent };
var SLIDES = [
    { "title": "We are covered", "url": "../assets/images/slider/slider-img01.jpg" }
];
//# sourceMappingURL=../../../../src/app/slider/slider.component.js.map