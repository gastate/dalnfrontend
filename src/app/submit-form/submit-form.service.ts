import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';



@Injectable()
export class SubmitFormService {

    today: number = Date.now();


    title: string;
    description: string;
    email: string;
    license: string;

    // dates are YYYY-MM-DD hh:mm:ss Z
    // // dateSubmitted: string; // submitted post on this day.
    // dateIssued: string; // admin specified.
    dateCreated: string; // user specified.
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
    fileList: FileList;


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

  setMedia (fileList : FileList) {

    let file : File;
    this.fileList = fileList;
    console.log(fileList);

    for (var i = 0; i < fileList.length; i++) {
        file = fileList[i];
        this.formData.append("userFile", file, file.name);
    }
  }

  getMedia() {
    return this.fileList;
  }



  updatePost() {
      // tableName
      // whatever data
      // postId
  }

  returnPost() {
      let postData = {
          title: this.title,
          dateCreated: String(this.today),
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
     var tableName = this.endPoint.ddb_table_name;
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

             var jsonLink;

             if(this.fileList.length > 0) {
                  for(let i = 0; i < this.fileList.length; i++) {

                      jsonLink = {
                          stagingAreaBucketName : this.endPoint.stagingAreaBucketName,
                          assetDescription: "Asset",
                          finalBucketName: this.endPoint.finalBucketName,
                          PostId: this.postResult,
                          key: this.fileList[i].name,
                          tableName: this.endPoint.ddb_table_name
                      };

                      console.log("data to link", jsonLink);
                      let headers = new Headers();
                      headers.append('Content-Type', 'application/json');
                      let options = new RequestOptions({headers: headers, method: "post"});

                      var input = JSON.stringify(jsonLink);

                      // returns 504, make admin to check if went through.
                      this._http.post(this.endPoint.link_media, input, options)
                      .map((res: Response) => res.json())
                      .catch((error : any) => Observable.throw(error.json().error))
                      .subscribe(
                          data => { console.log ('Link response: ', data);},
                          error => { console.log(error); }
                      );
                  }
             }
         });
  }

}
