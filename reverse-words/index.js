/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 *
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  var words = str.split(' ').reduce(function(pre, word) {
    if (word !== '') {
      pre.push(word);
    }
    return pre;
  }, []);
  return words.reverse().join(' ');
};
