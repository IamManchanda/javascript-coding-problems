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

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== this.tail) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;
  }
  
  removeAt(index) {
    if (index === 0) {
      this.removeFirst();
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

    previous.next = current.next;
  }

  removeAfter(prevNode) {
    if (!prevNode || !prevNode.next) {
      return;
    }

    prevNode.next = prevNode.next.next;
  }

  removeBefore(nextNode) {
    if (!nextNode) {
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== nextNode) {
      previous = current;
      current = current.next;
    }

    if (previous === this.head) {
      this.head = nextNode;
    }

    previous.next = nextNode;
  }

  search(key) {
    let current = this.head;

    while (current) {
      if (current.data === key) {
        return true;
      }

      current = current.next;
    }

    return false;
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