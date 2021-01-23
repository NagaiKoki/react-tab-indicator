/**
 * funtion for calculate transformX width
 * e.g [170, 110, 170, 380] -> [0, 170, 280, 450, 830]
 * @param {number[]} widthMap the array width of each tab
 * @rerurn {number[]}
 */
export const calcTransformXWidth = (widthMap: number[]): number[] => {
  let results: number[] = [0, widthMap[0]];

  widthMap.reduce((prev, next, i) => {
    results.push(prev + next);
    return prev + next;
  });
  results.pop();
  return results;
};
