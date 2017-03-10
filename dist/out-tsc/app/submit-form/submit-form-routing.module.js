var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitFormComponent } from './submit-form.component';
import { RightsComponent } from './rights/rights.component';
import { MetadataComponent } from './metadata/metadata.component';
import { DescriptionComponent } from './description/description.component';
import { MediaComponent } from './media/media.component';
import { SummaryComponent } from './summary/summary.component';
import { CompleteComponent } from './complete/complete.component';
var submitFormRoutes = [
    {
        path: '',
        component: SubmitFormComponent,
        children: [
            { path: '', redirectTo: 'rights', pathMatch: 'full' },
            { path: 'rights', component: RightsComponent },
            { path: 'metadata', component: MetadataComponent },
            { path: 'description', component: DescriptionComponent },
            { path: 'media', component: MediaComponent },
            { path: 'summary', component: SummaryComponent },
            { path: 'complete', component: CompleteComponent }
        ]
    },
];
var SubmitFormRoutingModule = (function () {
    function SubmitFormRoutingModule() {
    }
    return SubmitFormRoutingModule;
}());
SubmitFormRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(submitFormRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
], SubmitFormRoutingModule);
export { SubmitFormRoutingModule };
//# sourceMappingURL=../../../../src/app/submit-form/submit-form-routing.module.js.map