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
    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('signature', url);
    // formData.append('Content-Type', undefined);
    // let headers = new Headers();
    // headers.append('X-Requested-With', 'XMLHttpRequest');
    // // /** No need to include Content-Type in Angular 4 */
    // // headers.append('Content-Type', 'multipart/form-data');
    // // headers.append('Accept', 'application/json');
    // let options = new RequestOptions({ headers: headers });
    console.log("#upload getUploadUrl", url);
    return this.http.put(url, formData)
      .toPromise().then(
      (data) => {
        debugger;
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
    // Object.assign because file.name is constant
    let fileCopy = Object.assign(new File([ "" ], this.cleanFileName(file.name), file));
    console.log("File Name: ", fileCopy);
    return fileCopy;
  }

  cleanFileName(name: String) {
    // Object.assign because file.name is constant
    return name.replace(/ /g, "_");
  }

}
