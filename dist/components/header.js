"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../Sass/Components/header.scss");
require("../Sass/Components/nav_header.scss");
var _logo = _interopRequireDefault(require("./logo"));
var _nav_header2 = _interopRequireDefault(require("./nav_header"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Header() {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement(_logo.default, null), /*#__PURE__*/_react.default.createElement(_nav_header2.default, null));
}
var _default = Header;
exports.default = _default;