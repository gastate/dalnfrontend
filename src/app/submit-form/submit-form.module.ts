import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { StoreModule } from '@ngrx/store';

import {SubmitFormComponent} from './submit-form.component';

import {RightsComponent} from './rights/rights.component';
import { rights, RightsService} from '../state/rights';
import { description, DescriptionService} from '../state/description';
import { AppStore } from '../state/app-store';
import { RemoteService } from '../state/remote';
import {MetadataComponent} from './metadata/metadata.component';
import {DescriptionComponent} from './description/description.component';
import {MediaComponent} from './media/media.component';
import {LicenseComponent} from './license/license.component';
import {SummaryComponent} from './summary/summary.component';
import {CompleteComponent} from './complete/complete.component';
import {SubmitFormRoutingModule} from './submit-form-routing.module';
import {ResultComponent} from '../result/result.component';
// import {DatePickerComponent} from './util/datepicker/datepicker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SubmitFormRoutingModule,
    ReactiveFormsModule,
    StoreModule.provideStore({rights, description})
  ],
  declarations: [
    RightsComponent,
    MetadataComponent,
    DescriptionComponent,
    MediaComponent,
    LicenseComponent,
    SummaryComponent,
    CompleteComponent,
    SubmitFormComponent,
    ResultComponent,
    // DatePickerComponent
],
providers : [
    RightsService,
    DescriptionService,
    RemoteService
]
})
export class SubmitFormModule {}
