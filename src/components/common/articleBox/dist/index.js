"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.scss");
var ArticleBox = function (props) {
    var article = props.article;
    var articleDetail = article.article, user = article.user;
    var postID = articleDetail.postID, title = articleDetail.title, tags = articleDetail.tags, author = articleDetail.author, postDate = articleDetail.postDate, readtime = articleDetail.readtime, content = articleDetail.content, like = articleDetail.like, thanks = articleDetail.thanks, readinglist = articleDetail.readinglist;
    var userID = user.userID, name = user.name, avatar = user.avatar, github = user.github, website = user.website, email = user.email, intro = user.intro, work = user.work, company = user.company, age = user.age, joinDate = user.joinDate, links = user.links, labels = user.labels, phone = user.phone;
    return (react_1["default"].createElement("div", { className: "ab__container" }));
};
exports["default"] = ArticleBox;
