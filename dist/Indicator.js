"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  background: ", ";\n  transition: ", ";\n  transform: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabIndicator = function TabIndicator(_ref) {
  var transformX = _ref.transformX,
      width = _ref.width,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? "green" : _ref$borderColor,
      _ref$borderHeight = _ref.borderHeight,
      borderHeight = _ref$borderHeight === void 0 ? 3 : _ref$borderHeight,
      _ref$transformSpeed = _ref.transformSpeed,
      transformSpeed = _ref$transformSpeed === void 0 ? 300 : _ref$transformSpeed;
  return /*#__PURE__*/_react["default"].createElement(IndicatorBar, {
    transformX: transformX,
    width: width,
    borderColor: borderColor,
    borderHeight: borderHeight,
    transformSpeed: transformSpeed
  });
};

exports.TabIndicator = TabIndicator;

var IndicatorBar = _styledComponents["default"].div(_templateObject(), function (props) {
  return "".concat(props.borderHeight, "px");
}, function (props) {
  return "".concat(props.width, "px");
}, function (props) {
  return props.borderColor;
}, function (props) {
  return "all ".concat(props.transformSpeed, "ms 0s ease");
}, function (props) {
  return "translateX(".concat(props.transformX, "px)");
});