/**
 * Selection Sort
 * 
 * Implement the selection sort algorithm, which repeatedly selects the smallest (or largest) element 
 * from the unsorted portion of the list and swaps it with the first unsorted element.
 * 
 * The algorithm continues until the list is fully sorted.
 * 
 * Example 1:
 * Input: [23, 4, 5, 1, 93, 23, 44]
 * Output: [1, 4, 5, 23, 23, 44, 93]
 * Explanation: The smallest elements are selected one by one and swapped into their correct position.
 * 
 * Example 2:
 * Input: [1, 1, 1, 11, 0, 22, 17]
 * Output: [0, 1, 1, 1, 11, 17, 22]
 * Explanation: The smallest elements are selected one by one and swapped into their correct position.
 * 
 * Example 3:
 * Input: [37, 25, 29, 8]
 * Output: [8, 25, 29, 37]
 * Explanation: The smallest elements are selected one by one and swapped into their correct position.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
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
};

console.log(selectionSort([23, 4, 5, 1, 93, 23, 44])); // [1, 4, 5, 23, 23, 44, 93]
console.log(selectionSort([1, 1, 1, 11, 0, 22, 17])); // [0, 1, 1, 1, 11, 17, 22]
console.log(selectionSort([37, 25, 29, 8])); // [8, 25, 29, 37]
