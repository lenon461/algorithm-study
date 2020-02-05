const { runTest, testCase } = require("../util");
const { log, error, time, timeEnd } = console;
const data = [
  [
    [
      [4, 99, 2, 6, 7, 13, 88, 76],
      [6, 88, 13, 4, 99, 2, 7]
    ],
    76
  ],
  [
    [
      [1, 2, 3, 0],
      [1, 2, 3]
    ],
    0
  ]
];

function solution(s1, s2) {
  var answer = -1;
  s1.sort();
  s2.sort();

  s1.map((v, index) => {
    if (v !== s2[index] && answer === -1) {
      answer = v;
    }
  });
  return answer;
}

runTest(solution, testCase(data));
