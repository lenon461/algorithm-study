const { runTest, testCase } = require("../util");
const { log, error, time, timeEnd } = console;
const data = [
  [["cookie", "cooookieee"], true],
  [["cookie", "cokie"], false],
  [["cookie", "cookoie"], false],
  [["s", "s"], true],
  [
    [
      "s",
      "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    ],
    true
  ]
];

function solution(s1, s2) {
  const re = new RegExp(
    s1
      .split("")
      .map(v => `${v}+`)
      .join("")
  );
  var answer = s2.match(re);
  return answer !== null;
}
runTest(solution, testCase(data));

// [
//   Math.max(flowerdistance - 1, cv),
//   Math.max(flowerdistance - 1, cv) > 0 ? cheesecake + 1 : cheesecake
// ],
