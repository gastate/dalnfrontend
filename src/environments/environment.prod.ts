// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

// import {key} from './key'; // use in case for file upload.


///////////////////////
// Cognito Functions //
///////////////////////

const region = 'us-east-1';

const userPoolId = 'us-east-1_QBch6OsYW';
const clientId = '4m8kt1p08qmqm9v69kuj08ceb5';
const identityPoolId = "us-east-1:ba6231ad-4a5c-44b6-847b-64d79152818e";


///////////////////////
// Amazon Variables  //
///////////////////////


const admin_ddb_table_name = "DALN-Admin-Posts";
const ddb_table_name = "DALN-Posts";
const stagingAreaBucketName = "daln-file-staging-area-sb";
const finalBucketName = "daln-prod-sb";
const queueName = "DALNFileUploadQueueProd";

///////////////////////////////
// Miscellanious Functions  //
/////////////////////////////

const share_link = "http%3A%2F%2Fthedaln.org%2F%23%2Fdetail%2F";



//////////////////////
// Lambda Functions //
//////////////////////

const api_url = "https://w7b01d4a3g.execute-api.us-east-1.amazonaws.com/production";

const search_api_url = "https://w7b01d4a3g.execute-api.us-east-1.amazonaws.com/production"; // using prod endpoint on both dev and prod.

const all_posts = api_url + "/posts/all";
const create_post = api_url + "/posts/create";
const page_posts = search_api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
const post = search_api_url + "/posts/get/";
const get_dev_post = api_url + "/posts/getdev/"; // to get a post from the dev table (used for viewing purposes)

const rand_post = api_url + "/posts/random/"; // to get a list of random posts
const search_posts = search_api_url + "/posts/search/";
// Posts/search/(query)/(pageSize)/(start)/(field)/(order)
// start = index of first post
// field = assetlocation of whatever
// order = asc or desc

const search_size = search_api_url + "";

const approve_post = api_url + "/admin/approve/"; // to approve posts into search engine.
const unapprove_post = api_url + "/admin/remove";
const reject_post = api_url + "/admin/reject";
const unreject_post = api_url + "/admin/unreject";
const update_post = api_url + "/admin/updatePost";
const get_upload_link = api_url + "/asset/s3uploader/"; // to get the link for file uploading.
const link_media = api_url + "/asset/apiupload/"; // to link the post to the files uploaded.
const read_file = api_url + "/asset/read/"; // to scan Text documents for their contents
const admin_transcript_post=api_url+"/asset/s3AdminUpload";


const get_unapproved_posts = api_url + "/admin/unapproved";
const get_rejected_posts = api_url + "/admin/rejected";
const execute_ec2 = api_url + "/admin/executeec2/"

export const environment = {
    production: true,
    API_ENDPOINTS: {
        admin_transcript_post: admin_transcript_post,
        admin_ddb_table_name: admin_ddb_table_name,
        all_posts: all_posts,
        update_post: update_post,
        approve_post: approve_post,
        reject_post: reject_post,
        unreject_post: unreject_post,
        api_url: api_url,
        create_post: create_post,
        ddb_table_name: ddb_table_name,
        finalBucketName: finalBucketName,
        get_dev_post: get_dev_post,
        get_upload_link: get_upload_link,
        get_unapproved_posts: get_unapproved_posts,
        get_rejected_posts: get_rejected_posts,
        link_media: link_media,
        page_posts: page_posts,
        post: post,
        queueName: queueName,
        read_file: read_file,
        share_link: share_link,
        search_posts: search_posts,
        search_size: search_size,
        stagingAreaBucketName: stagingAreaBucketName,
        unapprove_post: unapprove_post,
        execute_ec2: execute_ec2
    }, COGNITO_INFO: {
        region: region,
        userPoolId: userPoolId,
        identityPoolId: identityPoolId,
        clientId: clientId
    }

};
