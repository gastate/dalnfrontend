import {Component, OnInit} from '@angular/core';
import {PostListComponent} from './post-list.comp';
import {PostService} from './post.service';
import {Post} from './post-model';

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
    //this.getMockPosts();
  }

  getAllPosts(): void {
    this._postService.getAllPosts().subscribe(
      (data) => this.posts = data, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

//Mock Data method
  getMockPosts(): void {
    this._postService.getMockPosts().then((data) => this.posts = data);
  }



}
