/**
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false

 */

/**
 * @param {number} num
 * @return {boolean}
 */

let isPerfectSquare = (num) => {
  let numCtr = 0;
  while (numCtr * numCtr <= num) {
    if (numCtr * numCtr === num)
      return true;
    numCtr++;
  }
  return false;
}

console.log(isPerfectSquare(71))