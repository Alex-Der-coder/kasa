"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Gallery = _interopRequireDefault(require("./Gallery"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PageNotFound = function PageNotFound() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Gallery.default, {
    showLogement: false,
    show404: true
  }));
};
var _default = PageNotFound;
exports.default = _default;