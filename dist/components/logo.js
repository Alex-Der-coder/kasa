"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../Sass/Components/logo.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Logo(_ref) {
  var isFooter = _ref.isFooter;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "logo ".concat(isFooter ? "footer-logo" : "")
  });
}
var _default = Logo;
exports.default = _default;