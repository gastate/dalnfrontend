import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UploadService } from './media/upload-service';
import { environment } from '../../environments/environment';



@Injectable()
export class SubmitFormService {

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

    formData : FormData = new FormData(); // only data that needs to be sent to upload files.
    filename : string;
    fileInfos: any[] = [];


  constructor(private _http: Http, private _uploadService: UploadService) {
      this.title = null;
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

//   updatePost() {}

  returnPost() {
      let postData = {
          title: this.title,
          dateCreated: this.dateCreated,
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

  postCreate(): Observable<Response> {

     let fn: string = this.constructor.name + "#postCreate"; 

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
         license: this.license,
         dateCreated: this.dateCreated
    }

     var str = JSON.stringify(data);

     console.log(str);

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     let options = new RequestOptions({ headers: headers, method: "post"});

     return this._http.post(this.endPoint.create_post, str, options)
     .map((res: Response) => {
        let postId = res.json();
        console.log(fn + "postId received: " + postId);
        this.linkFiles(postId);
        return res;
    })
    .catch((error: any)=> {
        return Observable.throw(new Error(error.status));
    });

  }

// TODO: replace assetDescription with form field input from the user.

linkFiles(postId: string) {
    
    @Component({
      selector: "template-driven-form",
      templateUrl: 'submit-form.component.html' // would this be the right url to use?
    })

    export class TemplateDrivenForm {

      user: Object = {};

      onSubmitTemplateBased() {
        console.log(this.vm); // not sure if ".vm" applies here.
      }

    }

  }

