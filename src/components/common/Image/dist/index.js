"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.scss");
var Image = function (props) {
    var img = react_1.useRef();
    var initProps = {
        url: props.url || '',
        onErr: props.onErr || function () { },
        lazy: props.lazy || false,
        className: props.className || ''
    };
    return (react_1["default"].createElement("div", { className: "img__container " + initProps.className, style: props.style },
        react_1["default"].createElement("img", { src: initProps.url, onError: initProps.onErr, alt: "" })));
};
exports["default"] = Image;
