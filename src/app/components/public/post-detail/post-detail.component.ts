import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, Params, NavigationEnd}   from '@angular/router';
import {Location} from '@angular/common';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../model/post-model';
import {Asset} from '../../../model/asset-model';

import {environment} from '../../../../environments/environment';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {


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

      onDev: boolean;

      private endPoint = environment;


  constructor(private _postService: PostService,
              private _route: ActivatedRoute,
              private _location: Location,
              private router: Router

          ) {
  }


  ngOnInit(): void {
    let fn:String = this.constructor.name+"#ngOnInit"; // tslint:disable-line:no-unused-variable
    this.loading = true;
    this.sub = this.router.events.subscribe((val) => {

    // will break view if routes are changed.

        // if environment.prod = false and coming in from admin view, then you should get by dev detail.
        // console.log( fn+": production = ", environment.production );
        // console.log( fn+": url = ", val.url );
        // console.log( fn+": approval = ", val.url.startsWith("/approval") );
        if(environment.production === false && val.url.startsWith("/approval")) {
          this.onDevDetail();
        } else {
        // get the postId value and use it for the url in the social media buttons.
           this.route = this.endPoint.API_ENDPOINTS.share_link  + val.url.substring(8);
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
                    this.onDev = true;

                    this.assets = this.postDetail.assetList;
                    if(this.assets && this.assets.length) {
                        for(var i = 0; i <= this.assets.length - 1; i++) {
                            if(this.assets[i].assetType === "Text") {
                                this.isText = true;
                            }
                        }
                    }
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

  unapprovePost() {
      this._postService.unapprovePost(this.postDetail.postId);
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }



}
