"use strict";
exports.__esModule = true;
var react_1 = require("react");
var postComment_1 = require("../../../components/common/postComment");
var commentTree_1 = require("../../../components/common/commentTree");
var react_i18next_1 = require("react-i18next");
require("./index.scss");
var CommentBox = function (props) {
    var t = react_i18next_1.useTranslation().t;
    var comments = props.comments;
    return (react_1["default"].createElement("div", { className: "cb__container card" },
        react_1["default"].createElement(postComment_1["default"], null),
        react_1["default"].createElement(commentTree_1["default"], { comments: comments })));
};
exports["default"] = CommentBox;
