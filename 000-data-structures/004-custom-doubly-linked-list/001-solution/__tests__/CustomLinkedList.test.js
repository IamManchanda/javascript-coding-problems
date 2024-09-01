import CustomLinkedList from '../CustomLinkedList.js';

describe('CustomLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new CustomLinkedList();
  });

  test('insertFirst should add an element to the beginning of the list', () => {
    list.insertFirst(1);
    expect(list.printLinkedList()).toBe('1 -> null');
  });

  test('insertLast should add an element to the end of the list', () => {
    list.insertFirst(1);
    expect(list.printLinkedList()).toBe('1 -> null');

    list.insertLast(2);
    expect(list.printLinkedList()).toBe('1 -> 2 -> null');
  });

  test('insertAt should add an element at a specified index', () => {
    list.insertFirst(1);
    list.insertLast(2);
    expect(list.printLinkedList()).toBe('1 -> 2 -> null');

    list.insertAt(1, 3);
    expect(list.printLinkedList()).toBe('1 -> 3 -> 2 -> null');
  });

  test('insertAfter should add an element after a specified node', () => {
    list.insertFirst(1);
    list.insertLast(2);
    expect(list.printLinkedList()).toBe('1 -> 2 -> null');

    list.insertAfter(list.head, 3);
    expect(list.printLinkedList()).toBe('1 -> 3 -> 2 -> null');
  });

  test('insertBefore should add an element before a specified node', () => {
    list.insertFirst(1);
    list.insertLast(3);
    expect(list.printLinkedList()).toBe('1 -> 3 -> null');

    list.insertBefore(list.tail, 2);
    expect(list.printLinkedList()).toBe('1 -> 2 -> 3 -> null');
  });

  test('removeFirst should remove the first element of the list', () => {
    list.insertFirst(1);
    list.insertLast(2);
    expect(list.printLinkedList()).toBe('1 -> 2 -> null');

    list.removeFirst();
    expect(list.printLinkedList()).toBe('2 -> null');
  });

  test('removeLast should remove the last element of the list', () => {
    list.insertFirst(1);
    list.insertLast(2);
    expect(list.printLinkedList()).toBe('1 -> 2 -> null');

    list.removeLast();
    expect(list.printLinkedList()).toBe('1 -> null');
  });

  test('removeAt should remove an element at a specified index', () => {
    list.insertFirst(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.printLinkedList()).toBe('1 -> 2 -> 3 -> null');

    list.removeAt(1);
    expect(list.printLinkedList()).toBe('1 -> 3 -> null');
  });

  test('removeAfter should remove an element after a specified node', () => {
    list.insertFirst(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.printLinkedList()).toBe('1 -> 2 -> 3 -> null');

    list.removeAfter(list.head);
    expect(list.printLinkedList()).toBe('1 -> 3 -> null');
  });

  test('removeBefore should remove an element before a specified node', () => {
    list.insertFirst(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.printLinkedList()).toBe('1 -> 2 -> 3 -> null');

    list.removeBefore(list.tail);
    expect(list.printLinkedList()).toBe('1 -> 3 -> null');
  });

  test('contains should return true if the list contains a given value', () => {
    list.insertFirst(1);
    list.insertLast(2);
    expect(list.contains(1)).toBe(true);
    expect(list.contains(3)).toBe(false);
  });

  test('reverse should reverse the list', () => {
    list.insertFirst(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.printLinkedList()).toBe('1 -> 2 -> 3 -> null');

    list.reverse();
    expect(list.printLinkedList()).toBe('3 -> 2 -> 1 -> null');
  });

  test('size should return the number of elements in the list', () => {
    list.insertFirst(1);
    list.insertLast(2);
    expect(list.size()).toBe(2);
    list.insertLast(3);
    expect(list.size()).toBe(3);
  });

  test('isEmpty should return true if the list is empty', () => {
    expect(list.isEmpty()).toBe(true);
    list.insertFirst(1);
    expect(list.isEmpty()).toBe(false);
  });

  test('clear should remove all elements from the list', () => {
    list.insertFirst(1);
    list.insertLast(2);
    expect(list.printLinkedList()).toBe('1 -> 2 -> null');

    list.clear();
    expect(list.printLinkedList()).toBe('null');
    expect(list.isEmpty()).toBe(true);
  });
});
