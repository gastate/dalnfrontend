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
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.postAsset.assetEmbedLink);
  }

}
