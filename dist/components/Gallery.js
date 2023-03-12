"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../Sass/Components/Gallery.scss");
var _logementList = _interopRequireDefault(require("./logementList"));
var _ = _interopRequireDefault(require("./404"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Gallery(_ref) {
  var _ref$showLogement = _ref.showLogement,
    showLogement = _ref$showLogement === void 0 ? true : _ref$showLogement,
    _ref$show = _ref.show404,
    show404 = _ref$show === void 0 ? false : _ref$show;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "gallery"
  }, showLogement && /*#__PURE__*/_react.default.createElement(_logementList.default, null), show404 && /*#__PURE__*/_react.default.createElement(_.default, null));
}
var _default = Gallery;
exports.default = _default;