import {Component, OnInit, Input, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Asset} from '../model/asset-model';
import {Post} from '../model/post-model';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
    url : string;
    route: string;
    matchRoute: string;
  constructor(private sanitizer: DomSanitizer, private _location: Location, private _router: Router) {
  }



  @Input()
  postAsset: Asset;
  postCheck: Post;

  @Input()
  thumb: boolean;
  noAsset: boolean;
  isPDF: boolean;
  isWeb : boolean;


  ngOnInit(): void {
  this._router.events.subscribe((val) => {
     // see also
     this.route = this._location.path();
     this.matchRoute = "/detail";
         if (this.route.indexOf(this.matchRoute) !== -1) {
             this.thumb = false;
         }
    });

    this.getUrl(this.postAsset);
  }

  getUrl(asset: Asset): void {

    if (this.postAsset.assetType === "Audio/Video") {

        this.url = this.postAsset.assetEmbedLink;

    } else if (this.postAsset.assetType === "Audio") {

      var audioID = this.postAsset.assetEmbedLink;

      var pattern = /\d+/g;

      audioID = pattern.exec(audioID).toString();

    this.url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID;
    //   console.log( "Sanitzer:" + this.url);


      // sanitizer takes in a string.
    //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else if (this.postAsset.assetType === "Text") {
        if (/\.(pdf)$/i.test(this.postAsset.assetEmbedLink)) {
            console.log("PDF found");
            this.isPDF = true;
            this.url = this.postAsset.assetEmbedLink;
        } else {
            this.url = null;
        }
    } else if (this.postAsset.assetType === "Web") {
        if (/\.(htm|html)$/i.test(this.postAsset.assetEmbedLink)) {
            console.log("Web found");
            this.isWeb = true;
            this.url = this.postAsset.assetEmbedLink;
        } else {
            this.url = null;
        }
    } else {

      this.url = null;
    //   console.log("Sanitzer:" + this.url);
    }
  }

}
