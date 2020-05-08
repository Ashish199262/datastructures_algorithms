/**
 * @param {number[]} nums
 * @return {number}
 */
//Accepted
let majorityElement = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  const objArr = Object.keys(obj);
  let maxNumber = obj[objArr[0]];
  let maxElement = objArr[0];
  for (let i = 0; i < objArr.length; i++) {
    if (maxNumber < obj[objArr[i]]) {
      maxElement = objArr[i];
      maxNumber = obj[objArr[i]];

    }
  }
  // console.log(maxElement);
  return maxElement;
}

majorityElement([2, 2, 1, 1, 1, 2, 2])