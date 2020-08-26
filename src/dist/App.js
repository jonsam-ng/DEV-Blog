"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("./router");
var index_1 = require("./stores/index");
var mobx_react_1 = require("mobx-react");
var antd_1 = require("antd");
// import CircleLoading from './components/common/loading/circleLoading';
require("./App.scss");
// import * as Sentry from '@sentry/browser';
// const onError = e => {
//   Sentry.withScope(scope => {
//     scope.setExtras({ componentStack: e.message }); 
//     // 因为我用的是tsx，对类型要求的比较严格，所以才会写成对象的方式传参，componentStack是componentDidcatch的error参数的key
//     Sentry.captureException(e.error);
//   });
// };
// // 必须要用addEventListener，并且第三个参数为true，不然错误无法冒泡到app.jsx中
// window.addEventListener('error', onError, true);
var App = function (props) {
    var _a = index_1["default"](), baseStoreDecorate = _a.baseStoreDecorate, baseStore = _a.baseStore;
    var idx = baseStore.idx, strIdx = baseStore.strIdx, add = baseStore.add;
    return (react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement(antd_1.Spin, { tip: "Loading...", style: { marginTop: '2%' } }) },
        react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement(router_1["default"], null),
            react_1["default"].createElement(antd_1.BackTop, null))));
};
exports["default"] = mobx_react_1.observer(App);
