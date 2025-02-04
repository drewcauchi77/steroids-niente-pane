/**
 * 436. Find Right Interval
 * 
 * You are given an array of intervals, where `intervals[i] = [starti, endi]` and each `starti` is unique.
 * 
 * The right interval for an interval `i` is an interval `j` such that `startj >= endi` and `startj` is minimized.
 * Note that `i` may equal `j`.
 * 
 * Return an array of right interval indices for each interval `i`. 
 * If no right interval exists for interval `i`, then put `-1` at index `i`.
 * 
 * Example 1:
 * Input: intervals = [[1,2]]
 * Output: [-1]
 * Explanation: There is only one interval in the collection, so it outputs -1.
 * 
 * Example 2:
 * Input: intervals = [[3,4],[2,3],[1,2]]
 * Output: [-1,0,1]
 * Explanation: 
 * - There is no right interval for [3,4].
 * - The right interval for [2,3] is [3,4] since `start0 = 3` is the smallest start that is `>= end1 = 3`.
 * - The right interval for [1,2] is [2,3] since `start1 = 2` is the smallest start that is `>= end2 = 2`.
 * 
 * Example 3:
 * Input: intervals = [[1,4],[2,3],[3,4]]
 * Output: [-1,2,-1]
 * Explanation:
 * - There is no right interval for [1,4] and [3,4].
 * - The right interval for [2,3] is [3,4] since `start2 = 3` is the smallest start that is `>= end1 = 3`.
 * 
 * Constraints:
 * - 1 <= intervals.length <= 2 * 10^4
 * - intervals[i].length == 2
 * - -10^6 <= starti <= endi <= 10^6
 * - The start point of each interval is unique.
 */

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval = (intervals) => {
    const n = intervals.length;
    const startArr = intervals.map((interval, i) => [interval[0], i]);
    
    startArr.sort((a, b) => a[0] - b[0]);
    
    const binarySearch = (target) => {
        let start = 0;
        let end = startArr.length - 1;
        
        while (start <= end) {
            const middle = Math.floor((start + end) / 2);
            
            if (startArr[middle][0] >= target) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        
        return start < n ? startArr[start][1] : -1;
    };
    
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        const target = intervals[i][1];
        result[i] = binarySearch(target);
    }
    
    return result;
};

console.log(findRightInterval([[1,2]])); // [-1]
console.log(findRightInterval([[3,4],[2,3],[1,2]])); // [-1,0,1]
console.log(findRightInterval([[1,4],[2,3],[3,4]])); // [-1,2,-1]
