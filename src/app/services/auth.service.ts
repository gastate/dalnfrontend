import { Injectable, EventEmitter } from '@angular/core';
import { Jsonp , Http, Response, Headers, RequestOptions } from '@angular/http';
//Use instead of Promise
import { Observable, Subject } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Post } from '../model/post-model';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {



    constructor(private _http: Http) {

   }

   private endPoint = environment.API_ENDPOINTS;



 adminApprovePost(postId: string) {

      var tableName = 'DALN-Posts-Dev';

      var data = {
          postId: postId,
          tableName: tableName
      };

      var datastr = JSON.stringify(data);
      console.log(data);

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({  headers: headers, method: "post"});

      console.log(this.endPoint.approve_post);
      this._http.post(this.endPoint.approve_post, datastr, options)
          .map((res: Response) => res.json())
          .catch((error : any) => Observable.throw(error.json().error))
          .subscribe(
              data => { console.log(data);},
              err => { console.log(err); }
          );

    console.log("adminApprovePost fired");

}


getApprovalList(): Observable<Post[]> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({  headers: headers, method: "post"});

    console.log(this.endPoint.get_unapproved_posts);

    return this._http.post(this.endPoint.get_unapproved_posts, options)
    .map((res: Response) => {
        let posts = res.json();
        console.log("Unapproved Posts:", posts);
        return posts;
    })
    .catch((error : any) => Observable.throw(error.json().error))

}

}
