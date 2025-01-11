/**
 * FREQUENCY COUNTER
 *
 * 242. Valid Anagram
 * 
 * Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - `s` and `t` consist of lowercase English letters.
 * 
 * Follow-up: 
 * What if the inputs contain Unicode characters? 
 * How would you adapt your solution to such a case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    let frequency = {};

    for (let val of str1) {
        frequency[val.charCodeAt(0)] = ++frequency[val.charCodeAt(0)] || 1;
    }

    for (let val of str2) {
        if (!frequency[val.charCodeAt(0)]) return false;
        frequency[val.charCodeAt(0)] -= 1;
    }
    
    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
