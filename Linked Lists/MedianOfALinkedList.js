middleElementInLinkedList = (linkedList) => {
  let current = linkedList.head;
  let linkedListIndex = 0;
  let str = "";
  while (current) {

    str += current.element;
    current = current.next;

  }
  console.log(str);
  return str.length % 2 == 0 ? str[str.length / 2] : str[Math.floor(str.length / 2)];
}

module.exports = middleElementInLinkedList;