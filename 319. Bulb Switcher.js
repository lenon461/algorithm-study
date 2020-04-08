const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[3], 1],
    [[10], 3],
    [[9999999], 3],
];

const divisorResult = [0];
var bulbSwitch = function(n) {
    const divisor = (n) => {
        if (divisorResult[n]) return divisorResult[n];
        let result = 0;
        if (Math.sqrt(n) == Math.round(Math.sqrt(n))) result++;
        for (let i = 1; i < Math.sqrt(n) - 1; i++) {
            if (n % i == 0) result += 2;
        }
        divisorResult[n] = result;
        return result;
    };

    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (divisor(i) % 2 == 1) {
            result++;
        }
    }
    log(divisorResult);
    return result;
};

var bulbSwitchANS = function(n) {
    return parseInt(Math.sqrt(n));
};
runTest(bulbSwitch, testCase(data));
