// TODO MAKE SURE TO REPLACE API_URI & SEARCH ENDPOINTS
const api_url = "http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService";
const all_posts = api_url + "/posts/all";
const create_post = api_url + "/posts/create";
const page_posts = api_url + "/posts/";
const post = api_url + "/posts/";
const search_posts = api_url + "/posts/"
const upload_media = api_url + "/upload";
const update_post = api_url + "/update";

export const environment = {
  production: true,
  API_ENDPOINTS: {
    api_url: api_url,
    all_posts: all_posts,
    post: post,
    create_post: create_post,
    upload_media: upload_media,
    update_post: update_post
  }
};
