
// Imports for Routing
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


// Main Components
import {AboutComponent} from './components/public/about/about.component';
import {HomeComponent} from './components/public/home/home.component';
import {LoginComponent} from './components/public/login/login.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {PostListComponent} from './shared/post-list/post-list.component';
import {PostDetailComponent} from './components/public/post-detail/post-detail.component';
import {ContactComponent} from './components/public/contact/contact.component';
import {SearchComponent} from './components/public/search/search.component';

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



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
        {path: 'import-export', component: ImportExportComponent},
        {path: 'log', component: LogComponent},
        {path: 'metadata-list', component: MetadataListComponent },
        {path: 'overview', component: OverviewComponent},
        {path: 'post-approval', component: PostApprovalComponent},
        {path: 'post-editing', component: PostEditingComponent},
        {path: 'statistics', component: StatisticsComponent},
        {path: 'testing', component: TestingComponent},
        {path: 'withdrawn', component: WithdrawnComponent},
        {path: '', component: AdminComponent},
    ]
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
