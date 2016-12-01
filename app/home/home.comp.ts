import {Component, OnInit} from '@angular/core';
import {PostListComponent} from '../post/post-list.comp';
import {PostService} from '../services/post.service';
import {Post} from '../model/post-model';

@Component({
  selector: 'home',
  template: `
    <div class=" container">
        <post-list [postList]="posts"></post-list>
        <daln-footer></daln-footer>
    </div>
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
