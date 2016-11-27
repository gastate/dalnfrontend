import { Component, Input } from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';
import { Router } from '@angular/router';

@Component({
  selector: 'post-item',
  templateUrl: '../templates/post-item.html'
})

export class PostItemComponent {

constructor(
    private _router: Router,
    private _postService: PostService) { }

  @Input()
  postItem: Post;

  //****************************
  //Not in use at momement because direct lint in html template
  selectedPost: Post;
  
  onSelect(post: Post): void {
    this.selectedPost = post;
    //goto detail page
    this.gotoDetail();
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedPost.postId]);
  }
  //****************************
}