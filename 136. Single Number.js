const { runTest, testCase } = require('./util');
const { log, error, time, timeEnd } = console;
const data = [
    [[[2, 2, 1]], 1],
    [[[4, 1, 2, 1, 2]], 4],
]

const singleNumber = (nums) =>
    nums.reduce((arr, num) => {
        arr.indexOf(num) === -1 ? arr.push(num) : arr.splice(arr.indexOf(num), 1);
        return arr;
    }, [])
        .pop()


runTest(singleNumber, testCase(data));