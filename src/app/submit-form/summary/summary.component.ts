import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitFormService } from '../submit-form.service';
import { Post } from '../../model/post-model';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
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
            email : ['', Validators.required]
      });
  }

  displayPost(){
      this.data = this._submitService.returnPost();
  }

  next() {
    this.email = this.emailForm.value.email;
    this._submitService.email = this.email;
    this._submitService.postCreate().subscribe(
      res => {
        console.log(res);
        this._router.navigateByUrl('/create/complete');        
      },
      err => {
        this.errorMessage = "Post not created. Please try again.";
      });
  }

}
