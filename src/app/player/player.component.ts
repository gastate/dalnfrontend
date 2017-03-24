import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Asset} from '../model/asset-model';
import {Post} from '../model/post-model';

import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
    url : string;
  constructor(private sanitizer: DomSanitizer) {
  }



  @Input()
  postAsset: Asset;
  postCheck: Post;

  @Input()
  thumb: boolean;
  noAsset: boolean;
  isPDF: boolean;


  ngOnInit(): void {
    //   this.checkAssetList();'
    this.getUrl(this.postAsset);
  }

  checkAssetList(): void {

      if (this.postCheck.hasOwnProperty('assetList') === false) {
         this.noAsset = true;
      }

  }

  getUrl(asset: Asset): void {

    if (this.postAsset.assetType === "Audio/Video") {
    //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.postAsset.assetEmbedLink);

        // this.url =  this.sanitizer.bypassSecurityTrustUrl(this.postAsset.assetEmbedLink) as string;
        //

        this.url = this.postAsset.assetEmbedLink;

        // console.log( "Sanitzer:" + this.url);

    } else if (this.postAsset.assetType === "Audio") {

      var audioID = this.postAsset.assetEmbedLink;

      var pattern = /\d+/g;
      audioID = pattern.exec(audioID).toString(); // JS to find the audio track ID.
      //
    //   this.url = this.sanitizer.bypassSecurityTrustUrl( 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID) as string; // append the ID and query SoundCloud to get player.
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
    } else {

      this.url = null;
    //   console.log("Sanitzer:" + this.url);
    }
  }

}
