import { ElementRef, Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { SearchService } from '../services/search.service';
import { Post } from '../model/post-model';

// TEMP code to run production and dev environments
import {environment} from '../../environments/environment'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SearchService]
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef, private _postService: PostService, private _searchService: SearchService) {
  }

  title = 'DALN Frontend';
  posts: Post[];

  private isInProd = environment.production;

  ngOnInit(): void {
    if (this.isInProd == false) {
        this.getPagePosts();
    } else {
        this.getAllPosts();
    }

  }

  onSearch($posts: Post[]): void {
    console.log("Post Event", $posts);
    // if(!$posts){
    //   this.getAllPosts();
    // }
    console.log("in home component onSearch")
    this.posts = $posts;
  }

  // onSearch($posts: Post[]): void {
  //   console.log("Post Event", $posts);
  //   if(!$posts){
  //     this.getAllPosts();
  //   }
  //   console.log("in home component onSearch")
  //   this.posts = $posts;
  // }


  getAllPosts(): void {

        this._postService.getAllPosts().subscribe(
          (data) => {this.posts = data;
          }, //Bind to view
          err => {
            // Log errors if any
            console.log(err);
          });
  }


  //
  //   // //Mock Data method
  //   //   getMockPosts(): void {
  //   //     this._postService.getMockPosts().then((data) => this.posts = data);
  //   //   }
  //
  //   // this._postService.getAllPosts().take(10).subscribe(
  //   //   (data) => this.posts = data, //Bind to view
  //   //   err => {
  //   //     // Log errors if any
  //   //     console.log(err);
  //   //   });
  //


  // getPagePosts() : void {
  //     this._searchService.search("literacy").subscribe(
  //         (data) => {
  //             this.posts = data;
  //
  //
        // }, //Bind to view
  //       err => {
  //         // Log errors if any
  //         console.log(err);
  //       });
  // }

  getPagePosts() : void {
      this._searchService.search_page("literacy", 10, 1).subscribe(
          (data) => {
              this.posts = data;


        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }


}
