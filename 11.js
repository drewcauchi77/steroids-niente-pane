/**
 * MULTIPLE POINTERS
 *
 * 11. Container With Most Water
 * 
 * You are given an integer array `height` of length `n`. 
 * There are `n` vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * 
 * Find two lines that, together with the x-axis, form a container such that the container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
 * In this case, the max area of water (blue section) the container can contain is 49.
 * 
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 * Explanation: With height = [1,1], the container's maximum area is 1.
 * 
 * Constraints:
 * - n == height.length
 * - 2 <= n <= 10^5
 * - 0 <= height[i] <= 10^4
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (nums) => {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let maxVolume = 0;

    while (leftPointer < rightPointer) {
        let width = rightPointer - leftPointer;
        let height = Math.min(nums[leftPointer], nums[rightPointer]);
        maxVolume = Math.max(maxVolume, height * width);
        console.log (`width: ${width} - height: ${height} - maxVolume ${maxVolume}`);

        if (nums[leftPointer] < nums[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return maxVolume;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
