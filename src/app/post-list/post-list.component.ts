import {Component, Input, OnInit} from '@angular/core';
import { SearchService } from '../services/search.service';
import {Post} from '../model/post-model'

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(public page: SearchService) {
  }

  @Input()
  postList: Post[];
  selectedPost: Post;

  ngOnInit() {
  }



}
