// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
"use strict";
///////////////////////
// Cognito Functions //
///////////////////////
var region = 'us-east-1';
var userPoolId = 'us-east-1_0lPzLvk1m';
var clientId = '5jor2041aact5jm0ka79c67dr4';
var identityPoolId = "us-east-1:258aaf8f-4093-400c-83e8-84981352c82f";
var admin_ddb_table_name = "DALN-Admin-Posts";
var dev_ddb_table_name = "DALN-Posts-Dev";
var stagingAreaBucketName = "daln-file-staging-area";
var finalBucketName = "daln-development";
//////////////////////
// Lambda Functions //
//////////////////////
var api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development";
var search_api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development"; // using prod endpoint on both dev and prod.
var all_posts = api_url + "/posts/all";
var create_post = api_url + "/posts/create";
var page_posts = search_api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
var post = search_api_url + "/posts/get/";
var get_dev_post = api_url + "/posts/getdev/"; // to get a post from the dev table (used for viewing purposes)
var rand_post = api_url + "/posts/random/"; // to get a list of random posts
var search_posts = search_api_url + "/posts/search/";
// Posts/search/(query)/(pageSize)/(start)/(field)/(order)
// start = index of first post
// field = assetlocation of whatever
// order = asc or desc
var search_size = search_api_url + "";
var approve_post = api_url + "/admin/approve/"; // to approve posts into search engine.
var unapprove_post = api_url + "/admin/remove";
var get_upload_link = api_url + "/asset/s3upload/"; // to get the link for file uploading.
var link_media = api_url + "/asset/apiupload/"; // to link the post to the files uploaded.
var get_unapproved_posts = api_url + "/admin/unapproved";
exports.environment = {
    production: false,
    API_ENDPOINTS: {
        admin_ddb_table_name: admin_ddb_table_name,
        all_posts: all_posts,
        approve_post: approve_post,
        api_url: api_url,
        create_post: create_post,
        dev_ddb_table_name: dev_ddb_table_name,
        finalBucketName: finalBucketName,
        get_dev_post: get_dev_post,
        get_upload_link: get_upload_link,
        get_unapproved_posts: get_unapproved_posts,
        link_media: link_media,
        page_posts: page_posts,
        post: post,
        search_posts: search_posts,
        search_size: search_size,
        stagingAreaBucketName: stagingAreaBucketName,
        unapprove_post: unapprove_post
    }, COGNITO_INFO: {
        region: region,
        userPoolId: userPoolId,
        identityPoolId: identityPoolId,
        clientId: clientId
    }
};
// const api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
// const all_posts = api_url + "/posts/all";
// const post = api_url + "/posts/get/";
// // const create_post = api_url + "/posts/create";
// // const upload_media = api_url + "/upload";
// // const update_post = api_url + "/update";
// const search_posts = api_url + "/posts/search/";
//
// export const environment = {
//   production: true,
//   API_ENDPOINTS: {
//     api_url: api_url,
//     all_posts: all_posts,
//     post: post,
//     // create_post: create_post,
//     // upload_media: upload_media,
//     // update_post: update_post
//     search_posts: search_posts
//   }
// };
//# sourceMappingURL=environment.js.map