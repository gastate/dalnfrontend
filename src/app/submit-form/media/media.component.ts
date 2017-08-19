import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SubmitFormService } from '../submit-form.service';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs/Rx';

import {S3Service} from '../../services/s3.service';




@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {


  submitService : SubmitFormService;
  s3Service: S3Service;
  fileList: FileList;

  constructor(
    private _router : Router,
    private _http: Http,
    _s3Service: S3Service,
    _submitService : SubmitFormService
  ){
    this.submitService = _submitService;
    this.s3Service = _s3Service;

  }

  private endPoint = environment.API_ENDPOINTS;

  ngOnInit() {
  }

  setMedia (event) {
    this.fileList = event.target.files;
    this.submitService.setMedia(this.fileList);
  }

  uploadFiles() {
    this.submitService.uploadMedia();
  }






  next() {
    this._router.navigateByUrl('/create/license');
  }

}
