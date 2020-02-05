const { runTest, testCase } = require("../util");
const { log, error, time, timeEnd } = console;
const data = [
  [["3 2 3 2 3,6 1 1 2 3"], "First"],
  [["2 3 3 2 3,6 1 1 2 3"], "First"],
  [["2 3 3 3 2,6 1 1 2 3"], "First"],
  [["5 5 5 5 5,1 1 1 1 1"], "Draw"]
];

function solution(s1) {
  const [comb1, comb2] = s1.split(",");
  const arr1 = comb1.split(" ");
  const arr2 = comb2.split(" ");

  const ranking = array => {
    const result = {};
    array.map(val =>
      result && result[val] ? result[val]++ : (result[val] = 1)
    );
    const cheetsheet = [[5], [1, 1, 1, 1, 1], [1, 4], [2, 3], [1, 2, 2]];
    let answer = 6;
    cheetsheet.forEach((val, index) => {
      if (val.join("") === Object.values(result).join("")) answer = index;
    });
    return answer;
  };
  if (ranking(arr1) < ranking(arr2)) return "First";
  else if (ranking(arr1) > ranking(arr2)) return "Second";
  else return "Draw";
}
runTest(solution, testCase(data));

// [
//   Math.max(flowerdistance - 1, cv),
//   Math.max(flowerdistance - 1, cv) > 0 ? cheesecake + 1 : cheesecake
// ],
