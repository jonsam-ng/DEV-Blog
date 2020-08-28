"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Image_1 = require("../../../components/common/Image");
var react_i18next_1 = require("react-i18next");
var HTMLRender_1 = require("../../../components/common/HTMLRender");
require("./index.scss");
var ab_tag_bg_colors = ['#56C4F6', '#1C1C1C', '#028334', '#2A2566', '#562865', '#F7DF1C'];
var ArticleBox = function (props) {
    var t = react_i18next_1.useTranslation().t;
    var article = props.article;
    var articleDetail = article.article, user = article.user;
    var postID = articleDetail.postID, album = articleDetail.album, title = articleDetail.title, tags = articleDetail.tags, author = articleDetail.author, postDate = articleDetail.postDate, updateDate = articleDetail.updateDate, readtime = articleDetail.readtime, content = articleDetail.content, like = articleDetail.like, thanks = articleDetail.thanks, comments = articleDetail.comments, readinglist = articleDetail.readinglist;
    var userID = user.userID, name = user.name, avatar = user.avatar, github = user.github, website = user.website, email = user.email, intro = user.intro, work = user.work, company = user.company, age = user.age, joinDate = user.joinDate, links = user.links, labels = user.labels, phone = user.phone;
    return (react_1["default"].createElement("div", { className: "ab__container" },
        album && react_1["default"].createElement(Image_1["default"], { url: album, className: 'ab__image--album' }),
        react_1["default"].createElement("div", { className: "ab__content--wrapper" },
            react_1["default"].createElement("div", { className: "ab__title--wrapper" },
                react_1["default"].createElement("h1", null, title),
                react_1["default"].createElement("p", null, tags.map(function (tag, index) { return (react_1["default"].createElement("span", { className: 'ab__title--tags', style: { backgroundColor: ab_tag_bg_colors[index % ab_tag_bg_colors.length] }, key: index },
                    "#",
                    tag)); })),
                react_1["default"].createElement("div", { className: "ab__title--author" },
                    react_1["default"].createElement(Image_1["default"], { url: avatar, className: 'ab__author--avatar' }),
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement("b", null, author)),
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement("i", null,
                                t('posted_on'),
                                "\u00A0"),
                            react_1["default"].createElement("b", null, postDate),
                            "\u30FB",
                            react_1["default"].createElement("i", null,
                                t('updated_on'),
                                "\u00A0"),
                            react_1["default"].createElement("b", null, updateDate),
                            "\u30FB",
                            react_1["default"].createElement("b", null, readtime),
                            react_1["default"].createElement("i", null, t('min_read')))))),
            react_1["default"].createElement("div", { className: "ab__article--wrapper" },
                react_1["default"].createElement(HTMLRender_1["default"], { html: content })))));
};
exports["default"] = ArticleBox;
