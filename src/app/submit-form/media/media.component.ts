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
    //  this.submitService.uploadMedia();
        // TODO: Workaround for video uploads, just use amazon. https://stackoverflow.com/questions/36010348/angular2-file-upload-for-amazon-s3-bucket

        console.log("fileList", this.fileList);
        let headers = new Headers();
        headers.append('Content-Type', ' ');
        let options = new RequestOptions({
                  headers: headers,
                  method: "put"
              });

        let fileCount = this.fileList.length;

        if(fileCount > 0) {
            var fd;
            for(let i = 0; i < fileCount; i++) {
                    fd = new FormData();
                    fd.append("file[]", this.fileList[i], this.fileList[i].name)


                  console.log("hitting get link endpoint:", this.endPoint.get_upload_link + this.fileList[i].name);

                  this._http.get(this.endPoint.get_upload_link + this.fileList[i].name)
                      .map((res: Response) => res.json())
                      .catch((error : any) => Observable.throw(error.json.error))
                      .subscribe((data) => {
                          // data is the presigned s3 url sent by the api.
                          console.log("api link", data);

                          this._http.put(data, fd, options)
                              .map((res: Response) => res.json())
                              .catch((error : any) => Observable.throw(error.json.error))
                              .subscribe(
                                  (res) => { console.log("result from put", res); },
                                  (err) => { console.log("error from put", err); }
                              );
                      });

            }

        } else {
            console.log("fileList is empty.");
        }


  }





  next() {
    this._router.navigateByUrl('/create/license');
  }

}
