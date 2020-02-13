/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/


reverse = (x) => {
  let revNumber = 0;
  let num = parseInt(x, 10);
  let temp = 0;
  while (num != 0) {
    revNumber = num % 10
    num = Math.floor(num / 10);
    temp = temp * 10 + revNumber;

  }
  console.log(temp)
  return temp;

}

reverse('123');