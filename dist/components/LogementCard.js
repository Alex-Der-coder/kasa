"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function LogementCard(props) {
  var _props$logement = props.logement,
    cover = _props$logement.cover,
    title = _props$logement.title,
    description = _props$logement.description;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "logement-card"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: cover,
    alt: description
  }), /*#__PURE__*/_react.default.createElement("h2", null, title));
}
var _default = LogementCard;
exports.default = _default;