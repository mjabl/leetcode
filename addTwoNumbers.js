function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode();
  let currentNode = dummyHead;
  let x = 0;
  let y = 0;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || carry) {
    if (l1) {
      x = l1.val;
      l1 = l1.next;
    } else {
      x = 0;
    }
    if (l2) {
      y = l2.val;
      l2 = l2.next;
    } else {
      y = 0;
    }
    sum = x + y + carry;
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
    carry = Math.floor(sum / 10);
  }
  return dummyHead.next;
};

let l1 = new ListNode(6, new ListNode(2));
let l2 = new ListNode(7, new ListNode(2));
console.log(addTwoNumbers(l1, l2));
