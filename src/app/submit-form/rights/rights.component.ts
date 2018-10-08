import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";

import { SubmitFormService } from "../submit-form.service";

@Component({
  selector: "app-rights",
  templateUrl: "./rights.component.html",
  styleUrls: ["./rights.component.css"]
})
export class RightsComponent implements OnInit {
  rightsForm: FormGroup;
  submitService: SubmitFormService;
  rightsConsent: string;
  rightsRelease: string;
  isSpanish: boolean;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    _submitService: SubmitFormService
  ) {
    this.submitService = _submitService;
    this.initForm();
  }

  ngOnInit() {
    //   this.rightsService.rights$
    //     .subscribe(rights => {
    //         this.initForm(rights);
    //     });
    this.isSpanish = false;
  }

  initForm() {
    this.rightsForm = this.fb.group({
      rightsConsent: ["", Validators.required]
      //rightsRelease: ["", Validators.required]
    });
  }

  isValidForm() {
      return this.rightsConsent && this.rightsConsent.length > 1;
  }

  next() {
    this.rightsConsent = this.rightsForm.value.rightsConsent;
    this.rightsRelease = this.rightsForm.value.rightsConsent;

    this.submitService.rightsConsent = this.rightsConsent;
    this.submitService.rightsRelease = this.rightsConsent;

    this._router.navigateByUrl("/create/metadata");
  }

  switchLanguage() {
    this.isSpanish = !this.isSpanish;
  }
}
