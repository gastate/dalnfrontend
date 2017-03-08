import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Asset} from '../model/asset-model';
import {Post} from '../model/post-model';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
  }

  url : string;

  @Input()
  postAsset: Asset;
  postCheck: Post;

  @Input()
  thumb: boolean;
  noAsset: boolean;


  ngOnInit(): void {
    //   this.checkAssetList();
  }

  checkAssetList(): void {

      if (this.postCheck.hasOwnProperty('assetList') === false) {
         this.noAsset = true;
      }

  }

  sanitizeUrl(asset: Asset): void {

    if (this.postAsset.assetType === "Audio/Video") {
    //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.postAsset.assetEmbedLink);

        this.url =  this.postAsset.assetEmbedLink;

    } else if (this.postAsset.assetType === "Audio") {

      var audioID = this.postAsset.assetEmbedLink;

      var pattern = /\d+/g;
      audioID = pattern.exec(audioID).toString(); // JS to find the audio track ID.

      this.url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID; // append the ID and query SoundCloud to get player.

      // sanitizer takes in a string.
    //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {

      this.url = null;
    }
  }

}
