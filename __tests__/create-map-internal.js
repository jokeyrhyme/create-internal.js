/* @flow */
'use strict';

const createMapInternal = require('../index.js').createMapInternal;

test('createMapInternal', () => {
  expect(typeof createMapInternal).toBe('function');
});

test('internal = createMapInternal()', () => {
  const internal = createMapInternal();
  expect(typeof internal).toBe('function');
});

test('internal(a).abc = 123', () => {
  const internal = createMapInternal();
  const a = {};
  const b = {};

  internal(a).set('abc', 123);

  expect(internal(a).get('abc')).toBe(123);
  expect(internal(b).get('abc')).not.toBeDefined();
});

test('a = createMapInternal(); b = createMapInternal()', () => {
  const a = createMapInternal();
  const b = createMapInternal();
  const obj = {};

  a(obj).set('abc', 123);

  expect(a(obj).get('abc')).toBe(123);
  expect(b(obj).get('abc')).not.toBeDefined();
});
