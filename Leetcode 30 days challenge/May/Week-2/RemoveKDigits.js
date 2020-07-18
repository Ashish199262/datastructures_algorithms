/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

let removeKDigits = (num, k) => {
  let minNum = Number.MAX_SAFE_INTEGER;
  if (num.length === k)
    return "0";
  else {
    for (let i = 0; i < num.length; i++) {
      //three cases to take care of here
      if (i === 0) {
        let slicedStr = num.slice(i + k);
        console.log(slicedStr);
        if (parseInt(slicedStr) < minNum)
          minNum = parseInt(slicedStr);
      }
      else if ((i + k) - 1 === num.length - 1) {
        let slicedStr = num.slice(0, i + k - 1);
        // console.log(slicedStr);
        if (parseInt(slicedStr) < minNum)
          minNum = parseInt(slicedStr);

      }
      else {
        let slicedStr = num.slice(0, i).concat(num.slice(i + k));
        //  console.log(slicedStr);
        if (Number(slicedStr) < Number(minNum))
          minNum = parseInt(slicedStr);
      }
    }

  }

  return minNum.toString();
}

console.log(removeKDigits("10200", 1))