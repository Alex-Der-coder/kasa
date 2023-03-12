"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../Sass/Components/body_404.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Body_404() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Body_404"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "error"
  }, "404"), /*#__PURE__*/_react.default.createElement("p", {
    className: "page_notfound"
  }, "Oups! La page que vous demandez n'existe pas."), /*#__PURE__*/_react.default.createElement("p", {
    className: "back_to_home"
  }, "Retourner sur la page d\u2019accueil"));
}
var _default = Body_404;
exports.default = _default;