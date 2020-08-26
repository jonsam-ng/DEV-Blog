"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Image_1 = require("../Image");
var react_i18next_1 = require("react-i18next");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
require("./index.scss");
var Post = function (props) {
    var post = props.post;
    var article = post.article, user = post.user;
    var album = article.album, postDate = article.postDate, title = article.title, tags = article.tags, like = article.like, comments = article.comments, readtime = article.readtime;
    var avatar = user.avatar, name = user.name;
    var t = react_i18next_1.useTranslation().t;
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement("div", { className: "post__container", onClick: function () { history.push("/post/" + 1); } },
        album && react_1["default"].createElement(Image_1["default"], { url: album, className: 'post__image--album' }),
        react_1["default"].createElement("div", { className: "post__board--wrapper" },
            react_1["default"].createElement(Image_1["default"], { url: avatar, className: 'post__image--avatar' }),
            react_1["default"].createElement("div", { className: "post__user--info" },
                react_1["default"].createElement("p", null, name),
                react_1["default"].createElement("p", null, postDate)),
            react_1["default"].createElement("div", { className: "post__article--title" },
                react_1["default"].createElement("h1", null, title),
                tags.length && tags.map(function (item, index) { return (react_1["default"].createElement("span", { className: "post__article--tag", key: index },
                    "#",
                    item)); })),
            react_1["default"].createElement("div", { className: "post__article--count" },
                react_1["default"].createElement("div", { className: "post__count--left" },
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement(icons_1.HeartOutlined, { style: { marginRight: 10 } }), like + " " + t('like')),
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement(icons_1.MessageOutlined, { style: { marginRight: 10 } }), comments + " " + t('comment')))),
                react_1["default"].createElement("div", { className: "post__count--read" },
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement(icons_1.ReadOutlined, { style: { marginRight: 10 } }), readtime + " " + t('min_read'))))))));
};
exports["default"] = Post;
