/// <reference path="../constants/WeakMapConstants.ts"/>
/// <reference path="../sequencer/WeakMapSequencer.ts"/>

/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  export class WeakMapUtils {
    /**
     * Defines a unique property that's un-enumerable
     * if the unique property does not already exist.
     * Otherwise, it doesn't do anything and simply
     * returns the value of the property that's already
     * set on the object.
     *
     * @param {*} object The object
     * @returns {number} The value set
     */
    public static defineProperty(object: any): number {
      let _value: number;

      // throw a type error if the object is not valid
      if (WeakMapUtils.isValidObject(object) === false) {
        throw new TypeError(WeakMapConstants.WEAKMAP_SET_THROWABLE_MESSAGE);
      }

      if (object.hasOwnProperty(WeakMapConstants.WEAKMAP_KEY_IDENTIFIER) === false) {
        _value = WeakMapSequencer.getInstance().next();

        try {
          Object.defineProperty(object, WeakMapConstants.WEAKMAP_KEY_IDENTIFIER, {
            enumerable: false,
            configurable: false,
            get: () => {
              return _value;
            }
          });
        } catch (e) {
          // throw a type error if Object.defineProperty threw an error
          throw new TypeError(WeakMapConstants.WEAKMAP_SET_THROWABLE_MESSAGE);
        }
      } else {
        _value = object[WeakMapConstants.WEAKMAP_KEY_IDENTIFIER];
      }

      return _value;
    }

    /**
     * Gets the value tied to an object
     *
     * @param {*} object The object
     * @returns {number} The unique identifier tied to
     * an object
     */
    public static getProperty(object: any): number {
      if (WeakMapUtils.isValidObject(object) === true) {
        return object[WeakMapConstants.WEAKMAP_KEY_IDENTIFIER];
      } else {
        return void 0;
      }
    }

    /**
     * Whether or not an object is valid
     *
     * @param {*} object The object to check
     * @returns {boolean} Whether or not the object is value
     */
    private static isValidObject(object: any): boolean {
      return Boolean(object.hasOwnProperty);
    }
  }
}
