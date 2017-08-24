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

    constructor(
        private _router: Router,
        private _http: Http,
        _submitService: SubmitFormService,
        private uploadService: UploadService,
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

            if (file_size > 350000000) {
                this.suggestMessage = "One of your files was larger than 35 MB. We recommend that you split it into two or more files, with no single file larger than about 35 MB so that visitors to the site will be able to download your file(s) more conveniently";
            } else {
                this.suggestMessage = null;
            }
        }

    }

    uploadFiles() {
        // TODO: Workaround for video uploads, just use amazon. https://stackoverflow.com/questions/36010348/angular2-file-upload-for-amazon-s3-bucket
        //

        console.log("fileList", this.fileList);


        if (this.fileList && this.fileList.length > 0) {
            this.submitService.fileList = this.fileList;
            this.errorMessage = null;
            var request;
            let fileCount = this.fileList.length;
            for (let i = 0; i < fileCount; i++) {
                let file = this.uploadService.replaceFileName(this.fileList[ i ]);
                return this.uploadService.getUploadUrl(file.name, this.endPoint.get_upload_link)
                    .then((url) => {
                        return this.uploadService.upload(url, file);
                    }).then((resp) => {
                        this.succeedMessage = resp;
                    }).catch((err) => {
                        this.errorMessage = err.message;
                    })

                // request = new XMLHttpRequest();
                // request.open("GET", this.endPoint.get_upload_link + this.fileList[ i ].name, true);
                // console.log("sending url", this.endPoint.get_upload_link + this.fileList[ i ].name);
                // request.onload = function (oEvent) {
                //     console.log("response from get", request.responseText);

                //     var url = request.responseText.replace(/['"]+/g, '');
                //     console.log("presigned_link", url);
                //     var presigned_link = new XMLHttpRequest();
                //     presigned_link.onprogress = function updateProgress(evt) {
                //         if (evt.lengthComputable) {
                //             percentComplete = (evt.loaded / evt.total) * 100;
                //             console.log(percentComplete);
                //         }
                //     };
                //     presigned_link.open("PUT", url, true);
                //     presigned_link.onload = function (event) {
                //         console.log("response from put", event);
                //         if (presigned_link.response.status === 400) {
                //             success = "Files uploaded successfully! Please proceed to next step";
                //         }
                //     };
                //     presigned_link.send(file);

                // };
                // // console.log(this.fileList[i]);
                // request.send(file);

                // this.succeedMessage = success;
            }

        } else {
            this.errorMessage = "Please select a couple of files to upload to the DALN.";
        }

    }






    next() {
        this._router.navigateByUrl('/create/license');
    }

}
