//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
//
// 示例 1:
//
// 输入: "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//
//
// 示例 2:
//
// 输入: "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//
//
// 示例 3:
//
// 输入: "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//
// Related Topics 哈希表 双指针 字符串 Sliding Window


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let childStr = '',
        childStrLen = 0;
    resultChildStrLen = 0;
    for (let i of s) {
        let index = childStr.indexOf(i)
        if(index === -1) {
            childStr += i;
            childStrLen++;
        } else {
            childStr = childStr.slice(index + 1);
            childStr += i;
            resultChildStrLen = Math.max(resultChildStrLen, childStrLen)
            childStrLen = childStr.length;
        }
    }
    return Math.max(resultChildStrLen, childStrLen)
};
//leetcode submit region end(Prohibit modification and deletion)
// console.log(lengthOfLongestSubstring('dvdf'))