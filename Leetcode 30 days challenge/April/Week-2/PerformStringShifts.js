//Accepted
let stringRotator = (str, direction, numOfTimes) => {
  let s = str.split("");
  let count;

  if (direction == 0) {
    count = 1;
    while (count <= numOfTimes) {
      let temp = s[0];
      for (let i = 0; i < s.length; i++) {
        s[i] = s[i + 1];
      }
      s[s.length - 1] = temp;

      count++;
    }
  } //left shift
  else if (direction == 1) {
    count = 1;
    while (count <= numOfTimes) {
      let temp = s[s.length - 1];
      for (let i = s.length - 1; i > 0; i--) {
        s[i] = s[i - 1];
      }
      s[0] = temp;

      count++;
    }
  } //right shift  
  return s.join('');
}

let stringShift = (s, shift) => {
  for (let i = 0; i < shift.length; i++) {
    s = stringRotator(s, shift[i][0], shift[i][1])
  }
  console.log(s);
  return s;
}

stringShift("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]]);