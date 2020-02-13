/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/

//"PAYPALISHIRING" 
// n/r = 3
// d/s = 1 d/s = n/r - 2
zigZagConversion = (s, numRows) => {
  let splitLen = numRows + (numRows - 2);
  let iterations = s.length / splitLen;



}