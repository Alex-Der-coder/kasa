"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _collapse = _interopRequireDefault(require("./collapse"));
require("../Sass/Components/collapse.scss");
require("../Sass/Components/about.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function About() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "body_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section1 section1-about"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section1-inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section1-text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement(_collapse.default, {
    title: "Fiabilit\xE9"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Les annonces post\xE9es sur Kasa garantissent une fiabilit\xE9 totale. Les photos sont conformes aux logements, et toutes les informations sont r\xE9guli\xE8rement v\xE9rifi\xE9es par nos \xE9quipes.")), /*#__PURE__*/_react.default.createElement(_collapse.default, {
    title: "Respect",
    isInitiallyOpen: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra\xEEnera une exclusion de notre plateforme.")), /*#__PURE__*/_react.default.createElement(_collapse.default, {
    title: "Service"
  }, /*#__PURE__*/_react.default.createElement("p", null, "La s\xE9curit\xE9 est la priorit\xE9 de Kasa. Aussi bien pour nos h\xF4tes que pour les voyageurs, chaque logement correspond aux crit\xE8res de s\xE9curit\xE9 \xE9tablis par nos services. En laissant une note aussi bien \xE0 l'h\xF4te qu'au locataire, cela permet \xE0 nos \xE9quipes de v\xE9rifier que les standards sont bien respect\xE9s. Nous organisons \xE9galement des ateliers sur la s\xE9curit\xE9 domestique pour nos h\xF4tes.")), /*#__PURE__*/_react.default.createElement(_collapse.default, {
    title: "Responsabilit\xE9"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Nous nous engageons \xE0 vous fournir des logements de qualit\xE9, des v\xE9rifications d'identit\xE9s et des avis v\xE9rifi\xE9s. Nous sommes l\xE0 pour vous aider \xE0 voyager en toute confiance."))));
}
var _default = About;
exports.default = _default;