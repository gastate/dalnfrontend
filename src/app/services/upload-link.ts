import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { resolve } from 'url';

@Injectable()
export class UploadLinks {
  constructor(
    public _http: Http
  ) {
    // console.log('Hello UploadService Provider');
  }

  private endPoint = environment.API_ENDPOINTS;


  linkFiles(postId: string, files: any) {
    let FileInfo: Promise<void>[] = [];
    for (let fileinfo of files) {
      FileInfo.push(this.linkFile(postId, fileinfo));
    }
    return Promise.all(FileInfo);
  }
  private linkFile(postId: string, FileInfo: any) {
    let string_to_pass = FileInfo.file.name;
    //console.log(fn + "file key", string_to_pass);
    let jsonLink = {
      stagingAreaBucketName: this.endPoint.stagingAreaBucketName,
      assetDescription: "Asset",
      finalBucketName: this.endPoint.finalBucketName,
      queueName: this.endPoint.queueName,
      PostId: postId,
      key: string_to_pass,
      tableName: this.endPoint.ddb_table_name
    };

    if (this.isDocument(string_to_pass)) {
      return this._http.get(this.endPoint.read_file + string_to_pass)
        .toPromise()
        .then(
          res => {
            const data = res.json();
            jsonLink.assetDescription = data;
            return this.apiLineFiles(jsonLink);
          }
        )
    } else {
      return this.apiLineFiles(jsonLink);
    }
  }
  private apiLineFiles(jsonLink: any) {
    //console.log(fn + "data to link", jsonLink);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers, method: "post" });

    var input = JSON.stringify(jsonLink);

    // returns 504, make admin to check if went through.
    return this._http.get(this.endPoint.read_file)
      .toPromise()
      .then(() => { })

  }

  private isDocument(fileName: string): boolean {
    switch (fileName.substring(fileName.lastIndexOf('.')).toLowerCase()) {
      case ".doc":
      case ".docx":
      case ".rtf":
      case ".txt":
      case ".pdf":
      case ".odt":
        return true;
      default:
        return false;
    }
  }



}