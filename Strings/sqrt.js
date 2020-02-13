/**
 * Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
 */

let squareRoot = (x) => {
  let sqrt = -1;
  let i = 1;
  while (i * i <= x) {
    i++;
  }
  return i - 1;
}

console.log(squareRoot(8))