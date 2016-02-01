/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  /**
   * A class used to expose constants. Intended to
   * be consumed by whomever requires these.
   *
   * @class
   */
  export class WeakMapConstants {
    /**
     * Used to get and set values for a particular
     * object
     *
     * @name WEAKMAP_KEY_IDENTIFIER
     * @returns {string} The unique identifier
     */
    public static get WEAKMAP_KEY_IDENTIFIER(): string {
      return 'WEAKMAP_KEY_IDENTIFIER_spF91dwX14_OZAbzyeCu3';
    }

    /**
     * The message that will be thrown if an invalid
     * key is used as part of the set method
     *
     * @name WEAKMAP_SET_THROWABLE_MESSAGE
     * @returns {string} The unique identifier
     */
    public static get WEAKMAP_SET_THROWABLE_MESSAGE(): string {
      return 'Invalid value used as weak map key';
    }
  }
}
