"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Image_1 = require("../../../components/common/Image");
var react_i18next_1 = require("react-i18next");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
require("./index.scss");
var PostInfo = function (props) {
    var t = react_i18next_1.useTranslation().t;
    var article = props.article;
    var articleDetail = article.article, user = article.user;
    var postID = articleDetail.postID, album = articleDetail.album, title = articleDetail.title, tags = articleDetail.tags, author = articleDetail.author, postDate = articleDetail.postDate, updateDate = articleDetail.updateDate, readtime = articleDetail.readtime, content = articleDetail.content, like = articleDetail.like, thanks = articleDetail.thanks, comments = articleDetail.comments, readinglist = articleDetail.readinglist;
    var userID = user.userID, name = user.name, avatar = user.avatar, github = user.github, website = user.website, email = user.email, intro = user.intro, work = user.work, company = user.company, age = user.age, joinDate = user.joinDate, links = user.links, labels = user.labels, phone = user.phone;
    return (react_1["default"].createElement("div", { className: "postif__container card" },
        react_1["default"].createElement("p", { className: 'postif__publish--wrapper' },
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("i", null,
                    t('posted_on'),
                    "\u00A0"),
                react_1["default"].createElement("b", null, postDate),
                "\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0",
                react_1["default"].createElement("i", null,
                    t('posted_by'),
                    "\u00A0"),
                react_1["default"].createElement("b", null, name),
                ":")),
        react_1["default"].createElement("div", { className: "postif__author--wrapper" },
            react_1["default"].createElement(Image_1["default"], { url: avatar, className: 'ab__author--avatar' }),
            react_1["default"].createElement("p", null, name),
            react_1["default"].createElement("p", null, work || t('no_work_detail')),
            react_1["default"].createElement("div", { className: "postif__social--wrapper" },
                github && react_1["default"].createElement(antd_1.Button, { size: 'large', shape: 'circle', icon: react_1["default"].createElement(icons_1.GithubOutlined, null), href: github, target: '_blank' }),
                website && react_1["default"].createElement(antd_1.Button, { size: 'large', shape: 'circle', icon: react_1["default"].createElement(icons_1.HomeOutlined, null), href: website, target: '_blank' })))));
};
exports["default"] = PostInfo;
