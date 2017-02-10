import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.css']
})
export class RightsComponent implements OnInit {

  constructor(
      private _router: Router
  ) { }

  ngOnInit() {
  }

  next() {
      this._router.navigateByUrl('metadata');
  }

}
