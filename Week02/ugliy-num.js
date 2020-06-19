/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let result = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    for (let i = 1; i < n; i++) {
        let target = Math.min(2 * result[i2], 3 * result[i3], 5 * result[i5]);
        result.push(target);
        if (target === 2 * result[i2]) {
            ++i2;
        }
        if (target === 3 * result[i3]) {
            ++i3;
        }
        if (target === 5 * result[i5]) {
            ++i5;
        }
    }
    return result[n - 1];

};