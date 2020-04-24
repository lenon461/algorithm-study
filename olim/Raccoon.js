const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
  [[0], 2],
  [[1], 4],
  [[4], 16],
  [[10], 16],
];

/**
 * Description
 * 메모이제이션 기법을 이용. 수열을 배열에 저장해서 빠르게 리턴할 수 있도록 해줌
 */
const Raccoon = function (input) {
  const RacoonByMonth = new Array(input + 1);
  RacoonByMonth[0] = 2;
  RacoonByMonth[1] = 4;

  for (let i = 2; i <= input; i++) {
    RacoonByMonth[i] = RacoonByMonth[i - 1] + RacoonByMonth[i - 2];
  }

  return RacoonByMonth[input];
};

runTest(Raccoon, testCase(data));
