/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
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
// function ListNode(val) {
//       this.val = val;
//       this.next = null;
//   }
var deleteDuplicates = function (head) {
  let currentNode = head;
  while (currentNode != null && currentNode.next != null) {
    if (currentNode.next.data === currentNode.data) {
      currentNode.next = currentNode.next.next;
    }
    else currentNode = currentNode.next;
  }
  return currentNode;
};