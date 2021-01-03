export const calcTransformXWidth = (widthMap: number[]) => {
  let results: number[] = [0, widthMap[0]];

  widthMap.reduce((prev, next, i) => {
    results.push(prev + next);
    return prev + next;
  });
  results.pop();
  return results;
};
