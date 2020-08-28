"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Image_1 = require("../../../components/common/Image");
var HTMLRender_1 = require("../../../components/common/HTMLRender");
var icons_1 = require("@ant-design/icons");
var react_i18next_1 = require("react-i18next");
require("./index.scss");
var Comment = function (props) {
    var t = react_i18next_1.useTranslation().t;
    var comment = props.comment, _a = props.style, style = _a === void 0 ? {} : _a, _b = props.className, className = _b === void 0 ? '' : _b;
    var user = comment.user, commentDetail = comment.comment;
    var userID = user.userID, avatar = user.avatar, name = user.name;
    var commentID = commentDetail.commentID, time = commentDetail.time, like = commentDetail.like, content = commentDetail.content;
    return (react_1["default"].createElement("div", { className: "comment__container " + className, style: style },
        react_1["default"].createElement("div", { className: "comment__user--wrapper" },
            react_1["default"].createElement("div", { className: "user__avatar--left" },
                react_1["default"].createElement(Image_1["default"], { url: avatar, className: 'comment__user--avatar' }),
                react_1["default"].createElement("span", null, name)),
            react_1["default"].createElement("div", { className: "user__date--right" },
                react_1["default"].createElement("span", null, time),
                react_1["default"].createElement(icons_1.MoreOutlined, null))),
        react_1["default"].createElement(HTMLRender_1["default"], { html: content }),
        react_1["default"].createElement("div", { className: "comment__reply-wrapper" },
            react_1["default"].createElement("div", { className: "reply__count--left" },
                react_1["default"].createElement("p", null,
                    react_1["default"].createElement(icons_1.HeartOutlined, { className: 'clickable' }),
                    react_1["default"].createElement("span", null, like))),
            react_1["default"].createElement("div", { className: "reply__right" },
                react_1["default"].createElement("span", null, t('reply'))))));
};
exports["default"] = Comment;
