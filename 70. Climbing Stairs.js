const { runTest, testCase } = require('./util');
const { log, error, time, timeEnd } = console;
const data = [
    [[2], 2],
    [[3], 3],
    [[4], 5],
    [[200], 5],
]

const climbStairs = n =>
    Array(n - 1)
        .fill(0) // Because the reduce function ignores undefined values.
        .reduce(([a, b]) => [b, a + b], [1, 1])
        .pop()

runTest(climbStairs, testCase(data));