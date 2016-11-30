import {Component, OnInit} from '@angular/core';
import {PostListComponent} from './post-list.comp';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
  selector: 'home',
  template: `
    <post-list [postList]="posts"></post-list>
`
})

export class HomeComponent {

  constructor(private _postService: PostService) {
  }

  title = 'DALN Frontend';
  posts: Post[];


  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this._postService.getAllPosts().subscribe(
      (data) => this.posts = data, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  /*TODO Figure out why this causes a mapping error: Do not use this structure
    Instead use the Observable
  */
  // getPosts(): void {
  //   this._postService.getPosts().then((data) => this.posts = data);
  // }



}
