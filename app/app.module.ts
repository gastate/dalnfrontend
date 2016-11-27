import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home.comp';
import {PostListComponent} from './post-list.comp';
import {PostItemComponent} from './post-item.comp';
import {PostDetailComponent} from './post-detail.comp';
import {AboutComponent} from './about.comp';
import {PostService} from './post.service';
import {ContactComponent} from './contact.comp';




@NgModule({
  imports: 
  [ 
    BrowserModule, 
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        {
        path: 'home',
        component: HomeComponent
        },
        {
          path: 'posts',
          component: PostListComponent
        },
        {
          path: 'detail/:id', 
          component: PostDetailComponent
        },
        {
        path: 'about',
        component: AboutComponent
        },
        {
        path: 'contact',
        component: ContactComponent
        }
    ])
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
