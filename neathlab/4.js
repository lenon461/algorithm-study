const { runTest, testCase } = require("../util");
const { log, error, time, timeEnd } = console;
const data = [
  [
    [
      3,
      2,
      [
        [2, 1],
        [8, 3],
        [5, 7]
      ]
    ],
    19
  ]
  // [[2, [0, 0]], 2],
];

function solution(n, b, arr) {
  arr.sort((a, b) => a[0] - b[0]);

  return arr.reduce((curtime, cv) => {
    const arrivetime = cv[0];
    const usetime = cv[1];

    if (curtime < arrivetime) curtime = arrivetime;

    return curtime + usetime + b;
  }, 0);
}

runTest(solution, testCase(data));
