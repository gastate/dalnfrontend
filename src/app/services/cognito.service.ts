import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";


// Globals to contain AWS variables.
declare var AWSCognito: any;
declare var AWS: any;

@Injectable()
export class CognitoService {

  private info = environment.COGNITO_INFO;
  console.log(info);

}
