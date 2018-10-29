'use strict';

const Node = require('./lib/node');

module.exports = class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.currentNode = this.head;
    while (this.currentNode.next) {
      this.currentNode = this.currentNode.next;
    }
    this.tail = this.currentNode;
  }

  insertAtHead(value) {
    const node = new Node(value); // O(1)

    node.next = this.head; // O(1)
    this.head = node; // O(1)
    return this; // O(1)
  }

  reverseLinkedListWithArray(LL) {
    if (!LL.head) {
      return undefined;
    }
    const array = [];
    let currentNode = LL.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    array.reverse();
    const reversedLinkedList = new LinkedList(array[0]);
    let reversedCurrentNode = reversedLinkedList.head;
    for (let i = 1; i < array.length; i++) {
      reversedCurrentNode.next = new Node(array[i]);
      reversedCurrentNode = reversedCurrentNode.next;
    }
    return reversedLinkedList;
  }

  reverseLinkedListWithRecursion(LL, currentNode, prevNode) { // both O's(n)
    if (!LL.head) {
      return undefined;
    }
    LL.head = currentNode;
    if (currentNode.next) {
      this.reverseLinkedListWithRecursion(LL, currentNode.next, currentNode);
    }
    if (prevNode !== null) {
      prevNode.next = null;
    }
    currentNode.next = prevNode;
    return LL;
  }

  reverseLinkedListByManualReorder(LL) {
    if (!LL.head) {
      return undefined;
    }
    const saveTail = LL.tail;
    while (LL.head !== LL.tail) {
      let currentNode = LL.head;
      while (currentNode.next) {
        console.log(currentNode);
        if (currentNode.next === LL.tail) {
          currentNode.next = null;
          LL.tail.next = currentNode;
          LL.tail = currentNode;
        }
        if (currentNode.next === null) {
          break;
        }
        currentNode = currentNode.next;
      }
    }
    LL.head = saveTail;
    return LL;
  }
};
