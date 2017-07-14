import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CognitoCallback, LoggedInCallback} from "../../../../services/cognito.service";
import {UserLoginService} from '../../../../services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements CognitoCallback, LoggedInCallback, OnInit {

  email: string;
  password: string;
  errorMessage: string;

  constructor(public router: Router,
              public userService: UserLoginService) {
                  console.log("In LoginComponent");
    }

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
                if (this.errorMessage === 'User is not confirmed.') {
                    console.log("redirecting");
                    this.router.navigate(['/login/confirmAccount', this.email]);
                } else if (this.errorMessage === 'User needs to set password.') {
                    console.log("redirecting to set new password");
                    this.router.navigate(['/login/newPassword']);
                } else if (this.errorMessage === 'User does not exist.') {
                    console.log("User doesn't exist");
                    this.errorMessage = this.errorMessage + 'If you are sure you have an account, please try your username instead of your email. If problem persists, please contact known administrators.';
                }
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
