'use strict';

const ReverseLinkedList = require('../reverseLinkedList');

const testLinkedList = new ReverseLinkedList(4);
testLinkedList.insertAtHead(3);
testLinkedList.insertAtHead(2);
testLinkedList.insertAtHead(1);

const testNotLL = [1, 2, 3, 4];

describe('reverseLinkedList.js', () => {
  test('Returned successfully reversed linked list using array method', () => {
    const result = testLinkedList.reverseLinkedListWithArray(testLinkedList);
    expect(result.head.value).toEqual(4);
    expect(result.head.next.value).toEqual(3);
    expect(result.head.next.next.value).toEqual(2);
    expect(result.head.next.next.next.value).toEqual(1);
  });
  test('Returned undefined because of bad input array method', () => {
    const result = testLinkedList.reverseLinkedListWithArray(testNotLL);
    expect(result).toEqual(undefined);
  });
  test('Returned successfully reversed linked list using recursion method', () => {
    const result = testLinkedList
      .reverseLinkedListWithRecursion(testLinkedList, testLinkedList.head, null);
    expect(result.head.value).toEqual(4);
    expect(result.head.next.value).toEqual(3);
    expect(result.head.next.next.value).toEqual(2);
    expect(result.head.next.next.next.value).toEqual(1);
  });
  test('Returned undefined because of bad input recursion method', () => {
    const result = testLinkedList.reverseLinkedListWithRecursion(testNotLL);
    expect(result).toEqual(undefined);
  });
  test('Returned successfully reversed linked list by reordering the connections', () => {
    const result = testLinkedList.reverseLinkedListByManualReorder(testLinkedList);
    expect(result.head.value).toEqual(4);
    expect(result.head.next.value).toEqual(3);
    expect(result.head.next.next.value).toEqual(2);
    expect(result.head.next.next.next.value).toEqual(1);
  });
  test('Returned undefined because of bad input reordering method', () => {
    const result = testLinkedList.reverseLinkedListByManualReorder(testNotLL);
    expect(result).toEqual(undefined);
  });
});
