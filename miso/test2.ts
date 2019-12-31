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
    if (arr1 === [] || arr2 === []) return arr1[0] && arr1 || arr2;

    const len = arr1.length > arr2.length && arr1.length || arr2.length;
    const result = [];

    let ceil = 0;
    for (let i = 0; i < len; i++) {
        let num1 = Number(arr1[i]) || 0;
        let num2 = Number(arr2[i]) || 0;

        let val = num1 + num2 + ceil;
        if (val >= 10) {
            val = val - 10;
            ceil = 1;
        }
        else {
            ceil = 0;
        }
        result.push(String(val));
    }
    if (ceil) result.push('1');
    return result;
}

const HantoNum = (num: string): Array<string> => {
    const result = ['0', '0', '0', '0',   '0', '0', '0', '0',   '0', '0', '0', '0',   '0', '0', '0', '0'];
    const temp = ['0', '0', '0', '0'];

    for(let i = 0; i < )

    return result;
}

const BigIntSum = (args, target) => {

    const num1 = args[0];
    const num2 = args[1];

    const expect = ArrSum(BigInt(num1), BigInt(num2)).reverse().join('');

    const result = {
        args,
        target,
        expect,
        correct: target === expect,
    }

    return expect;
}
const DATA = [
    ['오백삼십조칠천팔백구십만천오백삼십구', '삼조사천이만삼천구'],
    ['육십사억삼천십팔만칠천육백구', '사십삼'],
    ['구백육십조칠천억팔천백삼십이만칠천일', '사십삼조오천이백억육천구백십만일'],
    ['이천구백육십조천오백칠십만삼천구백구십', '삼천사백오십조일억이천만육백사십삼'],
    ['사십오억삼천육십만오백구십', '칠십억천이백삼십오만칠천구십이'],
    ['천백십일', '구천오백구십구'],
    ['오억사천', '백십일'],
    ['만오천사백삼십', '십구만삼천오백'],
    ['일조', '삼'],
    ['일억', '만'],
]
const answer = [
    '오백삼십삼조일억천팔백구십이만사천오백사십팔',
    '육십사억삼천십팔만칠천육백오십이',
    '천사조이천이백일억오천사십이만칠천이',
    '육천사백십조일억삼천오백칠십만사천육백삼십삼',
    '백십오억사천이백구십오만칠천육백팔십이',
    '만칠백십',
    '오억사천백십일',
    '이십만팔천구백삼십',
    '일조삼',
    '일억일만',
]
const testCase = (() => {
    return DATA.map((val, i) => {
        return {args: val, target: answer[i]}
    })
})();
runTest(BigIntSum, testCase)