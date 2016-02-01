/**
 * Tests for WeakMap.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: weakmap', function() {
  describe('Class: WeakMap', function() {
    var _WeakMap = weakmap.WeakMap;
    var _instance = new _WeakMap();

    it('should be defined', function() {
      expect(_WeakMap).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });
  });
});
