/**
 * Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 */

/**
 * @param {string} s
 * @return {string}
 */

let frequencySort = (s) => {
  let objArr = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {

    const obj = objArr.find((_eachEntry) => {
      if (_eachEntry.hasOwnProperty(s[i]))
        return _eachEntry;
    })
    if (obj) {
      obj[s[i]] += s[i]
    }
    else objArr.push({ [s[i]]: s[i] })
  }
  objArr.sort((a, b) => {
    return Object.values(b)[0].length - Object.values(a)[0].length
  }).map(_eachObject => {
    str += Object.values(_eachObject)[0]
    return 1;
  }
  )
  console.log(str);
  return str;
};

frequencySort("cccaaa");