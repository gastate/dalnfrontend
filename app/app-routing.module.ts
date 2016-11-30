import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.comp';
import { PostListComponent } from './post-list.comp';
import { PostDetailComponent } from './post-detail.comp';
import { AboutComponent } from './about.comp';
import { ContactComponent } from './contact.comp';

const routes: Routes = [
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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
