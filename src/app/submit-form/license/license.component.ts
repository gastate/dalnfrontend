import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit() {
  }

  next() {
    this._router.navigateByUrl('/create/summary');
  }

}
