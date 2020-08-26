"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var antd_1 = require("antd");
require("./index.scss");
var postNavData = {
    items: ['feed', 'week', 'month', 'year', 'infinity', 'latest']
};
var PostNav = function (props) {
    var t = react_i18next_1.useTranslation().t;
    return (react_1["default"].createElement("div", { className: "postnav__container" },
        react_1["default"].createElement("h1", null, t('posts')),
        react_1["default"].createElement("div", { className: "postnav__nav--wrapper" },
            react_1["default"].createElement(antd_1.Menu, { defaultSelectedKeys: ['0'], mode: 'horizontal', theme: 'light', className: 'postnav__nav--menu' }, postNavData.items.map(function (item, index) {
                return (react_1["default"].createElement(antd_1.Menu.Item, { key: index }, t(item)));
            })))));
};
exports["default"] = PostNav;
