import CustomStack from '../CustomStack';

describe('CustomStack', () => {
  let stack;

  beforeEach(() => {
    stack = new CustomStack();
  });

  test('push items to the stack', () => {
    stack.push(1, 2, 3);
    expect(stack.size()).toBe(3);
  });

  test('pop item from the stack', () => {
    stack.push(1, 2, 3);
    expect(stack.size()).toBe(3);

    const popped = stack.pop();
    expect(popped).toBe(3);
    expect(stack.size()).toBe(2);
  });

  test('peek the top item', () => {
    stack.push(1, 2, 3);
    expect(stack.size()).toBe(3);

    const peeked = stack.peek();
    expect(peeked).toBe(3);
    expect(stack.size()).toBe(3);
  });

  test('check if stack.isEmpty is working correctly', () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('clear the stack', () => {
    stack.push(1, 2, 3);
    expect(stack.size()).toBe(3);

    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test('check if the stack contains an element', () => {
    stack.push(1, 2, 3);
    expect(stack.contains(2)).toBe(true);
    expect(stack.contains(4)).toBe(false);
  });

  test('reverse the stack', () => {
    stack.push(1, 2, 3);
    expect(stack.size()).toBe(3);

    stack.reverse();
    expect(stack.size()).toBe(3);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
  });

  test('printStack when stack is not empty', () => {
    stack.push(1, 2, 3);
    const stackPrint = stack.printStack();
    expect(stackPrint).toBe('1\n2\n3');
  });

  test('printStack when stack is empty', () => {
    const stackPrint = stack.printStack();
    expect(stackPrint).toBe('Stack is empty');
  });
});
