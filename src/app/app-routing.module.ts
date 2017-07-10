import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AboutComponent} from './components/about/about.component';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {PostListComponent} from './shared/post-list/post-list.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {ContactComponent} from './components/contact/contact.component';
import {SearchComponent} from './components/search/search.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
      component: HomeComponent
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
