import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import {Post} from '../../model/post-model';


@Component({
  selector: 'app-pagedposts',
  templateUrl: './pagedposts.component.html',
  styleUrls: ['./pagedposts.component.css']
})
export class PagedPostsComponent implements OnInit {


  pagedPostList: Post[]; // contains the posts ahead of the currentPostList by the pagination head.
  currentPostList: Post[]; // contains the currently displayed postList.

  total_results: number;

  searchService: SearchService;

  constructor(
      searchService: SearchService
  ) {
      this.searchService = searchService;
   }

  ngOnInit() {

  }



}
