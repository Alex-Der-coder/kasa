"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logo = _interopRequireDefault(require("./logo"));
var _Privacity = _interopRequireDefault(require("./Privacity"));
require("../Sass/Components/Footer.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// remplacez "votre-logo" par le nom de votre objet logo

function Footer() {
  return /*#__PURE__*/_react.default.createElement("footer", {
    id: "page_end"
  }, /*#__PURE__*/_react.default.createElement(_logo.default, {
    isFooter: true
  }), /*#__PURE__*/_react.default.createElement(_Privacity.default, null));
}
var _default = Footer;
exports.default = _default;