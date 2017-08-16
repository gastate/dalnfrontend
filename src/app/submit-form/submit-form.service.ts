import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';


@Injectable()
export class SubmitFormService {
    title: string;
    description: string;
    email: string;
    license: string;
    // // dateAccessioned: string;
    // // dateAvailable: string;
    // // dateCreated: string;
    // // dateIssued: string;
    rightsConsent: string;
    rightsRelease: string;
    contributorAuthor: string[];
    contributorInterviewer: string[];
    creatorGender: string[];
    creatorYearOfBirth: string[];
    coveragePeriod: string[];
    coverageNationality: string [];
    coverageStateProvince: string [];
    coverageRegion: string [];
    coverageSpatial: string [];
    language: string [];
    subject: string[];

    postResult : string;
    formData : FormData = new FormData(); // only data that needs to be sent to upload files.
    filename : string;


  constructor(private _http: Http) {
      this.title = null;
      this.postResult = null;
      this.description = null;
      this.email = null;
      this.license = null;
      this.rightsConsent = null;
      this.rightsRelease = null;
      this.contributorAuthor = [];
      this.contributorInterviewer = [];
      this.creatorGender = [];
      this.creatorYearOfBirth = [];
      this.coveragePeriod = [];
      this.coverageNationality = [];
      this.coverageStateProvince = [];
      this.coverageRegion = [];
      this.coverageSpatial = [];
      this.language = [];
      this.subject = [];


   }


  private endPoint = environment.API_ENDPOINTS;

  getMedia (fileList : FileList) {

    let file : File;

    console.log(fileList);

    for (var i = 0; i < fileList.length; i++) {
        file = fileList[i];
        this.formData.append("userFile", file, file.name);
    }
  }

  uploadMedia(file: File) {
      // TODO: loop through every file in the fileList
      let headers = new Headers();
      headers.append('Content-Type', ' ');
      let options = new RequestOptions({
                headers: headers,
                method: "put"
            });


      if (file) {
              console.log(this.endPoint.get_upload_link + file.name);

              this.filename = file.name; // set the filename for link_media.

              this._http.get(this.endPoint.get_upload_link + file.name)
              .map((res: Response) => res.json())
              .catch((error : any) => Observable.throw(error.json.error))
              .subscribe(
                  // data is the link returned from get_upload_link, will use this link to submit the formData.
                  data => {
                      console.log("response from s3upload", data);
                              this._http.put(data, this.formData, options)
                              .map((res: Response) => res.json())
                              .subscribe(
                                  data => { console.log('response', data); },
                                  (err: any) => {
                                          console.log(err);
                                          if (err.error instanceof Error) {
                                            // A client-side or network error occurred. Handle it accordingly.
                                            console.log('An error occurred:', err.error.message);
                                          } else {
                                            // The backend returned an unsuccessful response code.
                                            // The response body may contain clues as to what went wrong,
                                            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                                          }
                                  })
                  });
          } else {
          console.log("The fileList is empty");
      }

    //   console.log("Uploading Files...");
    //   console.log(this.endPoint.get_upload_l
    //       ink + this.filename);

    //   // Testing mock http service
    //   this._http.put('https://httpbin.org/put', this.formData)
    //   .map((res: Response) => res.json())
    //   .catch((error: any) => Observable.throw(error.json().error))
    //   .subscribe(
    //       data => { console.log('response', data); },
    //       error => { console.log(error); }
    //   );
  }

  returnPost() {
      let postData = {
          title: this.title,
          description: this.description,
          rightsConsent: this.rightsConsent,
          rightsRelease: this.rightsRelease,
          creatorGender : this.creatorGender,
          creatorYearOfBirth : this.creatorYearOfBirth,
          contributorAuthor: this.contributorAuthor,
          contributorInterviewer: this.contributorInterviewer,
          coveragePeriod: this.coveragePeriod,
          coverageRegion: this.coverageRegion,
          coverageNationality: this.coverageNationality,
          coverageSpatial: this.coverageSpatial,
          coverageStateProvince: this.coverageStateProvince,
          subject: this.subject,
          language: this.language,
     };

     return postData;
  }


  postCreate() {
     var tableName = this.endPoint.dev_ddb_table_name;
     var data = {
         title: this.title,
         description: this.description,
         rightsConsent: this.rightsConsent,
         rightsRelease: this.rightsRelease,
         creatorGender : this.creatorGender,
         creatorYearOfBirth : this.creatorYearOfBirth,
         contributorAuthor: this.contributorAuthor,
         contributorInterviewer: this.contributorInterviewer,
         coveragePeriod: this.coveragePeriod,
         coverageRegion: this.coverageRegion,
         coverageNationality: this.coverageNationality,
         coverageSpatial: this.coverageSpatial,
         coverageStateProvince: this.coverageStateProvince,
         subject: this.subject,
         language: this.language,
         tableName : tableName,
         email: this.email,
         license: this.license
    }

     var str = JSON.stringify(data);

     console.log(str);

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     let options = new RequestOptions({ headers: headers, method: "post"});


     this._http.post(this.endPoint.create_post, str, options)
     .map((res: Response) => res.json())
     .subscribe(
         // data here is the postId. Using it for link_media.
         data => {
             this.postResult = data;
             console.log(data);

             var jsonLink = {
                 stagingAreaBucketName : this.endPoint.stagingAreaBucketName,
                 assetDescription: "Asset",
                 finalBucketName: this.endPoint.finalBucketName,
                 PostId: this.postResult,
                 key: this.filename,
                 tableName: this.endPoint.dev_ddb_table_name
             }

             console.log("data to link", jsonLink);
             let headers = new Headers();
             headers.append('Content-Type', 'application/json');
             let options = new RequestOptions({headers: headers, method: "post"});

             var input = JSON.stringify(jsonLink);


             this._http.post(this.endPoint.link_media, input, options)
             .map((res: Response) => res.json())
             .catch((error : any) => Observable.throw(error.json().error))
             .subscribe(
                 data => { console.log ('Link response: ', data);},
                 error => { console.log(error); }
             );
         },
         err => {
            console.log(err);
        }
     );

  }

}
