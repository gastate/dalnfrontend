import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    this.approvedPostMessageEmitter = new EventEmitter<string>();
    this.errorMessageEmitter = new EventEmitter<string>();
  }

  @Input()
  getdev: boolean;

  @Input()
  postItem: Post;

  @Output()
  approvedPostMessageEmitter: EventEmitter<string>;

  @Output()
  errorMessageEmitter: EventEmitter<string>;

  // isChecked: boolean;
  assetFailureWarning: string = null;
  sub: any;
  showUnapproveButton: boolean;


  ngOnInit() {
    //   console.log(this.getdev);
    
    this.sub = this._router.events.subscribe((val) => {

    // will break view if routes are changed.
        if(val.url.startsWith("/admin")) {
          this.showUnapproveButton = false;
      } else {
          this.showUnapproveButton = true;
      }
    });
  }

  getPreview(postAssets: Asset[]): Asset {
    return this._postService.getPreview(postAssets);
  }

  issueAssetWarning(event: any) {
    if (event == true) {
      this.assetFailureWarning = "Asset(s) failed to upload, check detail page for more info.";
    }
  }

  // For mass approval.
  // sendPostId() {
  //     if(this.isChecked === true) {
  //       this._postService.selected_posts.push(this.postItem.postId);
  //       // console.log(this._postService.selected_posts);
  //     } else {
  //       var position = this._postService.selected_posts.indexOf(this.postItem.postId);
  //       var remove_post = this._postService.selected_posts.splice(position, 1);
  //       // console.log(this._postService.selected_posts);
  //     }
  // }

  approvePost() {
    this._postService.adminApprovePost(this.postItem.postId).subscribe(
      res => {
        // give a message to say approval was successful.
        this.approvedPostMessageEmitter.emit("Post with ID " + this.postItem.postId 
        + " was approved.");
      },
      err => {
        // give an error message.
        this.errorMessageEmitter.emit("Post approval of " + this.postItem.postId 
        + " failed. Reason: \n" + err); 
      });
  }

  unapprovePost() {
    this._postService.unapprovePost(this.postItem.postId);
  }




}
