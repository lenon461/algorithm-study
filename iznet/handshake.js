const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[6, [1, 2, 2, 1, 3, 3]], 3],
    [[22, [1, 7, 1, 2, 4, 2, 4, 9, 1, 1, 9, 4, 5, 9, 4, 5, 6, 9, 2, 1, 2, 9]], 6],
];

const handshake = (len, array) => {
    const result = [0];
};
runTest(handshake, testCase(data));
