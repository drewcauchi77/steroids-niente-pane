const minSubArrayLen = (arr, num) => {
    if (arr.length == 0) return 0;

    let subarrayLen = 0;
    
    let leftSlide = 0;
    let rightSlide = 0;
    let tempSum = 0;

    while(rightSlide < arr.length) {
        if (leftSlide == rightSlide) {
            tempSum = arr[leftSlide];
        }

        if (tempSum < num) {
            rightSlide++;
            tempSum += arr[rightSlide];
        } else if(tempSum > num) {
            tempSum -= arr[leftSlide];
            leftSlide++;
        }

        if (tempSum == num) {
            subarrayLen = Math.min(subarrayLen, rightSlide - leftSlide + 1)
        }
    }

    return subarrayLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
