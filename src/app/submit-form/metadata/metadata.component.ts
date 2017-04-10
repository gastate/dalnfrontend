import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmitFormService } from '../submit-form.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
  metaForm: FormGroup;
  submitService: SubmitFormService;
  names : string [] = [];


  constructor(
      private _router: Router,
      private fb: FormBuilder
  ) {
      this.initForm();
   }

  ngOnInit() {
  }

  initForm() {
      this.metaForm = this.fb.group({
          creatorGender : ['']
      });

  }

  addName(lastName : string, firstName : string) {
      let name = lastName + ", " + firstName;
      this.names.push(name);
  }

  removeName(name : string) {
    this.names.splice(this.names.indexOf(name), 1);
  }

  // getConsole(){
  //     console.log(this.names);
  // }


  next() {
    // this._submitService.setContributorAuthor(this.names);
    let formObj = this.metaForm.getRawValue();
    let serialize = JSON.stringify(formObj);


    this._router.navigateByUrl('/create/description');
  }
}
