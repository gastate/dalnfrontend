import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SubmitFormService } from "../submit-form.service";

@Component({
  selector: "app-metadata",
  templateUrl: "./metadata.component.html",
  styleUrls: ["./metadata.component.css"]
})
export class MetadataComponent implements OnInit {
  submitService: SubmitFormService;
  names: string[] = [];
  interviewers: string[] = [];
  creatorGender: string;
  //gender: string;
  birthYear: string;
  //errorMessage: string;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    _submitService: SubmitFormService
  ) {
    this.submitService = _submitService;
  }

  ngOnInit() { }

  addName(author: any) {
    if (author.value.trim() === "") {
      return;
    }
    this.names.push(author.value);
    author.value = "";
  }

  removeName(name: string) {
    this.names.splice(this.names.indexOf(name), 1);
  }

  addInterviewer(interviewer: any) {
    if (interviewer.value.trim() === "") {
      return;
    }
    this.interviewers.push(interviewer.value);
    interviewer.value = "";
  }

  removeInterviewer(interviewer: string) {
    this.interviewers.splice(this.interviewers.indexOf(interviewer), 1);
  }

  isValidForm() {
    //   TODO: in future if you would like add required fields

    // check to see if forms are dirty.
    return true;
  }

  next() {
    this.submitService.creatorGender = [];
    this.submitService.creatorYearOfBirth = [];
    if (this.creatorGender) {
      this.submitService.creatorGender.push(this.creatorGender);
    }
    if (this.birthYear) {
      this.submitService.creatorYearOfBirth.push(this.birthYear);
    }

    this.submitService.contributorAuthor = this.names;
    this.submitService.contributorInterviewer = this.interviewers;

    this._router.navigateByUrl("/create/description");
  }
}
