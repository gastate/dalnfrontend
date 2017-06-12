import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CognitoCallback, UserLoginService, LoggedInCallback} from "../../services/cognito.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, CognitoCallback, LoggedInCallback, OnInit {

  email: string;
  password: string;
  errorMessage: string;

  constructor(public router: Router,
              public userService: UserLoginService) { }

  ngOnInit() {
    this.errorMessage = null;
    this.userService.isAuthenticated(this);
  }

  onLogin() {
        if (this.email == null || this.password == null) {
            this.errorMessage = "All fields are required";
            return;
        }
        this.errorMessage = null;
        this.userService.authenticate(this.email, this.password, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
            // if (this.errorMessage === 'User is not confirmed.') {
            //     console.log("redirecting");
            //     this.router.navigate(['/home/confirmRegistration', this.email]);
            // }
        } else { //success
            // this.ddb.writeLogEntry("login");
            this.router.navigate(['/admin']);
        }
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (isLoggedIn)
            this.router.navigate(['/admin']);
    }

}
