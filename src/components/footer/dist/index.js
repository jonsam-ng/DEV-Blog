"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var react_i18next_1 = require("react-i18next");
var icons_1 = require("@ant-design/icons");
var rainbowdev_png_1 = require("../../assets/images/rainbowdev.png");
var footer_fun_png_1 = require("../../assets/images/footer_fun.png");
require("./index.scss");
var Footer = function () {
    var t = react_i18next_1.useTranslation().t;
    // TODO 完善外链信息
    var siteLinks = [
        {
            title: 'Home',
            links: [
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
            ]
        },
        {
            title: 'Home',
            links: [
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
            ]
        },
        {
            title: 'Home',
            links: [
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
                {
                    name: 'Home',
                    url: ''
                },
            ]
        }
    ];
    return (react_1["default"].createElement("div", { className: "foot__container" },
        react_1["default"].createElement(antd_1.Row, { gutter: 16 },
            react_1["default"].createElement(antd_1.Col, { span: 8, className: 'footer_logo--wrapper' },
                react_1["default"].createElement("img", { src: rainbowdev_png_1["default"], alt: "footer_logo" }),
                react_1["default"].createElement("p", null, t('made_by_heart')),
                react_1["default"].createElement("p", null, t('website_desc')),
                react_1["default"].createElement("div", { className: "foot__contact-grp" },
                    react_1["default"].createElement(antd_1.Button, { type: "link", icon: react_1["default"].createElement(icons_1.GithubOutlined, null) }),
                    react_1["default"].createElement(antd_1.Button, { type: "link", icon: react_1["default"].createElement(icons_1.WechatOutlined, null) }),
                    react_1["default"].createElement(antd_1.Button, { type: "link", icon: react_1["default"].createElement(icons_1.MailOutlined, null) }),
                    react_1["default"].createElement(antd_1.Button, { type: "link", icon: react_1["default"].createElement(icons_1.PhoneOutlined, null) })),
                react_1["default"].createElement("p", null, t('website_copyright'))),
            react_1["default"].createElement(antd_1.Col, { span: 12, className: 'footer__links--wrapper' }, siteLinks.map(function (_a, index) {
                var title = _a.title, links = _a.links;
                return (
                // 外链组
                react_1["default"].createElement("div", { className: 'footer__link--grp', key: index },
                    react_1["default"].createElement("h1", null, title),
                    react_1["default"].createElement(antd_1.Divider, null),
                    react_1["default"].createElement("ul", null, links.map(function (_a, index) {
                        var name = _a.name, url = _a.url;
                        return (react_1["default"].createElement("li", { key: index },
                            react_1["default"].createElement("a", { href: url, rel: "noopener noreferrer", target: '_blank' }, name)));
                    }))));
            })),
            react_1["default"].createElement(antd_1.Col, { span: 4, className: 'footer__fun--wrapper' },
                react_1["default"].createElement("img", { src: footer_fun_png_1["default"], alt: "footer_fun", className: 'footer__fun-img' })))));
};
exports["default"] = Footer;
