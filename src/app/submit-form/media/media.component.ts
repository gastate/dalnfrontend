import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubmitFormService } from '../submit-form.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {


  submitService : SubmitFormService;


  constructor(
    private _router : Router,
    _submitService : SubmitFormService
  ){
    this.submitService = _submitService;
  }

  ngOnInit() {
  }

  setMedia (event) {
    let fileList : FileList = event.target.files;
    this.submitService.getMedia(fileList);
  }

  uploadFiles() {
      this.submitService.uploadMedia();
  }





  next() {
    this._router.navigateByUrl('/create/summary');
  }

}
