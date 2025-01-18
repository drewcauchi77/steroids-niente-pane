/**
 * Write a recursive function called `isPalindrome` which returns true if the string passed to it 
 * is a palindrome (reads the same forward and backward). Otherwise, it returns false.
 * 
 * Example Calls:
 * 
 * isPalindrome('awesome') // false
 * Explanation: The string 'awesome' is not a palindrome.
 * 
 * isPalindrome('foobar') // false
 * Explanation: The string 'foobar' is not a palindrome.
 * 
 * isPalindrome('tacocat') // true
 * Explanation: The string 'tacocat' reads the same forward and backward, so it is a palindrome.
 * 
 * isPalindrome('amanaplanacanalpanama') // true
 * Explanation: The string 'amanaplanacanalpanama' reads the same forward and backward, so it is a palindrome.
 * 
 * isPalindrome('amanaplanacanalpandemonium') // false
 * Explanation: The string 'amanaplanacanalpandemonium' is not a palindrome.
 */

/**
 * @param {string} str 
 * @return {boolean}
 */
const isPalindrome = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
