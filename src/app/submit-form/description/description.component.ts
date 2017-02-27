import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';

import { DescriptionService, DescriptionProfile } from '../../state/description';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [ DescriptionService]
})
export class DescriptionComponent implements OnInit {

    form: FormGroup;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private descriptionService: DescriptionService
  ) { }

  ngOnInit() {
      this.descriptionService.description$
        .subscribe(description => {
            this.initForm(description);
        });
  }

  initForm(description: DescriptionProfile) {
    this.form = this.fb.group({
        title: [description.title, Validators.required]
    });
  }



  next() {
    this.descriptionService.updateDescription(this.form.value);
    this._router.navigateByUrl('/create/media');
  }

}
