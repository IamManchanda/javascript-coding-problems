import CustomLinkedList from './CustomLinkedList.mjs';

const customLinkedList = new CustomLinkedList();

customLinkedList.insertFirst(1);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertLast(2);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertLast(3);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertFirst(4);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertAt(2, 5);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertAfter(customLinkedList.head.next.next, 6);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertBefore(customLinkedList.head.next.next, 7);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertAfter(customLinkedList.head.next.next, 8);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.removeFirst();
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.removeLast();
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.removeAt(1);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.removeAfter(customLinkedList.head.next.next);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.removeBefore(customLinkedList.head.next);
console.log(customLinkedList.printLinkedList());

console.log('');

customLinkedList.insertFirst(6);
customLinkedList.insertLast(7);
console.log(customLinkedList.printLinkedList());

console.log('');
console.log(customLinkedList.contains(7));
console.log(customLinkedList.contains(3));

console.log('');
console.log(customLinkedList.size());

console.log('');
console.log(customLinkedList.isEmpty());

console.log('');
customLinkedList.reverse();
console.log(customLinkedList.printLinkedList());
