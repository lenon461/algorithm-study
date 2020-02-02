const { runTest, testCase } = require("./util");
const { log, error, time, timeEnd } = console;
const data = [[[["Hello", "Alaska", "Dad", "Peace"]], ["Alaska", "Dad"]]];
// const data = [[[["Dad"]], ["Dad"]]];

const rows = ["qwertyuiopQWERTYUIOP", "asdfghjklASDFGHJKL", "zxcvbnmZXCVBNM"];

var findWords = function(words) {
    return words
        .map((word) => {
            for (let i = 0; i < 3; i++) {
                const result = word
                    .split("")
                    .reduce(
                        ([rowCount, cont], letter) => {
                            const row = rows[rowCount];
                            // log(row.includes(letter));
                            const newCont = cont && row.includes(letter);
                            // log(letter, [rowCount, newCont]);
                            return [rowCount, newCont];
                        },
                        [i, true],
                    )
                    .pop();
                if (result) return word;
            }
            return false;
        })
        .filter((val) => val);
};

runTest(findWords, testCase(data));
