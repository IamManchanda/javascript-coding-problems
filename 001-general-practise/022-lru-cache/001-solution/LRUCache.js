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
    this.#moveToHead(node);

    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const existingNode = this.map.get(key);
      existingNode.value = value;
      this.#moveToHead(existingNode);
      
      return;
    }

    if (this.length === this.capacity) {
      this.#removeNode(this.tail);
    }

    const node = new Node(key, value);
    this.#addNode(node);
    this.map.set(key, node);
  }

  #moveToHead(node) {
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

    this.length++;
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

    this.map.delete(node.key);
    this.length--;
  }

  debug() {
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
