exports.range = (start, end, gap = 1) => {
  const result = [];
  for (let i = start; start <= end; i += gap) result.push(i);
  return result;
};

exports.push = value => arr => (arr.push(value), value);

exports.sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
exports.equal = a => b => a === b;

const { log, error, time, timeEnd } = console;
exports.log = log;

const compareAnswer = (expect, answer) => {
  if (Array.isArray(answer))
    return answer.every((value, index) => expect[index] === value);

  return expect === answer;
};

const analyzeTestResult = testResult => ({
  total: testResult.length,
  success: testResult.filter(tr => tr.ok).length,
  fail: testResult.filter(tr => !tr.ok).length
});

const { stringify: toString } = JSON;

const makeResultString = testResult =>
  `No.${toString(testResult.index)}\tArgs: ${toString(
    testResult.args
  )}\tAnswer: ${toString(testResult.answer)}\tMyAnswer: ${toString(
    testResult.expect
  )}\t\tResult: ${testResult.ok ? "O" : "X"}`;

exports.runTest = (f, testCase) => {
  time("time");
  const testResult = testCase.map((tc, index) => {
    const result = { index, ...tc };
    const { args, answer } = result;

    try {
      const expect = f(...args);
      result.expect = expect;
      result.ok = compareAnswer(expect, answer);
    } catch (error) {
      result.error = error;
    }

    return result;
  });
  timeEnd("time");

  testResult.map(makeResultString).forEach(str => log(str));
  log(analyzeTestResult(testResult));
};
