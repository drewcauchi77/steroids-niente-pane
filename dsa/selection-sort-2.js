/**
 * Selection Sort
 * 
 * Implement the selection sort algorithm, which repeatedly finds the smallest element in the unsorted portion 
 * of the array and swaps it with the first unsorted element. 
 * 
 * Selection Sort Steps:
 * - Assign the first element as the minimum.
 * - Compare this item to the rest of the elements to find the smallest value.
 * - If a smaller value is found, update the minimum.
 * - Swap the smallest value with the first unsorted element.
 * - Repeat the process for the remaining elements until the array is sorted.
 * 
 * This algorithm has an O(n^2) time complexity.
 * 
 * Example 1:
 * Input: selectionSort([4, 20, 12, 10, 7, 9])
 * Output: [4, 7, 9, 10, 12, 20]
 * 
 * Example 2:
 * Input: selectionSort([0, -10, 7, 4])
 * Output: [-10, 0, 4, 7]
 * 
 * Example 3:
 * Input: selectionSort([1, 2, 3])
 * Output: [1, 2, 3]
 * 
 * Example 4:
 * Input: selectionSort([])
 * Output: []
 * 
 * Example 5:
 * Input: selectionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])
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
 * selectionSort(kitties, strComp)
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
 * selectionSort(moarKittyData, oldestToYoungest);
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
const selectionSort = (arr, comparator) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            if ((typeof comparator === "function" && comparator(arr[minIndex], arr[j]) > 0) || arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}

console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
console.log(selectionSort([])); // []
console.log(selectionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])); 
// [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(selectionSort(kitties, (a, b) => a.localeCompare(b))); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
let moarKittyData = [
  { name: "LilBub", age: 7 },
  { name: "Garfield", age: 40 },
  { name: "Heathcliff", age: 45 },
  { name: "Blue", age: 1 },
  { name: "Grumpy", age: 6 }
];
console.log(selectionSort(moarKittyData, (a, b) => b.age - a.age)); 
// [
//   { name: "Heathcliff", age: 45 },
//   { name: "Garfield", age: 40 },
//   { name: "LilBub", age: 7 },
//   { name: "Grumpy", age: 6 },
//   { name: "Blue", age: 1 }
// ]
