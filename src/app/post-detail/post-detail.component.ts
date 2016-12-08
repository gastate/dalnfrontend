import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../model/post-model';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private _postService: PostService,
              private _route: ActivatedRoute,
              private _location: Location) {
  }

  @Input()
  postDetail: Post;


  ngOnInit(): void {
    this._route.params.switchMap(
      (params: Params) => this._postService.getPostById(params['id']))
      .subscribe((details) => this.postDetail = details);
  }

  goBack(): void {
    this._location.back();
  }



}
