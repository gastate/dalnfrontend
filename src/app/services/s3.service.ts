import {environment} from "../../environments/environment";
import * as AWS from "aws-sdk/global";
import * as S3 from 'aws-sdk/clients/s3';

export class S3Service {


private getS3(): any {
        AWS.config.update({
            region: environment.COGNITO_INFO.bucket_region,
        });

        var s3 = new S3({
            region: environment.COGNITO_INFO.bucket_region,
            apiVersion: '2006-03-01',
            params: {Bucket: environment.API_ENDPOINTS.stagingAreaBucketName}
        });


        return s3;
}

public addFile(file): boolean {

    if(!file){
        console.log("Please select a file to upload.");
        return;
    }

    let fileName = file.name;
    this.getS3().upload({
            Key: 'PICKLE RICK.jpg',
            ContentType: file.type,
            Body: fileName,
            StorageClass: 'STANDARD',
            ACL: 'private'
        }, function (err, data) {
            if (err) {
                console.log('There was an error uploading your photo: ', err);
                return false;
            }
            console.log('Successfully uploaded photo.');
            return true;
        });
}

}
