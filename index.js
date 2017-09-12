/* @flow */
'use strict';

/* ::
type WeakMapKey =
  Array<any> | ArrayBuffer | DataView | Date | Error | Function |
  Map<any, any> | Object | Promise<any> | Proxy<any> | RegExp | Set<any>
type MapObject = { [id:string]: any }
*/

function createInternal() {
  const weakMap /* : WeakMap<WeakMapKey, MapObject> */ = new WeakMap();
  return function(value /* : WeakMapKey */) /* : MapObject */ {
    const values = weakMap.get(value) || {};
    if (!weakMap.has(value)) {
      weakMap.set(value, values);
    }
    return values;
  };
}

function createMapInternal() {
  const weakMap /* : WeakMap<WeakMapKey, Map<any, any>> */ = new WeakMap();
  return function(value /* : WeakMapKey */) /* : Map<any, any> */ {
    const values = weakMap.get(value) || new Map();
    if (!weakMap.has(value)) {
      weakMap.set(value, values);
    }
    return values;
  };
}

module.exports = createInternal;
module.exports.createInternal = createInternal;
module.exports.createMapInternal = createMapInternal;
