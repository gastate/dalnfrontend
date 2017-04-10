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
    // description: string;
    // // dateAccessioned: string;
    // // dateAvailable: string;
    // // dateCreated: string;
    // // dateIssued: string;
    // rightsConsent: string;
    // rightsRelease: string;
    // contributorAuthor: string[];
    // creatorGender: string[];
    // // creatorYearOfBirth: string[];
    // coveragePeriod: string[];
    // coverageNationality: string [];
    // coverageStateProvince: string [];
    // coverageRegion: string [];
    // coverageSpatial: string [];
    // language: string [];
    // subject: string[];

    postResult : string;


  constructor(private _http: Http) {
      this.title = null;
    //   this.description = null;
    //   this.rightsConsent = null;
    //   this.rightsRelease = null;
    //   this.contributorAuthor = [];
    //   this.creatorGender = [];
    //   this.coveragePeriod= [];
    //   this.coverageNationality = [];
    //   this.coverageStateProvince = [];
    //   this.coverageRegion = [];
    //   this.coverageSpatial = [];
    //   this.language = [];
    //   this.subject = [];


   }


  private endPoint = environment.API_ENDPOINTS;




  postCreate() {
     var tableName = "DALN-Posts-Dev";
     var data = {
         title: this.title,
         tableName : tableName
    }

     var str = JSON.stringify(data);

     console.log(str);

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     let options = new RequestOptions({ headers: headers, method: "post"});


     return this._http.post(this.endPoint.create_post, str, options)
     .map((res: Response) => res.json())
     .subscribe(
         data => {
             this.postResult = data;
             console.log(data);
         },
         err => {
            console.log(err);
        }
     );

  }

}
