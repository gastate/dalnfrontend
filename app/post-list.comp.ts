import { Component, Input } from '@angular/core';
import {PostItemComponent} from './post-item.comp';
import {Post} from './post' 

@Component({
  selector: 'post-list',
  templateUrl: '../templates/post-list.html'
})
export class PostListComponent {
    @Input()
    postList: Post[];
    selectedPost: Post;
}