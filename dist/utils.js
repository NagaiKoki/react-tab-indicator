"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcTransformXWidth = void 0;

/**
 * funtion for calculate transformX width
 * e.g [170, 110, 170, 380] -> [0, 170, 280, 450, 830]
 * @param widthMap the array width of each tab
 */
var calcTransformXWidth = function calcTransformXWidth(widthMap) {
  var results = [0, widthMap[0]];
  widthMap.reduce(function (prev, next, i) {
    results.push(prev + next);
    return prev + next;
  });
  results.pop();
  return results;
};

exports.calcTransformXWidth = calcTransformXWidth;