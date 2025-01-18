/**
 * Write a function `factorial` which accepts a number and returns the factorial of that number.
 * 
 * A factorial is the product of an integer and all the integers below it.
 * - For example, factorial of 4 (4!) is equal to 24 because 4 * 3 * 2 * 1 = 24.
 * - Factorial of 0 (0!) is always 1.
 * 
 * Example Calls:
 * 
 * factorial(1) // 1
 * factorial(2) // 2
 * factorial(4) // 24
 * factorial(7) // 5040
 */

/**
 * @param {number} num
 * @return {number}
 */
const factorial = (num) => {
   if (num === 0) return 1;
   return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
