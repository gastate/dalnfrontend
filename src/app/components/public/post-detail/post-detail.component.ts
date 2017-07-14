import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, Params}   from '@angular/router';
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

  constructor(private _postService: PostService,
              private _route: ActivatedRoute,
              private _location: Location,
              private router: Router

          ) {
  }

  @Input()
  postDetail: Post;
  selectedAsset: Asset;
  shareUrl : string;

  loading: boolean = false;
  failed: boolean = false;

  isPDF : boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.router.events.subscribe((val) => {
        if(val.url.startsWith('/getdev')) {
            this.onDevDetail();
        } else {
            this.onDetail();
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
                  // console.log(details);
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
