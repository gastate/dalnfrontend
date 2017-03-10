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
    // dateAccessioned: string;
    // dateAvailable: string;
    // dateCreated: string;
    // dateIssued: string;
    rightsConsent: string;
    rightsRelease: string;
    // contributorAuthor: string[];
    // creatorGender: string[];
    // creatorYearOfBirth: string[];
    coveragePeriod: string[];
    coverageNationality: string [];
    coverageStateProvince: string [];
    coverageRegion: string [];
    coverageSpatial: string [];
    language: string [];
    subject: string[];

    postResult : string;
    postString : string;

  constructor(private _http: Http) {
      this.title = "";
      this.description = "";
      this.rightsConsent = "";
      this.rightsRelease = "";
      this.coveragePeriod= [];
      this.coverageNationality = [];
      this.coverageStateProvince = [];
      this.coverageRegion = [];
      this.coverageSpatial = [];
      this.language = [];
      this.subject = [];


   }

  private endPoint = environment.API_ENDPOINTS;

  setTitle(value : string){
      this.title = value;
  }


  // Get all form data from description step
  // Description form only has title, description, and coveragePeriod.
  getDescriptionFormValues(jsonValue : string) {
    var descriptionObj = JSON.parse(jsonValue);
    // console.log("Object:" , descriptionObj);
    var keys = Object.keys(descriptionObj);
    // console.log("Keys:",  keys);

    // step through the array of keys and assign variables.
    for (var key in keys) {
        // idk why it doesn't work with else-if, prob cuz im using for each.
        if (keys.indexOf("title") > -1) {
            this.title = descriptionObj.title;
        } else {
            this.title = null;
        }
        if (keys.indexOf("description") > -1) {
            this.description = descriptionObj.description;
        } else {
            this.description = null;
        }
        if (keys.indexOf("coveragePeriod") > -1) {
            this.coveragePeriod = descriptionObj.coveragePeriod;
        } else {
            this.coveragePeriod = null;
        }
    }
    // console.log(this.title);
    // console.log(this.description);
    // console.log(this.coveragePeriod);

  }

  getRightsFormValues(jsonValue : string) {
    var rightsObj = JSON.parse(jsonValue);
    // console.log("Object:" , rightsObj);
    var keys = Object.keys(rightsObj);
    // console.log("Keys:",  keys);

    // step through the array of keys and assign variables.
    for (var key in keys) {
        // idk why it doesn't work with else-if, prob cuz im using for each.
        if (keys.indexOf("rightsConsent") > -1) {
            this.rightsConsent = rightsObj.rightsConsent;
        } else {
            this.rightsConsent = null;
        }
        if (keys.indexOf("rightsRelease") > -1) {
            this.rightsRelease = rightsObj.rightsRelease;
        } else {
            this.rightsRelease = null;
        }

    }
    // console.log(this.title);
    // console.log(this.description);
    // console.log(this.coveragePeriod);

  }

  // A terrible function that will let you pass unorganized string arrays and get the data from them to assgin to local values.
  // Just make sure you pass in the right order or string arrays.
  getDescriptionArrayValues(subjectValues : string [], nationValues : string[], regionValues : string[], stateValues: string[], geoValues : string[], languageValues : string[]) {
      this.subject = subjectValues;
      this.coverageNationality = nationValues;
      this.coverageRegion = regionValues;
      this.coverageStateProvince = stateValues;
      this.coverageSpatial = geoValues;
      this.language = languageValues;

    // Don't worry about null values, empty string. TODO: Just catch any undefined
    //   console.log(this.subject);
    //   console.log(this.coverageNationality);
    //   console.log(this.coverageRegion);
    //   console.log(this.coverageStateProvince);
    //   console.log(this.coverageSpatial);
    //   console.log(this.language);

  }


  // returns a json string with all the data in the post.
  getFormData() : string{
      return "Hello";
  }

  makeDataJSON(){
      // get all form inputs
      // JSON.parse()
      // validate it
      // return as singlge
    //   var post= '{"title":' + '"' + this.title + '"' +  "," +  '}';
      var post2 = new Object();

      console.log(post2);

  }



  postCreate() {

     let body ='{"title": "My title 2"}';
     console.log(body);
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     let options = new RequestOptions({ headers: headers, method: "post"});

     return this._http.post(this.endPoint.create_post, body, options)
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
