import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitFormService } from '../submit-form.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [ SubmitFormService ]
})
export class SummaryComponent implements OnInit {

  constructor(
    private _router: Router,
    private _submitService: SubmitFormService
  ) { }

  ngOnInit() {
      this._submitService.getFormData();
  }

  next() {
    this._submitService.makeDataJSON();
    this._submitService.postCreate();
    this._router.navigateByUrl('/create/complete');
  }

}
