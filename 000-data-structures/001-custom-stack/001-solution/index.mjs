import CustomStack from "./CustomStack.mjs";

const stack = new CustomStack();

stack.push(1);
console.log(stack.printStack());

console.log('');

stack.push(2, 3, 4, 5);
console.log(stack.printStack());

console.log('');

stack.pop();
console.log(stack.printStack());

console.log('');

console.log(stack.peek());

console.log('');

console.log(stack.size());

console.log('');

console.log(stack.isEmpty());

console.log('');

console.log(stack.contains(3));
console.log(stack.contains(6));

console.log('');

stack.reverse();
console.log(stack.printStack());

console.log('');

stack.clear();
console.log(stack.printStack());

console.log('');

console.log(stack.size());

console.log('');

console.log(stack.isEmpty());
