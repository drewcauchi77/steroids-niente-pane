/**
 * Write a function called `linearSearch` which accepts an array and a value, 
 * and returns the index at which the value exists. 
 * If the value does not exist in the array, return -1.
 * 
 * Don't use `indexOf` to implement this function!
 * 
 * Example Calls:
 * 
 * linearSearch([10, 15, 20, 25, 30], 15) // 1
 * Explanation: The value 15 exists at index 1.
 * 
 * linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
 * Explanation: The value 4 exists at index 5.
 * 
 * linearSearch([100], 100) // 0
 * Explanation: The value 100 exists at index 0.
 * 
 * linearSearch([1,2,3,4,5], 6) // -1
 * Explanation: The value 6 does not exist in the array, so return -1.
 * 
 * linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
 * Explanation: The value 10 does not exist in the array, so return -1.
 * 
 * linearSearch([100], 200) // -1
 * Explanation: The value 200 does not exist in the array, so return -1.
 */

/**
 * @param {any[]} arr 
 * @param {any} val
 * @return {number}
 */
const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if  (arr[i] === val) return i; 
    }

    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1
