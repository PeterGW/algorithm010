/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums: Array<number>, target: number): Array<number> {
    let index = 0;
    let first = nums[index];
    let arr = [];
    for (let i = 1; i < nums.length; i++) {
        let num = target - nums[i];
        if (first == num) {
            arr.push(index, i);
        }
        if (i == nums.length - 1) {
            i = index + 1;
            index++;
            first = nums[index];
        }
    }
    return arr;
};


var twoSum2 = function(nums: Array<number>, target: number): Array<number> {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let subtractionValue = target - nums[i];
        let toValue = map.get(subtractionValue);
        if (toValue !== undefined) {
            return [i, toValue]
        }
        map.set(nums[i], i);
    }
};

