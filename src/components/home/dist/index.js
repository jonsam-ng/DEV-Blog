"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_document_title_1 = require("react-document-title");
var antd_1 = require("antd");
var react_i18next_1 = require("react-i18next");
var Posts = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../posts'); }); });
var Righter = react_1.lazy(function () { return Promise.resolve().then(function () { return require('./components/righter'); }); });
var Home = function () {
    // const [light, { toggle }] = useBoolean(false);
    // console.log(chunk(['a', 'b', 'c', 'd'], 2));
    var t = react_i18next_1.useTranslation().t;
    return (react_1["default"].createElement(react_document_title_1["default"], { title: t('dev_community') },
        react_1["default"].createElement(react_1.Fragment, null,
            react_1["default"].createElement(antd_1.Row, { gutter: 20 },
                react_1["default"].createElement(antd_1.Col, { className: "gutter-row", span: 6 },
                    react_1["default"].createElement("div", { style: { border: '2px solid red' } }, "\u5DE6\u4FA7\u4FA7\u8FB9\u680F")),
                react_1["default"].createElement(antd_1.Col, { className: "gutter-row", span: 12 },
                    react_1["default"].createElement(Posts, null)),
                react_1["default"].createElement(antd_1.Col, { className: "gutter-row", span: 6 },
                    react_1["default"].createElement(Righter, null))))));
};
exports["default"] = Home;
