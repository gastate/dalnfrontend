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
// Defaults
var app_routing_module_1 = require("./app-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
// Main Components
var about_component_1 = require("./components/public/about/about.component");
var app_component_1 = require("./app.component");
var app_footer_component_1 = require("./components/public/app-footer/app-footer.component");
var contact_component_1 = require("./components/public/contact/contact.component");
var fancy_loader_component_1 = require("./shared/fancy-loader/fancy-loader.component");
var home_component_1 = require("./components/public/home/home.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var page_not_found_component_1 = require("./shared/page-not-found/page-not-found.component");
var pagination_component_1 = require("./components/public/pagination/pagination.component");
var player_component_1 = require("./shared/player/player.component");
var post_item_component_1 = require("./shared/post-item/post-item.component");
var post_list_component_1 = require("./shared/post-list/post-list.component");
var post_detail_component_1 = require("./components/public/post-detail/post-detail.component");
var search_component_1 = require("./components/public/search/search.component");
var slider_component_1 = require("./components/public/slider/slider.component");
// Auth Components
var confirm_component_1 = require("./components/public/auth/confirm/confirm.component");
var forgot_password_component_1 = require("./components/public/auth/forgot-password/forgot-password.component");
var login_component_1 = require("./components/public/auth/login/login.component");
var new_password_component_1 = require("./components/public/auth/new-password/new-password.component");
var resend_component_1 = require("./components/public/auth/resend/resend.component");
var register_component_1 = require("./components/public/auth/register/register.component");
// Secure Components
var admin_component_1 = require("./components/secure/landing/admin/admin.component");
var admin_list_component_1 = require("./components/secure/admin-list/admin-list.component");
var config_component_1 = require("./components/secure/config/config.component");
var import_export_component_1 = require("./components/secure/import-export/import-export.component");
var log_component_1 = require("./components/secure/log/log.component");
var metadata_list_component_1 = require("./components/secure/metadata-list/metadata-list.component");
var overview_component_1 = require("./components/secure/overview/overview.component");
var post_approval_component_1 = require("./components/secure/post-approval/post-approval.component");
var post_editing_component_1 = require("./components/secure/post-editing/post-editing.component");
var statistics_component_1 = require("./components/secure/statistics/statistics.component");
var testing_component_1 = require("./components/secure/testing/testing.component");
var withdrawn_component_1 = require("./components/secure/withdrawn/withdrawn.component");
// Services
var auth_service_1 = require("./services/auth.service");
var cognito_service_1 = require("./services/cognito.service");
var ddb_service_1 = require("./services/ddb.service");
var post_service_1 = require("./services/post.service");
var search_service_1 = require("./services/search.service");
var user_login_service_1 = require("./services/user-login.service");
// Other
var safe_pipe_1 = require("./safe.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            about_component_1.AboutComponent,
            admin_list_component_1.AdminListComponent,
            app_footer_component_1.AppFooterComponent,
            app_component_1.AppComponent,
            config_component_1.ConfigComponent,
            confirm_component_1.ConfirmComponent,
            contact_component_1.ContactComponent,
            fancy_loader_component_1.FancyLoaderComponent,
            forgot_password_component_1.ForgotPasswordStep1Component,
            forgot_password_component_1.ForgotPasswordStep2Component,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            confirm_component_1.LogoutComponent,
            new_password_component_1.NewPasswordComponent,
            page_not_found_component_1.PageNotFoundComponent,
            pagination_component_1.PaginationComponent,
            player_component_1.PlayerComponent,
            post_detail_component_1.PostDetailComponent,
            post_item_component_1.PostItemComponent,
            post_list_component_1.PostListComponent,
            register_component_1.RegisterComponent,
            resend_component_1.ResendComponent,
            search_component_1.SearchComponent,
            slider_component_1.SliderComponent,
            admin_component_1.AdminComponent,
            import_export_component_1.ImportExportComponent,
            log_component_1.LogComponent,
            metadata_list_component_1.MetadataListComponent,
            overview_component_1.OverviewComponent,
            post_approval_component_1.PostApprovalComponent,
            post_editing_component_1.PostEditingComponent,
            statistics_component_1.StatisticsComponent,
            testing_component_1.TestingComponent,
            withdrawn_component_1.WithdrawnComponent,
            safe_pipe_1.SafePipe
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        providers: [auth_service_1.AuthService, cognito_service_1.CognitoUtil, post_service_1.PostService, search_service_1.SearchService, user_login_service_1.UserLoginService, ddb_service_1.DynamoDBService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map