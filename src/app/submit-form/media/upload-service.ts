import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



/*
 Generated class for the UploadService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class UploadService {

  constructor(public http: Http) {
    console.log('Hello UploadService Provider');
  }

  getUploadUrl(fileName: string, url: string): Promise<any> {
    let uri = `${ url }${ fileName }`;

    return this.http.get(uri)
      .toPromise().then((res: Response) => {
        console.log("#getUploadUrl Res: ", res);
        console.log("#getUploadUrl  Res JSON: ", res.json());
        debugger;
        return res.json();
      })
      .catch((err: any) => {
        return Promise.reject(err);
      });
  }



  upload(url: string, file: any): Promise<any> {
    debugger;
    console.log("File for upload: ", file);
    let headers = new Headers();
    // headers.append('Content-Type', file.type);
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return fetch(url, {
      method: 'PUT',
      body: file,
      headers: headers
    }).then(
      (data) => {
        console.log('success', data);
        if (data[ "_body" ]) {
          return Promise.resolve("Files uploaded successfully! Please proceed to next step");
        }
        else {
          return Promise.reject(new Error("Upload Failed."));
        }
      }).catch(
      (error) => {
        debugger;
        console.log(error);
        console.error("Error: ", error);
      });
  }

  replaceFileName(file: File) {
    // Create new File because file.name is constant
    let fileCopy = new File([ file ], this.cleanFileName(file.name), { type: file.type });
    console.log("File Name: ", fileCopy);
    return fileCopy;
  }

  cleanFileName(name: String) {
    // Object.assign because file.name is constant
    return name.replace(/ /g, "_");
  }

}
