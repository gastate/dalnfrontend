import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }


  next() {
    this._router.navigateByUrl('/create/description');
  }
}
