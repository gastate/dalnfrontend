import { Component, Input } from "@angular/core";
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkWithHref,
  RouterLinkActive
} from "@angular/router";
import { UserLoginService } from "./services/user-login.service";
import { LoggedInCallback } from "./services/cognito.service";
import { environment } from "../environments/environment";

@Component({
  selector: "daln-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements LoggedInCallback {
  showAdminButton: boolean;
  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
    router.events.subscribe(val => {
      this.userService.isAuthenticated(this);
    });
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.showAdminButton = true;
      console.log('logged in' + isLoggedIn);
    } else {
      this.showAdminButton = false;
      console.log('logged in' + isLoggedIn);
    }
  }
}
