
// Defaults
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PlatformRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//prevent 404 on refresh in s3
//See http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


// Components
import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { FancyLoaderComponent } from './shared/fancy-loader/fancy-loader.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostListComponent } from './shared/post-list/post-list.component';
import { PostItemComponent } from './shared/post-item/post-item.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlayerComponent} from './shared/player/player.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';

// Services
import { PostService } from './services/post.service';
import { SearchService } from './services/search.service';
import { AuthService } from './services/auth.service';
import { CognitoUtil, UserLoginService } from './services/cognito.service';

// Other
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    FancyLoaderComponent,
    HomeComponent,
    LoginComponent,
    PostListComponent,
    PostItemComponent,
    AppFooterComponent,
    AboutComponent,
    ContactComponent,
    PaginationComponent,
    PostDetailComponent,
    PlayerComponent,
    SearchComponent,
    SliderComponent,
    PageNotFoundComponent,
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
