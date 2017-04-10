import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SubmitFormService } from '../submit-form.service';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.css']
})

export class RightsComponent implements OnInit {


    rightsForm: FormGroup;
    submitService: SubmitFormService;
    rightsConsent: string;
    rightsRelease: string;



  constructor(
      private _router: Router,
      private fb: FormBuilder
    ) {
      this.initForm()
  }

  ngOnInit() {
    //   this.rightsService.rights$
    //     .subscribe(rights => {
    //         this.initForm(rights);
    //     });
  }

  initForm() {
      this.rightsForm = this.fb.group({
          rightsConsent : ['', Validators.required],
          rightsRelease : ['', Validators.required]
      });


  }

  next() {
      this.rightsConsent = this.rightsForm.value.rightsConsent;
      this.rightsRelease = this.rightsForm.value.rightsRelease;

      let formObj = this.rightsForm.getRawValue();
      let serialize = JSON.stringify(formObj);

      this._router.navigateByUrl('/create/metadata');

  }



}
