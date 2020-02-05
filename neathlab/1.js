const { runTest, testCase } = require("../util");
const { log, error, time, timeEnd } = console;
const data = [
  [["AAABBCCBCAAC"], "5 4"]
  // [
  //   [
  //     [1, 2, 3, 0],
  //     [1, 2, 3]
  //   ],
  //   0
  // ]
];

function solution(line) {
  const linelength = line.length;
  const answer1 = line
    .split("")
    .reduce((pv, cv) => (pv[pv.length - 1] === cv ? pv : pv + cv)).length;
  const answer2 = line
    .split("")
    .reduce(
      ([prevNum, prevLetter, total], cv) => {
        // log([prevNum, prevLetter, total], prevNum);
        if (prevLetter === cv) return [prevNum + 1, prevLetter, total];
        else return [1, cv, total + Math.floor(prevNum / 2)];
      },
      [1, null, 0]
    )
    .pop();
  const result = `${linelength - answer1} ${answer2}`;
  return result;
}

runTest(solution, testCase(data));
