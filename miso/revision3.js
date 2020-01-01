const { log, error, time, timeEnd } = console;
const sum = (arg1, arg2) => {

    const StrtoArr = (str) => str.split('').reverse();
    const ArrSum = (arr1, arr2) => {

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
        if (ceil) result.unshift('1');
        return result.join('');

    }
    return ArrSum(arg1, arg2)
}

const runTest = (f, testCase) => {
    const result = testCase.map((ele, index) => {
        const { args, answer } = ele;
        const expect = f(...args);

        return ({ index, result: (answer === expect), answer, expect });
    })
    log(result)
}
const data = [
    [["123", "456"], "579"],
    [["99", "1"], "100"],
    [["1", "999"], "1000"],
]
const testCase = (data) => {
    return data.map((ele, index, arr) => {
        const args = ele[0];
        const answer = ele[1];
        return { args, answer };
    })
}
runTest(sum, testCase(data))