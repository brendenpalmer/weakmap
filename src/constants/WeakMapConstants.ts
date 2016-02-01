/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  export class WeakMapConstants {
    /**
     * Used to get and set values for a particular
     * object
     *
     * @returns {string} The unique identifier
     */
    public static get WEAKMAP_KEY_IDENTIFIER(): string {
      return 'WEAKMAP_KEY_IDENTIFIER_spF91dwX14_OZAbzyeCu3';
    }

    /**
     * The message that will be thrown if an invalid
     * key is used as part of the set method
     *
     * @returns {string} The unique identifier
     */
    public static get WEAKMAP_SET_THROWABLE_MESSAGE(): string {
      return 'Invalid value used as weak map key';
    }
  }
}
