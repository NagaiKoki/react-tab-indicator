/**
 * funtion for calculate transformX width
 * e.g [0, 170, 280, 450, 830]
 * @param widthMap the array width of each tab
 */
export const calcTransformXWidth = (widthMap: number[]) => {
  let results: number[] = [0, widthMap[0]];

  widthMap.reduce((prev, next, i) => {
    results.push(prev + next);
    return prev + next;
  });
  results.pop();
  return results;
};
