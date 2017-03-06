import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RightsComponent } from './rights/rights.component';



@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css'],
})
export class SubmitFormComponent {

    @Input()
        title: string;
        description: string;
        identifierUri: string;
        dateAccessioned: string;
        dateAvailable: string;
        dateCreated: string;
        dateIssued: string;

        contributorAuthor: string[];
        creatorGender: string[];
        coverageStateProvince: string[];
        creatorYearOfBirth: string[];
        coveragePeriod: string[];
        subject: string[];



}
