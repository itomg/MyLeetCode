/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
    nums.forEach(function(num, index) {
        if (num === target) {
            if (result[0] === -1) {
                result[0] = index;
            }
            result[1] = index;
        }
    });
    return result;
};
