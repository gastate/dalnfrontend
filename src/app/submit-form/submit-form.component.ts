import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent {

    // user: FormGroup;
    //  constructor(private fb: FormBuilder) {}
    //  ngOnInit() {
    //    this.user = this.fb.group({
    //      name: ['', [Validators.required, Validators.minLength(2)]],
    //      account: this.fb.group({
    //        email: ['', Validators.required],
    //        confirm: ['', Validators.required]
    //      })
    //    });
    //  }

    //  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    //    console.log(value, valid);
    //  }
}
