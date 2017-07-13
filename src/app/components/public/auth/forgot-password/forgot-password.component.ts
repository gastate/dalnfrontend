import {Component, OnDestroy, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";


import {UserLoginService} from "../../../../services/user-login.service";
import {CognitoCallback} from "../../../../services/cognito.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordStep1Component implements CognitoCallback, OnInit {

  email: string;
  errorMessage: string;

  constructor( public router: Router, public userService: UserLoginService) {
      this.errorMessage = null;
   }

  ngOnInit() {
      this.userService.isAuthenticated(this);
   }

    onNext() {
            this.errorMessage = null;
            console.log(this.email);
            this.userService.forgotPassword(this.email, this);
        }

    cognitoCallback(message: string, result: any) {
        if (message == null && result == null) { //error
            console.log(this.email);
            this.router.navigate(['/login/forgotPassword', this.email]);
        } else { //success
            this.errorMessage = message;
        }
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (isLoggedIn)
            alert("you are loggedIn dummy");
    }

}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password2.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordStep2Component implements CognitoCallback, OnInit, OnDestroy {

    verificationCode: string;
    email: string;
    password: string;
    errorMessage: string;
    private sub: any;

    constructor(public router: Router, public route: ActivatedRoute,
                public userService: UserLoginService) {
        console.log("email from the url: " + this.email);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.email = params['email'];
        });
        this.errorMessage = null;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onNext() {
        this.errorMessage = null;
        this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
    }

    cognitoCallback(message: string) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            this.router.navigate(['/login']);
        }
    }
}
