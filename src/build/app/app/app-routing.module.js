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
// Imports for Routing
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Main Components
var about_component_1 = require("./components/public/about/about.component");
var confirm_component_1 = require("./components/public/auth/confirm/confirm.component");
var forgot_password_component_1 = require("./components/public/auth/forgot-password/forgot-password.component");
var home_component_1 = require("./components/public/home/home.component");
var login_component_1 = require("./components/public/auth/login/login.component");
var new_password_component_1 = require("./components/public/auth/new-password/new-password.component");
var page_not_found_component_1 = require("./shared/page-not-found/page-not-found.component");
var resend_component_1 = require("./components/public/auth/resend/resend.component");
var post_list_component_1 = require("./shared/post-list/post-list.component");
var post_detail_component_1 = require("./components/public/post-detail/post-detail.component");
var register_component_1 = require("./components/public/auth/register/register.component");
var contact_component_1 = require("./components/public/contact/contact.component");
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
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            { path: '', component: overview_component_1.OverviewComponent },
            { path: 'admin-list', component: admin_list_component_1.AdminListComponent },
            { path: 'config', component: config_component_1.ConfigComponent },
            { path: 'import-export', component: import_export_component_1.ImportExportComponent },
            { path: 'log', component: log_component_1.LogComponent },
            { path: 'metadata-list', component: metadata_list_component_1.MetadataListComponent },
            { path: 'overview', component: overview_component_1.OverviewComponent },
            { path: 'post-approval', component: post_approval_component_1.PostApprovalComponent },
            { path: 'post-editing', component: post_editing_component_1.PostEditingComponent },
            { path: 'statistics', component: statistics_component_1.StatisticsComponent },
            { path: 'testing', component: testing_component_1.TestingComponent },
            { path: 'withdrawn', component: withdrawn_component_1.WithdrawnComponent }
        ]
    },
    {
        path: 'login',
        children: [
            { path: '', component: login_component_1.LoginComponent },
            { path: 'confirm', component: confirm_component_1.ConfirmComponent },
            { path: 'confirm/:email', component: confirm_component_1.ConfirmComponent },
            { path: 'forgotPassword', component: forgot_password_component_1.ForgotPasswordStep1Component },
            { path: 'forgotPassword/:email', component: forgot_password_component_1.ForgotPasswordStep2Component },
            { path: 'newPassword', component: new_password_component_1.NewPasswordComponent },
            { path: 'register', component: register_component_1.RegisterComponent },
            { path: 'resend', component: resend_component_1.ResendComponent }
        ]
    },
    {
        path: 'posts',
        component: post_list_component_1.PostListComponent
    },
    {
        path: 'logout',
        component: confirm_component_1.LogoutComponent
    },
    {
        path: 'detail/:id',
        component: post_detail_component_1.PostDetailComponent
    },
    {
        path: 'getdev/detail/:id',
        component: post_detail_component_1.PostDetailComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'create',
        loadChildren: 'app/submit-form/submit-form.module#SubmitFormModule'
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'search',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map