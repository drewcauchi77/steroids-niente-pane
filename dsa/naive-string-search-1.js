/**
 * Counts the occurrences of a substring within a given string.
 * 
 * Example:
 * searchString('lorie loled', 'lol') // 1
 * Explanation: The substring 'lol' appears once in 'lorie loled'.
 * 
 * searchString('lorie loled', 'lo') // 2
 * Explanation: The substring 'lo' appears twice in 'lorie loled'.
 * 
 * searchString('lorie loled', 'pop') // 0
 * Explanation: The substring 'pop' does not appear in 'lorie loled'.
 */

/**
 * @param {string} str 
 * @param {string} findStr 
 * @return {number}
 */
const searchString = (str, findStr) => {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == findStr[0]) {
            let pointer = 0;
            let mismatchFound = false;
            while (pointer < findStr.length) {
                if (findStr[pointer] === str[i + pointer]) {
                    pointer++;
                } else {
                    mismatchFound = true;
                    break;
                }
            }

            if (!mismatchFound) counter++;
        }
    }

    return counter;
}

console.log(searchString('lorie loled', 'lol')); // 1
console.log(searchString('lorie loled', 'lo')); // 2 
console.log(searchString('lorie loled', 'pop')); // 0 
