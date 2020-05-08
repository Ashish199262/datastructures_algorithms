/**
 * Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */

/*
*@param {string[]} strs
* @return {string[][]}
* 
*/
//Accepted
let groupAnagrams = (strs) => {
  let groupedAnagramsObject = {};
  let charCode = 0;
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let currObj = strs[i].split("").sort().join("");
    if (obj.hasOwnProperty(currObj))
      obj[currObj].push(strs[i]);
    else
      obj[currObj] = [strs[i]];

  }
  console.log(Object.values(obj));
};

groupAnagrams(["duh", "ill"]);