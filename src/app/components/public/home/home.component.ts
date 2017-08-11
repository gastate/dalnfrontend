import { ElementRef, Component, OnInit, animate } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { SearchService } from '../../../services/search.service';
import { Post } from '../../../model/post-model';
// import { routerTransition } from '../router.animations';
import 'rxjs/add/observable/fromPromise';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    title = 'DALN Frontend';
    searchPosts: Post[] = [];
    posts: Post[] = [];

    showPage: boolean = true;

    loading: boolean = false;
    failed: boolean = false;

    getdev: boolean; //for postlist.


  constructor(private _postService: PostService, private _searchService: SearchService) {


  }



  ngOnInit(): void {
        this.getdev = false;
        this.getPagePosts();
  }

  getPagePosts() : void {
      this.loading = true;

      if (this._searchService.cache_posts.length === 0) {
          this._searchService.search_page("games", 8, 0).subscribe(
              (data) => {
                  this.posts = this._searchService.translatePosts(data.hit);
                  this._searchService.cache_posts = this.posts;
                  this.loading = false;
            }, //Bind to view
            err => {
              this.loading = false;
              this.failed = true;
              // Log errors if any
              console.log(err);
            });
      } else {
          this.posts = this._searchService.cache_posts;
          this.loading = false;
      }


        // Use for development if search is down.
    // this._postService.getMockPosts().then(
    //     (data) => {
    //         this.posts = this._searchService.translatePosts(data.hit);
    //         this.loading = false;
    //     },
    //     err => {
    //         this.loading = false;
    //         this.failed = true;
    //         console.log(err);
    // });
  }

  showHomePage(event) {
      this.showPage = event;
  }


  displayResults(event) {
    //   console.log("Search hit.", event);
      this.searchPosts = event;
  }

  clearSearch() {
      this.searchPosts = [];
      this._searchService.searchQuery = "";
      // add to search history of browser
  }





}
