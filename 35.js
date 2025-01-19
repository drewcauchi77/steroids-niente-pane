/**
 * 35. Search Insert Position
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1, 3, 5, 6], target = 5
 * Output: 2
 * Explanation: The target value 5 exists in the array at index 2.
 * 
 * Example 2:
 * Input: nums = [1, 3, 5, 6], target = 2
 * Output: 1
 * Explanation: The target value 2 does not exist in the array. 
 * It would be inserted at index 1 to maintain the sorted order.
 * 
 * Example 3:
 * Input: nums = [1, 3, 5, 6], target = 7
 * Output: 4
 * Explanation: The target value 7 does not exist in the array. 
 * It would be inserted at index 4 to maintain the sorted order.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - `nums` contains distinct values sorted in ascending order.
 * - -10^4 <= target <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length;
    let middle = Math.floor((start + end) / 2);
   
    while(start < end) {
        if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }
        middle = Math.floor((start + end) / 2);
    }

    return middle;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
