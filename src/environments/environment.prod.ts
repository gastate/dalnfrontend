const api_url = "INSERT_AWS_PROD_ENDPOINT_HERE/dalnws/api/DALNService";
const all_posts = api_url + "/json/posts/all";
const post = api_url + "/posts/";
const create_post = api_url + "/posts/create";
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
