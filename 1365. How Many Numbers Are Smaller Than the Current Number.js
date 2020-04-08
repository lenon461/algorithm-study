const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[[8, 1, 2, 2, 3]], [4, 0, 1, 1, 3]],
    [[[6, 5, 4, 8]], [2, 1, 0, 3]],
    [[[7, 7, 7, 7]], [0, 0, 0, 0]],
];

var smallerNumbersThanCurrent = function(nums) {
    return nums.map((val) => {
        return nums.filter((ele) => {
            return val > ele;
        }).length;
    });
};
runTest(smallerNumbersThanCurrent, testCase(data));
