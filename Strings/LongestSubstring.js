
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// lengthOfLongestSubstring = (s) => {
//   let mapOfSubstr = new Map();
//   let arrayOfInputStr = Array.from(s);
//   let count = 0;
//   for (let i = 0; i < arrayOfInputStr.length; i++) {
//     let str = "";
//     for (let j = i; j < arrayOfInputStr.length; j++) {
//       if (str.indexOf(arrayOfInputStr[j]) === -1) {
//         str += arrayOfInputStr[j];
//       }
//       else break;
//     }
//     mapOfSubstr.set(str, str.length);

//   }
//   for (var [key, value] of mapOfSubstr) {
//     console.log(key + ' = ' + value);
//   }

// }


lengthOfLongestSubstring(" ");