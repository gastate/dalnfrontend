import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
  metaForm: FormGroup;
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
    this._router.navigateByUrl('/create/description');
  }
}
