const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[[2, 3, -2, 4]], 6],
    [[[-2, 0, -1]], 0],
];

function maxProduct(nums) {
    let res = -Number.MAX_VALUE;
    let min = 1;
    let max = 1;
    for (let num of nums) {
        [min, max] = [Math.min(num, min * num, max * num), Math.max(num, min * num, max * num)];
        log(min, max, res);
        res = Math.max(res, max);
    }
    return res;
}
runTest(maxProduct, testCase(data));
