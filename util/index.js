const { log, error, time, timeEnd } = console;
const runTest = (f, testCase) => {
    const result = testCase
        .map((ele, index) => {
            const { args, answer, logging } = ele;
            const expect = f(...args, logging);
            return { index, result: answer === expect, answer, expect, args };
        })
        .map((ele) => {
            if (ele.answer === ele.expect) delete ele.answer, delete ele.expect, delete ele.args;
            log(ele);
        });
};
const data = [
    [["123", "456"], "579"],
    [["99", "1"], "100"],
    [["1", "999"], "1000"],
    [["999999999999", "999999999999999"], "1000999999999998"],
    [["0", "1010"], "1010"],
    [["90", "1010"], "1100"],
    [["90", "1010"], "1101"],
];
const testCase = (data) => {
    return data.map((ele, index, arr) => {
        const args = ele[0];
        const answer = ele[1];
        const logging = ele[2] || 0;
        return { args, answer, logging };
    });
};
exports.runTest = runTest;
exports.testCase = testCase;
