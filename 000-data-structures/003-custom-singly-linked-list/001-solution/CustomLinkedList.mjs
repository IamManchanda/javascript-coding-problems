/**
 * Custom Singly Linked List
 */

class CustomLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }

  insertAt(index, data) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    let current = this.head;
    let previous = null;

    let i = 0;
    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = new Node(data, current);
  }

  insertAfter(prevNode, data) {
    if (!prevNode) {
      return;
    }

    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }

  insertBefore(nextNode, data) {
    if (!nextNode) {
      return;
    }

    const newNode = new Node(data, nextNode);
    let current = this.head;
    let previous = null;

    while (current !== nextNode) {
      previous = current;
      current = current.next;
    }

    previous.next = newNode;

    if (nextNode === this.head) {
      this.head = newNode;
    }
  }

  printLinkedList() {
    let str = '';

    let current = this.head;
    while (current) {
      str += current.data + ' -> ';
      current = current.next;
    }

    str += 'null';

    return str;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default CustomLinkedList;