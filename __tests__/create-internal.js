/* @flow */
'use strict';

const createInternal = require('../index.js');

test('createInternal', () => {
  expect(typeof createInternal).toBe('function');
});

test('internal = createInternal()', () => {
  const internal = createInternal();
  expect(typeof internal).toBe('function');
});

test('internal(a).abc = 123', () => {
  const internal = createInternal();
  const a = {};
  const b = {};

  internal(a).abc = 123;

  expect(internal(a).abc).toBe(123);
  expect(internal(b).abc).not.toBeDefined();
});

test('a = createInternal(); b = createInternal()', () => {
  const a = createInternal();
  const b = createInternal();
  const obj = {};

  a(obj).abc = 123;

  expect(a(obj).abc).toBe(123);
  expect(b(obj).abc).not.toBeDefined();
});
