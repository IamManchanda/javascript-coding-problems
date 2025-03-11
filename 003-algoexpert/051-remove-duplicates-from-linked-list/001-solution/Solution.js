/**
 * Remove Duplicates From Linked List
 * https://www.algoexpert.io/questions/remove-duplicates-from-linked-list
 *
 * Approach: Iterative
 * Time complexity: O(n)
 * Space complexity: O(1)
 * where, n is the number of nodes in the linked list
 */

export class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;

    while (currentNode !== null) {
      let temp = currentNode.next;

      while (temp !== null && temp.value === currentNode.value) {
        temp = temp.next;
      }

      currentNode.next = temp;
      currentNode = temp;
    }

    return linkedList;
  }
}

export default Solution;
