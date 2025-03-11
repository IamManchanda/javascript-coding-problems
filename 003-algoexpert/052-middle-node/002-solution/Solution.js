/**
 * Middle Node
 * https://www.algoexpert.io/questions/middle-node
 * 
 * Approach: Floyd's Tortoise and Hare Algorithm
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

export class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  middleNode(linkedList) {
    let slow = linkedList, fast = linkedList;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}

export default Solution;
