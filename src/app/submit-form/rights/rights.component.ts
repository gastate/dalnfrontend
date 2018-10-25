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

  engAdult = "I give consent as an Adult to release my materials and personal information";
  engSub18 = "I give consent as Under-18 to release my materials and personal information";
  espAdult = "Doy consentimiento como adulto a publicar mis materiales e información personal";
  espSub18 = "Doy consentimiento como menor de 18 años a publicar mis materiales e información personal";

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
