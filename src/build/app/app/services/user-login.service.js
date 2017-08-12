"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cognito_service_1 = require("./cognito.service");
var amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
var AWS = require("aws-sdk/global");
var STS = require("aws-sdk/clients/sts");
var UserLoginService = (function () {
    function UserLoginService(cognitoUtil) {
        this.cognitoUtil = cognitoUtil;
    }
    UserLoginService.prototype.authenticate = function (username, password, callback) {
        console.log("UserLoginService starting auth...");
        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new amazon_cognito_identity_js_1.AuthenticationDetails(authenticationData);
        var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };
        console.log("Params set for auth");
        var cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
        console.log("UserLoginService: config is " + AWS.config); // echo back from AWS to make sure it got the config.
        var self = this;
        cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: function (userAttributes, requiredAttributes) {
                callback.cognitoCallback("User needs to set password.", null);
            },
            onSuccess: function (result) {
                console.log("In authenticateUser onSuccess callback");
                var creds = self.cognitoUtil.buildCognitoCreds(result.getIdToken().getJwtToken());
                AWS.config.credentials = creds;
                // So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
                // used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
                // API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
                // security credentials. The identity is then injected directly into the credentials object.
                // If the first SDK call we make wants to use our IdentityID, we have a
                // chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
                // very innocuous API call that forces this behavior.
                var sts = new STS();
                sts.getCallerIdentity(function (err, data) {
                    console.log("UserLoginService: Successfully set the AWS credentials");
                    callback.cognitoCallback(null, result);
                });
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
        });
    };
    UserLoginService.prototype.forgotPassword = function (username, callback) {
        var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
        console.log(userData);
        cognitoUser.forgotPassword({
            onSuccess: function () {
                console.log('forgotPassword in userService succeeded');
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
            inputVerificationCode: function () {
                callback.cognitoCallback(null, null);
            }
        });
    };
    UserLoginService.prototype.confirmNewPassword = function (email, verificationCode, password, callback) {
        var userData = {
            Username: email,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
        cognitoUser.confirmPassword(verificationCode, password, {
            onSuccess: function () {
                callback.cognitoCallback(null, null);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            }
        });
    };
    UserLoginService.prototype.logout = function () {
        console.log("UserLoginService: Logging out");
        // this.ddb.writeLogEntry("logout");
        this.cognitoUtil.getCurrentUser().signOut();
    };
    UserLoginService.prototype.isAuthenticated = function (callback) {
        if (callback == null)
            throw ("UserLoginService: Callback in isAuthenticated() cannot be null");
        var cognitoUser = this.cognitoUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
                    callback.isLoggedIn(err, false);
                }
                else {
                    console.log("UserLoginService: Session is " + session.isValid());
                    callback.isLoggedIn(err, session.isValid());
                }
            });
        }
        else {
            console.log("UserLoginService: can't retrieve the current user");
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
        }
    };
    UserLoginService.prototype.newPassword = function (newPasswordUser, callback) {
        console.log(newPasswordUser);
        // Get these details and call
        // cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
        var authenticationData = {
            Username: newPasswordUser.username,
            Password: newPasswordUser.existingPassword,
        };
        var authenticationDetails = new amazon_cognito_identity_js_1.AuthenticationDetails(authenticationData);
        var userData = {
            Username: newPasswordUser.username,
            Pool: this.cognitoUtil.getUserPool()
        };
        console.log("UserLoginService: Params set...Authenticating the user");
        var cognitoUser = new amazon_cognito_identity_js_1.CognitoUser(userData);
        console.log("UserLoginService: config is " + AWS.config);
        cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: function (userAttributes, requiredAttributes) {
                // User was signed up by an admin and must provide new
                // password and required attributes, if any, to complete
                // authentication.
                // the api doesn't accept this field back
                delete userAttributes.email_verified;
                cognitoUser.completeNewPasswordChallenge(newPasswordUser.password, requiredAttributes, {
                    onSuccess: function (result) {
                        callback.cognitoCallback(null, userAttributes);
                    },
                    onFailure: function (err) {
                        callback.cognitoCallback(err, null);
                    }
                });
            },
            onSuccess: function (result) {
                callback.cognitoCallback(null, result);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err, null);
            }
        });
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cognito_service_1.CognitoUtil])
], UserLoginService);
exports.UserLoginService = UserLoginService;
//# sourceMappingURL=user-login.service.js.map