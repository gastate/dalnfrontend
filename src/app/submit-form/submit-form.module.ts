import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SubmitFormComponent } from "./submit-form.component";
import { SubmitFormService } from "./submit-form.service";

import { RightsComponent } from "./rights/rights.component";
import { MetadataComponent } from "./metadata/metadata.component";
import { DescriptionComponent } from "./description/description.component";
import { MediaComponent } from "./media/media.component";
import { LicenseComponent } from "./license/license.component";
import { SummaryComponent } from "./summary/summary.component";
import { CompleteComponent } from "./complete/complete.component";
import { SubmitFormRoutingModule } from "./submit-form-routing.module";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { CanDeactivateGuard } from "./submit-can-deactivate-guardservice";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SubmitFormRoutingModule,
    ReactiveFormsModule
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
    DatepickerComponent
  ],
  providers: [CanDeactivateGuard, SubmitFormService]
})
export class SubmitFormModule {}
