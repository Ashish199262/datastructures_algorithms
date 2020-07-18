/**
 * @param {number[]} nums
 * @return {number}
 */

let singleNonDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    //There are two edge cases and one main case
    if (i == 0) {
      if (nums[1] - nums[0] !== 0)
        return nums[0]
    }
    else if (i == nums.length - 1) {
      if (nums[nums.length - 1] - nums[nums.length - 2] !== 0)
        return nums[nums.length - 1]
    }
    else {
      if (nums[i] - nums[i - 1] !== 0 && nums[i + 1] - nums[i] !== 0)
        return nums[i]
    }
  }
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))