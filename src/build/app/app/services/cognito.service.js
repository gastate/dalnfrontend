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
var environment_1 = require("../../environments/environment");
var amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
var AWS = require("aws-sdk/global");
var CognitoUtil = (function () {
    function CognitoUtil() {
    }
    // getters for the user pool, cognito identityId, and current user.
    CognitoUtil.prototype.getCognitoIdentity = function () {
        return this.cognitoCreds.identityId;
    };
    CognitoUtil.prototype.getUserPool = function () {
        return new amazon_cognito_identity_js_1.CognitoUserPool(CognitoUtil._POOL_DATA);
    };
    CognitoUtil.prototype.getCurrentUser = function () {
        return this.getUserPool().getCurrentUser();
    };
    // setters and getters for public cognito credentials
    CognitoUtil.prototype.setCognitoCreds = function (creds) {
        this.cognitoCreds = creds;
    };
    CognitoUtil.prototype.getCognitoCreds = function () {
        return this.cognitoCreds;
    };
    // This method takes in a raw jwtToken and uses the global AWS config options to build a
    // CognitoIdentityCredentials object and store it for us. It also returns the object to the caller
    // to avoid unnecessary calls to setCognitoCreds.
    CognitoUtil.prototype.buildCognitoCreds = function (idTokenJwt) {
        var url = 'cognito-idp.' + CognitoUtil._REGION.toLowerCase() + '.amazonaws.com/' + CognitoUtil._USER_POOL_ID;
        var logins = {};
        logins[url] = idTokenJwt;
        var params = {
            IdentityPoolId: CognitoUtil._IDENTITY_POOL_ID,
            Logins: logins
        };
        var creds = new AWS.CognitoIdentityCredentials(params);
        this.setCognitoCreds(creds);
        console.log("Cognito creds:", creds);
        return creds;
    };
    CognitoUtil.prototype.getAccessToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getAccessToken is null...returning");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getAccessToken().getJwtToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoUtil.prototype.getIdToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getIdToken is null...returning");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    }
                    else {
                        console.log("CognitoUtil: Got the id token, but the session isn't valid");
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoUtil.prototype.getRefreshToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getRefreshToken is null...returning");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getRefreshToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoUtil.prototype.refresh = function () {
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("CognitoUtil: Can't set the credentials:" + err);
            }
            else {
                if (session.isValid()) {
                    console.log("CognitoUtil: refreshed successfully");
                }
                else {
                    console.log("CognitoUtil: refreshed but session is still not valid");
                }
            }
        });
    };
    return CognitoUtil;
}());
// environment setup
CognitoUtil._REGION = environment_1.environment.COGNITO_INFO.region;
CognitoUtil._USER_POOL_ID = environment_1.environment.COGNITO_INFO.userPoolId;
CognitoUtil._IDENTITY_POOL_ID = environment_1.environment.COGNITO_INFO.identityPoolId;
CognitoUtil._CLIENT_ID = environment_1.environment.COGNITO_INFO.clientId;
CognitoUtil._POOL_DATA = {
    UserPoolId: CognitoUtil._USER_POOL_ID,
    ClientId: CognitoUtil._CLIENT_ID
};
CognitoUtil = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CognitoUtil);
exports.CognitoUtil = CognitoUtil;
//# sourceMappingURL=cognito.service.js.map