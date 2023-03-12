"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logements = _interopRequireDefault(require("../logements.json"));
var _reactRouterDom = require("react-router-dom");
require("../Sass/Components/card.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function LogementList() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "logement-list"
  }, _logements.default.map(function (logement, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: "logement-card"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/".concat(logement.id)
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: logement.cover,
      alt: logement.description
    }), /*#__PURE__*/_react.default.createElement("h2", null, logement.title)));
  }));
}
var _default = LogementList;
exports.default = _default;