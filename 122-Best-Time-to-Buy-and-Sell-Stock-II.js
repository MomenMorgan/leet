/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let track = 0; 

    for (let i = 0; i <prices.length ; i ++){
        let j = i + 1
        if(prices[i] < prices[j]){
            track += prices[j] - prices[i]
        }
    }
    return track 
};