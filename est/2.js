const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[[51, 17, 71, 42]], 93],
    [[[42, 33, 60]], 102],
    [[[51, 32, 43]], -1],
];

function solution(A) {
    const digitSum = (num) => {
        if (num < 10) return num;
        else {
            let result = 0;
            while (num > 0) {
                result += num % 10;
                num = Math.floor(num / 10);
            }
            return digitSum(result);
        }
    };
    let result = -1;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            const ta = digitSum(A[i]);
            const tb = digitSum(A[j]);
            if (ta === tb) {
                result = Math.max(result, A[i] + A[j]);
            }
        }
    }
    return result;
}
runTest(solution, testCase(data));
