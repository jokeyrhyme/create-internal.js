/* @flow */
'use strict';

/* ::
type MapObject = { [id:string]: any }
*/

module.exports = function createInternal() {
  const map /* : WeakMap<Object, MapObject> */ = new WeakMap();
  return function(object /* : Object */) /* : MapObject */ {
    const values = map.get(object) || {};
    if (!map.has(object)) {
      map.set(object, values);
    }
    return values;
  };
};
