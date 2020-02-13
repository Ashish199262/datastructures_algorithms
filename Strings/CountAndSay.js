/**
 * The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.
 */

let countAndSay = (n) => {
  let i = 1;
  let num = 1;
  while (i <= n) {
    if (i === 1) num = 1;
    else
      num = numberGenerator(num);
    i++;
  }
  return num;
};
let numberGenerator = (num) => {
  let count = 1;
  let prevElement;
  let numv1 = "";
  for (let i = 0; i < num.length; i++) {
    let currElement = num[i];
    // let prevElement = i === 0 ? currElement : prevElement;
    if (currElement === prevElement)
      count += 1;
    else if (currElement !== prevElement) {
      numv1 += `${count}${num[i]}`;
      count = 1;
    }

    prevElement = currElement;
  }

  return numv1;
}

console.log(numberGenerator("111211"));