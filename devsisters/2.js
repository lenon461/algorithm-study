const { runTest, testCase } = require("../util");
const { log, error, time, timeEnd } = console;
const data = [
  [[4, [0, 1, 0, 5]], 1],
  [[2, [0, 0]], 2],
  [[1, [0]], 1],
  [[1, [1]], 1],
  [[2, [0, 1]], 1],
  [[10, [1, 1, 3, 0, 0, 0, 2, 1, 0, 3]], 3]
];

function solution(number, firecracker) {
  // return firecracker
  //   .reduceRight(
  //     ([flowerdistance, cheesecake], cv) => [
  //       Math.max(flowerdistance - 1, cv),
  //       Math.max(flowerdistance - 1, cv) === 0 ? cheesecake + 1 : cheesecake
  //     ],
  //     [0, 1]
  //   )
  //   .pop();

  return firecracker
    .reduceRight(
      ([prevflowerdistance, prevcheesecakeNum], curfloweredistance) => {
        const flowerdistance = Math.max(
          prevflowerdistance - 1,
          curfloweredistance
        );
        const cheesecakeNum =
          prevflowerdistance === 0 ? prevcheesecakeNum + 1 : prevcheesecakeNum;
        log(flowerdistance, cheesecakeNum);
        return [flowerdistance, cheesecakeNum];
      },
      [0, 0]
    )
    .pop();
}

runTest(solution, testCase(data));

// [
//   Math.max(flowerdistance - 1, cv),
//   Math.max(flowerdistance - 1, cv) > 0 ? cheesecake + 1 : cheesecake
// ],
