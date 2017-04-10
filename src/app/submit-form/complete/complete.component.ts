import { Component, OnInit } from '@angular/core';
import { SubmitFormService } from '../submit-form.service';


@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
    post: string;
    submitService: SubmitFormService


  constructor() { }

  ngOnInit() {

  }



}
