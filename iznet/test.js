const { runTest, testCase } = require("coding-test-helper");
const { log, error, time, timeEnd } = console;

const a = new Array(14000000).map((ele) => [1]);

const used = process.memoryUsage();
for (let key in used) {
    console.log(`Memory: ${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
}
