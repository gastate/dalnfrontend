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
  
  submitService: SubmitFormService;
  names : string [] = [];
  interviewers: string [] = [];

  creatorGender: string;
  gender: string;
  
  birthYear: string;

  constructor(
      private _router: Router,
      private fb: FormBuilder,
      _submitService: SubmitFormService
  ) {
      this.submitService = _submitService;

}

  ngOnInit() {

  }

  addName(lastName : string, firstName : string) {
      let name = lastName + ", " + firstName;
      this.names.push(name);
  }

  removeName(name : string) {
    this.names.splice(this.names.indexOf(name), 1);
  }

  addInterviewer(lastNameInterviewer: string, firstNameInterviewer: string) {
      let interview = lastNameInterviewer + ", " + firstNameInterviewer;
      this.interviewers.push(interview);

  }

  removeInterviewer(interview : string) {
    this.interviewers.splice(this.interviewers.indexOf(interview), 1);
  }

  // getConsole(){
  //     console.log(this.names);
  //
  // }


  next() {

    this.submitService.creatorGender = [];
    this.submitService.creatorYearOfBirth = [];

    if (this.creatorGender === "Other") {
        if (this.gender !== null) {
            this.submitService.creatorGender.push(this.gender);            
        }
    } else if (this.creatorGender === "Male") {
        this.gender = "Male";
        this.submitService.creatorGender.push(this.gender);
    } else if (this.creatorGender === "Female") {
        this.gender = "Female";
        this.submitService.creatorGender.push(this.gender);
    }
    
    if (this.birthYear !== null) {
        this.submitService.creatorYearOfBirth.push(this.birthYear);        
    }
    
    this.submitService.contributorAuthor = this.names;
    this.submitService.contributorInterviewer = this.interviewers;

    this._router.navigateByUrl('/create/description');
  }
}
