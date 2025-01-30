/**
 * 383. Ransom Note
 * 
 * Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed 
 * using the letters from `magazine` and `false` otherwise.
 * 
 * Each letter in `magazine` can only be used once in `ransomNote`.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Explanation: The letter "a" is not in `magazine`, so return false.
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Explanation: `magazine` only contains one "a", but `ransomNote` requires two.
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 * Explanation: `magazine` contains enough letters to construct `ransomNote`.
 * 
 * Constraints:
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - `ransomNote` and `magazine` consist of lowercase English letters.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    let frequency = {};

    for (let val of magazine) {
        frequency[val] = (frequency[val] || 0) + 1;
    }

    for (let val of ransomNote) {
        if (!frequency[val]) return false;
        frequency[val] = frequency[val] - 1;
    }

    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
