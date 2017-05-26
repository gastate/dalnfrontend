import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';



// Globals to contain AWS variables.
declare var AWSCognito: any;
declare var AWS: any;

export interface CognitoCallback {
    cognitoCallback(message: string, result: any): void;
}

export interface LoggedInCallback {
    isLoggedIn(message: string, loggedIn: boolean): void;
}

export interface Callback {
    callback(): void;
    callbackWithParam(result: any): void;
}



@Injectable()
export class CognitoUtil {

    // environment setup

    public static _REGION = environment.COGNITO_INFO.region;

    public static _USER_POOL_ID = environment.COGNITO_INFO.userPoolId;

    public static _IDENTITY_POOL_ID = environment.COGNITO_INFO.identityPoolId;

    public static _CLIENT_ID = environment.COGNITO_INFO.clientId;

    public static _POOL_DATA = {
        UserPoolId: CognitoUtil._USER_POOL_ID,
        ClientId: CognitoUtil._CLIENT_ID
    };

    public static getAwsCognito() : any {
        return AWSCognito;
    }

    getUserPool() {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(CognitoUtil._POOL_DATA);
    }

    getCurrentUser() {
        return this.getUserPool().getCurrentUser();
    }

    getCognitoIdentity(): string {
        return AWS.config.credentials.identityId;
    }

    getIdToken(callback: Callback) : void {
        if (callback == null) {
            throw("CognitoUtil: callback in getIdToken is null...error");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession( function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials: " + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    } else {
                        console.log("CognitoUtil: Got the id token, but session isn't valid.");
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    }

}

@Injectable()
export class UserLoginService {

    constructor(public cognitoUtil: CognitoUtil) {

    }

    authenticate(username: string, password: string, callback: CognitoCallback) {

        // Don't need since unauthenticated access is allowed on the user pool.
        // AWS.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'})

        let authenticationData = {
            Username: username,
            Password: password
        };

        let authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

        let userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };

        console.log("Authenticating user...");
        let cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            // cool way to write a function
            onSuccess: function(result) {

                var logins = {}
                // sending request to amazon region instance.
                logins['cognito-idp.' + CognitoUtil._REGION + '.amazonaws.com/' + CognitoUtil._USER_POOL_ID] = result.getIdToken().getJwtToken();

                console.log(logins);

                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: CognitoUtil._IDENTITY_POOL_ID,
                    Logins: logins
                });

                console.log("UserLoginService: setting AWS credentials - " + JSON.stringify(AWS.config.credentials));
                console.log("UserLoginService: setting AWSCognito credentials - " + JSON.stringify(AWSCognito.config.credentials));
                AWS.config.credentials.get(function (err) {
                    if(!err) {
                        callback.cognitoCallback(null, result);
                    } else {
                        callback.cognitoCallback(err.message, null);
                    }
                });

            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
        });

    }

    // logout() {
    //     console.log("UserLoginService: Logging out");
    //     this.ddb.writeLogEntry("logout");
    //     this.cognitoUtil.getCurrentUser().signOut();
    // }

    isAuthenticated(callback: LoggedInCallback) {
        if (callback == null)
            throw("UserLoginService: Callback in isAuthenticated() cannot be null");

        let cognitoUser = this.cognitoUtil.getCurrentUser();

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
        } else {
            console.log("UserLoginService: can't retrieve the current user");
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
        }
    }


}
