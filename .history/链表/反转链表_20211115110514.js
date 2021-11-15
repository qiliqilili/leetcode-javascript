let list = makeList([1, 2, 3, 4, 5]);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left >= right) return head;

  return head;
};

reverseBetween(list.head, 2, 4);
console.log(list.print());
