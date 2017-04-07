// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const api_url = "https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development";

const all_posts = api_url + "/posts/all";
const create_post = api_url + "/posts/create";
const page_posts = api_url + "/posts/"; // becomes https://q160u4mkhi.execute-api.us-east-1.amazonaws.com/development/posts/size=10page=1
const post = api_url + "/posts/get/";
const search_posts = api_url  + "/posts/search/";
const upload_media = api_url + "/upload";
const update_post = api_url + "/update";

export const environment = {
  production: false,
  API_ENDPOINTS: {
    all_posts: all_posts,
    api_url: api_url,
    create_post: create_post,
    page_posts: page_posts,
    post: post,
    search_posts : search_posts,
    upload_media: upload_media,
    update_post: update_post
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
