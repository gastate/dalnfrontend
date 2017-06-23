import {Component, Input, OnInit} from '@angular/core';
import { SearchService } from '../../services/search.service';
import {Post} from '../../model/post-model';

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
  pagedPosts: Post[];

  @Input() totalNumberOfPosts: number;


  ngOnInit() {
  }

  setPage(){

  }

  hoverLink() {
      var elms = document.getElementsByClassName("hover-post");
        // var n = elms.length;
        // function changeColor(color) {
        //     for(var i = 0; i < n; i ++) {
        //         elms[i].style.backgroundColor = color;
        //     }
        // }
        // for(var i = 0; i < n; i ++) {
        //     elms[i].onmouseover = function() {
        //         changeColor("yellow");
        //     };
        //     elms[i].onmouseout = function() {
        //         changeColor("white");
        //     };
        // }
  }



}
