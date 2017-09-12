# create-internal.js [![npm](https://img.shields.io/npm/v/create-internal.svg?maxAge=2592000)](https://www.npmjs.com/package/create-internal) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/create-internal.js.svg?branch=master)](https://travis-ci.org/jokeyrhyme/create-internal.js)

simple storage and access of private values, powered by WeakMaps


## Example

```js
const createInternal = require('create-internal');

// never export `internal`,
// as any code with access to it can access the "private" data within
const internal = createInternal();

class MyClass {
  constructor () {
    Object.assign(internal(this), {
      // accessible to code with this exact `internal` in scope
      privateProperty: 'value'
    });
    Object.assign(this, {
      // accessible to any code that can access the constructed object
      publicProperty: 'value'
    });
  }

  method () {
    const { privateProperty } = internal(this);
    // TODO: do something with privateProperty
  }
}
```


## Usage


We use [`WeakMap`s](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) as the underlying store, which means that any value that is not a [primitive type](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) can be a key, e.g. `Object`, `Array`, `Map`, `Set`, `Function`, etc


### `createInternal()`

returns a function that takes an object and returns a private object associated with it

```js
const createInternal = require('create-internal');
const internal = createInternal(); // never export this

const publicObject = {};
const privateObject = internal(publicObject);
privateObject.privateProperty = 'privateValue';
```


### `createMapInternal()`

returns a function that takes an object and returns a private `Map` associated with it

```js
const { createMapInternal } = require('create-internal');
const internal = createMapInternal(); // never export this

const publicObject = {};
const privateMap = internal(publicObject);
privateMap.set('privateProperty', 'privateValue');
```


## See Also

-   [Mozilla contributor's guide for private properties](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Private_Properties)

-   [namespace](https://www.npmjs.com/package/namespace)
