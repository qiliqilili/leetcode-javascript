// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  let minNode = head;
  let nextNode = head;
  while (nextNode) {
    if (minNode.val > nextNode.val) {
      let tempNode = nextNode.next;
      nextNode.next = minNode;
      minNode.next = tempNode;
    }
    if (minNode.val === nextNode.val) {
      minNode.next = nextNode.next;
    }
    nextNode = nextNode.next;
  }
  return head;
};

function makeList(arr) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  let res = [];

  arr.reduce((pre, cur) => {
    pre.push(new ListNode(pre, new ListNode(cur)));
  }, []);
}

let list1 = makeList([1, 1, 2]);
console.log(list1);
// console.log(deleteDuplicates(list1));
