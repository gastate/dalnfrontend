import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
//prevent 404 on refresh in s3
//See http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {HomeComponent} from './home/home.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostItemComponent} from './post-item/post-item.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PostService} from './services/post.service';
import {AppRoutingModule}     from './app-routing.module';
import {PlayerComponent} from './player/player.component';
import { SearchComponentComponent } from './search-component/search-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostItemComponent,
    AppFooterComponent,
    AboutComponent,
    ContactComponent,
    PostDetailComponent,
    PlayerComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [PostService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
