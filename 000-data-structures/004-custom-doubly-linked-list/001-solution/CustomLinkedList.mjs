/**
 * Custom Doubly Linked List
 */

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
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
    this.head = new Node(data, null, this.head);

    if (!this.tail) {
      this.tail = this.head;
    } else {
      this.head.next.prev = this.head;
    }

    this.length++;
  }

  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
    } else {
      this.tail.next = new Node(data, this.tail);
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

    const newNode = new Node(data, prevNode, prevNode.next);
    prevNode.next = newNode;
    newNode.next.prev = newNode;

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

    const newNode = new Node(data, nextNode.prev, nextNode);
    nextNode.prev.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.length--;
  }

  removeLast() {
    if (!this.tail) {
      return;
    }

    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    this.length--;
  }

  removeAt(index) {
    if (index === 0) {
      this.removeFirst();
    } else if (index === this.length - 1) {
      this.removeLast();
    } else {
      const prevNode = this.#getNodeAt(index - 1);
      this.removeAfter(prevNode);
    }
  }

  removeAfter(prevNode) {
    if (!prevNode || !prevNode.next) {
      return;
    }

    prevNode.next = prevNode.next.next;
    
    if (prevNode.next) {
      prevNode.next.prev = prevNode;
    } else {
      this.tail = prevNode;
    }

    this.length--;
  }

  removeBefore(nextNode) {
    if (!nextNode || nextNode === this.head) {
      return;
    }

    if (nextNode === this.tail) {
      this.removeLast();
    } else {
      this.removeAfter(nextNode.prev.prev);
    }
  }

  contains(key) {
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
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
}

export default CustomLinkedList;
