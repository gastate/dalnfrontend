import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';



// Globals to contain AWS variables.
declare var AWSCognito: any;
declare var AWS: any;

export interface CognitoCallback {
    cognitoCallback(message: string, result: any): void;
}

@Injectable()
export class CognitoUtil {

    // environment setup

    public static _REGION = environment.COGNITO_INFO.region;

    public static _USER_POOL_ID = environment.COGNITO_INFO.userPoolId;

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

        let cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    }


}
