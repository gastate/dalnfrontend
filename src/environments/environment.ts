// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development";

const search_api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production"; // using prod endpoint on both dev and prod.

const all_posts = api_url + "/posts/all";
const create_post = api_url + "/posts/create";
const page_posts = search_api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
const post = search_api_url + "/posts/get/";
const get_dev_post = api_url + "/posts/getdev/"; // to get a post from the dev table (used for viewing purposes)

const rand_post = api_url + "/posts/random/"; // to get a list of random posts
const search_posts = search_api_url  + "/posts/search/";
// Posts/search/(query)/(pageSize)/(start)/(field)/(order)
// start = index of first post
// field = assetlocation of whatever
// order = asc or desc

const search_size = search_api_url + "";

const approve_post = api_url + "/posts/approve/"; // to approve posts into search engine.
const unapprove_post = api_url + "/posts/unapprove";
const get_upload_link = api_url + "/asset/s3upload/"; // to get the link for file uploading.
const link_media = api_url + "/asset/apiupload/"; // to link the post to the files uploaded.

const get_unapproved_posts = api_url + "/posts/unapproved";


export const environment = {
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
