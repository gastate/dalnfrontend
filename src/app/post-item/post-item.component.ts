import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';
import {Post} from '../model/post-model';
import {Asset} from '../model/asset-model';

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
  postItem: Post;

  //****************************
  //Not in use at momement because direct lint in html template
  selectedPost: Post;
  //****************************

  getPreview(postAssets: Asset[]): Asset {

    if (postAssets) {
      let preview: Asset;

      preview = postAssets.find((asset) => asset.assetType === 'Audio/Video');
      if (preview) {
        return preview;
      } else {
        preview = postAssets.find((asset) => asset.assetType === 'Audio');
        if (preview) {
          return preview;
        } else {
          return postAssets[0];
        }
      }
    }

  }

  onSelect(post: Post): void {
    this.selectedPost = post;
    //goto detail page
    this.gotoDetail();
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedPost.postId]);
  }


  ngOnInit() {
  }

}
