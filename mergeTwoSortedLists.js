/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Check if there isn't list1
  if (!list1) {
    return list2;
  }

  // Check if there isn't list2
  if (!list2) {
    return list1;
  }

  // If there is both a list1 and list2 then we
  // create a new list to add to

  let head = null;
  let tmp = head;

  // Check which value is lower
  if (list1.val < list2.val) {
    tmp = head = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    tmp = head = new ListNode(list2.val);
    list2 = list2.next;
  }

  // Iterate while there's still items in both lists
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tmp.next = new ListNode(list1.val);
      list1 = list1.next;
      tmp = tmp.next;
    } else {
      tmp.next = new ListNode(list2.val);
      list2 = list2.next;
      tmp = tmp.next;
    }
  }

  // If list2 is empty add the rest of list1
  while (list1) {
    tmp.next = new ListNode(list1.val);
    list1 = list1.next;
    tmp = tmp.next;
  }

  // If list1 is empty add the rest of list2
  while (list2) {
    tmp.next = new ListNode(list2.val);
    list2 = list2.next;
    tmp = tmp.next;
  }

  return head;
};
