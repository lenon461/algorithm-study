const { equal, sum, runTest } = require("../util/icymonk");

const makeIndexPairList = len => {
  const result = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      result.push([i, j]);
    }
  }
  return result;
};

const twoSum = function(nums, target) {
  const numLength = nums.length;
  const indexPairList = makeIndexPairList(numLength);
  const indexPairLength = indexPairList.length;

  for (let i = 0; i < indexPairLength; i++) {
    const indexPair = indexPairList[i];
    const [index1, index2] = indexPair;
    const value1 = nums[index1];
    const value2 = nums[index2];
    const answer = sum(value1, value2);

    if (equal(answer)(target)) return indexPair;
  }

  return [];
};

const testCase = [
  { args: [[2, 7, 11, 15], 9], answer: [0, 1] },
  { args: [[2, 7, 11, 15], 10], answer: [] },
  { args: [[2, 7, 11, 15], 11], answer: [] },
  { args: [[2, 7, 11, 15], 12], answer: [] },
  { args: [[2, 7, 11, 15], 13], answer: [0, 2] },
  { args: [[2, 7, 11, 15], 17], answer: [0, 3] }
];

runTest(twoSum, testCase);
