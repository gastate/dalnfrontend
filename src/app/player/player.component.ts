import {Component, OnInit, Input} from '@angular/core';
import {Asset} from '../model/asset-model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

  constructor() {
  }

  @Input()
  postAsset: Asset;


  ngOnInit(): void {

  }

}
