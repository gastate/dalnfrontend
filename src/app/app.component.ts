import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {UserLoginService} from "./services/user-login.service";
import {LoggedInCallback} from "./services/cognito.service";

@Component({
  selector: 'daln-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements LoggedInCallback {

    showAdminButton: boolean;
    constructor(public router: Router,
                public userService: UserLoginService) {
                    this.userService.isAuthenticated(this);
                    router.events.subscribe((val) => {
                        this.userService.isAuthenticated(this);
                        // console.log("router hit", this.showAdminButton);
                    });
                }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if(isLoggedIn) {
            this.showAdminButton = true;
        } else {
            this.showAdminButton = false;
        }
    }



}
