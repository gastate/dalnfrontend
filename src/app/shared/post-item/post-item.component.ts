import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "../../services/post.service";
import { Post } from "../../model/post-model";
import { Asset } from "../../model/asset-model";

@Component({
  selector: "post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"]
})
export class PostItemComponent implements OnInit {
  @Input() postItem: Post;
  @Output() approvedPostMessageEmitter: EventEmitter<string>;
  @Output() errorMessageEmitter: EventEmitter<string>;
  assetFailureWarning: string = null;
  sub: any;
  showAdminUI: boolean;

  constructor(private _router: Router, private _postService: PostService) {
    this.approvedPostMessageEmitter = new EventEmitter<string>();
    this.errorMessageEmitter = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.sub = this._router.events.subscribe(url => {
      if (this._router.url.startsWith("/admin")) {
        this.showAdminUI = true;
      } else {
        this.showAdminUI = false;
      }
    });
  }

  goToDetails() {
    if (this.postItem.postId) {
      let url: string = this.getNewTabUrl();
       window.open(url, "_blank");
    }
  }

  getNewTabUrl(): string{
    let baseUrl: string = window.location.href;
    let removePart: string = this._router.url;

    baseUrl = baseUrl.replace(removePart, "");
    baseUrl += "/detail/" + this.postItem.postId
    return baseUrl;
  }

  getPreview(postAssets: Asset[]): Asset {
    return this._postService.getPreview(postAssets);
  }

  issueAssetWarning(event: any) {
    if (event == true) {
      this.assetFailureWarning =
        "Asset(s) failed to upload, check detail page for more info.";
    }
  }

  approvePost() {
    this._postService.approvePost(this.postItem.postId).subscribe(
      res => {
        // give a message to say approval was successful.
        this.approvedPostMessageEmitter.emit(
          "Post with ID " +
            this.postItem.postId +
            " was approved. Please wait up to 60 seconds for post to appear in search results."
        );
      },
      err => {
        this.errorMessageEmitter.emit(
          "Post approval of " +
            this.postItem.postId +
            " failed. Reason: \n" +
            err
        );
      }
    );
  }

  unapprovePost() {
    this._postService.unapprovePost(this.postItem.postId);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
