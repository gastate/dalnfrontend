import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../../services/auth.service";
import { SearchService } from "../../../../services/search.service";
import { UserLoginService } from "../../../../services/user-login.service";
import { LoggedInCallback } from "../../../../services/cognito.service";

import { Post } from "../../../../model/post-model";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit, LoggedInCallback {
  currentlyLoggedIn: boolean;

  constructor(
    public searchService: SearchService,
    public userService: UserLoginService,
    public router: Router
  ) {
    this.userService.isAuthenticated(this);
    console.log("In AdminComponent.");
  }

  ngOnInit() {
    //   this.getApproveList();
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      console.log("Not logged in, returning to login page.");
      this.currentlyLoggedIn = false;
      this.router.navigate(["/login"]);
    }
    this.currentlyLoggedIn = true;
  }
}
