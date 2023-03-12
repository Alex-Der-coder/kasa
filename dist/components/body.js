"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Gallery = _interopRequireDefault(require("./Gallery"));
require("../Sass/Components/_section_1.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// <div style={{ position: "absolute", width: "1240px", height: "1095px", left: "100px", top: "171px" }}>

function Body(_ref) {
  var _ref$showGallery = _ref.showGallery,
    showGallery = _ref$showGallery === void 0 ? true : _ref$showGallery,
    _ref$isAboutPage = _ref.isAboutPage,
    isAboutPage = _ref$isAboutPage === void 0 ? false : _ref$isAboutPage;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "about"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section1 ".concat(isAboutPage ? "section1-about" : "section1-home")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section1-inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section1-text"
  }, !isAboutPage && /*#__PURE__*/_react.default.createElement("p", null, "Chez vous, partout et ailleurs")))), showGallery && /*#__PURE__*/_react.default.createElement(_Gallery.default, null));
}
var _default = Body;
exports.default = _default;