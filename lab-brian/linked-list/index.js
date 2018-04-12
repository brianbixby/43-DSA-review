'use strict';

module.exports = exports = {};

exports.LinkNode = class {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

exports.LinkedList = class {
  constructor() {
    this.base = null;
  }

  printList() {
    console.log(JSON.stringify(this));
  }
  
  insertFront(node) {
    let temp = this.base;
    this.base = node;
    this.base.next = temp;
  }

  insertBack(node) {
    let current = this.base;
    while(current.next !== null) {
      current = current.next
    }
    current.next = node;
  }

  find(val) {
    let current = this.base;
    let notFound = false;
    while(current.data !== val && !notFound){
      if(!current.next) return notFound=true;
      current=current.next;
    }
    if(!notFound) return notFound;
    return current.data;
  }
}


// let myList = new LinkList();
// myList.insertFront(4);
// myList.insertFront(3);
// myList.insertFront(2);
// myList.insertFront(1);
// console.log(findNode(myList, 2));