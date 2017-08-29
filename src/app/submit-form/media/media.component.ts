import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SubmitFormService } from '../submit-form.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { UploadService } from "./upload-service";

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: [ './media.component.css' ]
})
export class MediaComponent implements OnInit {
    fileInfos: any[] = [];
    fileBad:number = 0;
    fileDone:number = 0;

    errorMessage: string;
    succeedMessage: string;

    nextEnabled:boolean = true;

    private endPoint = environment.API_ENDPOINTS;

    constructor(
        private _router: Router,
        private _http: Http,
        private submitService: SubmitFormService,
        private ref: ChangeDetectorRef,
        private uploadService: UploadService,
    ) {
    }

    ngOnInit() {
    }

    setMedia(event) {
        let fn: string = this.constructor.name + "#uploadFiles";  // tslint:disable-line:no-unused-variable
        console.log( fn + ": invoked" );

        if( event.target.files.length > 0 ) {
            for( let file of event.target.files ) {
                console.log( fn+": file ", file );
                let fileinfo:any = { file:file, progress:0.0, message:"Queued", status:"QUEUED" }; // TODO: make a proper class for these
                let maxGB = 5;
                let fail:boolean = false;
                if( file.size >= maxGB*1000000000 ) {
                    fileinfo.message = "Exceeds size limit of "+maxGB+" GB";
                    fileinfo.status = "REJECTED";
                    fail = true;
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

        console.log(fn + ": fileInfos = ", this.fileInfos );
        if( this.fileInfos.length > this.fileBad ) {
            this.submitService.fileInfos = this.fileInfos;
            this.errorMessage = null;
            this.succeedMessage = null;
            // this.uploadFile(0);
            this.uploadService.uploadFiles(
                this.fileInfos,
                ()=>{ if( this.setNext() ) { this.succeedMessage = "All eligable files uploaded!"; } }, //onalldone
                ()=>{ this.fileDone += 1; }, //onsuccess
                ()=>{ this.ref.detectChanges(); }, //onprogress
            );
        } else {
            this.errorMessage = "Please select files to upload";
        }
    }

    private setNext() { return this.nextEnabled = this.fileBad + this.fileDone >= this.fileInfos.length }
    next() { this._router.navigateByUrl('/create/license'); }

}
