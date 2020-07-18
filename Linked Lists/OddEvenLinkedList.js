/**
 * Odd Even Linked List
Solution
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
 */

/**
 * Definition for singly-linked list
 *  function ListNode(val,next) {
 *  this.val = (val ==undefined ? 0:val)
 *  this.next = (next ==undefined) ? null:next)
 * }
 */
/**
 *  @param {ListNode} head
 *  @return {ListNode}
 */

let oddEvenList = (head) => {
  if (head == null) return null;
  let oddNode = head;
  let evenNode = head.even;
  while (even != null && even.next != null) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;
    evenNode.next = oddNode.next;
  }
  oddNode.next = even.head;
  return head;
}