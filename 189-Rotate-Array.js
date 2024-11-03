/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    //incase the array rotation in bigger thean the array elemnts 
    k = k % nums.length

    //function to rotate the elements
    let revrse = function (start, end) {

        while (start < end) {
            let temp;
            temp = nums[start]

            nums[start] = nums[end]
            nums[end] = temp
            start++;
            end--;
        }


    }

    revrse(0, nums.length - 1)
    revrse(0, k-1)
    revrse(k,nums.length - 1  )

};