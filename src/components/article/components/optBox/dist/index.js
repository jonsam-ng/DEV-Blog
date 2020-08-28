"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
require("./index.scss");
var opts = [
    {
        icon: react_1["default"].createElement(icons_1.HeartOutlined, null),
        onclick: function () { }
    },
    {
        icon: react_1["default"].createElement(icons_1.PayCircleOutlined, null),
        onclick: function () { }
    },
    {
        icon: react_1["default"].createElement(icons_1.TagsOutlined, null),
        onclick: function () { }
    },
    {
        icon: react_1["default"].createElement(icons_1.ShareAltOutlined, null),
        onclick: function () { }
    },
];
var OptBox = function () {
    return (react_1["default"].createElement("div", { className: "optbox__container" }, opts.map(function (opt, index) { return (react_1["default"].createElement("div", { className: "opt__icon--wrapper", key: index, onClick: opt.onclick }, opt.icon)); })));
};
exports["default"] = OptBox;
