/**
 * Custom Queue using Arrays
 * Also includes double-ended queue methods
 */

class CustomQueue {
  constructor() {
    this.queue = [];
  }

  addFirst(item) {
    this.queue.unshift(item);
  }

  addLast(...items) {
    this.queue.push(...items);
  }

  enqueue(...items) {
    this.addLast(...items); // this.queue.push(...items);
  }

  removeFirst() {
    return this.queue.shift();
  }

  removeLast() {
    return this.queue.pop();
  }

  dequeue() {
    return this.removeFirst(); // this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  contains(element) {
    return this.queue.includes(element);
  }

  reverse() {
    this.queue.reverse();
  }

  printQueue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }

    let str = '';

    for (let i = 0; i < this.queue.length; i++) {
      if (i === this.queue.length - 1) {
        str += this.queue[i];
        break;
      }

      str += this.queue[i] + ' <- ';
    }

    return str;
  }
}

export default CustomQueue;
