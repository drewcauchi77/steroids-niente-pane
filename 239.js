/**
 * 239. Sliding Window Maximum
 *
 * You are given an array of integers `nums`, and there is a sliding window of size `k` that moves
 * from the very left of the array to the very right. You can only see the `k` numbers in the window.
 * Each time the sliding window moves right by one position.
 *
 * Return the maximum values in each sliding window.
 *
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - 1 <= k <= nums.length
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
    const result = [];
    const queue = [];

    for (let i = 0; i < nums.length; i++) {
        while (queue.length - 1 >= 0 && nums[i] > queue[queue.length - 1]) {
            queue.pop();
        }

        queue.push(nums[i]);
        const j = i + 1 - k;

        if (j >= 0) {
            result.push(queue[0]);
            if (nums[j] === queue[0]) queue.shift();
        }
    }
    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]
