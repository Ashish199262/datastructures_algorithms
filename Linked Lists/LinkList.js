let middleElementInLinkedList = require('./MedianOfALinkedList');

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addItem(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {

    if (index > 0 && index > this.size) {
      return false;
    }
    else {
      let node = new Node(element);
      let iterator = 0;
      let current = this.head;
      let previous = null;
      while (iterator < index) {
        previous = current;
        current = current.next;


        iterator++;
      }

      node.next = current;
      previous.next = node;

      this.size++;
    }
  }
  removeFrom(location) {
    //assuming location is zero based
    let current = this.head;
    let iterator = 0;
    let previous;
    while (iterator < location) {
      previous = current;
      current = current.next;

      iterator++;
    }
    this.size--;
    previous.next = current.next;


  }
  removeElement(element) {
    let current = this.head;
    let previous = null;
    while (current.next !== null) {
      if (current.element === element) {
        if (previous === null) {
          this.head = current.next;

        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }

    return -1;
  }
  indexOf(element) {
    let current = this.head;
    let iterator = 0;
    while (current.next !== null) {
      if (current.element === element) {
        console.log(`Element ${element} found at pos ${iterator}`);
        return iterator;
      }
      current = current.next;
      iterator++;
    }
    return -1;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }


}

detectALoop = (linkedList) => {
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
let linkedListOne = new LinkedList();
linkedListOne.addItem(2);
linkedListOne.addItem(4);
linkedListOne.addItem(3);
let current = linkedListOne.head;
while (current.next !== null) {
  current = current.next;
}
current.next = linkedListOne.head;
console.log(detectALoop(linkedListOne));
let linkedListTwo = new LinkedList();
linkedListTwo.addItem(5);
linkedListTwo.addItem(6);
linkedListTwo.addItem(8);
linkedListTwo.addItem(7);
console.log(linkedListTwo.printList());
console.log(middleElementInLinkedList(linkedListTwo));
addTwoNumbers = (l1, l2) => {
  let currentL1 = l1.head;
  let currentL2 = l2.head;
  let stringForl1 = "";
  let stringForl2 = "";
  while (currentL1) {
    stringForl1 += currentL1.element;
    currentL1 = currentL1.next;
  }
  while (currentL2) {
    stringForl2 += currentL2.element;
    currentL2 = currentL2.next;
  }
  let reversedResult = Array.from((parseInt(Array.from(stringForl1).reverse().join(''), 10) +
    parseInt(Array.from(stringForl2).reverse().join(''), 10)).toString()).reverse();

  let iterator = 0;

  let head = null;
  while (iterator != reversedResult.length) {
    let node = new Node(reversedResult[i])
    if (head === null) {
      head = node;
    }
    else {
      current = head;
      while (current.next != null) {
        current = current.next;
      }
      current = node;
    }
    iterator++;
  }

}
//addTwoNumbers(linkedListOne, linkedListTwo);