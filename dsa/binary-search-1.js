/**
 * Write a function called `binarySearch` which accepts a sorted array and a value.
 * It returns the index at which the value exists. Otherwise, it returns -1.
 * 
 * This algorithm should be more efficient than `linearSearch`.
 * 
 * Example Calls:
 * 
 * binarySearch([1, 2, 3, 4, 5], 2) // 1
 * Explanation: The value 2 exists at index 1.
 * 
 * binarySearch([1, 2, 3, 4, 5], 3) // 2
 * Explanation: The value 3 exists at index 2.
 * 
 * binarySearch([1, 2, 3, 4, 5], 5) // 4
 * Explanation: The value 5 exists at index 4.
 * 
 * binarySearch([1, 2, 3, 4, 5], 6) // -1
 * Explanation: The value 6 does not exist in the array, so return -1.
 * 
 * binarySearch([
 *   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
 *   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
 * ], 10) // 2
 * Explanation: The value 10 exists at index 2.
 * 
 * binarySearch([
 *   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
 *   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
 * ], 95) // 16
 * Explanation: The value 95 exists at index 16.
 * 
 * binarySearch([
 *   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
 *   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
 * ], 100) // -1
 * Explanation: The value 100 does not exist in the array, so return -1.
 */

/**
 * @param {any[]} arr 
 * @param {any} val
 * @return {number}
 */
const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2);

    while (left <= right && arr[middle] !== val) {
        if (val < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((right + left) / 2); 
    }

    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1
