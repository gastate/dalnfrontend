"use strict";
var api_url = "http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService";
var all_posts = api_url + "/json/posts/all";
var post = api_url + "/posts/";
var create_post = api_url + "/posts/create";
var upload_media = api_url + "/upload";
var update_post = api_url + "/update";
exports.API_ENDPOINTS = {
    api_url: api_url,
    all_posts: all_posts,
    post: post,
    create_post: create_post,
    upload_media: upload_media,
    update_post: update_post
};
//# sourceMappingURL=dev-config.js.map