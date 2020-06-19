// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let temp = strs[i].split('').sort();
        if (map.has(temp)) {
            map.set(temp, map.get(temp).push(strs[i]));
        } else {
            map.set(temp, [strs[i]]);
        }
    }
    return map.values();
};