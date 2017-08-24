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
  percentUploaded: number;
  barWidth: string;

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

    }

  }

  uploadFiles() {
    let fn:string = this.constructor.name+"#uploadFiles()";  // tslint:disable-line:no-unused-variable
    console.log( fn+": invoked" );

          // TODO: https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr Make everything into a promise.
          console.log( fn+": fileList", this.fileList );



          if(this.fileList && this.fileList.length > 0) {
              this.submitService.fileList = this.fileList;
              this.errorMessage = null;
              let request;
              let fileCount = this.fileList.length;
              for(let i = 0; i < fileCount; i++) {

                    let file = this.fileList[i];
                    let fileName = this.fileList[i].name;
                    console.log("Filename", fileName);

                    this.uploadFileHandler(file);

              }

          } else {
              this.errorMessage = "Please select a couple of files to upload to the DALN.";
          }

  }

  uploadFileHandler(file: File) {

    let fn:string = this.constructor.name+"#uploadFileHandler()";  // tslint:disable-line:no-unused-variable
    console.log( fn+": invoked" );

          let request = new XMLHttpRequest();

                        request.open( "GET", this.endPoint.get_upload_link + file.name, true);
                        console.log( fn+": getting presigned link from " , this.endPoint.get_upload_link + file.name );
                        request.onload = ((oEvent) => {
                            console.log( fn+": quoted presigned link = ", request.responseText );

                          // this will replace all quotes, you only want to remove delimiting quotes
                            let url = request.responseText;
                            if( request.responseText[0] == "\"" && request.responseText[request.responseText.length-1] == "\"" ) {
                              url = request.responseText.slice(1,-1);
                             };

                            console.log( fn+": presigned link = ", url );
                            let presigned_link = new XMLHttpRequest();


                            presigned_link.upload.onprogress = ((event) => {
                              // console.log( fn+":/onprogress: invoked with evt = ", event );
                              if (event.lengthComputable) {
                                  this.percentUploaded = (event.loaded / event.total) * 100;
                                  var everything = this.percentUploaded;
                                  this.barWidth = `${this.percentUploaded}%`;
                                   console.log("Percent Uploaded", this.percentUploaded, this.barWidth);
                              }
                            });

                            presigned_link.onload = ((event) => {
                              console.log( fn+": response from put", event );
                              if(presigned_link.status === 200 ) {
                                  this.succeedMessage = "Files uploaded successfully! Please proceed to next step";
                                  this.percentUploaded = 0;
                              }
                            });


                            presigned_link.open("PUT", url, true);
                            console.log( fn+": presigned url opened" );




                            presigned_link.setRequestHeader( "Content-Type", ' ' );
                            presigned_link.send(file);
                            console.log( fn+": send has begun" );

                        });
                        console.log( fn+": ", this.fileList);
                        request.send(file);
  }






  next() {
    this._router.navigateByUrl('/create/license');
  }

}
