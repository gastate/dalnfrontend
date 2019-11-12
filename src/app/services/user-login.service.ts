import { Injectable } from "@angular/core";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import * as STS from "aws-sdk/clients/sts";
import * as AWS from "aws-sdk/global";

import { NewPasswordUser } from "../components/public/auth/new-password/new-password.component";
import { Callback, CognitoCallback, CognitoUtil, LoggedInCallback } from "./cognito.service";

@Injectable()
export class UserLoginService {
  constructor(public cognitoUtil: CognitoUtil) { }

  authenticate(username: string, password: string, callback: CognitoCallback) {
    let authenticationData = {
      Username: username,
      Password: password
    };
    let authenticationDetails = new AuthenticationDetails(authenticationData);

    let userData = {
      Username: username,
      Pool: this.cognitoUtil.getUserPool()
    };

    let cognitoUser = new CognitoUser(userData);
    var self = this;

    cognitoUser.authenticateUser(authenticationDetails, {
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        callback.cognitoCallback(`User needs to set password.`, null);
      },
      onSuccess: function (result) {
        let creds = self.cognitoUtil.buildCognitoCreds(
          result.getIdToken().getJwtToken()
        );

        AWS.config.credentials = creds;

        // So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
        // used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
        // API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
        // security credentials. The identity is then injected directly into the credentials object.
        // If the first SDK call we make wants to use our IdentityID, we have a
        // chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
        // very innocuous API call that forces this behavior.
        let sts = new STS();
        sts.getCallerIdentity(function (err: any, data: any) {
          callback.cognitoCallback(null, result);
        });
      },
      onFailure: function (err: any) {
        callback.cognitoCallback(err.message, null);
      }
    });
  }

  forgotPassword(username: string, callback: CognitoCallback) {
    let userData = {
      Username: username,
      Pool: this.cognitoUtil.getUserPool()
    };

    let cognitoUser = new CognitoUser(userData);
    console.log(userData);
    cognitoUser.forgotPassword({
      onSuccess: function () {
        console.log("forgotPassword in userService succeeded");
      },
      onFailure: function (err: any) {
        callback.cognitoCallback(err.message, null);
      },
      inputVerificationCode() {
        callback.cognitoCallback(null, null);
      }
    });
  }

  confirmNewPassword(
    email: string,
    verificationCode: string,
    password: string,
    callback: CognitoCallback
  ) {
    let userData = {
      Username: email,
      Pool: this.cognitoUtil.getUserPool()
    };

    let cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmPassword(verificationCode, password, {
      onSuccess: function () {
        callback.cognitoCallback(null, null);
      },
      onFailure: function (err: any) {
        callback.cognitoCallback(err.message, null);
      }
    });
  }

  logout() {
    console.log("UserLoginService: Logging out");
    // this.ddb.writeLogEntry("logout");
    this.cognitoUtil.getCurrentUser().signOut();
  }

  isAuthenticated(callback: LoggedInCallback) {
    if (callback == null)
      throw "UserLoginService: Callback in isAuthenticated() cannot be null";

    let cognitoUser = this.cognitoUtil.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.getSession(function (err: any, session: any) {
        if (err) {
          console.log(
            "UserLoginService: Couldn't get the session: " + err,
            err.stack
          );
          callback.isLoggedIn(err, false);
        } else {
          // console.log("UserLoginService: Session is " + session.isValid());
          callback.isLoggedIn(err, session.isValid());
        }
      });
    } else {
      // console.log("UserLoginService: can't retrieve the current user");
      callback.isLoggedIn("Can't retrieve the CurrentUser", false);
    }
  }

  getAccessToken(callback: (err: string, object: any) => void) {
    var result: Callback = {
      callback: () => {
        callback("No token", null);
      },
      callbackWithParam: (result) => {
        if (!result) {
          callback("No token", null);
        }
        callback(null, result);
      }
    }
    this.isAuthenticated({
      isLoggedIn: (err: string, loggedIn: boolean) => {
        if (err) {
          callback(err, "");
          return;
        }
        this.cognitoUtil.getAccessToken(result);
      }
    });
  }

  newPassword(
    newPasswordUser: NewPasswordUser,
    callback: CognitoCallback
  ): void {
    console.log(newPasswordUser);
    // Get these details and call
    // cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
    let authenticationData = {
      Username: newPasswordUser.username,
      Password: newPasswordUser.existingPassword
    };
    let authenticationDetails = new AuthenticationDetails(authenticationData);

    let userData = {
      Username: newPasswordUser.username,
      Pool: this.cognitoUtil.getUserPool()
    };

    console.log("UserLoginService: Params set...Authenticating the user");
    let cognitoUser = new CognitoUser(userData);
    console.log("UserLoginService: config is " + AWS.config);
    cognitoUser.authenticateUser(authenticationDetails, {
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        // User was signed up by an admin and must provide new
        // password and required attributes, if any, to complete
        // authentication.

        // the api doesn't accept this field back
        delete userAttributes.email_verified;
        cognitoUser.completeNewPasswordChallenge(
          newPasswordUser.password,
          requiredAttributes,
          {
            onSuccess: function (result: any) {
              callback.cognitoCallback(null, userAttributes);
            },
            onFailure: function (err: any) {
              callback.cognitoCallback(err, null);
            }
          }
        );
      },
      onSuccess: function (result: any) {
        callback.cognitoCallback(null, result);
      },
      onFailure: function (err: any) {
        callback.cognitoCallback(err, null);
      }
    });
  }
}
