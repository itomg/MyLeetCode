/**
 * https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = "";
    var len = a.length > b.length ? a.length : b.length;
    if (diff) {
      for (i = len - diff - 1; i <= len - 1; i++) {
        if (!a[i]) {
          a = "0" + a;
        }
        if (!b[i]) {
          b = "0" + b;
        }
      }
    }
    var cache = 0;
    for (i = len - 1; i >= 0; i--) {
      var sum = (parseInt(a[i]) + parseInt(b[i]) + cache);
      if (sum >= 2) {
        cache = 1;
        sum = sum === 3 ? 1 : 0;
      } else {
        cache = 0;
      }
      result = sum.toString() + result;
    }
    if (cache === 1) {
      result = cache.toString() + result;
    }
    return result;
};
