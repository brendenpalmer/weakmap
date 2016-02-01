/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  /**
   * Class used to generate a unique sequence of numbers
   * such that they will never overlap. Used in conjunction
   * with WeakMapUtils to be used as a unique value / identifier
   *
   * @class
   */
  export class WeakMapSequencer {
    private identifier: number;
    private static instance: WeakMapSequencer = null;

    /**
     * The constructor for a WeakMapSequencer
     *
     * @constructor
     */
    constructor() {
      if (WeakMapSequencer.instance !== null) {
        throw 'Get the instance of the WeakMapSequencer using the getInstance method.';
      }

      this.identifier = 0;
    }

    /**
     * Gets an instance of WeakMapSequencer
     *
     * @returns {WeakMapSequencer} The instance
     */
    public static getInstance(): WeakMapSequencer {
      if (WeakMapSequencer.instance === null) {
        WeakMapSequencer.instance = new WeakMapSequencer();
      }

      return WeakMapSequencer.instance;
    }

    /**
     * Gets the next number in the sequence
     *
     * @returns {number} The next number in the sequence
     */
    public next(): number {
      return this.identifier++;
    }
  }
}
