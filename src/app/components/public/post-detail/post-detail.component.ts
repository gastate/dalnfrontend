
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { ActivatedRoute, Router, Params, NavigationEnd } from "@angular/router";
import { Location } from "@angular/common";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { PostService } from "../../../services/post.service";
import { Post } from "../../../model/post-model";
import { Asset } from "../../../model/asset-model";

import { UserLoginService } from "../../../services/user-login.service";
import { CognitoUtil } from "../../../services/cognito.service";
import { LoggedInCallback } from "../../../services/cognito.service";

import { environment } from "../../../../environments/environment";


import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { UploadService } from "app/services/upload-service";
import { UploadLinks } from "app/services/upload-link";


@Component({
  selector: "post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit, LoggedInCallback {
  @Input() postDetail: Post;

  approvalMessage: string = "";
  unapprovalMessage: string = "";

  selectedAsset: Asset;
  shareUrl: string;

  // loading
  loading: boolean = false;
  failed: boolean = false;

  assets: Asset[];
  isPDF: boolean = false;
  isText: boolean;

  //for social
  sub: any;
  route: string;
  text: string;

  showAdminUI: boolean;
  inEditMode: boolean = false;
  // assetFailedButtonText: string;
  assetWarning: string = "";

  private endPoint = environment.API_ENDPOINTS;

  constructor(
    public cognitoService: CognitoUtil,
    public userService: UserLoginService,
    private _http: Http,
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _location: Location,
    private router: Router,
    private uploadService: UploadService,
    private uploadLink: UploadLinks
  ) {
    this.userService.isAuthenticated(this);
  }

  ngOnInit(): void {
    let fn: String = this.constructor.name + "#ngOnInit"; // tslint:disable-line:no-unused-variable
    this.loading = true;
    this.sub = this.router.events.subscribe(val => {
      if (environment.production === true) {
        this.route = this.endPoint.share_link + val.url.substring(8);
        this.onDetail();
      } else {
        this.onDevDetail();
      }
    });

  }

  onDetail() {
    let fn: String = this.constructor.name + "#onDevDetail"; // tslint:disable-line:no-unused-variable
    this._route.params
      .switchMap((params: Params) =>
        this._postService.getPostById(params["id"])
      )
      .subscribe(
        (details: Post) => {
          let detailStr = JSON.stringify(details);

          this.loading = false;
          this.postDetail = details;

          console.log("Post Details", this.postDetail);

          // Temp fix for issue #109
          if (this.postDetail.toString() === "") {
            console.log("Post not found, trying on dev...");
            this.onDevDetail();
          }
          if (!this.postDetail.hasOwnProperty("isPostRejected")) {
            // old posts have no such a property. Default it to false
            this.postDetail.isPostRejected = false;
          }
          this.assets = this.postDetail.assetList
            ? this.postDetail.assetList
            : [];
          if (this.assets && this.assets.length > 0) {
            for (var i = 0; i < this.assets.length; i++) {
              if (this.assets[i].assetType === "Text") {
                this.isText = true;
              }
            }
          }

          // twitter doesn't take over 140 characters in the title
          // slice it down to 50
          //   if (this.postDetail.title && this.postDetail.title.length) {
          //     this.text =
          //       this.postDetail.title.length > 140
          //         ? this.postDetail.title.substring(0, 50) + "..."
          //         : this.postDetail.title;
          //   }
          if (
            this.postDetail &&
            this.postDetail.assetList &&
            this.postDetail.assetList.length > 0
          ) {
            this.selectedAsset = this._postService.getPreview(
              this.postDetail.assetList
            );
          }

          if (this.checkAssetList() === false) {
            this.assetWarning =
              "These post's assets are either uploading or the upload server is down."
              + "If post's assets do not upload within 10 minutes please check the upload server.";
          }
        },
        err => {
          this.loading = false;
          this.failed = true;
          console.log("POST DETAIL FAILED, trying dev posts", err);
          this.onDevDetail(); // Check Dev table if it exists there
        }
      );
  }

  onDevDetail() {
    let fn: String = this.constructor.name + "#onDevDetail"; // tslint:disable-line:no-unused-variable
    this._route.params
      .switchMap((params: Params) =>
        this._postService.getDevPostById(params["id"])
      )
      .subscribe(
        (details: Post) => {
          let detailStr = JSON.stringify(details);
          if (!details || !detailStr) {
            this.onDetail();
          } else {
            this.postDetail = details;

            if (!this.postDetail.hasOwnProperty("isPostRejected")) {
              // old posts have no such a property. Default it to false
              this.postDetail.isPostRejected = false;
            }

            console.log("Post Details", this.postDetail);
            this.assets = this.postDetail.assetList
              ? this.postDetail.assetList
              : [];
            if (this.assets && this.assets.length > 0) {
              for (var i = 0; i < this.assets.length; i++) {
                if (this.assets[i].assetType === "Text") {
                  this.isText = true;
                }
              }
            }


            if (this.postDetail && this.postDetail.assetList) {
              this.selectedAsset = this._postService.getPreview(
                this.postDetail.assetList
              );
            }

            if (this.checkAssetList() === false) {
              this.assetWarning =
                "These post's assets are either uploading or the upload server is down."
                + "If post's assets do not upload within 10 minutes please check the upload server.";
            }


            this.loading = false;
          }
        },
        err => {
          this.loading = false;
          this.failed = true;
        }
      );
  }

  goBack(): void {
    this._location.back();
  }

  onSelectedAsset(asset: Asset): void {
    this.selectedAsset = asset;
    console.log("selected asset", asset);
  }

  checkAssetList() {
    if (this.postDetail.assetList) {
      for (var i = 0; i < this.postDetail.assetList.length; i++) {
        if ("assetEmbedLink" in this.postDetail.assetList[i] &&
          "assetS3Link" in this.postDetail.assetList[i] &&
          "assetLocation" in this.postDetail.assetList[i]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  showAsset(asset: Asset) {
    if (asset.assetStatus && asset.assetStatus === "Completed") {
      return true;
    } else if (typeof asset.assetStatus === 'undefined') {
      return true;
    } else {
      return false;
    }
  }

  // Ref: https://stackoverflow.com/questions/42322968/angular2-dynamic-input-field-lose-focus-when-input-changes
  trackByFn(index: any, item: any) {
    return index;
  }




  // handleReupload() {
  //   this.assetFailedButtonText = "Reuploading Asset(s)...";
  //   let successCount = 0;
  //   let indexOfFailedReuploadAssets = [];
  //   if (this.postDetail && this.postDetail.assetList) {
  //     for (var i = 0; i < this.postDetail.assetList.length; i++) {
  //       let filename = this.postDetail.assetList[i].assetName;
  //       let description = this.postDetail.assetList[i].assetDescription;
  //       let postid = this.postDetail.postId;

  //       this.reuploadAssets(postid, filename, description).subscribe(data => {
  //         if (data["_body"] === '"File uploaded successfully"') {
  //           successCount++;
  //         } else {
  //           successCount--;
  //         }
  //       });

  //       // once all the files have been tried to be reuploaded,
  //       // we'll see if all of them were sucessful,
  //       // if not then ask to retry.
  //       if (
  //         this.postDetail.assetList &&
  //         i === this.postDetail.assetList.length - 1
  //       ) {
  //         console.log(
  //           "sucess count",
  //           successCount,
  //           this.postDetail.assetList.length - 1
  //         );
  //         if (
  //           this.postDetail.assetList &&
  //           successCount === this.postDetail.assetList.length - 1
  //         ) {
  //           this.assetFailedButtonText = "Reuploaded all assets";
  //         } else {
  //           this.assetFailedButtonText =
  //             "Reuploading for asset(s) failed. Please retry.";
  //         }
  //       }
  //     }
  //   }
  // }

  approvePost() {
    this.unapprovalMessage = "";
    this._postService.approvePost(this.postDetail.postId).subscribe(
      res => {
        // give a message to say approval was successful.
        this.postDetail.isPostNotApproved = false;
        this.approvalMessage =
          "Literacy Narrative with ID " +
          this.postDetail.postId +
          " was approved! Please wait up to 1 minute for it to appear in the search results";
      },
      err => {
        // give an error message.
        this.approvalMessage =
          "Literacy Narrative approval of " +
          this.postDetail.postId +
          " failed. Reason: \n" +
          err;
      }
    );
  }

  handleEditButtonClicked() {
    if (this.inEditMode) {
      this.editPostDone();    // in edit mode, and button is clicked. Edit is done
    } else {
      this.editPost();    // start editing now
    }
    this.inEditMode = !this.inEditMode;
  }

  editPost() {

  }

  editPostDone() {

    this._postService.editPost(this.postDetail).subscribe(
      res => {
        this.unapprovalMessage =
          "Literacy Narrative with ID " +
          this.postDetail.postId +
          " was updated!";
      },
      err => {
        // give an error message.
        this.unapprovalMessage =
          "Updating Literacy Narrative of " +
          this.postDetail.postId +
          " failed. Reason: \n" +
          err;
      }
    );
  }

  unapprovePost() {
    this.approvalMessage = "";
    this._postService.unapprovePost(this.postDetail.postId).subscribe(
      res => {
        // give a message to say approval was successful.
        this.postDetail.isPostNotApproved = true;
        this.unapprovalMessage =
          "Literacy Narrative with ID " +
          this.postDetail.postId +
          " was unapproved! Please wait up to 1 minute for it to disappear from the search results";
      },
      err => {
        // give an error message.
        this.unapprovalMessage =
          "Literacy Narrative unapproval of " +
          this.postDetail.postId +
          " failed. Reason: \n" +
          err;
      }
    );
  }

  // BELOW ARE HELPER FUNCTIONS.

  // literally a copy of linkFiles() in submit-form service,
  // TODO: consolidate these functions into the service,
  // right now you need to pass more parameters that the service function does
  // not have.
  // reuploadAssets(
  //   postid: string,
  //   filename: string,
  //   description: string
  // ): Observable<any> {
  //   let jsonData;
  //   jsonData = {
  //     stagingAreaBucketName: this.endPoint.stagingAreaBucketName,
  //     assetDescription: description,
  //     finalBucketName: this.endPoint.finalBucketName,
  //     PostId: postid,
  //     key: filename,
  //     tableName: this.endPoint.ddb_table_name
  //   };
  //   console.log(jsonData);
  //   let input = JSON.stringify(jsonData);
  //   let headers = new Headers();
  //   headers.append("Content-Type", "application/json");
  //   let options = new RequestOptions({ headers: headers, method: "post" });

  //   return this._http
  //     .post(this.endPoint.link_media, input, options)
  //     .catch((error: any) => {
  //       return Observable.throw(error.json().error);
  //     })
  //     .map((res: Response) => {
  //       console.log("Reupload Link Text", res);
  //       return res;
  //     });
  // }

  handleRejectButtonClicked() {
    this.postDetail.isPostRejected = !this.postDetail.isPostRejected;
    this.rejectPost(this.postDetail.postId);
  }

  handleUndoButtonClicked() {
    this.postDetail.isPostRejected = !this.postDetail.isPostRejected;
    this.unrejectPost(this.postDetail.postId);
  }

  unrejectPost(postId: string) {
    this._postService.unrejectPost(postId).subscribe(
      res => {
        this.unapprovalMessage =
          "Literacy Narrative with ID " +
          this.postDetail.postId +
          " is now waiting for approval";
      },
      err => {
        // give an error message.
        this.unapprovalMessage =
          "Undoing Literacy Narrative of " +
          this.postDetail.postId +
          " failed. Reason: \n" +
          err;
      }
    );
  }

  rejectPost(postId: string) {
    this._postService.rejectPost(postId).subscribe(
      res => {
        this.unapprovalMessage =
          "Literacy Narrative with ID " +
          this.postDetail.postId +
          " was rejected!";
      },
      err => {
        // give an error message.
        this.unapprovalMessage =
          "Literacy Narrative rejection of " +
          this.postDetail.postId +
          " failed. Reason: \n" +
          err;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.showAdminUI = false;
    } else {
      this.showAdminUI = true;
    }
  }
  handleTranscriptButton(event: any) {
    let fn: string = this.constructor.name + "#uploadFiles";
    if (!event.target.files.length) {
      // TODO: Put error message
      return;
    }
    let fileInfos = Object.getOwnPropertyNames(event.target.files).map((f: any) => {
      let file = event.target.files[f];
      return {
        file: file,
        message: "Queued",
        status: "QUEUED",
        progress: 0.0
      }
    });

    this.uploadService.uploadFiles(fileInfos, () => {
      // your done
      // scan fileInfos to see if any failed
      fileInfos.forEach((file: any) => {
        if(file.status=="Failed"){
          //errors 
          return;
        }
        this.uploadLink.linkFiles(this.postDetail.postId, file);

      });
    });
  
  }


}
