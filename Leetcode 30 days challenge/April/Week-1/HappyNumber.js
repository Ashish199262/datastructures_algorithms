/**
 *   Happy Number
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */

/**
* @param {number} n
* @return {boolean}
*/
//Accepted
let squareOfDigits = (n) => {
  let num = n;
  let remainder = -1;
  let digitSquare = 0;
  while (num != 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    digitSquare = digitSquare + remainder * remainder;
  }
  return digitSquare;
}
let isHappy = (n) => {
  try {
    let num = squareOfDigits(n);
    console.log(num);
    if (num == 1) return true;

    else
      return isHappy(num);
  } catch (e) {
    return false;
  }
}

console.log(isHappy(2));