/**
 * Write a recursive function called `fib` which accepts a number and returns the nth number 
 * in the Fibonacci sequence.
 * 
 * The Fibonacci sequence is the sequence of whole numbers:
 * 1, 1, 2, 3, 5, 8, ...
 * - It starts with 1 and 1.
 * - Each number thereafter is the sum of the previous two numbers.
 * 
 * Example Calls:
 * 
 * fib(4) // 3
 * Explanation: The sequence is [1, 1, 2, 3], so the 4th number is 3.
 * 
 * fib(10) // 55
 * Explanation: The sequence is [1, 1, 2, 3, 5, 8, 13, 21, 34, 55].
 * 
 * fib(28) // 317811
 * fib(35) // 9227465
 */

/**
 * @param {number} num
 * @return {number}
 */
const fib = (num) => {
    if (num <= 2) return 1
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
