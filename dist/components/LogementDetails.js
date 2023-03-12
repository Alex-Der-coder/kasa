"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _logements = _interopRequireDefault(require("../logements.json"));
var _PageNotFound = _interopRequireDefault(require("./PageNotFound"));
var _Carrousel = _interopRequireDefault(require("./Carrousel"));
var _collapse = _interopRequireDefault(require("./collapse"));
require("../Sass/Components/collapse.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var LogementDetails = function LogementDetails(props) {
  var id = props.match.params.id;
  var logement = _logements.default.find(function (logement) {
    return logement.id === id;
  });
  return logement ? /*#__PURE__*/_react.default.createElement("div", {
    className: "body_logement_detail"
  }, /*#__PURE__*/_react.default.createElement(_Carrousel.default, {
    pictures: logement.pictures
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "about_title_name"
  }, /*#__PURE__*/_react.default.createElement("h1", null, logement.title), /*#__PURE__*/_react.default.createElement("p", null, logement.host.name), /*#__PURE__*/_react.default.createElement("img", {
    src: logement.host.picture,
    alt: logement.host.name
  })), /*#__PURE__*/_react.default.createElement("p", null, logement.location), /*#__PURE__*/_react.default.createElement("div", null, logement.tags.map(function (tag) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "span_tag",
      key: tag
    }, tag);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement(_collapse.default, {
    title: "Description"
  }, /*#__PURE__*/_react.default.createElement("p", null, logement.description)), /*#__PURE__*/_react.default.createElement(_collapse.default, {
    title: "\xC9quipements"
  }, /*#__PURE__*/_react.default.createElement("p", null, logement.equipments)))) : /*#__PURE__*/_react.default.createElement(_PageNotFound.default, null);
};
var _default = (0, _reactRouterDom.withRouter)(LogementDetails);
exports.default = _default;