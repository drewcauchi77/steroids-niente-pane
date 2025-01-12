/**
 * FREQUENCY COUNTER (!!)
 *
 * 347. Top K Frequent Elements
 * 
 * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - k is in the range [1, the number of unique elements in the array].
 * - It is guaranteed that the answer is unique.
 * 
 * Follow-up: 
 * Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, freq) => {
    let freqMap = new Map();
    const bucket = [];
    const result = [];

    for (let val of nums) {
        freqMap.set(val, (freqMap.get(val) || 0) + 1);
    }

    for (let [num, val] of freqMap) { // We insert val inside bucket depending on the number of times it exists
        // For example if 3 is shown 4 times - it takes up index 4 in the array (position 5)
        bucket[val] = (bucket[val] || new Set()).add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length == freq) break;
    }

    return result;
}

console.log(topKFrequent([5, 6, 4, 5, 4, 5, 4, 5], 3)) // [5, 4, 6]
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
