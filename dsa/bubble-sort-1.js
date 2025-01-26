/**
 * Bubble Sort
 * 
 * Implement the bubble sort algorithm, which repeatedly steps through the input list, compares adjacent items,
 * and swaps them if they are in the wrong order. The algorithm continues until the list is sorted.
 * 
 * Example 1:
 * Input: [23, 4, 5, 1, 93, 23, 44]
 * Output: [1, 4, 5, 23, 23, 44, 93]
 * Explanation: The list is sorted by repeatedly swapping adjacent elements in the wrong order.
 * 
 * Example 2:
 * Input: [1, 1, 1, 11, 0, 22, 17]
 * Output: [0, 1, 1, 1, 11, 17, 22]
 * Explanation: The list is sorted by repeatedly swapping adjacent elements in the wrong order.
 * 
 * Example 3:
 * Input: [37, 25, 29, 8]
 * Output: [8, 25, 29, 37]
 * Explanation: The list is sorted by repeatedly swapping adjacent elements in the wrong order.
 */

/**
 * @param {number[]} arr
 * @return {number[]} 
 */
const bubbleSort = (arr) => {
    var noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}

console.log(bubbleSort([23, 4, 5, 1, 93, 23, 44])); // [1, 4, 5, 23, 23, 44, 93]
console.log(bubbleSort([1, 1, 1, 11, 0, 22, 17])); // [0, 1, 1, 1, 11, 17, 22]
console.log(bubbleSort([37, 25, 29, 8])); // [8, 25, 29, 37]
