import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SubmitFormService } from '../submit-form.service';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs/Rx';





@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {


  submitService : SubmitFormService;
  fileList: FileList;
  errorMessage: string;

  constructor(
    private _router : Router,
    private _http: Http,
    _submitService : SubmitFormService
  ){
    this.submitService = _submitService;

  }

  private endPoint = environment.API_ENDPOINTS;

  ngOnInit() {
  }

  setMedia (event) {
    this.fileList = event.target.files;
    this.submitService.setMedia(this.fileList);
  }

  uploadFiles() {
          // TODO: Workaround for video uploads, just use amazon. https://stackoverflow.com/questions/36010348/angular2-file-upload-for-amazon-s3-bucket

          console.log("fileList", this.fileList);
          let headers = new Headers();
          headers.append('Content-Type', ' ');
          let options = new RequestOptions({
                    headers: headers,
                    method: "put"
                });


          if(this.fileList && this.fileList.length > 0) {
              this.errorMessage = null;
              var request;
              let fileCount = this.fileList.length;
              for(let i = 0; i < fileCount; i++) {
                    //   request = new FormData();
                    //   request.append("file[]", this.fileList[i], this.fileList[i].name);
                    var file = this.fileList[i];

                    request = new XMLHttpRequest();
                    request.open("GET", this.endPoint.get_upload_link + this.fileList[i].name, true);
                    request.onload = function (oEvent) {
                        console.log("uploaded", request.responseText);

                        var url = request.responseText.replace(/['"]+/g, '');
                        console.log(url);
                        var presigned_link = new XMLHttpRequest();
                        presigned_link.open("PUT", url, true);
                        presigned_link.onload = function (event) {
                            console.log("response from put", event);
                        };
                        presigned_link.send(file);
                    };
                    // console.log(this.fileList[i]);
                    request.send(file);

              }

          } else {
              this.errorMessage = "Please select a couple of files to upload to the DALN.";
          }

  }






  next() {
    this._router.navigateByUrl('/create/license');
  }

}
