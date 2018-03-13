import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchService } from "../../../services/search.service";
import { UserLoginService } from "../../../services/user-login.service";
import { LoggedInCallback } from "../../../services/cognito.service";
import { Post } from "../../../model/post-model";
import "rxjs/add/observable/fromPromise";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  currentPageResults: Post[];
  loading: boolean = false;
  getDev: boolean;
  queryParam: string;
  startParam: number;


  constructor(
    private router: Router,
    private _searchService: SearchService,
    public userService: UserLoginService
  ) {}

  ngOnInit() {
    this.userService.isAuthenticated(this);
    this.currentPageResults = [];
    this.queryParam = 'cccc chair';
    this.startParam = 0;
    this.search();
  }

  search() {
    let startParam = 0;
    this.currentPageResults = [];
    this.loading = true;
    
    this._searchService
      .search_page(this.queryParam, 4, startParam)
      .subscribe(results => {
        this.loading = false;
        if (results && results.found && results.found != 0 && results.hits) {
          this.currentPageResults = results.hits.splice(0, 4);
        }
      });
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.getDev = false;
    } else {
      this.getDev = true;
    }
  }
}
