import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dataAvailable: string; // date when available on DALN (admin function)
  dateAccessioned : string; // ??????
  dateIssued: string;

}
