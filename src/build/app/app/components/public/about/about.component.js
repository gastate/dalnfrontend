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
var search_service_1 = require("../../../services/search.service");
var AboutComponent = (function () {
    function AboutComponent(_searchService) {
        this.title = 'About';
        this.searchService = _searchService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        //   this.searchService.getSearchEngineSize().subscribe( (data) => {
        //      console.log("Number of Posts: " + data);
        //      this.numberOfPosts = data;
        //   });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css']
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map