/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

let findJudge = (N, trust) => {
  // let townJudgeObj = {};
  // if (trust.length === 0) {
  //   console.log(N);
  //   return N;
  // }
  // else {
  //   let indexZeroObj = {};
  //   for (let trustArr of trust) {
  //     console.log(townJudgeObj)
  //     indexZeroObj[trustArr[0]] = 1;
  //     if (!indexZeroObj.hasOwnProperty(trustArr[1])) {
  //       if (townJudgeObj.hasOwnProperty(trustArr[1]))
  //         townJudgeObj[trustArr[1]] += 1;
  //       else
  //         townJudgeObj[trustArr[1]] = 1;
  //     }
  //     // if (townJudgeObj.hasOwnProperty(trustArr[1]))
  //     //   townJudgeObj[trustArr[1]] += 1;
  //     if (indexZeroObj.hasOwnProperty(trustArr[0]) && townJudgeObj.hasOwnProperty(trustArr[0]))
  //       delete townJudgeObj[trustArr[0]]
  //     if (indexZeroObj.hasOwnProperty(trustArr[1]) && townJudgeObj.hasOwnProperty(trustArr[1]))
  //       delete townJudgeObj[trustArr[1]]
  //   }
  //   console.log(townJudgeObj)
  //   let objArr = Object.keys(townJudgeObj);
  //   for (let i = 0; i < objArr.length; i++) {
  //     if ((townJudgeObj[objArr[i]] != (N - 1)))
  //       delete townJudgeObj[objArr[i]]
  //   }
  // }

  // if (Object.keys(townJudgeObj).length === 1) {
  //   console.log(Object.keys(townJudgeObj)[0]);
  //   return Object.keys(townJudgeObj)[0];
  // }
  // else {
  //   console.log(-1);
  //   return -1;
  // }

  let obj = {};
  for (_eachItem of trust) {


    if (obj.hasOwnProperty(_eachItem[0]))
      obj[_eachItem[0]] -= 1;
    else
      obj[_eachItem[0]] = 1;
    if (obj.hasOwnProperty(_eachItem[1]))
      obj[_eachItem[1]] += 1;
    else
      obj[_eachItem[1]] = 1;

  }
  console.log(obj);
  let objArr = Object.keys(obj);

  console.log(objArr);
  for (let i = 0; i < N; ++i) {
    if (obj[objArr[i]] === N - 1) return objArr[i];
  }
  return -1;
}

console.log(findJudge(2,
  [[1, 2]]))