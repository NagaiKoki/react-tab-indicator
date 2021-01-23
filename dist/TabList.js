"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TabItem = require("./TabItem");

var _Indicator = require("./Indicator");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TabList = /*#__PURE__*/_react["default"].memo(function (props) {
  var items = props.items,
      borderColor = props.borderColor,
      borderHeight = props.borderHeight,
      transformSpeed = props.transformSpeed,
      onClick = props.onClick;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      transformXMap = _useState4[0],
      setTransformXMap = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      widthMap = _useState6[0],
      setWidthMap = _useState6[1];

  var itemRefs = (0, _react.useRef)([]);
  (0, _react.useEffect)(function () {
    var widthMap = itemRefs.current.map(function (item) {
      return item.clientWidth;
    });
    var calcTransformX = (0, _utils.calcTransformXWidth)(widthMap);
    setWidthMap(widthMap);
    setTransformXMap(calcTransformX);
  }, [itemRefs]);
  var handleSelectItem = (0, _react.useCallback)(function (index) {
    setSelectedIndex(index);
    onClick(index);
  }, []);
  var tabItems = (0, _react.useMemo)(function () {
    return items.map(function (item, i) {
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        key: i,
        ref: function ref(ele) {
          return ele ? itemRefs.current[i] = ele : undefined;
        }
      }, /*#__PURE__*/_react["default"].createElement(_TabItem.TabItem, {
        index: i,
        text: item,
        selectedIndex: selectedIndex,
        onSelect: handleSelectItem
      }));
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(ListWrapper, null, tabItems), /*#__PURE__*/_react["default"].createElement(IndicatorWrapper, null, /*#__PURE__*/_react["default"].createElement(_Indicator.TabIndicator, {
    transformX: transformXMap[selectedIndex],
    width: widthMap[selectedIndex],
    borderColor: borderColor,
    borderHeight: borderHeight,
    transformSpeed: transformSpeed
  })));
});

exports.TabList = TabList;

var Container = _styledComponents["default"].div(_templateObject());

var ListWrapper = _styledComponents["default"].ul(_templateObject2());

var Wrapper = _styledComponents["default"].li(_templateObject3());

var IndicatorWrapper = _styledComponents["default"].div(_templateObject4());