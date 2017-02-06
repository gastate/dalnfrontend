import { ElementRef, Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/post-model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef, private _postService: PostService) {
  }

  title = 'DALN Frontend';
  posts: Post[];


  ngOnInit(): void {
    this.getAllPosts();
    //this.getMockPosts();
    //
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "responsiveslides.js";
    // this.elementRef.nativeElement.appendChild(s);
    // replace with array and make your own plugin
  }

  onSearch($posts: Post[]): void {
    console.log("Post Event", $posts);
    if(!$posts){
      this.getAllPosts();
    }
    console.log("in home component onSearch")
    this.posts = $posts;
  }


  getAllPosts(): void {

    this._postService.getAllPosts().take(10).subscribe(
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

    // //Mock Data method
    //   getMockPosts(): void {
    //     this._postService.getMockPosts().then((data) => this.posts = data);
    //   }


  }
}
