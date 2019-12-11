import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class UploadLinks {
    constructor(
        public _http: Http
      ) {
        // console.log('Hello UploadService Provider');
      }

    private endPoint = environment.API_ENDPOINTS;


    linkFiles(postId: string, files: any) {
        let fn: string = this.constructor.name + "#linkFiles";
        //console.log(fn + "invoked with postId: " + postId);
    
        // console.log("fileinfos" + this.fileInfos);
    
        let jsonLink: any;
        for (let fileinfo of files) {
          let string_to_pass = fileinfo.file.name;
          //console.log(fn + "file key", string_to_pass);
          jsonLink = {
            stagingAreaBucketName: this.endPoint.stagingAreaBucketName,
            assetDescription: "Asset",
            finalBucketName: this.endPoint.finalBucketName,
            queueName: this.endPoint.queueName,
            PostId: postId,
            key: string_to_pass,
            tableName: this.endPoint.ddb_table_name
          };

          if (this.isDocument(string_to_pass)) {
            this._http
              .get(this.endPoint.read_file + string_to_pass)
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error))
              .subscribe(
                data => {
                  console.log(data);
                  jsonLink.assetDescription = data;
                },
                error => {
                  console.log(error);
                },
                () => {
                  this.linkSingleFile(jsonLink);
                }
              );
          } else {
            this.linkSingleFile(jsonLink);
          }
        }
      }
    
      private linkSingleFile(jsonLink: any) {
        //console.log(fn + "data to link", jsonLink);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers, method: "post" });
    
        var input = JSON.stringify(jsonLink);
    
        // returns 504, make admin to check if went through.
        this._http
          .post(this.endPoint.link_media, input, options)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error))
          .subscribe(
            data => {
              console.log("Link response: ", data);
            },
            error => {
              console.log(error);
            }
          );
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