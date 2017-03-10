import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SubmitFormService } from '../submit-form.service';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.css'],
  providers : [ SubmitFormService ]
})

export class RightsComponent implements OnInit {

        rightsConsent: string;
        rightsRelease: string;


    rightsForm: FormGroup;

  constructor(
      private _router: Router,
      private fb: FormBuilder,
      private _submitService : SubmitFormService
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
    //   this.rightsService.updateRights(this.form.value);
      this.rightsConsent = this.rightsForm.value.rightsConsent;
      this.rightsRelease = this.rightsForm.value.rightsRelease;

      let formObj = this.rightsForm.getRawValue();
      let serialize = JSON.stringify(formObj);
      console.log(serialize);
    //   this._submitService.getRightsData(serialize);


    //   this._submitService.setRightsConsent(this.rightsConsent);
    //   this._submitService.setRightsRelease(this.rightsRelease);
      this._router.navigateByUrl('/create/metadata');

  }



}
