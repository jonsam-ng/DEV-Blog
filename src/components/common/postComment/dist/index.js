"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var antd_1 = require("antd");
require("./index.scss");
var PostComment = function () {
    var t = react_i18next_1.useTranslation().t;
    return (react_1["default"].createElement("div", { className: "cb__post--comment" },
        react_1["default"].createElement("div", { className: "pc__title--wrapper" },
            react_1["default"].createElement("h1", null, t('discussion')),
            react_1["default"].createElement(antd_1.Button, { shape: 'round' }, t('subscribe'))),
        react_1["default"].createElement(antd_1.Input.TextArea, { placeholder: t('comment_box_placeholder'), autoSize: { minRows: 3, maxRows: 6 } }),
        react_1["default"].createElement("div", { className: "cb__post--now" },
            react_1["default"].createElement("div", { className: "cb__post--more" }, "more"),
            react_1["default"].createElement("div", { className: "cb__post--btns" },
                react_1["default"].createElement(antd_1.Button, { shape: 'round' }, t('preview')),
                react_1["default"].createElement(antd_1.Button, { shape: 'round' }, t('submit'))))));
};
exports["default"] = PostComment;
