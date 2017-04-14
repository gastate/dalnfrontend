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
  // interviewers: string [] = [];
  gender: string [] = [];
  birth_year: string [] = [];


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
          creatorGender : [''],
          creatorYearOfBirth: ['']
      });

  }

  addName(lastName : string, firstName : string) {
      let name = lastName + ", " + firstName;
      this.names.push(name);
  }

  removeName(name : string) {
    this.names.splice(this.names.indexOf(name), 1);
  }

  // addInterviewer(lastNameInterviewer: string, firstNameInterviewer: string) {
  //     let interview = lastNameInterviewer + ", " + firstNameInterviewer;
  //     this.interviewers.push(interview);
  // }
  //
  // removeInterviewer(interview : string) {
  //   this.interviewers.splice(this.interviewers.indexOf(interview), 1);
  // }

  // getConsole(){
  //     console.log(this.names);
  // }


  next() {
    this.gender = this.metaForm.value.creatorGender;
    this.birth_year = this.metaForm.value.creatorYearOfBirth;

    this.submitService.contributorAuthor = this.names;
    // this.submitService.contributorInterviewer = this.interviewers;
    this.submitService.creatorGender = this.gender;
    this.submitService.creatorYearOfBirth = this.birth_year;



    this._router.navigateByUrl('/create/description');
  }
}
