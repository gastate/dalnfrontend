import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { AuthService } from '../../../services/auth.service';
import { SearchService } from '../../../services/search.service';
import {UserLoginService} from '../../../services/user-login.service';
import {LoggedInCallback} from '../../../services/cognito.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, LoggedInCallback {

    constructor(
        public authService: AuthService,
        public searchService: SearchService,
        public userService: UserLoginService,
        public router: Router
    ) {
        this.userService.isAuthenticated(this);
     }

  ngOnInit() {
  }

  changePageHead(page: number) {
      this.searchService.pageHead = page;
      console.log("page head changed to " + this.searchService.pageHead);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if(!isLoggedIn) {
          console.log("Not logged in, returning to login page.");
          this.router.navigate(['/login']);
      }
  }

}
