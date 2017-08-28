import { Component, OnInit } from '@angular/core';
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


    submitService: SubmitFormService;
    fileList: FileList;

    fileName: string;
    errorMessage: string;
    succeedMessage: string;
    suggestMessage: string;
    percentUploaded: number;
    loading: boolean;
    failed: boolean;
    loadingMessage: string;

    constructor(
        private _router: Router,
        private _http: Http,
        _submitService: SubmitFormService,
        private uploadService: UploadService
    ) {
        this.submitService = _submitService;

    }

    private endPoint = environment.API_ENDPOINTS;

    ngOnInit() {
    }

    setMedia(event) {
        this.fileList = event.target.files;
        console.log(this.fileList);


        for (var i = 0; i < this.fileList.length; i++) {
            let file = this.fileList[ i ];
            let file_size = this.fileList[ i ].size;

            if (file_size >= 50000000000) {
                this.suggestMessage = "One of your files is larger than the size limit of 5 GB.";
            } else {
                this.suggestMessage = null;
            }
        }

    }

    uploadFiles() {
        let fn: string = this.constructor.name + "#uploadFiles()";  // tslint:disable-line:no-unused-variable
        console.log(fn + ": invoked");


        // TODO: Workaround for video uploads, just use amazon. https://stackoverflow.com/questions/36010348/angular2-file-upload-for-amazon-s3-bucket
        //

        console.log(fn + ": fileList", this.fileList);
        if (this.fileList && this.fileList.length > 0) {
            this.submitService.fileList = this.fileList;
            this.errorMessage = null;

            // var request;
            let fileCount = this.fileList.length;
            for (let i = 0; i < fileCount; i++) {
                let success;
                let file = this.uploadService.replaceFileName(this.fileList[ i ]);
                this.uploadFile(file);
            }

        } else {
            this.errorMessage = "Please select a couple of files to upload to the DALN.";
        }

    }

    next() {
        this._router.navigateByUrl('/create/license');
    }

    uploadFile(file: File) {
        this.loadingMessage = `Uploading File(s) ...`
        this.loading = true;
        return this.uploadService.getUploadUrl(file.name, file.type, this.endPoint.get_upload_link)
            .then((url) => {
                return this.uploadService.upload(url, file);
            }).then((resp) => {
                this.loading = false;
                this.succeedMessage = resp;
            }).catch((err) => {
                this.failed = true;
                this.loadingMessage = null;
                this.errorMessage = err.message;
            })
    }

}
