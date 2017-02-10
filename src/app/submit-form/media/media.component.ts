import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit() {
  }

  next() {
    this._router.navigateByUrl('/create/license');
  }

}
