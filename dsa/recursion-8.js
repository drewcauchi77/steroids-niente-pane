/**
 * Write a recursive function called `someRecursive` which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise, it returns false.
 * 
 * Example Calls:
 * 
 * const isOdd = val => val % 2 !== 0;
 * 
 * someRecursive([1,2,3,4], isOdd) // true
 * Explanation: The value 1 is odd, so the callback returns true for at least one value.
 * 
 * someRecursive([4,6,8,9], isOdd) // true
 * Explanation: The value 9 is odd, so the callback returns true for at least one value.
 * 
 * someRecursive([4,6,8], isOdd) // false
 * Explanation: None of the values are odd, so the callback never returns true.
 * 
 * someRecursive([4,6,8], val => val > 10); // false
 * Explanation: None of the values are greater than 10, so the callback never returns true.
 */

/**
 * @param {number[]} arr 
 * @param {Function} callback
 * @return {boolean}
 */
const someRecursive = (arr, callback) => {
    if (arr.length === 0) return false;
    if (callback(arr[arr.length - 1])) return true;
    return someRecursive(arr.slice(0, arr.length - 1), callback);
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false
