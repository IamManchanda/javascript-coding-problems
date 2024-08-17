/**
 * CustomStack using Arrays
 */

class CustomStack {
  constructor() {
    this.stack = [];
  }

  push(...items) {
    this.stack.push(...items);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains(element) {
    return this.stack.includes(element);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }

    let str = '';

    for (let i = 0; i < this.stack.length; i++) {
      if (i === this.stack.length - 1) {
        str += this.stack[i];
        break;
      }

      str += this.stack[i] + '\n';
    }

    return str;
  }
}

export default CustomStack;
