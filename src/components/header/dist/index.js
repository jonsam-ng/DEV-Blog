"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
require("./index.scss");
var Header = function (props) {
    var _a = react_i18next_1.useTranslation(), t = _a.t, i18n = _a.i18n;
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement("div", { className: 'header__container' },
        react_1["default"].createElement("div", { className: "header__wrapper--center" },
            react_1["default"].createElement("div", { className: "header__logo--left" },
                react_1["default"].createElement("div", { className: "header__blk--logo", onClick: function () { return history.push('/home'); } }, t('site_name')),
                react_1["default"].createElement(antd_1.Input.Search, { placeholder: t("search_tip"), onSearch: function (value) { return console.log(value); }, className: "header__input--search" })),
            react_1["default"].createElement("div", { className: "header__profle--right" },
                react_1["default"].createElement(antd_1.Button, { type: "primary", shape: "round", size: 'middle' }, t('write_a_post')),
                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.CommentOutlined, null), shape: "circle", size: 'middle' }),
                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.BellOutlined, null), shape: "circle", size: 'middle' }),
                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.MenuOutlined, null), shape: "circle", size: 'middle' }),
                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.TranslationOutlined, null), shape: "circle", size: 'middle', onClick: function () { return i18n.changeLanguage(i18n.language === 'en' ? 'zh_CN' : 'en'); } })))));
};
exports["default"] = Header;
