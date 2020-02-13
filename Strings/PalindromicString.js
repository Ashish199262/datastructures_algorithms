isPalindrome = () => {
  let s = process.argv[2];
  let i = 0;
  let j = s.length - 1;
  let isPalindrome = true;
  while (i <= j) {
    if (s[i].toLowerCase() != s[j].toLowerCase())
      return false;
    i++;
    j--;
  }
  return isPalindrome;

}

let result = isPalindrome();
console.log(result);