import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../model/post-model';

@Component({
  selector: 'home',
  template: `
    <div class=" container">
        <post-list [postList]="posts"></post-list>
    </div>
    <daln-footer></daln-footer>

`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _postService: PostService) {
  }

  title = 'DALN Frontend';
  posts: Post[];


  ngOnInit(): void {
    this.getAllPosts();
    //this.getMockPosts();
  }

  getAllPosts(): void {
    this._postService.getAllPosts().subscribe(
      (data) => this.posts = data, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });

    //   this._postService.getPostPage(10, 1).subscribe(
    //     (data) => {
    //         let IDs : string [] = []; // to hold string IDs
    //         let hold_posts : Post[] = []; // to hold final data for this.posts.
      //
    //         // iterate over each postId and
    //         for(var x = 0; x < data.length; x++) {
    //             var data_object = data[x];
    //             IDs [x] = data_object.postId;
    //             //  this._postService.getPostById(IDs[x]).subscribe(val => console.log(val));
    //             this._postService.getPostById(IDs[x]).subscribe();
    //             console.log(hold_posts);
    //         }
      //
      //
    //     }, //Bind to view
    //     err => {
    //       // Log errors if any
    //       console.log(err);
    //     });
  }

// //Mock Data method
//   getMockPosts(): void {
//     this._postService.getMockPosts().then((data) => this.posts = data);
//   }


}
