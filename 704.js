/**
 * 704. Binary Search
 * 
 * Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, 
 * write a function to search for the `target` in `nums`. If `target` exists, then return its index.
 * Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
 * Output: 4
 * Explanation: 9 exists in `nums` and its index is 4.
 * 
 * Example 2:
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in `nums`, so return -1.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All the integers in `nums` are unique.
 * - `nums` is sorted in ascending order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((end + start) / 2);

    while (nums[middle] !== target && start <= end) {
        if (target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((end + start) / 2)
    }

    return nums[middle] === target ? middle : -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
