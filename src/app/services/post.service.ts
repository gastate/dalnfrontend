import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
//Use instead of Promise
import { Observable } from "rxjs/Rx";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Post } from "../model/post-model";
import { Asset } from "../model/asset-model";
import { environment } from "../../environments/environment";

//Only used in Mock
import "rxjs/add/operator/toPromise";
import { POSTS } from "./mock-postlist";

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

  approvePost(postId: string) {
    var tableName = this.endPoint.ddb_table_name;

    var data = {
      postId: postId,
      tableName: tableName
    };

    var datastr = JSON.stringify(data);

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers, method: "post" });

    return this._http
      .post(this.endPoint.approve_post, datastr, options)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  unapprovePost(postId: string) {
    var tableName = this.endPoint.ddb_table_name;
    var data;

    data = {
      postId: postId,
      tableName: tableName
    };

    var datastr = JSON.stringify(data);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers, method: "post" });

    return this._http
      .post(this.endPoint.unapprove_post, datastr, options)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  // reject = reject narratives in "waiting approval" section in admin page
  rejectPost(postId: string){
    var tableName = this.endPoint.ddb_table_name;
    var data;

    data = {
        postId: postId,
        tableName: tableName
    };

    var datastr = JSON.stringify(data);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers, method: "post" });

    return this._http
        .post(this.endPoint.reject_post, datastr, options)
        .map((res: Response) => {
            return res;
        })
        .catch((error: any) => {
            return Observable.throw(error);
        });
  }

    // "unreject" = turn a rejected narrative back to waiting for approval
    unrejectPost(postId: string){
        var tableName = this.endPoint.ddb_table_name;
        var data;

        data = {
            postId: postId,
            tableName: tableName
        };

        var datastr = JSON.stringify(data);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this._http
            .post(this.endPoint.unreject_post, datastr, options)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

  getAllPosts(): Observable<Post[]> {
    //api call
    return (
      this._http
        .get(this.endPoint.all_posts)
        .map((res: Response) => {
          let posts = res.json();
          return posts;
        })
        //...errors if any
        .catch((error: any) =>
          Observable.throw(error.json().error || "Server error")
        )
    );
  }

  getPostById(id: string): Observable<Post> {
    return (
      this._http
        .get(this.endPoint.post + id)
        .map((res: Response) => {
          return res.json();
        })
        //...errors if any
        .catch((error: any) =>
          Observable.throw(error.json().error || "Server error")
        )
    );
  }

  getDevPostById(id: string): Observable<Post> {
    return (
      this._http
        .get(this.endPoint.get_dev_post + id)
        .map((res: Response) => {
          return res.json();
        })
        //...errors if any
        .catch((error: any) =>
          Observable.throw(error.json().error || "Server error")
        )
    );
  }

  editPost(post: Post) {
    var tableName = this.endPoint.ddb_table_name;

    var data = {
      postId: post.postId,
      tableName: tableName,
      title: post.title,
      description: post.description,
      hiddenDescription: post.hiddenDescription,
      rightsConsent: post.rightsConsent,
      rightsRelease: post.rightsRelease,
      creatorGender: post.creatorGender,
      creatorYearOfBirth: post.creatorYearOfBirth,
      contributorAuthor: post.contributorAuthor,
      contributorInterviewer: post.contributorInterviewer,
      coveragePeriod: post.coveragePeriod,
      coverageRegion: post.coverageRegion,
      coverageNationality: post.coverageNationality,
      coverageSpatial: post.coverageSpatial,
      coverageStateProvince: post.coverageStateProvince,
      subject: post.subject,
      language: post.language,
      email: post.email,
      license: post.license,
      dateCreated: post.dateCreated
    };

    var datastr = JSON.stringify(data);

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers, method: "post" });

    return this._http
      .post(this.endPoint.update_post, datastr, options)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  getPreview(postAssets: Asset[]): Asset {
    if (postAssets) {
      let preview: Asset;

      preview = postAssets.find(asset => asset.assetType === "Audio/Video");
      if (preview) {
        return preview;
      } else {
        preview = postAssets.find(asset => asset.assetType === "Audio");
        if (preview) {
          return preview;
        } else {
          return postAssets[0];
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
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers, method: "post" });

    return (
      this._http
        .post(this.endPoint.get_unapproved_posts, str, options)
        .map((res: Response) => {
          let posts = res.json();
          return posts;
        })
        //...errors if any
        .catch((error: any) =>
          Observable.throw(
            error.json().error || "Server error...please check services."
          )
        )
    );
  }

  //Mock Services
  getMockPosts(): Promise<any> {
    //replace with api call
    return Promise.resolve(POSTS);
  }

  filterPostsById(posts: Post[], id: string): Promise<Post> {
    let filtered = posts.find(post => post.postId === id);
    return Promise.resolve(filtered);
  }

  getMockPostById(id: string) {
    // replace with api call
    return this.filterPostsById(POSTS, id);
  }
}
