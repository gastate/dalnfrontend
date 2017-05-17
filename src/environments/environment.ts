// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

var api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development";

var search_api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production"; // using prod endpoint on both dev and prod.

var all_posts = api_url + "/posts/all";
var create_post = api_url + "/posts/create";
var page_posts = search_api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
var post = search_api_url + "/posts/get/";
var get_dev_post = api_url + "/posts/getdev/"; // to get a post from the dev table (used for viewing purposes)

var rand_post = api_url + "/posts/random/"; // to get a list of random posts
var search_posts = search_api_url  + "/posts/search/";
// Posts/search/(query)/(pageSize)/(start)/(field)/(order)
// start = index of first post
// field = assetlocation of whatever
// order = asc or desc

var search_size = search_api_url + "";

var approve_post = api_url + "/posts/approve/"; // to approve posts into search engine.
var unapprove_post = api_url + "/posts/unapprove";
var get_upload_link = api_url + "/asset/s3upload/"; // to get the link for file uploading.
var link_media = api_url + "/asset/apiupload/"; // to link the post to the files uploaded.

var get_unapproved_posts = api_url + "/posts/unapproved";


export var environment = {
  production: false,
  API_ENDPOINTS: {
    all_posts: all_posts,
    approve_post: approve_post,
    api_url: api_url,
    create_post: create_post,
    get_upload_link: get_upload_link,
    get_unapproved_posts: get_unapproved_posts,
    link_media : link_media,
    page_posts: page_posts,
    post: post,
    search_posts : search_posts,
    search_size : search_size,
    unapprove_post : unapprove_post

}

};

// var api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
// var all_posts = api_url + "/posts/all";
// var post = api_url + "/posts/get/";
// // var create_post = api_url + "/posts/create";
// // var upload_media = api_url + "/upload";
// // var update_post = api_url + "/update";
// var search_posts = api_url + "/posts/search/";
//
// export var environment = {
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
