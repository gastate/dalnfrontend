import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post-model';
import {Asset} from '../../model/asset-model';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  constructor(private _router: Router,
              private _postService: PostService) {
  }

  @Input()
  getdev: boolean;

  @Input()
  postItem: Post;

  ngOnInit() {
    //   console.log(this.getdev);
  }

  getPreview(postAssets: Asset[]): Asset {
    return this._postService.getPreview(postAssets);
  }

}
