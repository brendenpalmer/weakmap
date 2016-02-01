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
  export class WeakMap implements IWeakMap {
    private map: Object = {};

    /**
     * Gets the value tied to a particular
     * object used as the key for the
     * current WeakMap instance
     *
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
     * @param {Object} The key
     * @returns {boolean} Whether or not the WeakMap
     * has a particular key
     */
    public has(key: Object): boolean {
      try {
        let _value: string = String(WeakMapUtils.getProperty(key));
        return this.map.hasOwnProperty(_value);
      } catch (e) {
        return false;
      }
    }

    /**
     * Deletes a key from the current WeakMap
     *
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
     * @param {Object} key The key
     * @param {*} The value
     */
    public set(key: Object, value: any): void {
      let _key: string = String(WeakMapUtils.defineProperty(key));
      this.map[_key] = value;
    }
  }
}
