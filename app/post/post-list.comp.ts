import { Component, Input } from '@angular/core';
import {PostItemComponent} from './post-item.comp';
import {Post} from '../model/post-model'

@Component({
  moduleId: module.id,
  selector: 'post-list',
  templateUrl: './post-list.html'
})
export class PostListComponent {
    @Input()
    postList: Post[];
    selectedPost: Post;
}
