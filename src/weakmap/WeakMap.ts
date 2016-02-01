/// <reference path="./IWeakMap.ts"/>
/// <reference path="../utils/WeakMapUtils.ts"/>

/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  /**
   * A class used as a polyfill for the native
   * WeakMap object. Intended to be used as a
   * collection of key / value pairs
   *
   * @class
   */
  export class WeakMap implements IWeakMap {
    private map: Object = {};

    /**
     * The constructor for a WeakMap
     *
     * @param  {Array<Array<*>>} iterable An array of
     * arrays. The array's elements are key value pairs.
     * @constructor
     */
    constructor(iterable: Array<Array<any>> = []) {
      for (let keyValue of iterable) {
        if (keyValue && keyValue.length >= 2) {
          this.set(keyValue[0], keyValue[1]);
        }
      }
    }

    /**
     * Gets the value tied to a particular
     * object used as the key for the
     * current WeakMap instance
     *
     * Asymptotic time complexity of O(1)
     *
     * @name get
     * @param {Object} key The object
     * @returns {*} The value
     */
    public get(key: Object): any {
      if (this.has(key) === true) {
        let _value: string = String(WeakMapUtils.getProperty(key));
        return this.map[_value];
      } else {
        return void 0;
      }
    }

    /**
     * Whether or not the current WeakMap has
     * a particular key
     *
     * Asymptotic time complexity of O(1)
     *
     * @name has
     * @param {Object} The key
     * @returns {boolean} Whether or not the WeakMap
     * has a particular key
     */
    public has(key: Object): boolean {
      let _value: string = String(WeakMapUtils.getProperty(key));
      return _value !== void 0 && typeof this.map[_value] !== 'undefined';
    }

    /**
     * Deletes a key from the current WeakMap
     *
     * Asymptotic time complexity of O(1)
     *
     * @name delete
     * @param {Object} key The object
     * @returns {boolean} Whether or not the deletion
     * was successful
     */
    public delete(key: Object): boolean {
      if (this.has(key) === true) {
        let _value: string = String(WeakMapUtils.getProperty(key));
        delete this.map[_value];
        return true;
      } else {
        return false;
      }
    }

    /**
     * Sets a value for a particular key
     *
     * Asymptotic time complexity of O(1)
     *
     * @name set
     * @param {Object} key The key
     * @param {*} The value
     */
    public set(key: Object, value: any): void {
      let _key: string = String(WeakMapUtils.defineProperty(key));
      this.map[_key] = value;
    }
  }
}
