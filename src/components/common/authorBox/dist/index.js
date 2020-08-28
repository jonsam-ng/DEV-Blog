"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Image_1 = require("../../../components/common/Image");
var HTMLRender_1 = require("../../../components/common/HTMLRender");
var antd_1 = require("antd");
var react_i18next_1 = require("react-i18next");
require("./index.scss");
var AuthorBox = function (props) {
    var t = react_i18next_1.useTranslation().t;
    var user = props.user;
    var userID = user.userID, name = user.name, avatar = user.avatar, github = user.github, website = user.website, email = user.email, intro = user.intro, work = user.work, company = user.company, age = user.age, joinDate = user.joinDate, links = user.links, labels = user.labels, phone = user.phone;
    var infoItem = function (title, detail) {
        return (react_1["default"].createElement("div", { className: "ab__info--item" },
            react_1["default"].createElement("p", null, title),
            react_1["default"].createElement("p", null, detail)));
    };
    return (react_1["default"].createElement("div", { className: "authorbox__container card" },
        react_1["default"].createElement("div", { className: "ab__title--wrapper" },
            react_1["default"].createElement(Image_1["default"], { url: avatar, className: 'ab__user--avatar' }),
            react_1["default"].createElement("p", null, name)),
        intro && react_1["default"].createElement(HTMLRender_1["default"], { html: intro }),
        react_1["default"].createElement(antd_1.Button, { className: 'ab__btn--follow' }, t('follow')),
        joinDate && infoItem(t('joined'), joinDate.toString()),
        age && infoItem(t('age'), age.toString()),
        work && infoItem(t('work'), work),
        company && infoItem(t('company'), company),
        labels && infoItem(t('labels'), labels.reduce(function (pre, cur) {
            return pre + ' | ' + cur;
        }))));
};
exports["default"] = AuthorBox;
