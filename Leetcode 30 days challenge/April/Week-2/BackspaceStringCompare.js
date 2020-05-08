/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
 */



/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
//Accepted
let backspacedString = (str) => {
  let s = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      if (i == 0)
        continue;
      else s.pop();
    }
    else {
      s.push(str[i]);
    }
  }
  return s.join('');
}
let backspaceCompare = (S, T) => {
  return backspacedString(S) === backspacedString(T)
}


// console.log(backspacedString("ab##"));
let str1 = "a#c";
let str2 = "b"
console.log(backspaceCompare(str1, str2));