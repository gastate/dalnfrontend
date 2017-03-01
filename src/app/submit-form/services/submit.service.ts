import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import {Post} from '../../model/post-model';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class SubmitService {
  posts : Post [] = [];

  constructor(private _http: Http) {}

  private endPoint = environment.API_ENDPOINTS;


  create(post: Post) {
      return this._http.post(this.endPoint.create_post, JSON.stringify(post), HEADER).map(res => res.json()).do(data => {
          // this.posts = the data from the description store.
         return data;
      });
  }

  }
