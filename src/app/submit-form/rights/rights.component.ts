import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';

import { RightsService, RightsProfile } from '../../state/rights';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.css'],
  providers : [ RightsService ]
})

export class RightsComponent implements OnInit {
    form: FormGroup;

  constructor(
      private _router: Router,
      private fb: FormBuilder,
      private rightsService: RightsService
  ) { }

  ngOnInit() {
      this.rightsService.rights$
        .subscribe(rights => {
            this.initForm(rights);
        });
  }

  initForm(rights: RightsProfile) {
      this.form = this.fb.group({
          rightsConsent : [rights.rightsConsent, Validators.required],
          rightsRelease : [rights.rightsRelease, Validators.required]
      });
  }


  next() {
      this.rightsService.updateRights(this.form.value);
      this._router.navigateByUrl('/create/metadata');
  }

}
