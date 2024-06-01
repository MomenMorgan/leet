/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let len = m + n
    let swapped;
    let j = 0;
    nums1.length = nums1.length - n 
    do {
        
        if (j < n) {
            nums1.push(nums2[j])
            j++;
        }
        swapped = false;
        for (let i = 0; i < len ; i++) {

            if (nums1[i] > nums1[i + 1]) {
                let temp = nums1[i]
                nums1[i] = nums1[i + 1]
                nums1[i + 1] = temp
                swapped = true
            }

        }

    } while (swapped || j < n)

    


};