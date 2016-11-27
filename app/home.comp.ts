import { Component, OnInit } from '@angular/core';
import {PostListComponent} from './post-list.comp';
import {PostService} from './post.service';
import {Post} from './post'; 

@Component({
  selector: 'home',
  template: `
    <post-list [postList]="posts"></post-list>
`
})

export class HomeComponent  { 
    constructor(private _postService: PostService){}
    title = 'DALN Frontend';
    posts: Post[];


    getPosts(): void {
    this._postService.getAllPosts().then(data => this.posts = data);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}