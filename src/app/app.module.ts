
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {FooterComponent}  from './footer/footer.comp';
import {HomeComponent} from './home/home.comp';
import {PostListComponent} from './post/post-list.comp';
import {PostItemComponent} from './post/post-item.comp';
import {PostDetailComponent} from './post/post-detail.comp';
import {AboutComponent} from './pages/about.comp';
import {PostService} from './services/post.service';
import {ContactComponent} from './pages/contact.comp';
import {AppRoutingModule}     from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailComponent,
    AboutComponent,
    ContactComponent
  ],
  providers: [PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
