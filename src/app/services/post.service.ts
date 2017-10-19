import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//Use instead of Promise
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from '../model/post-model';
import { Asset } from '../model/asset-model';
import { environment } from '../../environments/environment'

//Only used in Mock
import 'rxjs/add/operator/toPromise';
import { POSTS } from './mock-postlist';


@Injectable()
export class PostService {

  cache_admin_posts: Post[];
  unapproved_posts: Post[];
  selected_posts: string[];
  


  constructor(private _http: Http) {
    this.cache_admin_posts = [];
    this.unapproved_posts = [];
    this.selected_posts = [];
  }

  private endPoint = environment.API_ENDPOINTS;

  adminApprovePost(postId: string) {
    var tableName = this.endPoint.ddb_table_name;

    var data = {
      postId: postId,
      tableName: tableName
    };

    var datastr = JSON.stringify(data);
    console.log(data);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, method: "post" });

    console.log(this.endPoint.approve_post);
    return this._http.post(this.endPoint.approve_post, datastr, options)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => { 
        return Observable.throw(error)
      });

  }


  // approvePosts(postId: string[]) {
  //   var tableName = this.endPoint.ddb_table_name;
  //   var data;

  //   if (postId.length !== 0) {
  //     postId.forEach((i) => {
  //       data = {
  //         postId: i,
  //         tableName: tableName
  //       }
  //       var datastr = JSON.stringify(data);
  //       console.log(data);

  //       let headers = new Headers();
  //       headers.append('Content-Type', 'application/json');
  //       let options = new RequestOptions({ headers: headers, method: "post" });

  //       console.log(this.endPoint.approve_post);
  //       this._http.post(this.endPoint.approve_post, datastr, options)
  //         .map((res: Response) => res.json())
  //         .subscribe(
  //         data => { console.log(data); },
  //         err => { console.log(err); }
  //         );

  //     });

  //   }

  // }

  unapprovePost(postId: string) {
    var tableName = this.endPoint.ddb_table_name;
    var data;

    data = {
      postId: postId,
      tableName: tableName
    };

    var datastr = JSON.stringify(data);

    console.log(data);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, method: "post" });

    console.log(this.endPoint.unapprove_post);
    this._http.post(this.endPoint.unapprove_post, datastr, options)
      .map((res: Response) => res.json())
      .subscribe(
      data => { console.log(data); },
      err => { console.log(err); }
      );

  }


  getAllPosts(): Observable<Post[]> {

    //api call
    return this._http.get(this.endPoint.all_posts).map((res: Response) => {
      let posts = res.json();
      console.log("Get All Posts ", posts);
      return posts;
    })
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPostById(id: string): Observable<Post> {
    return this._http
      .get(this.endPoint.post + id)
      .map((res: Response) => {
        return res.json()
      })
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getDevPostById(id: string): Observable<Post> {
    return this._http
      .get(this.endPoint.get_dev_post + id)
      .map((res: Response) => {
        console.log(res);
        console.log(res.json());
        return res.json();
      })
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getPreview(postAssets: Asset[]): Asset {

    if (postAssets) {
      let preview: Asset;

      preview = postAssets.find((asset) => asset.assetType === 'Audio/Video');
      if (preview) {
        return preview;
      } else {
        preview = postAssets.find((asset) => asset.assetType === 'Audio');
        if (preview) {
          return preview;
        } else {
          return postAssets[ 0 ];
        }
      }
    }
  }



  getUnapprovedPosts(): Observable<Post[]> {

    var data = {
      tableName: this.endPoint.ddb_table_name
    };

    let str = JSON.stringify(data);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, method: "post" });

    return this._http.post(this.endPoint.get_unapproved_posts, str, options).map((res: Response) => {
      let posts = res.json();
      console.log("Unapproved Posts ", posts);
      return posts;
    })
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error...please check services.'));
  }

  //Mock Services
  getMockPosts(): Promise<any> {
    //replace with api call
    return Promise.resolve(POSTS);
  }

  filterPostsById(posts: Post[], id: string): Promise<Post> {
    let filtered = posts.find((post) => post.postId === id);
    return Promise.resolve(filtered);
  }

  getMockPostById(id: string) {
    // replace with api call
    return this.filterPostsById(POSTS, id);
  }








}
