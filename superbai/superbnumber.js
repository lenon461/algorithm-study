const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
  [[1], 1],
  [[100], 6765],
];

/*
idea
 n자리수에서 i 가 나올수 있는 경우의 수 D(n, digit)를 DP를 이용해서 구한후
 경우의 수가 k 를 초과할때
 이전 n 과 digit 를 이용해서

 해당하는 숫자를 탐색하는 방법을 사용해 보려고 하였음

 d[i][digit]가 수열의 마지막 번째가 아니라 digit로 끝나는 모든 경우의 수 를 리턴해주기 때문에 조금 문제가 있는 접근법이 아닐까 싶음
 
 */

//k번째 배수
const SuperbNumber = function (k) {
  const n = 10000;
  const d = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

  let sum = 0;
  let final_i;
  let final_digit;
  for (let i = 1; i < n; i++) {
    d[i] = new Array(10);

    for (let digit = 0; digit < 10; digit++) {
      if (digit == 0) {
        d[i][digit] = d[i - 1][1];
      } else if (digit == 9) {
        d[i][digit] = d[i - 1][8];
      } else {
        d[i][digit] = d[i - 1][digit - 1] + d[i - 1][digit + 1];
      }
      sum += d[i][digit];
      if (sum >= k) {
        console.log(i + 1, "자리수");
        console.log(digit, "마지막자리");

        break;
      }
    }
    if (sum >= k) {
      break;
    }
  }
};

runTest(SuperbNumber, testCase(data));
