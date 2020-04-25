//给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
//
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
//
// 你可以假设 nums1 和 nums2 不会同时为空。
//
// 示例 1:
//
// nums1 = [1, 3]
// nums2 = [2]
//
// 则中位数是 2.0
//
//
// 示例 2:
//
// nums1 = [1, 2]
//nums2 = [3, 4]
//
//则中位数是 (2 + 3)/2 = 2.5
//
// Related Topics 数组 二分查找 分治算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // let newArr = [];
    // aaa: for(let i = 0, len = nums1.length; i < len; i++) {
    //     let num1 = nums1[i],
    //         num2 = nums2[0];
    //     if (num1 <= num2) {
    //         newArr.push(num1)
    //     } else {
    //         while(num1 > num2) {
    //             newArr.push(num2)
    //             num2 = nums2[1]
    //             nums2.splice(0, 1)
    //             if (!num2) {
    //                 if (i < len) {
    //                     newArr.push(...nums1.slice(i))
    //                 }
    //                 break aaa;
    //             }
    //         }
    //         newArr.push(num1)
    //     }
    // }
    // newArr = newArr.concat(nums2)
    // if (newArr.length % 2) {
    //     return newArr[parseInt(newArr.length / 2)]
    // } else {
    //     let index = parseInt(newArr.length / 2)
    //     return (newArr[index - 1] + newArr[index]) / 2
    // }


    nums1 = nums1.concat(nums2);
    nums1.sort((a, b) => a-b)
    if (nums1.length % 2) {
        return nums1[parseInt(nums1.length / 2)]
    } else {
        let index = parseInt(nums1.length / 2)
        return (nums1[index - 1] + nums1[index]) / 2
    }
};

console.log(findMedianSortedArrays([1,2],[3,4], ))
//leetcode submit region end(Prohibit modification and deletion)
