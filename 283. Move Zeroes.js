const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[[0, 1, 0, 3, 12]], [1, 3, 12, 0, 0]],
    [[[-1, 0, 0, 0, 15, -15, 13]], [1, 3, 12, 0, 0]],
    [[[-959151711, 623836953, 209446690, -2082980371, 0, 0, 0]], [1, 3, 12, 0, 0]],
];

var moveZeroes2 = function(nums) {
    return nums
        .reduceRight((pv, cv) => {
            if (cv == 0) {
                pv.unshift(0);
                return pv;
            } else {
                pv.push(cv);
                return pv;
            }
        }, [])
        .reverse();
};
//inplace
var moveZeroes3 = function(nums) {
    return nums.sort((a, b) => {
        if (a == 0) return 1;
        else if (b == 0) return -1;
        else return 0;
    });
};
var moveZeroes = function(nums) {
    let LZ = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) nums[LZ++] = nums[i];
    }
    for (let i = LZ; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
runTest(moveZeroes, testCase(data));
