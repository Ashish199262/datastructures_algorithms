export default detectALoop = (linkedList) => {
  let current = linkedList.head;
  let detectedALoop = false;
  let prevTraversedNode = [];
  while (current) {
    if (current.next === null)
      return false;
    else if (prevTraversedNode.includes(current.next)) {
      return true;
    }
    prevTraversedNode.push(current.next);
    current = current.next;
  }
}