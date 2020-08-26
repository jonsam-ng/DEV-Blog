"use strict";
exports.__esModule = true;
/*
 * @Descripttion:
 * @version: 注册路由
 * @Author: wuqingshan
 * @Date: 2020-08-25 17:53:41
 * @LastEditors: wuqingshan
 * @LastEditTime: 2020-08-25 20:14:11
 */
var react_1 = require("react");
var Home = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../components/home'); }); });
var Article = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../components/article'); }); });
var routerMap = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        showHeader: true
    },
    {
        path: '/post/:id',
        name: 'Article',
        component: Article,
        showHeader: true
    },
];
exports["default"] = routerMap;
