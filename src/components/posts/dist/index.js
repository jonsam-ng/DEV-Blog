"use strict";
exports.__esModule = true;
var react_1 = require("react");
var postNav_1 = require("./components/postNav");
var post_1 = require("../../components/common/post");
require("./index.scss");
var lodash_1 = require("lodash");
var postData = {
    article: {
        album: 'https://res.cloudinary.com/practicaldev/image/fetch/s--0J-QW6Fv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/m33raj4cdipc5sv7c57y.png',
        postDate: new Date().getTime(),
        title: 'Three Cheers for the MLH Fellowship Graduates!',
        tags: ['mlhgrad', 'meta', 'opensource', 'github'],
        like: lodash_1.random(1000),
        comments: lodash_1.random(1000),
        readtime: lodash_1.random(10)
    },
    user: {
        avatar: 'https://res.cloudinary.com/practicaldev/image/fetch/s--mbsgKaXh--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png',
        name: 'James Cox'
    }
};
var postsDataArr = [];
for (var i = 0; i < 10; i++) {
    postsDataArr.push(postData);
}
var Posts = function (props) {
    return (react_1["default"].createElement("div", { className: "posts__container" },
        react_1["default"].createElement(postNav_1["default"], null),
        react_1["default"].createElement("div", { className: "posts__content--wrapper" }, postsDataArr.map(function (item, index) {
            return react_1["default"].createElement(post_1["default"], { post: item });
        }))));
};
exports["default"] = Posts;
