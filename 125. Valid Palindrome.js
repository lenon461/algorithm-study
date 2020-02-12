const { runTest, testCase } = require("./util");
const { log, error, time, timeEnd } = console;
const data = [
    [["A man, a plan, a canal: Panama"], true],
    [["race a car"], false],
    [["0P"], false],
];
const Capitals = "QWERTYUIOPASDFGHJKLZXCVBNM";
const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
var isPalindrome = function(s) {
    return (
        s
            .split("")
            .reverse()
            .filter((val) => letters.includes(val))
            .map((val, index) => {
                if (Capitals.includes(val)) return letters[Capitals.indexOf(val)];
                else return val;
            })
            .join("") ===
        s
            .split("")
            .filter((val) => letters.includes(val))
            .map((val, index) => {
                if (Capitals.includes(val)) return letters[Capitals.indexOf(val)];
                else return val;
            })
            .join("")
    );
};

var isPalindrome2 = function(s) {
    let re = new RegExp("[a-z0-9]");
    const arr = s
        .toLowerCase()
        .split("")
        .filter((val) => re.test(val));
    return arr.join("") === arr.reverse().join("");
};
runTest(isPalindrome2, testCase(data));
