const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
  [[6, 8, 8], 32],
  [[10, 25, 9], 75],
  [[19271974, 182817878782, 9], 75],
];

/*

환경 : Ubuntu 18.04.4 LTS , node v12.16.2

표준입출력을 따로 구현하지 않고, 함수로 분리해서 실행 할 수 있도록 하였습니다.


description : 
최소 공배수까지의 합집합의 수열을 구한후
k번째 수를 최소공배수와 수열을 이용해 수학적으로 도출해냄

Time : O(N)
최소공배수까지 While문을 반복하므로 O(a*b) 즉 O(N) 과 같다.

Space : O(N)
최소공배수까지 의 합집합을 배열 하나에 집어 넣으므로 O(N)
*/

//k번째 배수
const KthMultiple = function (a, b, k) {
  // 합집합 만들기
  const makeUnion = (a, b) => {
    const union = [];
    let ath = a;
    let bth = b;
    while (ath !== bth) {
      if (ath < bth) {
        union.push(ath);
        ath += a;
      } else {
        union.push(bth);
        bth += b;
      }
    }
    union.push(ath);
    return union;
  };
  const union = makeUnion(a, b);

  //최소공배수는 합집합의 마지막 수
  const lcm = union[union.length - 1];

  //합집합의 길이를 이용해 k 번째 수에 해당하는 집합의 인덱스를 구함
  const quot = Math.floor(k / union.length);
  const remainder = k % union.length;

  //k번째 수를 계산
  return union[remainder - 1] + quot * lcm;
};

runTest(KthMultiple, testCase(data));
