const { runTest, testCase } = require("./util");
const { log, error, time, timeEnd } = console;
const data = [
    // [[4], 2],
    [[8], 2, 1],
    // [[10], 3],
    // [[100], 10],
];
const mySqrt = (x, logging) => {
    let start = x.toString().length % 2 == 1 ? 10 ** Math.floor(x.toString().length / 2) : 10 ** Math.floor((x.toString().length - 1) / 2);
    if (logging) {
    }
    while (1) {
        if (start * start > x) return start - 1;
        if (start * start === x) return start;
        start++;
    }
};

const mySqrt2 = (x, logging) => {
    let min = 1;
    let max = x;
    let mid;
    if (x <= 1) return x;
    while (min < max) {
        mid = Math.floor((min + max) / 2);
        if (logging) log(min, mid, max);
        if (mid * mid === x || mid === min || mid === max) return mid;
        else if (mid * mid > x) {
            max = mid;
        } else {
            min = mid;
        }
    }
};
runTest(mySqrt2, testCase(data));
