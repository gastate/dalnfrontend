import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SubmitFormService } from '../submit-form.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';





@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: [ './media.component.css' ]
})
export class MediaComponent implements OnInit {


    submitService: SubmitFormService;
    // fileList: FileList;
    fileInfos: any[] = [];
    fileBad:number = 0;
    fileDone:number = 0;

    // fileName: string;
    errorMessage: string;
    succeedMessage: string;
    // suggestMessage: string;
    // percentUploaded: number;

    nextEnabled:boolean = true;

    constructor(
        private _router: Router,
        private _http: Http,
        _submitService: SubmitFormService
    ) {
        this.submitService = _submitService;

    }

    private endPoint = environment.API_ENDPOINTS;

    ngOnInit() {
    }

    setMedia(event) {
        let fn: string = this.constructor.name + "#uploadFiles";  // tslint:disable-line:no-unused-variable
        console.log( fn + ": invoked" );
        // this.fileList = event.target.files;
        // console.log(this.fileList);

        // for (var i = 0; i < this.fileList.length; i++) {
        //     let file = this.fileList[ i ];
        if( event.target.files.length > 0 ) {
            for( let file of event.target.files ) {
                console.log( fn+": file ", file );
                // let file_size = this.fileList[ i ].size;
                let fileinfo:any = { file:file, progress:0.0, message:"Queued", status:"QUEUED" };
                let maxGB = 5;
                let fail:boolean = false;
                if( file.size >= maxGB*1000000000 ) {
                    fileinfo.message = "Exceeds size limit of "+maxGB+" GB";
                    fileinfo.status = "REJECTED";
                    fail = true;
                // } else {
                //     this.suggestMessage = null;
                }
                this.fileInfos.push( fileinfo );
                if( fail ) { this.fileBad += 1; }
            }
            if( this.fileBad < this.fileInfos.length ) { this.errorMessage = undefined; }
            this.setNext();
        }

    }

    uploadFiles() {
        let fn: string = this.constructor.name + "#uploadFiles";  // tslint:disable-line:no-unused-variable
        console.log(fn + ": invoked");

        // TODO: Workaround for video uploads, just use amazon. https://stackoverflow.com/questions/36010348/angular2-file-upload-for-amazon-s3-bucket

        console.log(fn + ": fileInfos = ", this.fileInfos );
        if( this.fileInfos.length > this.fileBad ) {
            this.submitService.fileInfos = this.fileInfos;
            this.errorMessage = null;
            this.succeedMessage = null;
            this.uploadFile(0);
            // var request;
            // let fileCount = this.fileInfos.length;
            // for (let i = 0; i < fileCount; i++) {
            // for( let fileinfo of this.fileInfos ) {

                // var success;
                // var percentComplete;
                // var file = this.fileList[ i ];

                // ... see uploadFile
            // }

        } else {
            this.errorMessage = "Please select files to upload";
        }

    }

    private uploadFile(i:number) {
        let fn: string = this.constructor.name + "#uploadFile";  // tslint:disable-line:no-unused-variable
        console.log(fn + ": invoked with i = ", i );
        let fileinfo:any = this.fileInfos[i];
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
                    request.open("GET", this.endPoint.get_upload_link + fileinfo.file.name, true);
                    console.log(fn + ": getting presigned link from ", this.endPoint.get_upload_link + fileinfo.file.name);
                    request.onload = (oEvent) => {
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
                            this.uploadFile(i+1);
                        };
                        let timeOut = 60000; //ms; 1 minute
                        let timeoutHandle = setTimeout( timeoutHandler, timeOut );
                        presigned_link.onprogress = (evt) => {
                            console.log(fn + ":/onprogress: invoked with evt = ", evt);
                            clearTimeout( timeoutHandle );
                            timeoutHandle = setTimeout( timeoutHandler, timeOut );
                            if (evt.lengthComputable) {
                                fileinfo.progress = (evt.loaded / evt.total) * 100;
                                console.log(fn + ":/onprogress: ", fileinfo.progress );
                            }
                        };
                        presigned_link.onload = (event) => {
                            console.log( fn+"/onload: ", presigned_link.statusText );
                            // console.log( fn + "/onload: response from put", event );
                            // console.log( fn + "/onload: response after put", presigned_link );
                            clearTimeout( timeoutHandle );
                            if( presigned_link.status === 200 ) {
                                fileinfo.message = "Uploaded successfully!";
                                fileinfo.status = "DONE";
                                fileinfo.progress = 100.0;
                                this.fileDone += 1;
                            } else {
                                fileinfo.message = "Error: status = "+presigned_link.status+" "+presigned_link.statusText;
                                fileinfo.status = "FAILED";
                                fileinfo.progress = 0.0;
                            }
                            this.uploadFile(i+1)
                        };
                        presigned_link.onerror = (err) => {
                            console.log( fn+"/onerror: ", presigned_link.statusText );
                            // console.log( fn + "/onerror: response from put", err );
                            console.log( fn + "/onerror: response after put", presigned_link );
                            clearTimeout( timeoutHandle );
                            let errmsg = ( presigned_link.statusText !== "" ) ? presigned_link.statusText : "unspecified error"
                            fileinfo.message = "Error: "+errmsg;
                            fileinfo.status = "FAILED";
                            this.uploadFile(i+1);
                        }
                        presigned_link.open("PUT", url, true);
                        console.log(fn + ": presigned url opened");
                        presigned_link.setRequestHeader("Content-Type", fileinfo.file.type);
                        presigned_link.send(fileinfo.file);
                        console.log(fn + ": send has begun");
                    };
                    // console.log( fn+": ", this.fileList[i] );
                    request.send();
                    break;
                case "SENDING":
                    console.error( fn+": ABORT -- ALREADY SENDING!" );
                    break;
                case "REJECTED":
                    console.log( fn + ": skipping rejected file" );
                case "DONE":
                    this.uploadFile(i+1);
                    break;
            }
        } else {
            if( this.setNext() ) {
                this.succeedMessage = "All eligable files uploaded!";
            }
        }
    }

    private setNext() { return this.nextEnabled = this.fileBad + this.fileDone >= this.fileInfos.length }
    next() { this._router.navigateByUrl('/create/license'); }

}
