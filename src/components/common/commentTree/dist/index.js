"use strict";
exports.__esModule = true;
var react_1 = require("react");
var comment_1 = require("../../../components/common/comment");
require("./index.scss");
var CommentTree = function (props) {
    var comments = props.comments;
    return (react_1["default"].createElement("div", { className: "commt__container" }, comments.map(function (comment, index) { return (react_1["default"].createElement(comment_1["default"], { comment: comment, key: comment.comment.commentID })); })));
};
exports["default"] = CommentTree;
