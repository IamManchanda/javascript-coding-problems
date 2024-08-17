import CustomQueue from "./CustomQueue.mjs";

const queue = new CustomQueue();

queue.enqueue(1);
console.log(queue.printQueue());

console.log('');

queue.enqueue(2, 3, 4, 5);
console.log(queue.printQueue());

console.log('');

queue.dequeue();
console.log(queue.printQueue());

console.log('');

console.log(queue.peek());

console.log('');

console.log(queue.size());

console.log('');

console.log(queue.isEmpty());

console.log('');

console.log(queue.contains(3));
console.log(queue.contains(6));

console.log('');

queue.reverse();
console.log(queue.printQueue());

console.log('');

queue.clear();
console.log(queue.printQueue());

console.log('');

console.log(queue.size());

console.log('');

console.log(queue.isEmpty());
