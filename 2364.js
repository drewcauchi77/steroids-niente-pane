/**
 * 2364. Count Number of Bad Pairs
 * 
 * You are given a 0-indexed integer array `nums`. A pair of indices `(i, j)` is a bad pair if:
 * - `i < j`
 * - `j - i != nums[j] - nums[i]`
 * 
 * Return the total number of bad pairs in `nums`.
 * 
 * Example 1:
 * Input: nums = [4,1,3,3]
 * Output: 5
 * Explanation:
 * - The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
 * - The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
 * - The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
 * - The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
 * - The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
 * - Total bad pairs = 5.
 * 
 * Example 2:
 * Input: nums = [1,2,3,4,5]
 * Output: 0
 * Explanation: There are no bad pairs, so return 0.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - 1 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const countBadPairs = (nums) => {
    const n = nums.length;
    let totalPairs = n * (n - 1) / 2;
    const differenceMap = new Map();

    for (let i = 0; i < n; i++) {
        const diff = nums[i] - i;
        totalPairs = totalPairs - (differenceMap.get(diff) || 0);
        differenceMap.set(diff, (differenceMap.get(diff) || 0) + 1);
    }

    return totalPairs;
};

console.log(countBadPairs([4,1,3,3])); // 5
console.log(countBadPairs([1,2,3,4,5])); // 0
