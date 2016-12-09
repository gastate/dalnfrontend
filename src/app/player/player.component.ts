import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Asset} from '../model/asset-model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
  }

  @Input()
  postAsset: Asset;


  ngOnInit(): void {

  }

  sanitizeUrl(asset: Asset) {
      if (this.postAsset.assetType === "Audio/Video"){
          return this.sanitizer.bypassSecurityTrustResourceUrl(this.postAsset.assetEmbedLink);
      } else if (this.postAsset.assetType === "Audio") {
          var url = ""; // don't need let function scope. use for concatanating full audio url.
          var audioID = this.postAsset.assetEmbedLink;

          var pattern = /\d+/g;
          audioID = pattern.exec(audioID).toString(); // JS to find the audio track ID.

          url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + audioID; // append the ID and query SoundCloud to get player.


          // sanitizer takes in a string.
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);

      } else {
          return null;
      }
  }

}
