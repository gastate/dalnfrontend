import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post-model';
import {Asset} from '../../model/asset-model';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  constructor(private _router: Router,
              private _postService: PostService) {
  }

  @Input()
  getdev: boolean;

  @Input()
  postItem: Post;

  isChecked: boolean;

  ngOnInit() {
    //   console.log(this.getdev);
  }

  getPreview(postAssets: Asset[]): Asset {
    return this._postService.getPreview(postAssets);
  }

  sendPostId() {
      if(this.isChecked === true) {
        this._postService.selected_posts.push(this.postItem.postId);
        // console.log(this._postService.selected_posts);
      } else {
        var position = this._postService.selected_posts.indexOf(this.postItem.postId);
        var remove_post = this._postService.selected_posts.splice(position, 1);
        // console.log(this._postService.selected_posts);
      }
  }

  approvePost() {
    this._postService.adminApprovePost(this.postItem.postId);
  }
  unapprovePost() {
    this._postService.unapprovePost(this.postItem.postId);
  }




}
