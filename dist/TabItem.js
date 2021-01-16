"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 5px;\n  padding: 5px 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabItem = /*#__PURE__*/_react["default"].memo(function (props) {
  var text = props.text,
      index = props.index,
      selectedIndex = props.selectedIndex,
      onSelect = props.onSelect;
  var isSelected = index === selectedIndex;
  return /*#__PURE__*/_react["default"].createElement(Item, {
    onClick: function onClick() {
      return onSelect(index);
    },
    isSelected: isSelected
  }, text);
});

exports.TabItem = TabItem;

var Item = _styledComponents["default"].button(_templateObject());