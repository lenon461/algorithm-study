const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[[3, 8, 2, 3, 3, 2]], 3],
    [[[7, 1, 2, 8, 2]], 2],
    [[[3, 1, 4, 1, 5]], 0],
    [[[5, 5, 5, 5, 5]], 5],
];

function solution(A) {
    const record = {};
    A.map((ele) => {
        if (record[ele]) {
            record[ele]++;
        } else {
            record[ele] = 1;
        }
    });
    const keys = Object.keys(record)
        .sort()
        .reverse();

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (parseInt(key) === record[key]) return record[key];
    }
    return 0;
}
runTest(solution, testCase(data));
