/*
 * Frequency Counter - sameFrequency
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 * Time: O(N)
 *
 */

const sameFrequency = (num1, num2) => {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;
  let frequencyMap = new Map();

  for (var val of str2) {
    frequencyMap.set(
      val,
      frequencyMap.get(val) ? frequencyMap.get(val) + 1 : 1,
    );
  }

  for (var val of str1) {
    if (!frequencyMap.has(val) || frequencyMap.get(val) == 0) {
      return false;
    }

    frequencyMap.set(val, frequencyMap.get(val) - 1);
  }

  return true;
}; // O(N)

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

// Refactored solution:
const sameFrequency_REF = (num1, num2) => {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  const count = {};

  for (const char of strNum1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of strNum2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Alternate solution:
const sameFrequency_ALT = (num1, num2) => {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
};
