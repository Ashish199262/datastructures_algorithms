let matchPairOfSocks = (arr) => {
  let numOfPairs = 0;
  let matchingMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!matchingMap.has(arr[i])) {
      matchingMap.set(arr[i], 1);
    }
    else if (matchingMap.has(arr[i])) {
      matchingMap.set(arr[i], matchingMap.get(arr[i]) + 1);
    }
  }
  for (let value of matchingMap.values()) {
    numOfPairs += Math.floor(value / 2);
  }
  return numOfPairs;
}

console.log(matchPairOfSocks([1, 2, 1, 2, 1, 3, 2]));