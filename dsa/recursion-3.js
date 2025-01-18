/**
 * Write a function called `productOfArray` which takes in an array of numbers
 * and returns the product of them all.
 * 
 * Example Calls:
 * 
 * productOfArray([1, 2, 3]) // 6
 * productOfArray([1, 2, 3, 10]) // 60
 */

/**
 * @param {number[]} arr
 * @param {number} [index=0]
 * @return {number}
 */
const productOfArray = (arr, index = 0) => {
    if(index == arr.length - 1) return arr[index];
    return arr[index] * productOfArray(arr, index + 1);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
