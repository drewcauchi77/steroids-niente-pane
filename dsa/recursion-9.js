/**
 * Write a recursive function called `flatten` which accepts an array of arrays 
 * and returns a new array with all values flattened.
 * 
 * Example Calls:
 * 
 * flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
 * Explanation: The nested array [4, 5] is flattened into the main array.
 * 
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * Explanation: All nested arrays are recursively flattened into the main array.
 * 
 * flatten([[1], [2], [3]]) // [1, 2, 3]
 * Explanation: Each nested array is flattened into the main array.
 * 
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3]
 * Explanation: Even deeply nested arrays are flattened into the main array.
 */

/*
 * @param {number[]} arr 
 * @return {number[]}
 */
const flatten = (arr) => {
    var newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
