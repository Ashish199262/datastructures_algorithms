/**
 * Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

Example 1:

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 

Example 2:

Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

Note:

The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/
 */
/**
 * @param {number} num
 * @return {string}
 */
//Accepted
let convertToBinaryArray = (num) => {
  let binaryArray = [];
  while (num > 1) {
    let binaryDigit = num % 2;
    binaryArray.push(binaryDigit);
    num = Math.floor(num / 2);

  }
  binaryArray.push(num);
  console.log(binaryArray);
  return binaryArray;
}

/**
 * @param {number} num
 * @return {number}
 */
let findComplement = (num) => {
  let binaryArray = convertToBinaryArray(num);
  let complementedNumber = 0;
  let count = binaryArray.length - 1;
  for (let i = binaryArray.length - 1; i >= 0; i--) {
    if (binaryArray[i] === 0) {
      complementedNumber += Math.pow(2, count) * 1
    } else {
      complementedNumber += Math.pow(2, count) * 0
    }

    count--;
  }
  console.log(complementedNumber);
  return complementedNumber;
}

findComplement(5);