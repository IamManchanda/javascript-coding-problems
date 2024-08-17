/**
 * CustomLinkedList
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