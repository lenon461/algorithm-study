import { runTest } from '../util/icymonk';

const { log, error, time, timeEnd } = console;
const BigInt = (num: string): Array<string> => {

    const result = [];
    num.split('').forEach((val) => {
        result.unshift(val);
    })
    return result;
}

const ArrSum = (arr1: Array<string>, arr2: Array<string>): Array<string> => {
    if(arr1 === [] || arr2 === []) return arr1[0] && arr1 || arr2;

    const len = arr1.length > arr2.length && arr1.length || arr2.length;
    const result = [];

    let ceil = 0;
    for(let i = 0; i < len; i++) {
        let num1 = Number(arr1[i]) || 0;
        let num2 = Number(arr2[i]) || 0;

        let val = num1 + num2 + ceil;
        if(val >= 10) {
            val = val - 10;
            ceil = 1;
        }
        else {
            ceil = 0;
        }
        result.push(String(val));
    }
    if(ceil) result.push('1');
    return result;
}

const BigIntSum = (args, target) => {

    const num1 = args[0];
    const num2 = args[1];

    const expect = ArrSum( BigInt(num1), BigInt(num2) ).reverse().join('');
    
    const result = {
        args,
        target,
        expect,
        correct: target === expect,
    }  

    return expect;
}
const testCase = [
    { args: [["999999999999", "999999999999999"]], target: "1000999999999998" },
    { args: [["9999", "1"]], target: "10000" },
    { args: [["1", "9999"]], target:"10000" },
    { args: [["98", "7"]], target: "105" },
]
runTest(BigIntSum, testCase)