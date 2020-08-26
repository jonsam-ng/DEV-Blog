"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.scss");
var LoginBox = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../../../common/loginBox'); }); });
var Righter = function (props) {
    return (react_1["default"].createElement("div", { className: "homerit__container" },
        react_1["default"].createElement(LoginBox, null)));
};
exports["default"] = Righter;
