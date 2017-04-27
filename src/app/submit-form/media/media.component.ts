import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {


  public file : File;
  constructor(
    private _router : Router
  ) { }

  ngOnInit() {
  }

  fileUpload (event) {
    let fileList : FileList = event.target.files;

    for (var i = 0; i < fileList.length; i++) {
        this.file = fileList[i];
        console.log(this.file.name);
    }
  }



  next() {
    this._router.navigateByUrl('/create/summary');
  }

}
