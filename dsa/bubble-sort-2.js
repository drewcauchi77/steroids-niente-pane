/**
 * Bubble Sort
 * 
 * Implement a function called `bubbleSort`. Given an array, `bubbleSort` will sort the values in the array.
 * The function takes 2 parameters: an array and an optional comparator function.
 * 
 * The comparator function is a callback that will take two values from the array to be compared.
 * - The function returns a negative value if the first value is less than the second.
 * - The function returns a positive value if the first value is greater than the second.
 * - The function returns 0 if both values are equal.
 * 
 * If no comparator is provided, assume that the values are numbers and sort from smallest to largest.
 * 
 * Bubble sort is an O(n^2) algorithm.
 * 
 * Example 1:
 * Input: bubbleSort([4, 20, 12, 10, 7, 9])
 * Output: [4, 7, 9, 10, 12, 20]
 * 
 * Example 2:
 * Input: bubbleSort([0, -10, 7, 4])
 * Output: [-10, 0, 4, 7]
 * 
 * Example 3:
 * Input: bubbleSort([1, 2, 3])
 * Output: [1, 2, 3]
 * 
 * Example 4:
 * Input: bubbleSort([])
 * Output: []
 * 
 * Example 5:
 * Input: bubbleSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])
 * Output: [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 * 
 * Example 6 (Using custom comparator):
 * Input: 
 * let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 * function strComp(a, b) {
 *   if (a < b) return -1;
 *   if (a > b) return 1;
 *   return 0;
 * }
 * bubbleSort(kitties, strComp)
 * 
 * Output: ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 * 
 * Example 7 (Sorting objects by a property):
 * Input:
 * let moarKittyData = [
 *   { name: "LilBub", age: 7 },
 *   { name: "Garfield", age: 40 },
 *   { name: "Heathcliff", age: 45 },
 *   { name: "Blue", age: 1 },
 *   { name: "Grumpy", age: 6 }
 * ];
 * function oldestToYoungest(a, b) {
 *   return b.age - a.age;
 * }
 * bubbleSort(moarKittyData, oldestToYoungest);
 * 
 * Output:
 * [
 *   { name: "Heathcliff", age: 45 },
 *   { name: "Garfield", age: 40 },
 *   { name: "LilBub", age: 7 },
 *   { name: "Grumpy", age: 6 },
 *   { name: "Blue", age: 1 }
 * ]
 */

/**
 * @param {any[]} arr 
 * @param {function} comparator
 * @return {any[]}
 */
const bubbleSort = (arr, comparator) => {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
    
        for (let j = 0; j < i - 1; j++) {
            if ((typeof comparator == "function" && comparator(arr[j], arr[j + 1]) > 0) || arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort([])); // []
console.log(bubbleSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])); 
// [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(bubbleSort(kitties, (a, b) => a.localeCompare(b))); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
let moarKittyData = [
  { name: "LilBub", age: 7 },
  { name: "Garfield", age: 40 },
  { name: "Heathcliff", age: 45 },
  { name: "Blue", age: 1 },
  { name: "Grumpy", age: 6 }
];
console.log(bubbleSort(moarKittyData, (a, b) => b.age - a.age)); 
// [
//   { name: "Heathcliff", age: 45 },
//   { name: "Garfield", age: 40 },
//   { name: "LilBub", age: 7 },
//   { name: "Grumpy", age: 6 },
//   { name: "Blue", age: 1 }
// ]
