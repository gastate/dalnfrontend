var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubmitFormComponent } from './submit-form.component';
import { RightsComponent } from './rights/rights.component';
import { MetadataComponent } from './metadata/metadata.component';
import { DescriptionComponent } from './description/description.component';
import { MediaComponent } from './media/media.component';
import { LicenseComponent } from './license/license.component';
import { SummaryComponent } from './summary/summary.component';
import { CompleteComponent } from './complete/complete.component';
import { SubmitFormRoutingModule } from './submit-form-routing.module';
var SubmitFormModule = (function () {
    function SubmitFormModule() {
    }
    return SubmitFormModule;
}());
SubmitFormModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            SubmitFormRoutingModule
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
], SubmitFormModule);
export { SubmitFormModule };
//# sourceMappingURL=../../../../src/app/submit-form/submit-form.module.js.map