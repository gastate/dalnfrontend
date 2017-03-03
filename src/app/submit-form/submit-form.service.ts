import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';


@Injectable()
export class SubmitFormService {

  constructor(private _http: Http) { }

  private endPoint = environment.API_ENDPOINTS;


  postCreate(title : string) {

     let body = JSON.stringify(title);
     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
     let options = new RequestOptions({ headers: headers, method: "post"});

     return this._http.post(this.endPoint.create_post, body, options)
     .catch((error : any) => Observable.throw(error.json().error || 'Post Creation Error'));

  }

}
