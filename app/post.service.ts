import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//Use instead of Promise
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Post} from './post-model';
//import {API_ENDPOINTS} from './dev-config';

//Only used in Mock
import 'rxjs/add/operator/toPromise';
//import {POSTS} from './mock-postlist';



@Injectable()
export class PostService {
  constructor(private _http: Http) {
  }

  //TODO move endpoints to config file
  private apiBaseEndpoint = "http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService";

  private headers = new Headers({'Content-Type': 'application/json'});

  getAllPosts(): Observable<Post[]> {
    //set endpoint
    const allPostsEndpoint = this.apiBaseEndpoint + "/json/posts/all"; //API_ENDPOINTS.all_posts;
    console.log(allPostsEndpoint);

    //api call
    return this._http.get(allPostsEndpoint).map((res: Response) => res.json())
    //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  };

  getPostById(id: string): Observable<Post> {
    const postEndpoint = this.apiBaseEndpoint + "/posts/"; //API_ENDPOINTS.all_posts;
    console.log(postEndpoint);
    // replace with api call
    return this._http.get(postEndpoint + id).map((res: Response) => res.json())
    //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  // //Mock Services
  // getMockPosts(): Promise<Post[]> {
  //   //replace with api call
  //   return Promise.resolve(POSTS);
  // }
  //
  // filterPostsById(posts: Post[], id: string): Promise<Post> {
  //   let filtered = posts.find((post) => post.postId === id);
  //   return Promise.resolve(filtered);
  // }
  //
  // getMockPostById(id: string) {
  //   // replace with api call
  //   return this.filterPostsById(POSTS, id);
  // }


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
