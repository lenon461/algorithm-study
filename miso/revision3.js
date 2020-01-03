const { log, error, time, timeEnd } = console;
const sum = (arg1, arg2) => {

    const StrtoArr = (str) => str.split('').reverse();
    const ArrSum = (arr1, arr2) => {

        const len = arr1.length > arr2.length && arr1.length || arr2.length;
        let result = [];

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
        return result.reverse().join('');

    }
    const HantoNum = (arr) => {
        const map = {
            "일": 1,
            "이": 2,
            "삼": 3,
            "사": 4,
            "오": 5,
            "육": 6,
            "칠": 7,
            "팔": 8,
            "구": 9,
        }
        const mulmap = {
            "십": 10,
            "백": 100,
            "천": 1000,
        }
        const endmap = {
            "만": "10000",
            "억": "100000000",
            "조": "1000000000000",
        }
        arr.reduce((ele, cv, ci) => {
            if(endmap[ele]) {
                return acc;
            }
            else if(map[ele]) {
                return acc + cv
            }
            else if(mulmap[ele]) {
                return acc + cv 
            }
        }, 0)
        return ["1", "2", "3"];
    }
    // return ArrSum(StrtoArr(arg1), StrtoArr(arg2))
    return (ArrSum(HantoNum(StrtoArr(arg1)), HantoNum(StrtoArr(arg2))))
}

const runTest = (f, testCase) => {
    const result = testCase.map((ele, index) => {
        const { args, answer } = ele;
        const expect = f(...args);
 
        return ({ index, result: (answer === expect), answer, expect });
    }).map((ele) => {
        if(ele.answer === ele.expect) (delete ele.answer, delete ele.expect);
        log(ele);
    });
}
const data = [
    [["123", "456"], "579"],
    [["99", "1"], "100"],
    [["1", "999"], "1000"],
    [["999999999999", "999999999999999"], "1000999999999998"],
    [["0", "1010"], "1010"],
    [["90", "1010"], "1100"],
    [["90", "1010"], "1101"],
]
const data2 = [
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
const answer2 = [
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
 
const testCase = (data) => {
    return data.map((ele, index, arr) => {
        const args = ele[0];
        const answer = ele[1];
        return { args, answer };
    })
}
const madetestCase2 = (data) => {
    return data.map((ele, index, arr) => {
        const arg1 = ele[0];
        const arg2 = ele[1];
        const answer = answer2[index];
        return { args : [arg1, arg2], answer };
    })
}
runTest(sum, (madetestCase2(data2)))