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
var footer_comp_1 = require('./footer/footer.comp');
var home_comp_1 = require('./home/home.comp');
var post_list_comp_1 = require('./post/post-list.comp');
var post_item_comp_1 = require('./post/post-item.comp');
var post_detail_comp_1 = require('./post/post-detail.comp');
var about_comp_1 = require('./pages/about.comp');
var post_service_1 = require('./services/post.service');
var contact_comp_1 = require('./pages/contact.comp');
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
                footer_comp_1.FooterComponent,
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