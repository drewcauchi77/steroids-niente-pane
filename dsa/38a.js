const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;

    let maxSum = 0;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    
    let leftSlide = 0;
    let tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[leftSlide] + arr[i];
        leftSlide++;
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
