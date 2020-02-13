// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// longestPalindrome = (s) => {
//   let palinMap = new Map();
//   let longestSubPalin = "";


//   for (let i = 0; i < s.length; i++) {
//     let palStr = "";

//     for (let j = i; j < s.length; j++) {
//       palStr += s[j];
//       if (palStr.length % 2 === 0) {
//         if (palStr.slice(0, palStr.length / 2) === Array.from(palStr.slice(palStr.length / 2)).reverse().join('')) {
//           // palinMap.set(palStr, palStr.length)
//           if (palStr.length > longestSubPalin.length)
//             longestSubPalin = palStr;
//         }

//       } else if ((palStr.length + 1) % 2 === 0) {
//         let mid = Math.floor(palStr.length / 2);
//         if (palStr.slice(0, mid) === Array.from(palStr.slice(mid + 1)).reverse().join('')) {
//           // palinMap.set(palStr, palStr.length)
//           if (palStr.length > longestSubPalin.length)
//             longestSubPalin = palStr;
//         }
//       }
//     }
//   }
//   // for (var [key, value] of palinMap) {
//   //   console.log(key + ' = ' + value);
//   // }
//   return longestSubPalin;
// };

/*
Longest Palindrome

*/

// longestPalindrome = (s) => {
//   let longestSubPalin = "";


//   for (let i = 0; i < s.length; i++) {
//     let palStr = "";

//     for (let j = i; j < s.length; j++) {
//       palStr += s[j];

//       if (palStr === Array.from(palStr).reverse().join('')) {
//         if (longestSubPalin.length < palStr.length) {
//           longestSubPalin = palStr;
//         }
//       }
//     }
//   }
//   console.log(longestSubPalin);
//   return longestSubPalin;
// }

// longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth")

// longestPalindromeV1 = (s) => {
//   let i = 0;

//   let longestPalin = "";
//   while (i !== s.length) {
//     let j = s.length;
//     while (j >= i) {
//       let str = s.slice(i, j);
//       //console.log(str);
//       if (str === Array.from(str).reverse().join('')) {
//         if (longestPalin.length < str.length)
//           longestPalin = str;

//       }
//       j--;
//     }
//     i++;

//   }
//   console.log(longestPalin);
// }
//longestPalindromeV1("babad");
// longestPalindromeV1("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth");

longestPalindromeV2 = (s) => {
  let prevStr = '';
  let palinStr = '';
  let longestPossiblePalindrome = '';
  Array.from(s).map((char, index) => {

    prevStr += char;

    if (index < s.length - 2 && prevStr[prevStr.length - 1] === s[index]) {

      let i = prevStr.length;
      let j = index;
      while (i > 0) {
        if (prevStr[i - 1] === s[j]) {
          palinStr += prevStr[i - 1];
          palinStr = s[j] + palinStr;
        } else break;
        j++;
        i--;
      }

      if (longestPossiblePalindrome.length < palinStr.length)
        longestPossiblePalindrome = palinStr;

      palinStr = '';
    }


    return 1;
  });

  console.log(longestPossiblePalindrome);
  return longestPossiblePalindrome;
}

//longestPalindromeV2("bcadcb");
longestPalindromeV2("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth");
