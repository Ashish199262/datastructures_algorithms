//t is number of test cases

//n is number of students

//s is the list of the students

calculateMinimumHappiness = () => {
  let s = [5, 6, 2, 1, 8, 9];
  let length = s.length - 1;
  let max = 0;
  while (length > 0) {

    let _eachRotatedArray = rotateToLeftByOne(s);

    length--;
  }

}


rotateToLeftByOne = (s) => {
  let temp = s[0];
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i + 1];
  }
  s[s.length - 1] = temp;
  return s;
}

calculateMinimumHappiness();
