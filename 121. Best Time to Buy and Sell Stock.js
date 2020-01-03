const { runTest, testCase } = require('./util');
const { log, error, time, timeEnd } = console;
const data = [
    [[[7,1,5,3,6,4]], 5],
    [[[7,6,4,3,1]], 0],
    [[[]], 0],
]

const maxProfit = prices => 
    prices.reduce(([min, profit], price) => 
        [Math.min(min, price), Math.max(profit , price - min)], [Number.MAX_SAFE_INTEGER, 0])
        .pop()
    
runTest(maxProfit, testCase(data));