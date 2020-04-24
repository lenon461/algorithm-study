const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;
const data = [
  [["[[(){}]]"], true],
  [["(()))"], false],
  [[")(())[]{}"], false],
  [["({[}])"], false],
  [["[{(([{[]}]))}]"], true],
];

/**
 * Description
 * 스택을 이용, 열리는 괄호는 푸쉬, 닫히는 괄호는 팝한다.
 * 팝 할때 열렸던 괄호와 인덱스가 맞는지 검사해서 Valid 체크
 * 종료시 큐에 남아있는 괄호가 없으면 Valid
 */
const SyntaxChecker = function (input) {
  const open = "({[";
  const close = ")}]";

  const queue = [];
  const ArrayedInput = input.split("");
  for (let i = 0; i < ArrayedInput.length; i++) {
    let ele = ArrayedInput[i];
    if (open.includes(ele)) queue.push(ele);
    else if (close.includes(ele)) {
      if (close.indexOf(ele) !== open.indexOf(queue.pop())) return false;
    } else throw new Error("Unvalid Syntax Error");
  }
  return queue.length === 0;
};

runTest(SyntaxChecker, testCase(data));
