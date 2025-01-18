/**
 * Write a recursive function called `reverse` which accepts a string 
 * and returns a new string in reverse.
 * 
 * Example Calls:
 * 
 * reverse('awesome') // 'emosewa'
 * Explanation: The string 'awesome' reversed is 'emosewa'.
 * 
 * reverse('rithmschool') // 'loohcsmhtir'
 * Explanation: The string 'rithmschool' reversed is 'loohcsmhtir'.
 */

/**
 * @param {string} str
 * @return {string}
 */
const reverse = (str) => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
