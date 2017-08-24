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

  fileName: string;
  errorMessage: string;
  succeedMessage: string;
  suggestMessage: string;
  percentUploaded: number;

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
    console.log(this.fileList);


    for(var i = 0; i < this.fileList.length; i++) {
        let file = this.fileList[i];
        let file_size = this.fileList[i].size;

        // if(file_size > 350000000) {
        //     this.suggestMessage = "One of your files was larger than 35 MB. We recommend that you split it into two or more files, with no single file larger than about 35 MB so that visitors to the site will be able to download your file(s) more conveniently";
        // } else {
        //     this.suggestMessage = null;
        // }
    }

  }

  uploadFiles() {
    let fn:string = this.constructor.name+"#uploadFiles()";  // tslint:disable-line:no-unused-variable
    console.log( fn+": invoked" );


          // TODO: Workaround for video uploads, just use amazon. https://stackoverflow.com/questions/36010348/angular2-file-upload-for-amazon-s3-bucket
          //

          console.log( fn+": fileList", this.fileList );
          // let headers = new Headers();
          // headers.append('Content-Type', ' ');
          // let options = new RequestOptions({
          //   headers: headers,
          //   method: "put"
          // });


          if(this.fileList && this.fileList.length > 0) {
              this.submitService.fileList = this.fileList;
              this.errorMessage = null;
              var request;
              let fileCount = this.fileList.length;
              for(let i = 0; i < fileCount; i++) {

                    var success;
                    var percentComplete;
                    var file = this.fileList[i];
                    this.fileName = this.fileList[i].name;

                    request = new XMLHttpRequest();

                    request.open( "GET", this.endPoint.get_upload_link + this.fileList[i].name, true);
                    console.log( fn+": getting presigned link from " , this.endPoint.get_upload_link + this.fileList[i].name );
                    request.onload = function (oEvent) {
                        console.log( fn+": quoted presigned link = ", request.responseText );

                        //var url = request.responseText.replace(/['"]+/g, ''); // this will replace all quotes, you only want to remove delimiting quotes
                        let url = request.responseText;
                        if( request.responseText[0] == "\"" && request.responseText[request.responseText.length-1] == "\"" ) {
                          url = request.responseText.slice(1,-1);
                        }

                        console.log( fn+": presigned link = ", url );
                        var presigned_link = new XMLHttpRequest();

                        presigned_link.onprogress = function updateProgress(evt) {
                          console.log( fn+":/onprogress: invoked with evt = ", evt );
                          if (evt.lengthComputable) {
                              percentComplete = (evt.loaded / evt.total) * 100;
                              console.log(percentComplete);
                          }
                        };

                        // presigned_link.onprogress = ((event) => {
                        //   console.log( fn+":/onprogress: invoked with evt = ", event );
                        //   if (event.lengthComputable) {
                        //       this.percentUploaded = (event.loaded / event.total) * 100;
                        //       console.log(this.percentUploaded);
                        //   }
                        // });

                        presigned_link.onload = function (event) {
                            console.log( fn+": response from put", event );
                            if( presigned_link.response.status === 200 ) {
                                success = "Files uploaded successfully! Please proceed to next step";
                            }
                        };
                        presigned_link.open("PUT", url, true);
                        console.log( fn+": presigned url opened" );
                        presigned_link.setRequestHeader( "Content-Type", ' ' );
                        presigned_link.send(file);
                        console.log( fn+": send has begun" );

                    };
                    // console.log( fn+": ", this.fileList[i] );
                    request.send(file);

                    // this.succeedMessage = success;  // WTF?
              }

          } else {
              this.errorMessage = "Please select a couple of files to upload to the DALN.";
          }

  }






  next() {
    this._router.navigateByUrl('/create/license');
  }

}
