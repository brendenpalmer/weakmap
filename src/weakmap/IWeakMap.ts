/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  export interface IWeakMap {
    get(key: Object): any;
    has(key: Object): boolean;
    delete(key: Object): boolean;
    set(key: Object, value: any): void;
  }
}
