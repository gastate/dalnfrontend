
// Defaults
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PlatformRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';


// Main Components
import { AboutComponent } from './components/public/about/about.component';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/public/app-footer/app-footer.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { FancyLoaderComponent } from './shared/fancy-loader/fancy-loader.component';
import { HomeComponent } from './components/public/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/public/pagination/pagination.component';
import { PlayerComponent} from './shared/player/player.component';
import { PostItemComponent } from './shared/post-item/post-item.component';
import { PostListComponent } from './shared/post-list/post-list.component';
import { PostDetailComponent } from './components/public/post-detail/post-detail.component';
import { SearchComponent } from './components/public/search/search.component';
import { SliderComponent } from './components/public/slider/slider.component';

// Auth Components
import { ConfirmComponent } from './components/public/auth/confirm/confirm.component';
import { ForgotPasswordStep1Component, ForgotPasswordStep2Component } from './components/public/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/public/auth/login/login.component';
import { NewPasswordComponent } from './components/public/auth/new-password/new-password.component';
import { ResendComponent } from './components/public/auth/resend/resend.component';
import { RegisterComponent } from './components/public/auth/register/register.component';




// Secure Components
import {AdminComponent} from './components/secure/landing/admin/admin.component';
import {ImportExportComponent} from './components/secure/import-export/import-export.component';
import {LogComponent} from './components/secure/log/log.component';
import {MetadataListComponent} from './components/secure/metadata-list/metadata-list.component';
import {OverviewComponent} from './components/secure/overview/overview.component';
import {PostApprovalComponent} from './components/secure/post-approval/post-approval.component';
import {PostEditingComponent} from './components/secure/post-editing/post-editing.component';
import {StatisticsComponent} from './components/secure/statistics/statistics.component';
import {TestingComponent} from './components/secure/testing/testing.component';
import {WithdrawnComponent} from './components/secure/withdrawn/withdrawn.component';

// Services
import { PostService } from './services/post.service';
import { SearchService } from './services/search.service';
import { AuthService } from './services/auth.service';
import { CognitoUtil } from './services/cognito.service';
import { UserLoginService } from './services/user-login.service';

// Other
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AboutComponent,
    AppFooterComponent,
    AppComponent,
    ConfirmComponent,
    ContactComponent,
    FancyLoaderComponent,
    ForgotPasswordStep1Component,
    ForgotPasswordStep2Component,
    HomeComponent,
    LoginComponent,
    NewPasswordComponent,
    PageNotFoundComponent,
    PaginationComponent,
    PlayerComponent,
    PostDetailComponent,
    PostItemComponent,
    PostListComponent,
    RegisterComponent,
    ResendComponent,
    SearchComponent,
    SliderComponent,
    AdminComponent,
    ImportExportComponent,
    LogComponent,
    MetadataListComponent,
    OverviewComponent,
    PostApprovalComponent,
    PostEditingComponent,
    StatisticsComponent,
    TestingComponent,
    WithdrawnComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, CognitoUtil, PostService, SearchService, UserLoginService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
