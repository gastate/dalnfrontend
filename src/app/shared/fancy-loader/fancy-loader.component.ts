import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-loader',
  templateUrl: './fancy-loader.component.html',
  styleUrls: ['./fancy-loader.component.css']
})
export class FancyLoaderComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() failed: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
