"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_html_parser_1 = require("react-html-parser");
require("./index.scss");
// TODO html escape
var HTMLRender = function (props) {
    var html = props.html, escape = props.escape;
    return (react_1["default"].createElement("div", { className: "htr__container" }, react_html_parser_1["default"](html, {
        transform: function transform(node) {
            // 过滤 input 标签
            if (node.type === 'input') {
                return null;
            }
        }
    })));
};
exports["default"] = HTMLRender;
