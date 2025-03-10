/**
 * Middle Node
 * https://www.algoexpert.io/questions/middle-node
 * 
 * Approach: Counting Nodes
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
    let count = 0, currentNode = linkedList;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }

    const midCount = Math.floor(count / 2);
    let midNode = linkedList;

    for (let i = 0; i <= midCount - 1; i++) {
      midNode = midNode.next;
    }

    return midNode;
  }
}

export default Solution;
