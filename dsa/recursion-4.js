/**
 * Write a function called `recursiveRange` which accepts a number 
 * and adds up all the numbers from 0 to the number passed to the function.
 * 
 * Example Calls:
 * 
 * recursiveRange(6) // 21
 * Explanation: 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21
 * 
 * recursiveRange(10) // 55
 * Explanation: 0 + 1 + 2 + ... + 10 = 55
 */

/**
 * @param {number} num
 * @return {number}
 */
const recursiveRange = (num) => {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
