var api_url = "http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService";
var api_url2 = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
var all_posts = api_url + "/posts/all";
var create_post = api_url + "/posts/create";
var page_posts = api_url + "/posts/";
var post = api_url + "/posts/";
var search_posts = api_url2 + "/posts/search/";
var upload_media = api_url + "/upload";
var update_post = api_url + "/update";
export var environment = {
    production: false,
    API_ENDPOINTS: {
        all_posts: all_posts,
        api_url: api_url,
        create_post: create_post,
        page_posts: page_posts,
        post: post,
        search_posts: search_posts,
        upload_media: upload_media,
        update_post: update_post
    }
};
//# sourceMappingURL=../../../src/environments/environment.js.map