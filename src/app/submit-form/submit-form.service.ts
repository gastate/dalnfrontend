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
    formData : FormData = new FormData();
    filename : string = null;


  constructor(private _http: Http) {
      this.title = null;
      this.postResult = null;
      this.description = null;
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
    this.filename = fileList[0].name; // to use in the get_upload_link key.


    console.log(fileList);

    for (var i = 0; i < fileList.length; i++) {
        file = fileList[i];
        this.formData.append("userFile", file, file.name);
    }

  }

  uploadMedia() {

      console.log("Uploading Files...");
      console.log(this.endPoint.get_upload_link + this.filename);
      this._http.get(this.endPoint.get_upload_link + this.filename)
      .map((res: Response) => res.json())
      .catch((error : any) => Observable.throw(error.json().error))
      .subscribe(
          // data is the link returned from get_upload_link, will use this link to submit the formData.
          data => {
              this._http.put(data, this.formData)
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error))
              .subscribe(
                  data => { console.log('response', data); },
                  error => { console.log(error); }
              );
          }

      );
    //   // Testing mock http service
    //   this._http.put('https://httpbin.org/put', this.formData)
    //   .map((res: Response) => res.json())
    //   .catch((error: any) => Observable.throw(error.json().error))
    //   .subscribe(
    //       data => { console.log('response', data); },
    //       error => { console.log(error); }
    //   );
  }


  postCreate() {
     var tableName = "DALN-Posts-Dev";
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
         tableName : tableName
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
                //  stagingareabucket : "dalnfileupload",
                //  finalbucketname: "?????"
                //  PostId: {var that holds postId},
                //  filename: {var that holds the first file's filename}

             }

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
