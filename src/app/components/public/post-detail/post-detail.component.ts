import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, Params, NavigationEnd}   from '@angular/router';
import {Location}                 from '@angular/common';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../model/post-model';

import {Asset} from '../../../model/asset-model';
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

      loading: boolean = false;
      failed: boolean = false;

      assets: Asset[];
      isPDF : boolean = false;
      isText: boolean;

      //for social
      private sub: any;
      route: string;
      text: string;

  constructor(private _postService: PostService,
              private _route: ActivatedRoute,
              private _location: Location,
              private router: Router

          ) {
  }


  ngOnInit(): void {
    this.loading = true;
    this.router.events.subscribe((val) => {
        if(val.url.startsWith('/getdev')) {
            this.onDevDetail();
        } else {
            this.onDetail();
            this.route = "http%3A%2F%2Fdaln.gsu.edu%2F%23%2Fdetail%2F" + val.url.substring(8);
        }
    });

  }

  onDetail() {
      this._route.params.switchMap(
        (params: Params) => this._postService.getPostById(params['id']))
        .subscribe(
            (details) => {
                  this.loading = false;
                  this.postDetail = details;
                  console.log(details);

                  this.assets = this.postDetail.assetList;
                  for(var i = 0; i <= this.assets.length - 1; i++) {
                      if(this.assets[i].assetType === "Text") {
                          this.isText = true;
                      }
                  }

                  // twitter doesn't take over 140 characters in the title
                  // slice it down to 50
                  this.text = this.postDetail.title.length > 140 ? this.postDetail.title.substring(0, 50) + '...' : this.postDetail.title;

                  this.selectedAsset = this._postService.getPreview(this.postDetail.assetList);

              },
            err => {
                this.loading = false;
                this.failed = true;
                console.log(err);
            });
  }

  onDevDetail() {
      this._route.params.switchMap(
        (params: Params) => this._postService.getDevPostById(params['id']))
        .subscribe(
            (details) => {
                  this.loading = false;
                  this.postDetail = details;
                  // console.log(details);
                  
                  this.assets = this.postDetail.assetList;
                  for(var i = 0; i <= this.assets.length - 1; i++) {
                      if(this.assets[i].assetType === "Text") {
                          this.isText = true;
                      }
                  }

                  this.selectedAsset = this._postService.getPreview(this.postDetail.assetList);
              },
            err => {
                this.loading = false;
                this.failed = true;
                console.log(err);
            });
  }

  goBack(): void {
    this._location.back();
  }

  onSelectedAsset(asset: Asset): void {
    this.selectedAsset = asset;

  }



}
