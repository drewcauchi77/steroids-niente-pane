/**
 * 647. Palindromic Substrings
 * 
 * Given a string `s`, return the number of palindromic substrings in it.
 * 
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 * 
 * Example 1:
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * Example 2:
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic substrings: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * Constraints:
 * - 1 <= s.length <= 1000
 * - s consists of lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    if (s.length <= 1) return s.length;
    let count = 0;

    const getPalindromeFromMiddle = (left, right) => {
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        getPalindromeFromMiddle(i, i);
        getPalindromeFromMiddle(i, i + 1);
    }

    return count;
};

console.log(countSubstrings("abc")); // 3
console.log(countSubstrings("aaa")); // 6
