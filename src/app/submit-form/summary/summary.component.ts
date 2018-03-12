import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SubmitFormService } from "../submit-form.service";
import { Post } from "../../model/post-model";

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"]
})
export class SummaryComponent implements OnInit {
  post: Post;
  data: any;
  email: string;
  errorMessage: string;

  emailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _submitService: SubmitFormService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.displayPost();
  }

  initForm() {
    this.emailForm = this.fb.group({
      email: ["", Validators.required]
    });
  }

  isValidForm() {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      this.email
    );
  }

  displayPost() {
    this.data = this._submitService.returnPost();
  }

  next() {
    this.email = this.emailForm.value.email;
    this._submitService.email = this.email;

    this._submitService.postCreate().subscribe(
      results => {
        if (
          results.json() ===
          '"Values for tableName, title, email, and license are required"'
        ) {
          this.errorMessage =
            "Submission failed, please make sure you have filled out the necessary information";
        } else {
          this._router.navigateByUrl("/create/complete");
        }
      },
      err => {
        this.errorMessage = "Post not created. Please try again.";
      }
    );
  }
}
