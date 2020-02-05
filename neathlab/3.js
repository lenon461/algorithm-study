const { runTest, testCase } = require("../util");
const { log, error, time, timeEnd } = console;
const data = [
  [["6", "3", "1 0 0 1 0 1", "1 3 2"], "1"]
  // [[2, [0, 0]], 2],
];

function solution(prevLength, curLength, prevValue, curValue) {

  
  
}

runTest(solution, testCase(data));

// [
//   Math.max(flowerdistance - 1, cv),
//   Math.max(flowerdistance - 1, cv) > 0 ? cheesecake + 1 : cheesecake
// ],
6 6
...#..
.##v#.
#v.#.#
#.o#.#
.###.#
...###