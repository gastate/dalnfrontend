import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../model/post-model';

@Component({
  selector: 'home',
  template: `
    <div class=" container">
        <post-list [postList]="posts"></post-list>
    </div>
    <daln-footer></daln-footer>

`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _postService: PostService) {
  }

  title = 'DALN Frontend';
  posts: Post[];


  ngOnInit(): void {
    this.getAllPosts();
    //this.getMockPosts();
  }

  getAllPosts(): void {
    this._postService.getAllPosts().subscribe(
      (data) => this.posts = data, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

//Mock Data method
  getMockPosts(): void {
    this._postService.getMockPosts().then((data) => this.posts = data);
  }


}
