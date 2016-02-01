/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  /**
   * An interface intended to be used such that
   * the WeakMap class implements all required
   * methods
   *
   * @interface
   */
  export interface IWeakMap {
    get(key: Object): any;
    has(key: Object): boolean;
    delete(key: Object): boolean;
    set(key: Object, value: any): void;
  }
}
