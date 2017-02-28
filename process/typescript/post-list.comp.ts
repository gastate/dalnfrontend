import {Component} from 'angular2/core';
import {PostItemComponent} from './post-item.comp';

@Component({
  selector: 'post-list',
  templateUrl: 'templates/post-list.html',
  inputs: ['postList'],
  directives: [PostItemComponent]
})
export class PostListComponent {
}