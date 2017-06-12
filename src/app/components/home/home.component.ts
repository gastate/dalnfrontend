import { ElementRef, Component, OnInit, animate } from '@angular/core';
import { PostService } from '../../services/post.service';
import { SearchService } from '../../services/search.service';
import { Post } from '../../model/post-model';
// import { routerTransition } from '../router.animations';



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
  loading: boolean = false;
  failed: boolean = false;

  ngOnInit(): void {
        this.getPagePosts();
  }

  getPagePosts() : void {
      this.loading = true;
      this._searchService.search_page("games", 8, 1).subscribe(
          (data) => {
              this.posts = data;
              this.loading = false;
        }, //Bind to view
        err => {
          this.loading = false;
          this.failed = true;
          // Log errors if any
          console.log(err);
        });
  }




}