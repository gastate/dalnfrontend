import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post-model'

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() {
  }

  @Input()
  postList: Post[];
  selectedPost: Post;

  ngOnInit() {
  }

}
