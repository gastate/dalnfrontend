var api_url = "https://tg1vruzadg.execute-api.us-west-1.amazonaws.com/production";
var all_posts = api_url + "/posts/all";
var post = api_url + "/posts/get/";
var search_posts = api_url + "/posts/search/";
export var environment = {
    production: true,
    API_ENDPOINTS: {
        all_posts: all_posts,
        api_url: api_url,
        post: post,
        search_posts: search_posts
    }
};
//# sourceMappingURL=../../../src/environments/environment.prod.js.map