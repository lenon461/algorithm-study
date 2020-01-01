const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = function () {
    rl.question('give me a number1: ', (val1) => {
        rl.question('give me a number2: ', (val2) => {
            const result = sum_Of_BigInt(val1, val2)
            console.log(result)

            rl.close()
        })
    })
}

function BigInt(string) {
    const result = []
    if(!string ) result.push('0')
    for (let i = 0; i < string.length; i++) {
        result.push(string[i])
    }

    return result
}
function sum_Of_BigInt(a, b) {
    const val1 = new BigInt(a)
    const val2 = new BigInt(b)
    const result = []
    const diff = val1.length - val2.length

    if (diff < 0) {
        for (let i = 0 ;i < diff*-1; i++) {
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
        let temp = v1 + v2 + up
        if (temp >= 10) {
            result.unshift(temp - 10)
            up = 1
        }
        else {
            result.unshift(temp)
            up = 0
        }
    }
    if (up) result.unshift(up)

    return (result.join(''))
}
question()