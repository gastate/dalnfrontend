// Imports for Routing
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Main Components
import { AboutComponent } from "./components/public/about/about.component";
import {
  ConfirmComponent,
  LogoutComponent
} from "./components/public/auth/confirm/confirm.component";
import {
  ForgotPasswordStep1Component,
  ForgotPasswordStep2Component
} from "./components/public/auth/forgot-password/forgot-password.component";
import { HomeComponent } from "./components/public/home/home.component";
import { LoginComponent } from "./components/public/auth/login/login.component";
import { NewPasswordComponent } from "./components/public/auth/new-password/new-password.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { ResendComponent } from "./components/public/auth/resend/resend.component";
import { PostListComponent } from "./shared/post-list/post-list.component";
import { PostDetailComponent } from "./components/public/post-detail/post-detail.component";
import { RegisterComponent } from "./components/public/auth/register/register.component";
import { ContactComponent } from "./components/public/contact/contact.component";
import { SearchComponent } from "./components/public/search/search.component";

// Secure Components
import { AdminComponent } from "./components/secure/landing/admin/admin.component";
import { AdminListComponent } from "./components/secure/admin-list/admin-list.component";
import { ConfigComponent } from "./components/secure/config/config.component";
import { ImportExportComponent } from "./components/secure/import-export/import-export.component";
import { LogComponent } from "./components/secure/log/log.component";
import { MetadataListComponent } from "./components/secure/metadata-list/metadata-list.component";
import { OverviewComponent } from "./components/secure/overview/overview.component";
import { PostApprovalComponent } from "./components/secure/post-approval/post-approval.component";
import { PostEditingComponent } from "./components/secure/post-editing/post-editing.component";
import { StatisticsComponent } from "./components/secure/statistics/statistics.component";
import { TestingComponent } from "./components/secure/testing/testing.component";
import { WithdrawnComponent } from "./components/secure/withdrawn/withdrawn.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", component: OverviewComponent },
      { path: "admin-list", component: AdminListComponent },
      { path: "config", component: ConfigComponent },
      { path: "import-export", component: ImportExportComponent },
      { path: "log", component: LogComponent },
      { path: "metadata-list", component: MetadataListComponent },
      { path: "overview", component: OverviewComponent },
      { path: "post-approval", component: PostApprovalComponent },
      { path: "post-editing", component: PostEditingComponent },
      { path: "statistics", component: StatisticsComponent },
      { path: "testing", component: TestingComponent },
      { path: "withdrawn", component: WithdrawnComponent }
    ]
  },
  {
    path: "login",
    children: [
      { path: "", component: LoginComponent },
      { path: "confirm", component: ConfirmComponent },
      { path: "confirm/:email", component: ConfirmComponent },
      { path: "forgotPassword", component: ForgotPasswordStep1Component },
      {
        path: "forgotPassword/:email",
        component: ForgotPasswordStep2Component
      },
      { path: "newPassword", component: NewPasswordComponent },
      { path: "register", component: RegisterComponent },
      { path: "resend", component: ResendComponent }
    ]
  },
  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "detail/:id",
    component: PostDetailComponent
  },
  {
    path: "approval/detail/:id", // look into post-detail component before changing.
    component: PostDetailComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "create",
    loadChildren: "app/submit-form/submit-form.module#SubmitFormModule"
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
