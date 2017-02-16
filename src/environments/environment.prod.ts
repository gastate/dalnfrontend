const api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
const all_posts = api_url + "/posts/all";
const post = api_url + "/posts/get";
// const create_post = api_url + "/posts/create";
// const upload_media = api_url + "/upload";
// const update_post = api_url + "/update";
const search_posts = api_url + "/posts/search";

export const environment = {
  production: true,
  API_ENDPOINTS: {
    api_url: api_url,
    all_posts: all_posts,
    post: post,
    // create_post: create_post,
    // upload_media: upload_media,
    // update_post: update_post
    search_posts: search_posts
  }
};
