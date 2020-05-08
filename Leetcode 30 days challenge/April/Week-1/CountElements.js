let countElements = (arr) => {
  let obj = null;

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!obj) {
      obj = {};
      obj[arr[i]] = 0;

    }
    else {
      obj[arr[i]] = 0;
      let keysInObj = Object.keys(obj);
      for (let j = 0; j < keysInObj.length; j++) {

        if (keysInObj[j] + 1 == arr[i] || keysInObj[j] == arr[i] + 1)
          count++;
      }

    }
  }
  console.log(obj);
  console.log(count);
}

countElements([7, 1, 5, 3, 6, 4]);