/**
 * Write a function called `power` which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * 
 * This function should mimic the functionality of Math.pow() but without using it.
 * Do not worry about negative bases and exponents.
 * 
 * Example Calls:
 * 
 * power(2, 0) // 1
 * power(2, 2) // 4
 * power(2, 4) // 16
 */

/**
 * @param {number} num
 * @param {number} exp
 * @return {number}
 */
const power = (num, exp) => {
    if (exp === 0) return 1;
    return num * power(num, exp - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
