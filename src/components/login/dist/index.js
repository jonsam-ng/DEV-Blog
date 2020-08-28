"use strict";
exports.__esModule = true;
var react_1 = require("react");
var rainbowdev_png_1 = require("../../assets/images/rainbowdev.png");
var react_router_dom_1 = require("react-router-dom");
var react_i18next_1 = require("react-i18next");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
require("./index.scss");
var Login = function () {
    var t = react_i18next_1.useTranslation().t;
    var _a = react_router_dom_1.useRouteMatch(), path = _a.path, url = _a.url;
    var form = antd_1.Form.useForm()[0];
    return (react_1["default"].createElement("div", { className: "login__container" },
        react_1["default"].createElement("div", { className: "lo__banner--wrapper" },
            react_1["default"].createElement("img", { src: rainbowdev_png_1["default"], alt: "dev_banner" }),
            react_1["default"].createElement("h1", null, t('welcome_banner')),
            react_1["default"].createElement("h2", null, t('welcome_detail'))),
        react_1["default"].createElement("div", { className: "lo__login--wrapper" },
            react_1["default"].createElement("ul", { className: 'lo__login--tabs' },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.NavLink, { to: url, exact: true, activeClassName: 'active' }, t('login'))),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.NavLink, { to: url + "/new", exact: true, activeClassName: 'active' }, t('signup')))),
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: path },
                    react_1["default"].createElement("div", { className: "lo__login--box" },
                        react_1["default"].createElement("p", { className: 'lo__login--tip' }, t('have_account')),
                        react_1["default"].createElement(antd_1.Form, { form: form, layout: "vertical" },
                            react_1["default"].createElement(antd_1.Form.Item, { label: t('email'), required: true },
                                react_1["default"].createElement(antd_1.Input, { placeholder: t('email_placeholder') })),
                            react_1["default"].createElement(antd_1.Form.Item, { label: t('password'), required: true },
                                react_1["default"].createElement(antd_1.Input, { type: 'password', placeholder: t('password_placeholder') })),
                            react_1["default"].createElement(antd_1.Form.Item, { className: 'lo__login--remme' },
                                react_1["default"].createElement("label", null,
                                    react_1["default"].createElement(antd_1.Switch, { defaultChecked: true }),
                                    react_1["default"].createElement("span", null, t('remember_me')))),
                            react_1["default"].createElement(antd_1.Form.Item, { className: 'lo__login--now' },
                                react_1["default"].createElement(antd_1.Button, { type: "primary" }, t('login')))),
                        react_1["default"].createElement(antd_1.Divider, null),
                        react_1["default"].createElement("div", { className: "lo__social--wrapper" },
                            react_1["default"].createElement("p", null, t('social_login_tip')),
                            react_1["default"].createElement("div", { className: "loginbox__wrapper--btns" },
                                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.GithubOutlined, null), size: 'large', onClick: function () { } }, t('gh_login')),
                                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.WechatOutlined, null), size: 'large' }, t('wechat_login')))),
                        react_1["default"].createElement("div", { className: "lo__forget--pass" },
                            react_1["default"].createElement("p", null,
                                react_1["default"].createElement("b", null,
                                    react_1["default"].createElement("i", null, t('gotget_password'))))))),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: path + "/new" },
                    react_1["default"].createElement("div", { className: "lo__login--box" },
                        react_1["default"].createElement("p", { className: 'lo__login--tip' }, t('signup_tip')),
                        react_1["default"].createElement(antd_1.Form, { form: form, layout: "vertical" },
                            react_1["default"].createElement(antd_1.Form.Item, { label: t('email'), required: true },
                                react_1["default"].createElement(antd_1.Input, { placeholder: t('email_placeholder') })),
                            react_1["default"].createElement(antd_1.Form.Item, { label: t('password'), required: true },
                                react_1["default"].createElement(antd_1.Input, { type: 'password', placeholder: t('password_placeholder') })),
                            react_1["default"].createElement(antd_1.Form.Item, { label: t('check_password'), required: true },
                                react_1["default"].createElement(antd_1.Input, { type: 'password', placeholder: t('re_password_placeholder') })),
                            react_1["default"].createElement(antd_1.Form.Item, { label: t('captcha'), required: true },
                                react_1["default"].createElement(antd_1.Input, { type: 'password', placeholder: t('captcha_placeholder') })),
                            react_1["default"].createElement(antd_1.Form.Item, { className: 'lo__login--remme' },
                                react_1["default"].createElement("label", null,
                                    react_1["default"].createElement(antd_1.Switch, { defaultChecked: true }),
                                    react_1["default"].createElement("span", null, t('login_after_signup')))),
                            react_1["default"].createElement(antd_1.Form.Item, { className: 'lo__login--now' },
                                react_1["default"].createElement(antd_1.Button, { type: "primary" }, t('signup')))),
                        react_1["default"].createElement(antd_1.Divider, null),
                        react_1["default"].createElement("div", { className: "lo__social--wrapper" },
                            react_1["default"].createElement("p", null, t('social_login_tip')),
                            react_1["default"].createElement("div", { className: "loginbox__wrapper--btns" },
                                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.GithubOutlined, null), size: 'large', onClick: function () { } }, t('gh_login')),
                                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.WechatOutlined, null), size: 'large' }, t('wechat_login'))))))))));
};
exports["default"] = Login;
