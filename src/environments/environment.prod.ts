const api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
const all_posts = api_url + "/posts/all";
const post = api_url + "/posts/get/";
// const create_post = api_url + "/posts/create";
// const upload_media = api_url + "/upload";
// const update_post = api_url + "/update";
const search_posts = api_url + "/posts/search/";


export const environment = {
  production: true,
  API_ENDPOINTS: {
    all_posts: all_posts,
    api_url: api_url,
    // create_post: create_post,
    // page_posts: page_posts,
    post: post,
    search_posts: search_posts
    // upload_media: upload_media,
    // update_post: update_post
  }
};
