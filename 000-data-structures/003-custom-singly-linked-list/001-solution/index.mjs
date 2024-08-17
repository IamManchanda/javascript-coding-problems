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
