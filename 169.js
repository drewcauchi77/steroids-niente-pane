/**
 * 169. Majority Element
 * 
 * Given an array `nums` of size `n`, return the majority element.
 * 
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 5 * 10^4
 * - -10^9 <= nums[i] <= 10^9
 * 
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    let candidate;
    let count = 0;

    for (let val of nums) {
        if (count === 0) candidate = val;
        count = (val === candidate) ? count + 1 : count - 1;
    }

    return candidate;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
