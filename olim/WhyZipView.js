const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
  [
    [
      [
        [0, 611, 648],
        [611, 0, 743],
        [648, 743, 0],
      ],
    ],
    1259,
  ],
  [
    [
      [
        [0, 326, 503, 290],
        [326, 0, 225, 395],
        [503, 225, 0, 620],
        [290, 395, 620, 0],
      ],
    ],
    841,
  ],
];

/**
 * Description
 * 비트마스크와 DP를 이용 최소 비용 순회 경로를 계산.
 * 단, 시작 지점에 따라 최소 비용이 다른 결과를 리턴하므로, 모든 노드에 대해서 반복하여 그중 최소를 리턴.
 */
const WhyZipView = function (map) {
  const n = map.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(-1));

  const travling = (current, visited) => {
    let result = dp[current][visited];
    if (result && result != -1) return result;

    if (visited == (1 << n) - 1) {
      return 0;
    }

    result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      if (map[current][i] && !(visited & (1 << i))) {
        let visit = visited | (1 << i);
        result = Math.min(result, travling(i, visit) + map[current][i]);
      }
    }

    return result;
  };

  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    result = Math.min(result, travling(i, Math.pow(2, i)));
  }
  return result;
};

runTest(WhyZipView, testCase(data));
