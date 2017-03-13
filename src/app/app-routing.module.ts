import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './search/search.component';



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
    path: 'create',
    loadChildren: 'app/submit-form/submit-form.module#SubmitFormModule'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
      path: 'search',
      component: SearchComponent
  },
  {
      path:'**',
      component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
