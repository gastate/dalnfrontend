import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'upload-message',
  templateUrl: './upload-message.component.html',
  styleUrls: [ './upload-message.component.css' ]
})
export class UploadMessageComponent implements OnInit {

  @Input() loading: boolean;
  @Input() failed: boolean;
  @Input() loadingMessage: string;


  constructor() { }

  ngOnInit() {
  }

}
