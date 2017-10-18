import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {ActivatedRoute, Router, Params, NavigationEnd}   from '@angular/router';
import {Location} from '@angular/common';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../model/post-model';
import {Asset} from '../../../model/asset-model';

import {UserLoginService} from '../../../services/user-login.service';
import {CognitoUtil} from '../../../services/cognito.service';
import {LoggedInCallback} from '../../../services/cognito.service';

import {environment} from '../../../../environments/environment';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, LoggedInCallback {


      @Input()
      postDetail: Post;

      selectedAsset: Asset;
      shareUrl : string;

      // loading
      loading: boolean = false;
      failed: boolean = false;

      assets: Asset[];
      isPDF : boolean = false;
      isText: boolean;

      //for social
      sub: any;
      route: string;
      text: string;

      showAdminUI: boolean;

      private endPoint = environment.API_ENDPOINTS;


  constructor(
              public cognitoService: CognitoUtil,
              public userService: UserLoginService,              
              private _http: Http,
              private _postService: PostService,
              private _route: ActivatedRoute,
              private _location: Location,
              private router: Router

          ) {
            this.userService.isAuthenticated(this);            
        }


  ngOnInit(): void {
    let fn:String = this.constructor.name+"#ngOnInit"; // tslint:disable-line:no-unused-variable
    this.loading = true;
    this._postService.assetNeedsReupload = false;
    this.sub = this.router.events.subscribe((val) => {

    // will break view if routes are changed.

        // if environment.prod = false and coming in from admin view, then you should get by dev detail.
        // console.log( fn+": production = ", environment.production );
        // console.log( fn+": url = ", val.url );
        // console.log( fn+": approval = ", val.url.startsWith("/approval") );
        if(environment.production === false) {
          this.onDevDetail();
        } else {
        // get the postId value and use it for the url in the social media buttons.
           this.route = this.endPoint.share_link  + val.url.substring(8);
           this.onDetail();
        }
    });


  }

  onDetail() {
    let fn:String = this.constructor.name+"#onDevDetail"; // tslint:disable-line:no-unused-variable
    this._route.params.switchMap(
        (params: Params) => this._postService.getPostById(params['id']))
        .subscribe(
            (details:Post) => {
                // console.log( fn+": POST DETAIL RECEIVED", typeof(details), details );
                let detailStr = JSON.stringify(details);
                // console.log( fn+": POST DETAIL RECEIVED", typeof(detailStr), detailStr );
                  this.loading = false;
                  this.postDetail = details;

                  this.assets = this.postDetail.assetList;
                  if(this.assets && this.assets.length) {
                      for(var i = 0; i <= this.assets.length - 1; i++) {
                          if(this.assets[i].assetType === "Text") {
                              this.isText = true;
                          }
                      }
                  }

                  // twitter doesn't take over 140 characters in the title
                  // slice it down to 50
                  if(this.postDetail.title && this.postDetail.title.length) {
                      this.text = this.postDetail.title.length > 140 ? this.postDetail.title.substring(0, 50) + '...' : this.postDetail.title;
                  }
                  this.checkAssets();
                  this.selectedAsset = this._postService.getPreview(this.postDetail.assetList);
              },
            err => {
                this.loading = false;
                this.failed = true;
                console.log( "POST DETAIL FAILED", err );
            });
  }

  onDevDetail() {
    let fn:String = this.constructor.name+"#onDevDetail"; // tslint:disable-line:no-unused-variable
    this._route.params.switchMap(
      (params: Params) => this._postService.getDevPostById(params['id']))
      .subscribe(
          (details:Post) => {
                // console.log( fn+": DEV POST DETAIL RECEIVED", typeof(details), details );
                let detailStr = JSON.stringify(details);
                // console.log( fn+": DEV POST DETAIL RECEIVED", typeof(detailStr), detailStr );
                // console.log( fn+": DEV POST DETAIL RECEIVED length = ", detailStr.length );
                
                if( undefined === details || "\"\"" === detailStr ) {
                    console.log( fn+": DEV POST DETAIL EMPTY; trying non-dev" );
                    this.onDetail();
                } else {
                    this.postDetail = details;

                    this.assets = this.postDetail.assetList;
                    if(this.assets && this.assets.length) {
                        for(var i = 0; i <= this.assets.length - 1; i++) {
                            if(this.assets[i].assetType === "Text") {
                                this.isText = true;
                            }
                        }
                    }

                    this.checkAssets();
                    this.selectedAsset = this._postService.getPreview(this.postDetail.assetList);
                    this.loading = false;
                }
            },
          err => {
              this.loading = false;
              this.failed = true;
              console.log( "DEV POST DETAIL FAILED", err );
          });
}

  goBack(): void {
    this._location.back();
  }

  onSelectedAsset(asset: Asset): void {
    this.selectedAsset = asset;
  }

  checkAssets() {
    if (this.postDetail.assetList) {
        for(var i=0; i< this.postDetail.assetList.length; i++) {
            if (this.postDetail.assetList[i].assetLocation == "null") {
                this._postService.assetNeedsReupload = true;
            }
        }
    }
  }

  handleReupload() {
    for(var i=0; i< this.postDetail.assetList.length; i++) {
        let filename = this.postDetail.assetList[i].assetName; // check to make sure the filename upload is the same as the assetName   
        let description = this.postDetail.assetList[i].assetDescription;
        let postid = this.postDetail.postId;
        this.reuploadAssets(postid, filename, description);
    }
  }
  
  unapprovePost() {
      this._postService.unapprovePost(this.postDetail.postId);
  }

  // BELOW ARE HELPER FUNCTIONS FOR ABOVE.

  // literally a copy of linkFiles() in submit-form service,
  // TODO: consolidate these functions into the service.
  reuploadAssets(postid: string, filename: string, description: string) {
    let jsonData;
    jsonData = {
        stagingAreaBucketName : this.endPoint.stagingAreaBucketName,
        assetDescription: description,
        finalBucketName: this.endPoint.finalBucketName,
        PostId: postid,
        key: filename,
        tableName: this.endPoint.ddb_table_name
    };
    console.log(jsonData);
    let input = JSON.stringify(jsonData);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers, method: "post"});

    this._http.post(this.endPoint.link_media, input, options)
    .map((res: Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error))
    .subscribe(
        data => { console.log ('Reupload Link response: ', data);},
        error => { console.log(error); }
    );
  }

  convertToAdminModel() {
      // create new object for admin model that includes isPostNotApproved and areFilesUploaded
      // cast to postDetail.
      // run this function if loggedIn and on approval.
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if(!isLoggedIn) {
          console.log("Not logged in");
      } else {
          this.showAdminUI = true;
      }
  }

}

