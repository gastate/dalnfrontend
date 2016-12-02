import { Component, Input } from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../model/post-model';
import { Router } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'post-item',
  templateUrl: 'post-item.html'
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
