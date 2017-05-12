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
  postItem: Post;

  //****************************
  //Not in use at momement because direct lint in html template
  selectedPost: Post;
  //****************************

  getPreview(postAssets: Asset[]): Asset {
    return this._postService.getPreview(postAssets);
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
