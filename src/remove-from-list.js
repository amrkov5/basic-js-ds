const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
// }

function removeKFromList(l, k) {
  let cur = l;
  let prev = null;
  let index = 0;
  let indexArr = [];
  while(cur) {
    if (cur.value === k) {
      indexArr.unshift(index);
    }
    index += 1;
    cur = cur.next;
  }
  indexArr.forEach((el) => {
    cur = l;
    index = 0;
    if (el === 0) {
      l = cur.next;
    } else {
      while (index < el) {
        prev = cur;
        cur = cur.next;
        index += 1
      }
      prev.next = cur.next;
    }
  });
  return l;
  // let next = null;
  // while (cur) {
  //   if (cur.value === k && !prev) {
  //     l = l.next;
  //     cur = l;
  //   }
  //   if (cur.value === k && prev) {

  //   }
  //   cur = cur.next;
  // }

  // console.debug(cur);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
 