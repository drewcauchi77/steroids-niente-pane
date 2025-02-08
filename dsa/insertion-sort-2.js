/**
 * Insertion Sort
 * 
 * Implement `insertionSort`, which sorts an array using the insertion sort algorithm.
 * 
 * The function takes two parameters:
 * - `arr`: The array to be sorted.
 * - `comparator` (optional): A function used to compare two elements. 
 *   - Returns a negative value if the first value is smaller.
 *   - Returns a positive value if the first value is greater.
 *   - Returns 0 if both values are equal.
 * 
 * If no comparator is provided, assume the values are numbers and sort from smallest to largest.
 * 
 * How Insertion Sort Works:
 * - Start with the second element, assuming the first element is already sorted.
 * - Compare the element with previous ones, shifting larger elements to the right.
 * - Insert the current element into its correct position in the sorted portion.
 * - Repeat until the array is fully sorted.
 * 
 * Example 1:
 * Input: insertionSort([4, 20, 12, 10, 7, 9])
 * Output: [4, 7, 9, 10, 12, 20]
 * 
 * Example 2:
 * Input: insertionSort([0, -10, 7, 4])
 * Output: [-10, 0, 4, 7]
 * 
 * Example 3:
 * Input: insertionSort([1, 2, 3])
 * Output: [1, 2, 3]
 * 
 * Example 4:
 * Input: insertionSort([])
 * Output: []
 * 
 * Example 5:
 * Input: insertionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])
 * Output: [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 * 
 * Example 6 (Using a custom comparator):
 * Input:
 * let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 * function strComp(a, b) {
 *   if (a < b) return -1;
 *   if (a > b) return 1;
 *   return 0;
 * }
 * insertionSort(kitties, strComp)
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
 * insertionSort(moarKittyData, oldestToYoungest);
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
const insertionSort = (arr, comparator) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (var j = i - 1; j >= 0 && ((typeof comparator === "function" && comparator(arr[j], currentVal) > 0) || arr[j] > currentVal); j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
console.log(insertionSort([])); // []
console.log(insertionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])); 
// [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(insertionSort(kitties, (a, b) => a.localeCompare(b))); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
let moarKittyData = [
  { name: "LilBub", age: 7 },
  { name: "Garfield", age: 40 },
  { name: "Heathcliff", age: 45 },
  { name: "Blue", age: 1 },
  { name: "Grumpy", age: 6 }
];
console.log(insertionSort(moarKittyData, (a, b) => b.age - a.age)); 
// [
//   { name: "Heathcliff", age: 45 },
//   { name: "Garfield", age: 40 },
//   { name: "LilBub", age: 7 },
//   { name: "Grumpy", age: 6 },
//   { name: "Blue", age: 1 }
// ]
