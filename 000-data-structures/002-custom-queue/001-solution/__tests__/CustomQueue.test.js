import CustomQueue from '../CustomQueue';

describe('CustomQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new CustomQueue();
  });

  test('enqueue items to the queue', () => {
    queue.enqueue(1, 2, 3);
    expect(queue.size()).toBe(3);
  });

  test('dequeue item from the queue', () => {
    queue.enqueue(1, 2, 3);
    const dequeued = queue.dequeue();
    expect(dequeued).toBe(1);
    expect(queue.size()).toBe(2);
  });

  test('peek the front item', () => {
    queue.enqueue(1, 2, 3);
    const peeked = queue.peek();
    expect(peeked).toBe(1);
  });

  test('check if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('clear the queue', () => {
    queue.enqueue(1, 2, 3);
    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test('check if the queue contains an element', () => {
    queue.enqueue(1, 2, 3);
    expect(queue.contains(2)).toBe(true);
    expect(queue.contains(4)).toBe(false);
  });

  test('reverse the queue', () => {
    queue.enqueue(1, 2, 3);
    queue.reverse();
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(1);
  });

  test('printQueue when queue is not empty', () => {
    queue.enqueue(1, 2, 3);
    const queuePrint = queue.printQueue();
    expect(queuePrint).toBe('1 <- 2 <- 3');
  });

  test('printQueue when queue is empty', () => {
    const queuePrint = queue.printQueue();
    expect(queuePrint).toBe('Queue is empty');
  });
});
