import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';


@Injectable()
export class SubmitFormService {
    title: string = 'hellotesting';
    // description: string;
    // dateAccessioned: string;
    // dateAvailable: string;
    // dateCreated: string;
    // dateIssued: string;
    // rightsConsent: string;
    // rightsRelease: string;
    // contributorAuthor: string[];
    // creatorGender: string[];
    // coverageStateProvince: string[];
    // creatorYearOfBirth: string[];
    // coveragePeriod: string[];
    // subject: string[];
       rightsFormValues : string;
  constructor(private _http: Http) {
   }

  private endPoint = environment.API_ENDPOINTS;

  // setTitle(value : string){
  //     this.title = value;
  // }
  //
  // setDescription(value : string){
  //     this.description = value;
  // }
  //
  // setDateCreated(value : string) {
  //     this.dateCreated = value;
  // }
  //
  // setRightsConsent(value : string) {
  //     this.rightsConsent = value;
  // }
  //
  // setRightsRelease(value : string){
  //     this.rightsRelease = value;
  // }
  //
  // setContributorAuthor(value: Array<string>) {
  //     this.contributorAuthor = value;
  // }
  //
  // setCreatorGender(value: Array<string>) {
  //     this.creatorGender = value;
  // }

  // getRightsData(jsonValue : string) {
  //    this.rightsFormValues =
  // }

  getDescriptionValue(jsonValue : string) {
      this.title = jsonValue;
  }

  getFormData(){
      let body = this.title;
      console.log(body);
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      let options = new RequestOptions({ headers: headers, method: "post"});
    //   this._http.post(this.endPoint.create_post, body, options).map((res: Response) => console.log(res.json()));
  }





  postCreate() {

     let body = this.title;
     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
     let options = new RequestOptions({ headers: headers, method: "post"});

     return this._http.post(this.endPoint.create_post, body, options)
     .map((res: Response) => res.json())
     .catch((error : any) => Observable.throw(error.json().error || 'Post Creation Error'));

  }

}
