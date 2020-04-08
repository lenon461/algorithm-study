const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
    [[[8, 1, 2, 5, 4, 3, 6, 7]], [1, 2, 3, 4, 5, 6, 7, 8]],
    // [[[6, 5, 4, 8]], [4, 5, 6, 8]],
    // [[[7, 7, 7, 7]], [7, 7, 7, 7]],
];

var quicksort = function(array) {
    if (array.length < 2) return array;
    const unsorted = array.slice(0);
    const pivot = unsorted[Math.floor(Math.random() * 100) % unsorted.length];
    const smaller = [];
    const bigger = [];

    unsorted.map((ele) => {
        if (pivot > ele) smaller.push(ele);
        else bigger.push(ele);
    });

    return quicksort(smaller).concat(quicksort(bigger));
};
runTest(quicksort, testCase(data));
