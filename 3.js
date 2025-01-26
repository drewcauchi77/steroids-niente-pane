/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * Given a string `s`, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - `s` consists of English letters, digits, symbols, and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (str) => {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (str.length < 2) return str.length;

    for (let i = 0; i < str.length; i++) {
        while(set.has(str[i])) {
            set.delete(str[left])
            left++;
        }

        set.add(str[i]);
        maxSize = Math.max(maxSize, i - left + 1);
    }

    return maxSize;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
