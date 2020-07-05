// 后一天比前一天大为收益，小则跳过

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let income = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i+1] > prices[i]) {
            income += prices[i+1] - prices[i];
        }
    }
    return income;
};