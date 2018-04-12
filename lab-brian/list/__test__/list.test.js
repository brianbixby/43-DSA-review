'use strict';

const newList = require('../index.js').newList;
const copyList = require('../index.js').copyList;
const pushToList = require('../index.js').pushToList;
const listPop = require('../index.js').listPop;

require('jest');

let myList = [1,2,3];


describe('list methods (aka array methods)', function() {
  beforeEach(done => {
    this.list = myList;
    done();
  });
  afterEach(done => {
    this.list.delete;
    done();
  });
  describe('newList', () => {
    it('should create a new array Object', done => {
      expect(newList()).toEqual([]);
      done();
    })
  });

  describe('pushToList', () => {
    it('should add items to theList', done => {
      expect(pushToList([4,5], this.list)).toEqual([1,2,3,4,5]);
      done();
    })

    it('should throw an error when you do not push an array to the list', done => {
      expect(() => {
        pushToList(4, this.list);
      }).toThrow();
      done();
    });
  });

  describe('copyList', () => {
    it('should copy the list', done => {
      expect(copyList(this.list)).toEqual([1,2,3]);
      done();
    })

    it('should throw an error when you do not copyList on an array', done => {
      expect(() => {
        copyList({});
      }).toThrow();
      done();
    });
  });

  describe('listPop', () => {
    it('should remove the last item from the list', done => {
      expect(listPop(this.list)).toEqual([1,2]);
      done();
    })

    it('should throw an error when you do not perform list pop on anarray', done => {
      expect(() => {
        listPop({});
      }).toThrow();
      done();
    });
  });
});