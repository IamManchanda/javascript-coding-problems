/**
 * LRU Cache
 * https://leetcode.com/problems/lru-cache/
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.cache = new Map();
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key);
    this.#moveToHead(node);

    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const existingNode = this.cache.get(key);
      existingNode.value = value;
      this.#moveToHead(existingNode);
      return;
    }

    if (this.cache.size === this.capacity) {
      this.#removeNode(this.tail);
    }

    const newNode = new Node(key, value);
    this.#addNode(newNode);
  }

  #moveToHead(node) {
    if (node === this.head) return;

    this.#removeNode(node);
    this.#addNode(node);
  }

  #addNode(node) {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.cache.set(node.key, node);
  }

  #removeNode(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    this.cache.delete(node.key);
  }

  log() {
    const arr = [];
    let current = this.head;

    while (current) {
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
