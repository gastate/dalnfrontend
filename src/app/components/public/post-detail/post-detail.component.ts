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

  //for social
  private sub: any;
  route: string;
  text: string;

  ngOnInit(): void {
    this.loading = true;
    this.router.events.subscribe((val) => {
        if(val.url.startsWith('/getdev')) {
            this.onDevDetail();
        } else {
            this.onDetail();
            this.route = "http%3A%2F%2Fdaln.gsu.edu%2F%23%2Fdetail%2F" + val.url.substring(8);
            console.log(this.route);

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

  ngAfterViewInit(){
      this.sub = this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
              (<any>window).twttr = (function (d, s, id) {
                let js: any, fjs = d.getElementsByTagName(s)[0],
                    t = (<any>window).twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function (f: any) {
                    t._e.push(f);
                };

                return t;
              }(document, "script", "twitter-wjs"));

              if ((<any>window).twttr.ready())
                (<any>window).twttr.widgets.load();

            }
          });
  }


}
