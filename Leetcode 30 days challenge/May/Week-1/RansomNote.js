/**
 * Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

let canConstruct = (ransomNote, magazine) => {

  //Accepted
  let ransomNoteObj = {};
  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNoteObj.hasOwnProperty(ransomNote[i]))
      ransomNoteObj[ransomNote[i]] += 1;
    else
      ransomNoteObj[ransomNote[i]] = 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    if (ransomNoteObj.hasOwnProperty(magazine[i])) {
      if (ransomNoteObj[magazine[i]] !== 0) {
        ransomNoteObj[magazine[i]] -= 1;
      }
      if (ransomNoteObj[magazine[i]] === 0) {
        delete ransomNoteObj[magazine[i]];
      }
    }

  }

  if (Object.keys(ransomNoteObj).length === 0) {

    return true;
  } else {

    return false;
  }
}
/**
 * "fffbfg"
"effjfggbffjdgbjjhhdegh"
 */
canConstruct("aa", "aab")