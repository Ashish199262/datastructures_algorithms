/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */

/**
* @param {number[]} nums
* @return {integer}
*/
//Accepted
let singleNumber = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i]))
      delete obj[nums[i]]
    else
      obj[nums[i]] = 1;
  }
  return Object.keys(obj)[0];
}
let nums = [2, 2, 1];
let num = singleNumber(nums);
console.log(num);