const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = function () {
    rl.question('give me a number1: ', (val1) => {
        rl.question('give me a number2: ', (val2) => {
            const result = sum_Of_BigInt(translate(val1), translate(val2));
            console.log(toHan(result))

            rl.close()
        })
    })
}

function BigInt(string) {
    const result = []
    if (!string) result.push('0')
    for (let i = 0; i < string.length; i++) {
        result.push(string[i])
    }
    // console.log(result);

    return result
}
function sum_Of_BigInt(a, b) {
    const val1 = new BigInt(a)
    const val2 = new BigInt(b)
    const result = []
    const diff = val1.length - val2.length

    if (diff < 0) {
        for (let i = 0; i < diff * -1; i++) {
            val1.unshift('0')
        }
    }
    else {
        for (let i = 0; i < diff; i++) {
            val2.unshift('0')
        }
    }

    let up = 0
    for (let i = val1.length - 1; i >= 0; i--) {
        let v1 = val1[i] * 1
        let v2 = val2[i] * 1
        // result.unshift(v1 + v2)
        let temp = v1 + v2 + up
        if (temp >= 10) {
            result.unshift(temp - 10);
            up = 1
        }
        else {
            result.unshift(temp)
            up = 0
        }
    }
    if (up) result.unshift(up)

    // console.log(result)
    // console.log('answer : ', result.join(''))
    return (result.join(''))
}

//han to number
function translate(string) {

    let final = ''
    let middle = ''
    let first = ''
    for (let i = 0; i < string.length; i++) {
        const char = string[i];


        if (char == '조' || char == '억' || char == '만') {
            if (middle == '' && first == '') middle += '1'
            else if (middle == '') middle += first
            if( middle != first)
                middle = sum_Of_BigInt(middle, first)
            middle += toIndex(char)
            final = sum_Of_BigInt(final, middle)
            middle = ''
            first = ''
        }
        else if (char == '백' || char == '천' || char == '십') {
            if (first == '') first += '1'
            first += toNumber(char)
            middle = sum_Of_BigInt(middle, first)
            first = ''
        }
        else {
            first += toNumber(char)
            // console.log(final, '///', middle, '///', temp);
        }

    }
    middle = sum_Of_BigInt(middle, first)
    final = sum_Of_BigInt(final, middle)
    // console.log(final)
    return final;
}

function toNumber(char) {
    switch (char) {
        case '일':
            return '1'
        case '이':
            return '2'
        case '삼':
            return '3'
        case '사':
            return '4'
        case '오':
            return '5'
        case '육':
            return '6'
        case '칠':
            return '7'
        case '팔':
            return '8'
        case '구':
            return '9'
        case '십':
            return '0'
        case '백':
            return '00'
        case '천':
            return '000'
        case '0':
            return ''
        case '1':
            return '일'
        case '2':
            return '이'
        case '3':
            return '삼'
        case '4':
            return '사'
        case '5':
            return '오'
        case '6':
            return '육'
        case '7':
            return '칠'
        case '8':
            return '팔'
        case '9':
            return '구'
        default:
            break
    }
}
function toIndex(char) {
    switch (char) {
        case '만':
            return '0000'
        case '억':
            return '00000000'
        case '조':
            return '000000000000'
        default:
            break
    }
}
//number to hangul
function toHan(str) {
    const result = []
    const units = ['십', '백', '천' ,'']
    let count = 0
    for(let i = str.length - 1; i >= 0; i--) {
        const tempNum = toNumber(str[i])
        result.unshift(tempNum)
        if(i != 0 && toNumber(str[i-1]) && tempNum != '일'){
            result.unshift(units[count%4])

        }
        if(count == 3  && (str[i-1] + str[i-2] + str[i-3] + str[i-4] != '0000')) {
            result.unshift('만')
        }
        if(count == 7 && (str[i-1] + str[i-2] + str[i-3] + str[i-4] != '0000')) {
            result.unshift('억')
        }
        if(count == 11 && (str[i-1] + str[i-2] + str[i-3] + str[i-4] != '0000') ) {
            result.unshift('조')
        }
        count++;

    }
    return result.join('')
    // console.log(result.join(''))
}
//오백삼십조 칠천팔백구십 만 천오백삼십구
// 530   0000    7890      1539
// toHan('533   0001    1892   4549')
// toHan('11501100000')
// toHan('11542957682');
// const org = '십조칠천팔백구십만천오백삼십구'
// console.log(org == toHan(translate(org)))
question()
