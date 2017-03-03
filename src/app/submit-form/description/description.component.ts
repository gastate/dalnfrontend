import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';

import {Post} from '../../model/post-model';

import { DescriptionService, DescriptionProfile } from '../../state/description';
import { SubmitFormService } from '../submit-form.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [ DescriptionService, SubmitFormService]
})
export class DescriptionComponent implements OnInit {
    form: FormGroup;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private descriptionService: DescriptionService,
    private _postCreate : SubmitFormService
  ) { }

  ngOnInit() {
      this.descriptionService.description$
        .subscribe(description => {
            this.initForm(description);
        });
  }

  initForm(description: DescriptionProfile) {
    this.form = this.fb.group({
        title: ['', Validators.required]
    });
        console.log(typeof this.form.value.title);
        this.createPost(this.form.value.title);
  }

  createPost(title: string) {
    this._postCreate.postCreate(title);
  }

  next() {
    // this.descriptionService.updateDescription(this.form.value);

    this._router.navigateByUrl('/create/media');
  }

}
