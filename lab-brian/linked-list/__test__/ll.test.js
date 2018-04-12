'use strict';

const LinkedList = require('../index.js').LinkedList;
const LinkNode = require('../index.js').LinkNode;


require('jest');


describe('linked list methods', function() {
  beforeEach(done => {
    this.ll = new LinkedList();
    this.ll.insertFront(new LinkNode(7));
    this.ll.insertFront(new LinkNode(6));
    this.ll.insertFront(new LinkNode(5));
    done();
  });
  afterEach(done => {
    this.ll.delete;
    done();
  });
  describe('ll', () => {
    it('should create a new linked list', done => {
      expect(new LinkedList()).toEqual({base: null});
      done();
    })
  });

  describe('insertFront', () => {
    it('should add item to the front of the ll', done => {
      expect(this.ll.insertFront(new LinkNode(4))).toEqual([1,2,3,4,5]);
      done();
    })
  });

  describe('insertBack', () => {
    it('should add item to the back of the ll', done => {
      expect(this.ll.insertFront(new LinkNode(8))).toEqual([1,2,3,4,5]);
      done();
    })
  });

  describe('find', () => {
    it('should return the val if it is in the ll', done => {
      expect(this.ll.find(5)).toEqual(5);
      done();
    })
    it('should return null if the value is not in the ll', done => {
      expect(this.ll.find(5)).toEqual(false);
      done();
    })
  });
});