import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';

import {Post} from '../../model/post-model';

import { SubmitFormService } from '../submit-form.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [SubmitFormService]
})
export class DescriptionComponent implements OnInit {
    descForm: FormGroup;
    subjects : string [] = [];

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _postCreate : SubmitFormService
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.descForm = this.fb.group({
        title: ['', Validators.required],
        description : [''],
        // dateCreated : [''],

    });
  }

  addSubject(subjectInput : string) {
    this.subjects.push(subjectInput);
  }


  next() {
    // this.descriptionService.updateDescription(this.form.value);

    this._router.navigateByUrl('/create/media');
  }

}
