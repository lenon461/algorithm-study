const { runTest, testCase } = require("./util");
const { log, error, time, timeEnd } = console;
const data = [
  [
    [[-1, -10, 3, 0, 0, 0, 0], 3, [-3, 5, 6, 7], 4],
    [-10, -3, -1, 3, 5, 6, 7]
  ]
];
const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => (a > b ? 1 : -1));
};

runTest(merge, testCase(data));
