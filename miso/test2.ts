// @ts-ignore
import { runTest } from '../util/icymonk.js';

const { log, error, time, timeEnd } = console;
const BigInt = (num: string): Array<string> => {

    const result: string[] = [];
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
    result.reverse()

    log(result)
    return result;
}

const HantoNum = (num: string): Array<string> => {
    const result = ['0', '0', '0', '0',   '0', '0', '0', '0',   '0', '0', '0', '0',   '0', '0', '0', '0'];
    const short = ['0', '0', '0', '0'];

    const caseA = "X만억조";
    const caseB = "X십백천";
    const caseC = "일이삼사오육칠팔구";

    const HangulA = [12, 8, 4, 0];
    const HangulB = [3, 2, 1, 0];
    const HangulC = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let val = 0;
    let digit = 0;
    let prev = 0;
    let temp = short.slice(0);
    for(let i = 0; i < num.length; i++) {
        const letter = num[i];
        // 네자리수 temp 만들기
        if(caseC.includes(letter)) {

            prev = HangulC[caseC.indexOf(letter)]

        } else if(caseB.includes(letter))   {

            if(prev === 0) prev = 1;
            temp.splice(HangulB[caseB.indexOf(letter)], 1, String(prev))
            prev = 0;
        } 


        // result에 val 덮어쓰기
        if(caseA.includes(letter) || i === num.length - 1) {
            if(prev) temp[3] = String(prev)
            digit = caseA.indexOf(letter) !== -1 ? HangulA[caseA.indexOf(letter)] : 12
            result.splice(digit, 4, ...temp)

            prev = 0;
            val = 0;
            digit += 4;
            temp = short.slice(0);
        } 

    }
    log(result)
    return result;
}

const NumtoHan = (num: string): string => {

    if(num.length !== 16) throw "Not allowed";
    
    let result = ""
    const caseA = "조억만";
    const caseB = "천백십";
    const caseC = "일이삼사오육칠팔구";

    const HangulA = [12, 8, 4, 0];
    const HangulB = [3, 2, 1, 0];
    const HangulC = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const temp: any[] = [];
    for(let i = 0; i < 16; i += 4) {
        for(let j = 0; j < 4; j++) {
            const letter = num[i + j]
            if(letter !== '0') {
                temp.push(caseC[HangulC.indexOf(Number(letter))])
                if(j !== 3) temp.push(caseB[j])
            }
        }
                  
        if(temp.length > 0) {
            temp.push(caseA[i / 4])
            result += temp.join('')
            temp.splice(0, temp.length)
        }
        
    }
    return result.replace("일만", "만").replace("일천", "천").replace("일백", "백").replace("일십", "십");


}

const BigIntSum = (num1: any, num2: any) => {

    const expect = ArrSum(HantoNum(num1).reverse(), HantoNum(num2).reverse()).join('');
    // const expect = ArrSum(BigInt(num1), BigInt(num2)).reverse().join('');

    return NumtoHan(expect);
}
const DATA = [
    // ['오백삼십조칠천팔백구십만천오백삼십구', '삼조사천이만삼천구'],
    // ['육십사억삼천십팔만칠천육백구', '사십삼'],
    // ['구백육십조칠천억팔천백삼십이만칠천일', '사십삼조오천이백억육천구백십만일'],
    // ['이천구백육십조천오백칠십만삼천구백구십', '삼천사백오십조일억이천만육백사십삼'],
    // ['사십오억삼천육십만오백구십', '칠십억천이백삼십오만칠천구십이'],
    // ['천백십일', '구천오백구십구'],
    // ['오억사천', '백십일'],
    ['만오천사백삼십', '십구만삼천오백'],
    // ['일조', '삼'],
    // ['일억', '만'],
]
const answer = [
    // '오백삼십삼조일억천팔백구십이만사천오백사십팔',
    // '육십사억삼천십팔만칠천육백오십이',
    // '천사조이천이백일억오천사십이만칠천이',
    // '육천사백십조일억삼천오백칠십만사천육백삼십삼',
    // '백십오억사천이백구십오만칠천육백팔십이',
    // '만칠백십',
    // '오억사천백십일',
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