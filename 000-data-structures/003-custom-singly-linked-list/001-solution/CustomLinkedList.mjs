/**
 * Custom Singly Linked List
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CustomLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    
    if (!this.tail) {
      this.tail = this.head;
    }

    this.length++;
  }

  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }

    this.length++;
  }

  insertAt(index, data) {
    if (index === 0) {
      this.insertFirst(data);
    } else if (index === this.length) {
      this.insertLast(data);
    } else {
      const prevNode = this.#getNodeAt(index - 1);
      this.insertAfter(prevNode, data);
    }
  }

  insertAfter(prevNode, data) {
    if (!prevNode) {
      return;
    }

    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;

    if (prevNode === this.tail) {
      this.tail = newNode;
    }

    this.length++;
  }

  insertBefore(nextNode, data) {
    if (!nextNode) {
      return;
    }

    if (nextNode === this.head) {
      this.insertFirst(data);
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current !== nextNode) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      return;
    }

    const newNode = new Node(data, current);
    previous.next = newNode;
    this.length++;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      const prevNode = this.#getNodeAt(this.length - 2);
      prevNode.next = null;
      this.tail = prevNode;
    }

    this.length--;
  }
  
  removeAt(index) {
    if (index === 0) {
      this.removeFirst();
    } else {
      const previous = this.#getNodeAt(index - 1);
      previous.next = previous.next.next;

      if (index === this.length - 1) {
        this.tail = previous;
      }

      this.length--;
    }
  }

  removeAfter(prevNode) {
    if (!prevNode || !prevNode.next) {
      return;
    }

    prevNode.next = prevNode.next.next;

    if (!prevNode.next) {
      this.tail = prevNode;
    }

    this.length--;
  }

  removeBefore(nextNode) {
    if (!nextNode || nextNode === this.head) {
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current !== nextNode) {
      previous = current;
      current = current.next;
    }

    if (!previous) {
      this.head = nextNode;
    } else {
      previous.next = nextNode;
    }

    this.length--;
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

  reverse() {
    if (!this.head || !this.head.next) {
      return;
    }

    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
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

  #getNodeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }

    return current;

  }
}

export default CustomLinkedList;