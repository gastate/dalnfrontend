import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import {Post} from '../../model/post-model';


import {Store} from '@ngrx/store';
import {AppStore} from '../../state/app-store';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class SubmitService {

  constructor(private _http: Http, private _store: Store<AppStore>) {

  }

  private endPoint = environment.API_ENDPOINTS;




  create(post: Post): void {
      console.log(this._http.post(this.endPoint.create_post, JSON.stringify(post), HEADER));

    //   return this._http.post(this.endPoint.create_post, JSON.stringify(post), HEADER)
    //   .map((res) => res.json())
    //   .map(payload => ({ type: 'UPDATE_DESCRIPTION', payload}))
    //   .subscribe(action => this._store.dispatch(action));

  }

  }
