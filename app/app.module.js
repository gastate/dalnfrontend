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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_comp_1 = require('./home.comp');
var post_list_comp_1 = require('./post-list.comp');
var post_item_comp_1 = require('./post-item.comp');
var post_detail_comp_1 = require('./post-detail.comp');
var about_comp_1 = require('./about.comp');
var post_service_1 = require('./post.service');
var contact_comp_1 = require('./contact.comp');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_comp_1.HomeComponent,
                post_list_comp_1.PostListComponent,
                post_item_comp_1.PostItemComponent,
                post_detail_comp_1.PostDetailComponent,
                about_comp_1.AboutComponent,
                contact_comp_1.ContactComponent
            ],
            providers: [post_service_1.PostService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map