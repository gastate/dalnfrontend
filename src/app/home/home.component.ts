import { ElementRef, Component, OnInit, animate } from '@angular/core';
import { PostService } from '../services/post.service';
import { SearchService } from '../services/search.service';
import { Post } from '../model/post-model';
// import { routerTransition } from '../router.animations';


// TEMP code to run production and dev environments
import {environment} from '../../environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private elementRef: ElementRef, private _postService: PostService, private _searchService: SearchService) {
  }

  title = 'DALN Frontend';
  posts: Post[];


  private isInProd = environment.production;

  ngOnInit(): void {
        this.getPagePosts();


  }

  getPagePosts() : void {
      this._searchService.search_page("games", 10, 1).subscribe(
          (data) => {
              this.posts = data;


        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }




}
