/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Note:

The number of nodes in the given list will be between 1 and 100.

 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class Node {
  constructor(element) {
    this.val = element;
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
}
let middleNode = (head) => {
  let size = head === null ? 0 : 1;
  if (size === 0)
    return 0;
  let currentNode = head;
  let obj = {};

  while (currentNode) {

    obj[size - 1] = currentNode.val;
    currentNode = currentNode.next;
    size++;
  }
  if ((size - 1) % 2 === 0) {
    let valsArray = Object.values(obj);

    return valsArray.slice(((size - 1) / 2), valsArray.length + 1);
  }
  else {
    let valsArray = Object.values(obj);

    return valsArray.slice(Math.floor((size - 1) / 2));
  }
}

let linkedListOne = new LinkedList();
linkedListOne.addItem(1);
linkedListOne.addItem(2);
linkedListOne.addItem(3);
linkedListOne.addItem(4);
linkedListOne.addItem(5);

console.log(middleNode(linkedListOne.head));