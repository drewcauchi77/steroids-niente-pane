/**
 * Insertion Sort
 * 
 * Implement the insertion sort algorithm, which builds the sorted array one item at a time by 
 * picking the next element and placing it in its correct position relative to the already sorted part of the array.
 * 
 * This algorithm works similarly to how we sort playing cards in our hands.
 * 
 * Example 1:
 * Input: [23, 4, 5, 1, 93, 23, 44]
 * Output: [1, 4, 5, 23, 23, 44, 93]
 * Explanation: Elements are picked one by one and placed in the correct order in the sorted portion of the array.
 * 
 * Example 2:
 * Input: [1, 1, 1, 11, 0, 22, 17]
 * Output: [0, 1, 1, 1, 11, 17, 22]
 * Explanation: Elements are picked one by one and placed in the correct order in the sorted portion of the array.
 * 
 * Example 3:
 * Input: [37, 25, 29, 8]
 * Output: [8, 25, 29, 37]
 * Explanation: Elements are picked one by one and placed in the correct order in the sorted portion of the array.
 */

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
};

console.log(insertionSort([23, 4, 5, 1, 93, 23, 44])); // [1, 4, 5, 23, 23, 44, 93]
console.log(insertionSort([1, 1, 1, 11, 0, 22, 17])); // [0, 1, 1, 1, 11, 17, 22]
console.log(insertionSort([37, 25, 29, 8])); // [8, 25, 29, 37]
