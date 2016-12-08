import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';
import {Asset} from '../model/asset-model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input()
  postAsset: Asset;


  constructor(
      private _postService: PostService
  ){ }

  ngOnInit(): void {

  }

}
