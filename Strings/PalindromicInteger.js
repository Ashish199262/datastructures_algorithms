isPalindrome = (x) => {

  let reversedNumber = 0;
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  while (reversedNumber < x) {
    reversedNumber = reversedNumber * 10 + x % 10;
    x = Math.floor(x / 10);

  }
  return x === reversedNumber || x === Math.floor(reversedNumber / 10);
}
let result = isPalindrome(121);
console.log(result);