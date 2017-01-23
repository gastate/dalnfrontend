import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SearchService } from '../services/search.service';
import {Post} from '../model/post-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers : [ SearchService ]
})
export class SearchComponent implements OnInit {
  posts: Observable<Post[]>;
  private searchTerm = new Subject<string>(); // using a Subject retains the state of the given data, so later we can subscribe other Observables to it. Like future updates will include other things like "literacy + video games" or other enhanced search options.
  // Note that Subject errors might be hard to catch. So if there is a problem...
  selectedPost: Post;


  constructor(
    private _searchService : SearchService,
    private _router: Router) { }

  search(term: string): void {
      this.searchTerm.next(term);
  }

  ngOnInit() {
      this.posts = this.searchTerm
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ?
          this._searchService.search(term): Observable.of<Post[]>([]))
          .catch(error => {
              console.log(error);
              return Observable.of<Post[]>([]);
      });
  }

  gotoDetail(post: Post): void {
      this._router.navigate(['/detail', this.selectedPost.postId]);
  }

}
