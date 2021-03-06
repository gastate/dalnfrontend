import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

import { SubmitFormService } from "../submit-form.service";

@Component({
  selector: "app-metadata",
  templateUrl: "./metadata.component.html",
  styleUrls: ["./metadata.component.css"]
})
export class MetadataComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('interviewerInput') interviewerInput: ElementRef;

  submitService: SubmitFormService;
  names: string[] = [];
  interviewers: string[] = [];
  creatorGender: string;
  //gender: string;
  birthYear: string;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private changeDetector: ChangeDetectorRef,
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
    if (this.nameInput.nativeElement.value.trim().length > 0) {
      return false;
    }
    if (this.interviewerInput.nativeElement.value.trim().length > 0) {
      return false;
    }
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
