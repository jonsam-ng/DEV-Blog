"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
require("./index.scss");
var LoginBox = function (props) {
    var t = react_i18next_1.useTranslation().t;
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement("div", { className: "loginbox__container" },
        react_1["default"].createElement("div", { className: "loginbox__wrapper--title" }, t('join_site')),
        react_1["default"].createElement("div", { className: "loginbox__wrapper--btns" },
            react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.LoginOutlined, null), size: 'large', onClick: function () { return history.push('/login'); } }, t('login')),
            react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.UserAddOutlined, null), size: 'large' }, t('signup')))));
};
exports["default"] = LoginBox;
