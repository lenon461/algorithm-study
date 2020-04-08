const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[[3, 4, 5, 3, 7]], 3],
    [[[1, 2, 3, 4]], -1],
    [[[1, 3, 1, 2]], 0],
];

function solution(A) {
    const treediff = [];
    for (let i = 0; i < A.length - 1; i++) {
        treediff.push(A[i + 1] - A[i]);
    }
    log(treediff);
    const isPleasing = (treediff) => {
        let pleasing = true;
        for (let i = 0; i < treediff.length - 1; i++) {
            if (treediff[i] * treediff[i + 1] >= 0) {
                return false;
            }
        }
        return true;
    };
    const countCutPoint = (trees) => {
        let CutPoint = 0;
        for (let i = 0; i < trees.length - 3; i++) {
            if (
                trees[i] < trees[i + 1] &&
                trees[i + 1] < trees[i + 2] &&
                trees[i + 2] > trees[i + 3]
            ) {
                CutPoint++;
            }
        }
        if (CutPoint == 1) return 3;
        else return -1;
    };
    if (isPleasing(treediff)) return 0;
    else {
        return countCutPoint(A);
    }
}
runTest(solution, testCase(data));
