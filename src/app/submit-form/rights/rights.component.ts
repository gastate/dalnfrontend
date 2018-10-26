import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
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
    private ref: ChangeDetectorRef,
    _submitService: SubmitFormService
  ) {
    this.submitService = _submitService;
    this.initForm();
    this.rightsConsent = "Adult";
  }

  ngOnInit() {
    this.isSpanish = false;
  }

  initForm() {
    this.rightsForm = this.fb.group({
      rightsConsent: ["", Validators.required]
    });
  }

  isValidForm() {
    return this.rightsConsent && this.rightsConsent.length > 1;
  }

  next() {
    this.ref.detectChanges();
    this.rightsConsent = this.rightsForm.value.rightsConsent;
    this.rightsRelease = this.rightsForm.value.rightsConsent;

    this.submitService.rightsConsent = this.rightsConsent;
    this.submitService.rightsRelease = this.rightsConsent;

    this._router.navigateByUrl("/create/metadata");
  }

  switchLanguage() {
    this.isSpanish = !this.isSpanish;
    this.ref.detectChanges();
  }
}
