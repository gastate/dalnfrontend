import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class UploadService {

  private endPoint = environment.API_ENDPOINTS;
  
  constructor(
    public http: Http
  ) {
    // console.log('Hello UploadService Provider');
  }

  // getUploadUrl(fileName: string, fileType: string, url: string): Promise<any> {
  //   let headers = new Headers({ 'Content-Type': "application/json" });
  //   return this.http.post(url, { objectKey: fileName, contentType: fileType }, { headers: headers })
  //     .toPromise().then((res: Response) => {
  //       console.log("#getUploadUrl Res: ", res);
  //       console.log("#getUploadUrl  Res JSON: ", res.json());
  //       // debugger;;
  //       return Promise.resolve(res.json());
  //     })
  //     .catch((err: any) => {
  //       return Promise.reject(err);
  //     });
  // }

  // upload(url: string, file: any): Promise<any> {
  //   // debugger;
  //   let headers = { 'Content-Type': file.type, 'Accept': 'application/json' };

  //   return window.fetch(url, {
  //     method: 'PUT',
  //     body: file,
  //     headers: headers
  //   }).then(
  //     (data) => {
  //       console.log('success', data);
  //       if (data.status == 200) {
  //         return Promise.resolve("Files uploaded successfully! Please proceed to next step");
  //       }
  //       else {
  //         return Promise.reject(new Error("Upload Failed."));
  //       }
  //     }
  //   ).catch(
  //     (error) => {
  //       // debugger;
  //       console.log(error);
  //       console.error("Error: ", error);
  //     }
  //   );
  // }

  // replaceFileName( fileinfo:any ) {
  //   // Create new File because file.name is constant
  //   let file = fileinfo.file;
  //   let fileCopy = new File([ file ], this.cleanFileName(file.name), { type: file.type });
  //   console.log("File Name: ", fileCopy);
  //   return fileCopy;
  // }

  // cleanFileName(name: String) {
  //   // Object.assign because file.name is constant
  //   return name.replace(/ /g, "_");
  // }

  public uploadFiles( fileInfos: any[], onalldone: Function, onsuccess: Function = undefined, onprogress: Function = undefined, onfail: Function = undefined, i:number = 0 ) {
    let fn: string = this.constructor.name + "#uploadFiles";  // tslint:disable-line:no-unused-variable
    console.log(fn + ": invoked with i = ", i );
    let fileinfo:any = fileInfos[i];
    console.log(fn + ": fileinfo = ", fileinfo );

    if( fileinfo ) {
      switch( fileinfo.status ) {
        default:
          console.error( fn + ": unknown status "+fileinfo.status );
        case "QUEUED":
        case "FAILED":
          fileinfo.message = "In Progress...";
          fileinfo.status = "SENDING";
          let request = new XMLHttpRequest();

          console.log( fn + ": getting presigned link from ", this.endPoint.get_upload_link );
          request.open( "POST", this.endPoint.get_upload_link, true );

          request.setRequestHeader( "Content-Type", "application/json" );
          let outerTimeoutHandler = () => {
            console.error( fn+":/timeout: Timed Out!" );
            clearTimeout( outerTimeoutHandle );
            request.abort();
            fileinfo.message = "Error: Timed Out";
            fileinfo.status = "FAILED";
            fileinfo.progress = 0.0;
            if(onfail) {onfail(i);}
            this.uploadFiles( fileInfos, onalldone, onsuccess, onprogress, onfail, i+1 );
          };
          let outerTimeOut = 15000; //ms; 15 seconds
          let outerTimeoutHandle = setTimeout( outerTimeoutHandler, outerTimeOut );
          request.onload = (oEvent) => {
            clearTimeout( outerTimeoutHandle );
            console.log(fn + ": quoted presigned link = ", request.responseText);
            let url = request.responseText;
            if (request.responseText[ 0 ] == "\"" && request.responseText[ request.responseText.length - 1 ] == "\"") {
              url = request.responseText.slice(1, -1);
            }
            console.log(fn + ": presigned link = ", url);

            var presigned_link = new XMLHttpRequest();
            let timeoutHandler = () => {
              console.error( fn+":/timeout: Timed Out!" );
              clearTimeout( timeoutHandle );
              timeoutHandle = undefined; // because abort triggers onprogress which cycles these
              timeoutHandler = undefined; // because abort triggers onprogress which cycles these
              presigned_link.abort();
              presigned_link = undefined;
              fileinfo.message = "Error: Timed Out";
              fileinfo.status = "FAILED";
              fileinfo.progress = 0.0;
              if(onfail) {onfail(i);}
              this.uploadFiles( fileInfos, onalldone, onsuccess, onprogress, onfail, i+1 );
            };
            let timeOut = 60000; //ms; 1 minute
            let timeoutHandle = setTimeout( timeoutHandler, timeOut );
            presigned_link.upload.onprogress = (evt) => {
              // console.log(fn + ":/onprogress: invoked with evt = ", evt);
              clearTimeout( timeoutHandle );
              timeoutHandle = setTimeout( timeoutHandler, timeOut );
              fileinfo.progress = evt.loaded / fileinfo.file.size;
              console.log(fn + ":/onprogress: ", fileinfo.progress );
              if(onprogress) {onprogress(i);}
            };
            presigned_link.onload = (event) => {
              console.log( fn+"/onload: ", presigned_link.statusText );
              clearTimeout( timeoutHandle );
              if( presigned_link.status === 200 ) {
                fileinfo.message = "Uploaded successfully!";
                fileinfo.status = "DONE";
                fileinfo.progress = 1.0;
                if(onsuccess) {onsuccess(i);}
              } else {
                fileinfo.message = "Error: status = "+presigned_link.status+" "+presigned_link.statusText;
                fileinfo.status = "FAILED";
                fileinfo.progress = 0.0;
                if(onfail) {onfail(i);}
              }
              this.uploadFiles( fileInfos, onalldone, onsuccess, onprogress, onfail, i+1 );
            };
            presigned_link.onerror = (err) => {
              console.log( fn+"/onerror: ", presigned_link.statusText );
              clearTimeout( timeoutHandle );
              let errmsg = ( presigned_link.statusText !== "" ) ? presigned_link.statusText : "unspecified error"
              fileinfo.message = "Error: "+errmsg;
              fileinfo.status = "FAILED";
              fileinfo.progress = 0.0;
              if(onfail) {onfail(i);}
              this.uploadFiles( fileInfos, onalldone, onsuccess, onprogress, onfail, i+1 );
            }
            presigned_link.open("PUT", url, true);
            presigned_link.setRequestHeader("Content-Type", fileinfo.file.type);
            presigned_link.send(fileinfo.file);
            console.log(fn + ": send has begun");
          };
          request.send( JSON.stringify( { objectKey: fileinfo.file.name, contentType: fileinfo.file.type } ) );
          break;
        case "SENDING":
          console.error( fn+": ABORT -- ALREADY SENDING!" );
          break;
        case "REJECTED":
          console.log( fn + ": skipping rejected file" );
        case "DONE":
          this.uploadFiles( fileInfos, onalldone, onsuccess, onprogress, onfail, i+1 );
          break;
      }
    } else {
      if(onalldone) {onalldone();}
    }
  }

}
