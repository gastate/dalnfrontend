import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubmitFormService } from '../submit-form.service';


@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  licenseForm: FormGroup;
  submitService: SubmitFormService;
  license: string;

  constructor(
    private _router : Router,
    private fb: FormBuilder,
    submitService: SubmitFormService
  ) {
      this.submitService = submitService;
      this.initForm();
   }

  ngOnInit() {
  }

  initForm() {
      this.licenseForm = this.fb.group({
         license: ['']
      });
  }

  next() {
    this.license = this.licenseForm.value.license;
    this.submitService.license = this.license;
    this._router.navigateByUrl('/create/summary');
  }

}
