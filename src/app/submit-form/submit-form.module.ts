import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { StoreModule } from '@ngrx/store';

import {SubmitFormComponent} from './submit-form.component';

import {RightsComponent} from './rights/rights.component';
import { rights, RightsService} from '../state/rights';
import {MetadataComponent} from './metadata/metadata.component';
import {DescriptionComponent} from './description/description.component';
import {MediaComponent} from './media/media.component';
import {LicenseComponent} from './license/license.component';
import {SummaryComponent} from './summary/summary.component';
import {CompleteComponent} from './complete/complete.component';
import {SubmitFormRoutingModule} from './submit-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SubmitFormRoutingModule,
    ReactiveFormsModule,
    StoreModule.provideStore({rights})
  ],
  declarations: [
    RightsComponent,
    MetadataComponent,
    DescriptionComponent,
    MediaComponent,
    LicenseComponent,
    SummaryComponent,
    CompleteComponent,
    SubmitFormComponent
  ]
})
export class SubmitFormModule {}
