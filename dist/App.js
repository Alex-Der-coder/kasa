"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _header = _interopRequireDefault(require("./components/header"));
var _body = _interopRequireDefault(require("./components/body"));
var _page_about = _interopRequireDefault(require("./components/page_about"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _PageNotFound = _interopRequireDefault(require("./components/PageNotFound"));
var _LogementDetails = _interopRequireDefault(require("./components/LogementDetails"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_header.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_body.default, {
    showGallery: true,
    isAboutPage: false
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/about"
  }, /*#__PURE__*/_react.default.createElement(_page_about.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/:id",
    component: _LogementDetails.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/404",
    component: _PageNotFound.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "*"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/404"
  }))), /*#__PURE__*/_react.default.createElement(_Footer.default, null)));
};
var _default = App;
exports.default = _default;