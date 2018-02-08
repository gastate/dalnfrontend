import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubmitFormComponent } from './submit-form.component';
import { RightsComponent } from './rights/rights.component';
import { MetadataComponent } from './metadata/metadata.component';
import { DescriptionComponent } from './description/description.component';
import { MediaComponent } from './media/media.component';
import { LicenseComponent } from './license/license.component';
import { SummaryComponent } from './summary/summary.component';
import { CompleteComponent } from './complete/complete.component';

const submitFormRoutes: Routes = [
  {
    path: '',
    component: SubmitFormComponent,
    children: [
      // {path: '', redirectTo: 'create', pathMatch: 'full'},
      { path: '', redirectTo: 'rights', pathMatch: 'full' },
      { path: 'rights', component: RightsComponent },
      { path: 'metadata', component: MetadataComponent },
      { path: 'description', component: DescriptionComponent },
      { path: 'media', component: MediaComponent },
      { path: 'license', component: LicenseComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'complete', component: CompleteComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(submitFormRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubmitFormRoutingModule { }
