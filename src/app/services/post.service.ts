import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//Use instead of Promise
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Post} from '../model/post-model';
import {Asset} from '../model/asset-model';
import {environment} from '../../environments/environment'

//Only used in Mock
import 'rxjs/add/operator/toPromise';
import {POSTS} from './mock-postlist';


@Injectable()
export class PostService {
  constructor(private _http: Http) {
  }

  private endPoint = environment.API_ENDPOINTS;

  getAllPosts(): Observable<Post[]> {

    //api call
    return this._http.get(this.endPoint.all_posts).map((res: Response) => {
      let posts = res.json();
      console.log("Get All Posts ", posts);
      return posts;
    })
    //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  };

  getPostPage(size: number, page: number): Observable<Post[]> {

      //size is the number of posts per page, page is the position of posts to cycle through.
      //so a parameter of size 10 returns 10 post IDs per page, page 1 is the first 0-10 postIDs, then page 2 is the next 11-20 postIDs.

      return this._http.get(this.endPoint.page_posts + "size=" + size + "page=" + page).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  };

  getPostById(id: string): Observable<Post> {

    console.log(this._http.get(this.endPoint.post + id).map((res: Response) => res.json().data as Post));
    return this._http.get(this.endPoint.post + id).map((res: Response) => res.json())
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
          return postAssets[0];
        }
      }
    }

  }


  //Mock Services
  getMockPosts(): Promise<Post[]> {
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


  /*TODO Figure out why this causes a mapping error: Do not use this structure "toPromise()"
   Instead use the Observable

   getPosts(): Promise<Post[]> {
   return this._http.get(this.allPostsEndpoint)
   .toPromise()
   .then(response => response.json().data as Post[])
   .catch(this.handleError);
   }


   private handleError(error: any): Promise<any> {
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
   }

   */

}
