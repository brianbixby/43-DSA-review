'use strict';

module.exports = exports = {};

exports.newList = () => [];

exports.copyList = arr => {
  if (!Array.isArray(arr)) throw new Error('expected array');
  return arr.map(a => a, []);
}

exports.pushToList = (arr, list) => {
  if (!Array.isArray(arr)) throw new Error('expected array');
  return [...list, ...arr];
};

exports.listPop = arr => {
  if (!Array.isArray(arr)) throw new Error('expected array');
  arr.pop();
  return arr;
}