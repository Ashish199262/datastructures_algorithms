/**
 * @param str
 * @return object
 */

let occurencesInAString = (str) => {

  let obj = {};
  for (let i = 0; i < str.length; i++) {

    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]] += 1;
    } else obj[str[i]] = 1;
  }
  console.log(obj);
  return obj;
}
occurencesInAString("AAAAAAA");