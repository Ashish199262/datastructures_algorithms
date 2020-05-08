/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
 */

/**
 * @param {string} s
 * @return {number}
 */
//Accepted
let firstUniqChar = (s) => {
  let stringObj = {};
  for (let i = 0; i < s.length; i++) {
    if (stringObj.hasOwnProperty(s[i])) {
      stringObj[s[i]]["index"] = i;
      stringObj[s[i]]["value"] += 1;
    }
    else {
      stringObj[s[i]] = { "index": i, "value": 1 };
    }


  }
  let arr = Object.values(stringObj)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["value"] === 1) {
      return arr[i]["index"]
    }
  }
  return -1;
}

firstUniqChar("loveleetcode")