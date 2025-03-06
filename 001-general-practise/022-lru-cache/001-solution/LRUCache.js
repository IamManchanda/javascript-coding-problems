/**
 * LRU Cache
 */

class Node {
  constructor(key, value, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);
    this.#removeNode(node);
    node.prev = null;
    node.next = this.head;

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;

    if (this.tail === null) {
      this.tail = node;
    }

    return node.value;
  }

  put(key, value) {
    if (this.length === this.capacity && !this.map.has(key)) {
      this.#removeNode(this.tail);
      this.length--;
    }

    if (this.map.has(key)) {
      this.#removeNode(this.map.get(key));
      this.length--;
    }

    const node = new Node(key, value, null, this.head);
    this.map.set(key, node);

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;

    if (this.tail === null) {
      this.tail = node;
    }

    this.length++;
  }

  #removeNode(node) {
    if (node === null) {
      return;
    }

    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }
  }

  debug() {
    let current = this.head;
    const arr = [];

    while (current !== null) {
      arr.push(current);
      current = current.next;
    }

    return arr.reduce((acc, curr) => {
      acc.set(curr.key, curr.value);
      return acc;
    }, new Map());
  }
}

export default LRUCache;
