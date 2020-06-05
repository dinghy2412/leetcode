//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
//
// 示例 1：
//
// 输入: "babad"
//输出: "bab"
//注意: "aba" 也是一个有效答案。
//
//
// 示例 2：
//
// 输入: "cbbd"
//输出: "bb"
//
// Related Topics 字符串 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let strArr = s.split(''),
        strArrLen = strArr.length,
        len; // 回文串长度
    if (!strArrLen) return s

    for (len = strArrLen; len > 0; len--) {
        for (let startIdx = 0; startIdx <= strArrLen - len; startIdx++) {
            let tempStr = strArr.slice(startIdx, startIdx + len)
            if (isPalindromeStr(tempStr)) {
                return tempStr.join('')
            }
        }
    }

    /**
     * @desc 判断字符串是否是回文串
     * @param { String } str
     * @return {boolean} true: 是回文串； false: 不是回文串
     */
    function isPalindromeStr(str) {
        let strLen = str.length,
            i;
        for (i = 0; i < Math.ceil(strLen / 2); i++) {
            if (str[i] !== str[strLen - i - 1]) {
                return false
            }
        }
        return true
    }
};



