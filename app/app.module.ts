
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home.comp';
import {PostListComponent} from './post-list.comp';
import {PostItemComponent} from './post-item.comp';
import {PostDetailComponent} from './post-detail.comp';
import {AboutComponent} from './about.comp';
import {PostService} from './post.service';
import {ContactComponent} from './contact.comp';
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
