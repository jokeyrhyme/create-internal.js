# create-internal.js [![npm](https://img.shields.io/npm/v/create-internal.svg?maxAge=2592000)](https://www.npmjs.com/package/create-internal) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/create-internal.js.svg?branch=master)](https://travis-ci.org/jokeyrhyme/create-internal.js)

simple storage and access of private values, powered by WeakMaps


## Example

```js
const createInternal = require('create-internal')

const internal = createInternal()

class MyClass {
  constructor () {
    Object.assign(internal(this), {
      // only accessible to code with this exact `internal` in scope
      privateProperty: 'value'
    })
    Object.assign(this, {
      // accessible to any code that can access the constructed object
      publicProperty: 'value'
    })
  }

  method () {
    const { privateProperty } = internal(this)
    // TODO: do something with privateProperty
  }
}
```


## See Also

-   [Mozilla contributor's guide for private properties](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Private_Properties)

-   [namespace](https://www.npmjs.com/package/namespace)
