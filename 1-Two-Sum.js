/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
const obj = {}
for(let i = 0; i < nums.length; i++)
{
    const complement = target -nums[i]   ;
    if (obj.hasOwnProperty(complement ) === false )
    {
        obj[nums[i]] = i;
    }
    else {
        return [obj[complement], i];
    }
}
};