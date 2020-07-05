
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    var maxNum = 0, gIndex = 0, sIndex = 0;
    while(gIndex < g.length && sIndex < s.length) {
        if (s[sIndex] > g[gIndex]) {
            maxNum++;
            sIndex++;
            gIndex++
        } else {
            sIndex++
        }
    }
    return maxNum;
}