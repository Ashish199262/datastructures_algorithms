/*Container With Most Water
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
// [1,8,6,2,5,4,8,3,7]
min = (a, b) => {
  if (a < b)
    return a;
  else if (b < a)
    return b;
  else return a;
}
maxArea = (height) => {
  let maximumArea = 0;
  let currentArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j <= i; j++) {
      currentArea = (((i + 1) - (j + 1)) * (min(height[j], height[i])));

      if (currentArea > maximumArea)
        maximumArea = currentArea;
    }
  }
  return maximumArea;
};

let result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result);