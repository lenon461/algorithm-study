const { runTest, testCase } = require('./util');
const { log, error, time, timeEnd } = console;
const data = [
    [["()"], true],
    [["()[]{}"], true],
    [["(]"], false],
    [["([)]"], false],
    [["["], false],
    [["]"], false],
]

const isValid = (input) => {

    const open = "({["
    const close = ")}]"

    const queue = [];
    const result = input.split('').map((ele) => {
        if (open.includes(ele)) queue.push(ele)
        else if (close.includes(ele)) {
            if(close.indexOf(ele) !== open.indexOf(queue.pop())) return false; 
        }
        return true;
    })



    return result.every(ele => ele === true) && queue.length === 0;
}

runTest(isValid, testCase(data));