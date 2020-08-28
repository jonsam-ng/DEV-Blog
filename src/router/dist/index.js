"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/**
 * @Author wuqingshan
 * @Description 根路由入口
 * @Compatibility
 * @Date 2020-08-25 18:10:39 Tuesday
 */
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var routerMap_1 = require("./routerMap");
var Result404 = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../components/common/404/result404'); }); });
var Header = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../components/header'); }); });
var Footer = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../components/footer'); }); });
var mapRouters = function (routerMap) {
    return routerMap.map(function (item, index) { return (react_1["default"].createElement(react_router_dom_1.Route, __assign({}, item, { key: index }))); });
};
var Routers = function () { return (react_1["default"].createElement(react_router_dom_1.HashRouter, null,
    react_1["default"].createElement(Header, null),
    react_1["default"].createElement("div", { className: "App_Body" },
        react_1["default"].createElement("div", { className: "CenterAxios" },
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Redirect, { from: '/', to: '/home', exact: true }),
                mapRouters(routerMap_1["default"]),
                react_1["default"].createElement(react_router_dom_1.Route, { component: Result404 })))),
    react_1["default"].createElement(Footer, null))); };
exports["default"] = Routers;
